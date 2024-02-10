import React from "react";

const Contact = () => {
  return (
    <div className="container py-4 px-5 my-4 contactBg">
      <h3 className="">Anything not clear?</h3>
      <div className="row">
        <div className="d-md-flex justify-content-between align-items-center">
          <p className="mb-md-0 ">
            You can see our detailed F&Q sessions if you have more quiries. Also
            we are always a single call away for all your special asks...
          </p>
          <button className="btn rounded-1 px-5 py-2 fs-6 fw-semibold mx-md-3">Contact&nbsp;us</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
