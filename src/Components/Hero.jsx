import React from "react";
import HeroImg from "../Image/HeroImg.png";
import frame1 from "../Image/Frame1.png";
import frame2 from "../Image/Frame2.png";
import frame3 from "../Image/Frame3.png";
import frame4 from "../Image/Frame4.png";

export default function Hero() {
  return (
    <div className="container">
      <div className="row hero pb-4 ">
      <div className="col-lg-5 order-lg-2">
          <img className="img-fluid heroimg" src={HeroImg} alt="" />
        </div>
        <div className="col-lg-7 order-lg-1">
          <h1 className="mt-lg-5 fw-bold dropshadow lh-base">
            Turn Dream Into Reality with{" "}
            <span className="colorText">Personal Loans</span>{" "}
          </h1>
          <div className="d-flex gap-5 my-4">
            <span className="d-flex align-items-center">
              <img className="img-fluid me-3" src={frame1} alt="" />
              <span>
                <h6 className="m-0 fw-bold fs-5">Avail Zero</h6>
                <p className="fs-5">Processing Fee</p>
              </span>
            </span>

            <span className="d-flex align-items-center ps-4">
              <img className="img-fluid me-3" src={frame2} alt="" />
              <span>
                <h6 className="m-0 fw-bold fs-5">Avail Zero</h6>
                <p className="fs-5">Processing Fee</p>
              </span>
            </span>
          </div>


          <div className="d-flex gap-5 my-4">
            <span className="d-flex align-items-center">
              <img className="img-fluid me-3" src={frame3} alt="" />
              <span>
                <h6 className="m-0 fw-bold fs-5">Avail Zero</h6>
                <p className="fs-5">Processing Fee</p>
              </span>
            </span>

            <span className="d-flex align-items-center ps-4">
              <img className="img-fluid me-3" src={frame4} alt="" />
              <span>
                <h6 className="m-0 fw-bold fs-5">Avail Zero</h6>
                <p className="fs-5">Processing Fee</p>
              </span>
            </span>
          </div>

          <button className="btn herobtn">Apply Now</button>
        </div>

        
      </div>
    </div>
  );
}
