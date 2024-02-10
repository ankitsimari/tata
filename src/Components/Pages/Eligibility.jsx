import React from "react";
import star from "../../Image/star.png"
import bank from "../../Image/Bank.png"

export default function Eligibility() {
  return (
      <div className="row px-lg-5 p-2">
        <div className="col-md-5">
            <div className="mb-5">
                <h6 className="fs-5 mb-1 fw-semibold text-black"><img className="me-2" src={star} alt="" />
                Citizenship Proof
                </h6>
                <p className="ms-4 ps-3 opacity-75">Indian Citizen With Valid ID Proof</p>
            </div>
            
            <div className="mb-5">
                <h6 className="fs-5 mb-1 fw-semibold text-black"><img className="me-2" src={star} alt="" />
                Age
                </h6>
                <p className="ms-4 ps-3 opacity-75">23 to 58 Year of Age</p>
            </div>
            
            <div className="mb-5">
                <h6 className="fs-5 mb-1 fw-semibold text-black"><img className="me-2" src={star} alt="" />
               lorem
                </h6>
                <p className="ms-4 ps-3 opacity-75"> lorem</p>
            </div>
            
       
            <div className="mb-5">
                <h6 className="fs-5 mb-1 fw-semibold text-black"><img className="me-2" src={star} alt="" />
               lorem
                </h6>
                <p className="ms-4 ps-3 opacity-75"> lorem</p>
            </div>
            
       
        </div>
        <div className="col-md-7 d-flex justify-content-center">
        <img  src={bank} className="img-fluid p-lg-5 pt-lg-0" alt="" />
        </div>
      </div>
  );
}
