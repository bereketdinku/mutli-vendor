"use client"
import { convertIsoDateToNormal } from "@/lib/convertIsoDateToNormal";
import Image from "next/image";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
export default function SalesInvoice({order}) {
   const invoiceDate=convertIsoDateToNormal(order.createdAt)
   const subtotal=order?.orderItems.reduce((total,item)=>total+item.price*item.quantity,0).toFixed(2)
   const tax=10;
   const total=subtotal+tax
   const invoiceRef = useRef();
const handlePrint = useReactToPrint({
    content: () => invoiceRef.current,
  });
   return (
    <div className="flex flex-col">
      {/* download btn */}
      
     <div className="flex items-end justify-end mb-8">
        <button
        onClick={handlePrint}
          type="button"
          className="inline-flex items-center justify-center px-4 py-3 text-xs font-bold text-slate-200 dark:text-gray-900 transition-all duration-200 bg-slate-900 dark:bg-gray-100 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-200"
        >
          Download Invoice
        </button>
      </div>
  
      {/* Invoice */}
    <div className="" ref={invoiceRef}>
    <div className="max-w-4xl mx-auto border border-gray-500 p-8 rounded-sm text-slate-800 dark:text-slate-200 ">
      {/* Header */}
      <div className="flex justify-between border-b border-gray-500 pb-8">
        <div className="flex flex-col">
          <h2>Bill From:</h2>
          <p>Shoppify Hardware Store</p>
          <p>150 Eleign Street</p>
          <p>Canada</p>
          <p>shopiifystore@gmail.com</p>
        </div>
        {/* <Image src={'/logo.png'} fill alt="limifood logo" className="w-36 h-16" /> */}
      </div>
      {/* Header End */}
      <div className="flex justify-between border-b border-gray-500 py-8">
        <div className="flex flex-col">
          <h2>Bill To:</h2>
          <p>{order.firstName} {order.lastName}</p>
          <p>{order.streetAddress} {order.district} {order.city}</p>
          <p>{order.country}</p>
          <p>{order.email}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <p>Invoice #</p>
            <p>{order.orderNumber}</p>
          </div>
          <div className="flex justify-between">
            <p>Invoice Date</p>
            <p>{invoiceDate}</p>
          </div>
          <div className="flex justify-between">
            <p>Amount Due</p>
            <p>{subtotal}</p>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Item
              </th>
              
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Unit Cost
              </th>
              <th scope="col" className="px-6 py-3">
                Line Total
              </th>
            </tr>
          </thead>
          <tbody>
           {
            order?.orderItems.map((item,i)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.title}
                </th>
                <td className="px-6 py-4">{item.quantity}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">{item.price*item.quantity}</td>
              </tr>
            ))
           }
          </tbody>
        </table>
      </div>

      <div className="flex justify-between border-b border-gray-500 py-8">
        <div className="flex flex-col">
          <h2>NOTES</h2>
          <p>Free Shipping for 30 Days Money back guarantee</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between gap-3">
            <p>SubTotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between gap-3">
            <p>Tax</p>
            <p>${tax}</p>
          </div>
          <div className="flex justify-between gap-3">
            <p>Total</p>
            <p>${total}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-8">
        {/* <Image src={'/logo.png'} fill alt="limifood logo" className="w-36 h-16" /> */}
      </div>
    </div>
    </div>
    </div>
  );
}