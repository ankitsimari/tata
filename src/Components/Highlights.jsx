import React from "react";
import IMG from "../Image/highlightsImg.png";
import star from "../Image/star.png";
import smallStar from "../Image/smallStart.png"

export default function Highlights() {
  return (
    <div className="container mt-5">
        <span className="d-flex gap-2 align-items-center">
        <img src={smallStar} alt="" />
      <h2 className="fw-bold fs-xl">Personal Loan Highlights</h2>
        </span>
      <div className="row">
        <div className="col-lg-5">
          <img src={IMG} className="img-fluid" alt="" />
        </div>


        <div className="col-lg-7 pb-3">
          <div className="themeBg p-3 rounded-4 mt-lg-3">
            <div className="m-4">
              <span className="d-flex">
                <img className="me-2" src={star} alt="" /> <h5 className="text-black fw-bold">Interest Rate</h5>
              </span>
              <p className="ps-4 mx-3">
                Usually <span className="secondText fw-bold">10.59% p.a.</span>{" "}
                onwards: some PSUs may offer lower rates
              </p>
            </div>

            <div className="m-4">
              <span className="d-flex">
                <img className="me-2" src={star} alt="" /> <h5 className="text-black fw-bold">Loan Amount</h5>
              </span>
              <p className="ps-4 mx-3">
                Can go up to <span className="secondText fw-bold">RS 40 lakh:</span>{" "}
                some lander may offer higher loan amount
              </p>
            </div>

            <div className="m-4">
              <span className="d-flex">
                <img className="me-2" src={star} alt="" /> <h5 className="text-black fw-bold">Processing Fees</h5>
              </span>
              <p className="ps-4 mx-3">
                 <span className="secondText fw-bold">0.5% to 4%</span>{" "}
                of loan amount (may vary across lenders)
              </p>
            </div>

            <div className="m-4">
              <span className="d-flex">
                <img className="me-2" src={star} alt="" /> <h5 className="text-black fw-bold">Tenure</h5>
              </span>
              <p className="ps-4 mx-3">
                up to <span className="secondText fw-bold">5 years</span>{" "}
                (some lenders offer repayment period till 8 year)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
