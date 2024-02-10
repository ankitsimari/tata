import React from 'react'
import BOB from "../Image/BOB.png"
import HDFC from "../Image/HDFC.png"
import ICIC from "../Image/ICIC.png"
export default function Partner() {
  return (
    <div className='d-lg-flex justify-content-evenly align-items-center grayBg py-5 px-2'>
        <h2 className='fw-semibold fs-1 text-center pb-4 pb-lg-0'>Our Partners</h2>
        <div className='d-flex justify-content-evenly align-items-center gap-4 flex-wrap'>
        <img src={HDFC} alt="" />
        <img src={ICIC} alt="" />
        <img src={ICIC} alt="" />
        <img src={BOB} alt="" />
        </div>
    </div>
  )
}
