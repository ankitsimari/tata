import React, { useState } from 'react'
import Eligibility from './Pages/Eligibility';
import { MdTouchApp } from "react-icons/md";
import { TbCertificateOff } from "react-icons/tb";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import Apply from './Pages/Apply';
import Document from './Pages/Document';
import Fees from './Pages/Fees';


export default function Category() {
    const [value,setValue] = useState("Eligibility");

  return (
    <div className='container py-4 mt-lg-5 '>
        <div className="row button px-5 eligibility-btns fs-5">
            <div onClick={()=>setValue("Eligibility")} className={value=="Eligibility"?"col-md-3 Active":"col-md-3 NotActive"}>
            <TbCertificateOff className='fs-3' /> Eligibility
            </div>
            <div className={value=="apply"?"col-md-3 Active":"col-md-3 NotActive"} onClick={()=>setValue("apply")}>
            <MdTouchApp className='fs-3' />How to apply
            </div>
            <div className={value=="Documentation"?"col-md-3 Active":"col-md-3 NotActive"} onClick={()=>setValue("Documentation")}>
            <IoDocumentTextSharp className='fs-3' />  Documentation
            </div>
            <div className={value=="Fees"?"col-md-3 Active":"col-md-3 NotActive"} onClick={()=>setValue("Fees")}>
            <FaHandHoldingUsd className='fs-3' />  Fees & Charges
            </div>
        </div>

        <div className=" border-1 border border-secondary p-5">
            {value=="Eligibility"?<Eligibility/>:value=="apply"?<Apply/>:value=='Documentation'?<Document/>:<Fees/>}
        </div>

    </div>
  )
}
