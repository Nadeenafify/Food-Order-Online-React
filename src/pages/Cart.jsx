import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { remove_item } from '../redux/actions';
import { toast } from 'react-hot-toast';
import useStore from '../zustand/Store';
import { useRecoilState } from "recoil";
import { cartState } from "../recoil/atoms"
import { useAtom } from "jotai";
import { cartAtom } from '../jotai/atoms';
import { observer } from "mobx-react-lite";
import cartStore from '../mobx/mobxStore';
import { toJS } from "mobx";
import { clear_cart } from '../redux/actions';
import { Helmet } from "react-helmet-async";
const Cart = observer(() => {

  //redux
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //address input
  const [address, setAddress] = useState("")

  //total price in cart
  let total = cart.reduce((curr, ele) => {
    return curr + ele.price
  }, 0)


  //zustand,recoil,jotai,mobx
  const { cartt, removeElement } = useStore()
  const [cartst, setCartst] = useRecoilState(cartState);
  const [cartjotai, setCartJotai] = useAtom(cartAtom);
  // console.log(toJS(cartStore.cart));



  //remove element from cart in recoil
  function removeRecoil(element) {
    return cartst
      .map(item =>
        item._id === element._id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
  }



  return (

    <>

      <Helmet>Cart</Helmet>

      <div className={`${cart.length == 0 && "h-[80vh]"} mt-20 mx-4 sm:mx-10 lg:mx-20 xl:mx-40`}>


        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>items</TableCell>
                <TableCell>title</TableCell>
                <TableCell>price</TableCell>
                <TableCell>quantity</TableCell>
                <TableCell>total</TableCell>
                <TableCell>remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((row) => (
                <TableRow key={row._id}>
                  <TableCell><img src={row.image} width={50} height={50} /></TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell>{row.price * row.quantity}</TableCell>
                  <TableCell><img
                    onClick={() => {
                      dispatch(remove_item(row))
                      removeElement(row)
                      setCartst(removeRecoil(row))
                      setCartJotai(removeRecoil(row))
                      cartStore.removeElementMobx(row)
                      toast.success("Removed Successfuly")
                    }}

                    src='assets\frontend_assets\cross_icon.png' className='cursor-pointer' width={10} height={10} alt='exit-icon' /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <div className={`${cart.length == 0 ? "hidden" : "block"} `} >
          <div className='mt-20 flex flex-col'>
            <label className='font-bold mt-10 text-xl' >Home Adress in Details</label>
            <textarea value={address} onChange={(e) => { setAddress(e.target.value) }} type='text' className='mt-2 bg-gray-100 p-2 md:w-2/3 h-[15vh]' />
          </div>
          <h1 className='font-bold text-2xl mt-10 '>Cart Totals</h1>
          <div className='flex justify-between mt-4 sm:w-[20vw]'>
            <h1>Order</h1>
            <h1>${total}</h1>
          </div>
          <hr className='sm:w-[20vw]' />
          <div className='flex justify-between mt-4 sm:w-[20vw]'>
            <h1>Delivery</h1>
            <h1>$15</h1>
          </div>
          <hr className='sm:w-[20vw]' />
          <div className='flex justify-between mt-4 sm:w-[20vw]'>
            <h1 className='font-bold'>Total</h1>
            <h1 className='font-bold'>${total + 15}</h1>
          </div>
          <button
            onClick={() => {
              if (address.length != "" && cart.length > 0) {
                toast.success("order send successfully")
                dispatch(clear_cart())
                setAddress("")
              }
              else
                toast.error("please Enter Address and make sure that cart is not empty")

            }} className='bg-orange-500 text-white px-3 py-1 rounded mt-10 cursor-pointer'>Order</button>

        </div>
      </div>


    </>
  )
})

export default Cart