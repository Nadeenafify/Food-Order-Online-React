import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add_item } from '../redux/actions';
import { Toaster, toast } from 'react-hot-toast';
// import useStore from '../zustand/Store';
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms"
import { useAtom } from "jotai";
import { cartAtom } from '../jotai/atoms';
import { observer } from "mobx-react-lite";
import cartStore from '../mobx/mobxStore';
import { toJS } from "mobx";
import { useAuth0 } from "@auth0/auth0-react";
const FoodOffers = observer((props) => {

  //i use AUth0 for Authentication
  const { isAuthenticated } = useAuth0();

  //i use multiple state managment library for practice

  //redux
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //zustand,recoil,jotai,mobx
  // const { cartt, addElement } = useStore()
  const [cartst, setCartst] = useRecoilState(cartState);
  const [cartjotai, setCartJotai] = useAtom(cartAtom);
  console.log(toJS(cartStore.cart));



  //add element function in recoil
  function addelementRecoil(element) {
    const existingItem = cartst?.find(item => item._id === element._id);

    if (existingItem) {


      return cartst?.map(item =>
        item._id === element._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )

    }
    else {

      return [
        ...cartst,
        { ...element, quantity: 1 },
      ]

    }
  }

  return (
    <>


      <div className="shadow shadow-gray-300 relative h-[53vh] lg:h-[43vh] ">
        <img src={props.food.image} alt={props.food.name} className='h-2/3 lg:h-1/2  w-full' />
        <img src="assets\frontend_assets\add_icon_white.png"
          className="right-3 cursor-pointer top-30 absolute" alt="add-to-cart"

          onClick={() => {
            if (isAuthenticated) {
              dispatch(add_item({...props.food,price:(props.food.price*75)/100}))
              // addElement({...props.food,price:(props.food.price*75)/100})
              setCartst(addelementRecoil({...props.food,price:(props.food.price*75)/100}))
              setCartJotai(addelementRecoil({...props.food,price:(props.food.price*75)/100}))
              cartStore.addElementMobx({...props.food,price:(props.food.price*75)/100})
              toast.success("Added to cart Successfuly")
            }
            else {
              toast.error("Sign in first please")
            }
          }}


        />


        <div className="p-4">
          <h4 className="font-bold mt-1 mb-2 text-xl">{props.food.name}</h4>
          <p className="text-sm">
            {
              props.food.description
            }
          </p>
          <div className='flex justify-between'> 
            <h4 className="mt-2 text-md font-bold text-orange-500">{(props.food.price * 75) / 100}$</h4>
            <h4 className="mt-2 text-sm font-bold text-red-800 line-through">{props.food.price}$</h4>
          </div>
        </div>

      </div>

    </>
  )
})

export default FoodOffers
