import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { add_item } from '../redux/actions';
import { Toaster, toast } from 'react-hot-toast';
import useStore from '../zustand/Store';
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms"
import { useAtom } from "jotai";
import { cartAtom } from '../jotai/atoms';
import { observer } from "mobx-react-lite";
import cartStore from '../mobx/mobxStore';
import { toJS } from "mobx";
import { useAuth0 } from "@auth0/auth0-react";
const FoodView = observer((props) => {

   //i use AUth0 for Authentication
   const { isAuthenticated } = useAuth0();

   //i use multiple state managment library for practice
 
   //redux
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
 
   //zustand,recoil,jotai,mobx
   const { cartt, addElement } = useStore()
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


      <div className="shadow shadow-gray-300 relative h-[53vh] ">
        <img src={props?.food?.image} alt={props?.food?.name} className='h-2/3 sm:h-1/2  w-full' />
        <img src="assets\frontend_assets\add_icon_white.png"
          className="right-3 cursor-pointer top-25 sm:top-30 absolute" alt="add-to-cart"

          onClick={() => {
            if(isAuthenticated){
              dispatch(add_item(props?.food))
              addElement(props?.food)
              setCartst(addelementRecoil(props?.food))
              setCartJotai(addelementRecoil(props?.food))
              cartStore.addElementMobx(props?.food)
              toast.success("Added to cart Successfuly")
            }
            else{
              toast.error("Sign in first please")
            }
          }}


        />


        <div className="p-4">
          <h4 className="font-bold mt-1 mb-2 text-md ">{props?.food?.name}</h4>
          <p className="text-sm">
            {
              props?.food?.description
            }
          </p>
          <h4 className="mt-2 text-sm  font-bold text-orange-500">{props?.food?.price}$</h4>
        </div>

      </div>

    </>
  )
})

export default FoodView