import React from "react";
import refer from "../Image/refer.png";

export default function ReferAndEarn() {
  return (
    <div className="container pt-5 ">
      <div className="row">
      <div className="col-lg-7 order-lg-2">
        <img src={refer} alt="" className="img-fluid " />
      </div>
      <div className="col-lg-5 order-lg-1 py-4">
        <div className="h-100 d-flex justify-content-center flex-column text-center text-lg-start">
          <h2 className="fs-1 fw-bold">Refer And Earn</h2>
          <p className="fs-5 fw-medium mb-0">Get a ₹500 Big Basket gift card</p>
          <p className="mb-2 mt-3">
          <button className="btn w-fit fs-6 px-4 py-2">Refer and earn</button>
          </p>
          <a href="#" className="fw-normal fs-7 text-secondary">Terms & Conditions Applied</a>
        </div>
      </div>
      </div>
    </div>
  );
}
