import React from "react";
import Mobile from "../Image/Mobile.png";
import img from "../Image/Vector.png";
import Slider from "./Slider";
export default function Process() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img src={Mobile} className="img-fluid" alt="" />
        </div>
        <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center py-5">
          <h1 className="my-4">
            <span>
              <img src={img} className="img-fluid mx-3" alt="" />
            </span>
            Lighting Fast Process
          </h1>
         <Slider/>
        <button className="btn rounded-1 px-5 py-2">Apply Now</button>
        </div>
      </div>
    </div>
  );
}
