import React, { useState, useEffect } from "react";
import SplitChart from "./Pages/Chart";
import { FaSquare } from "react-icons/fa";

const Calculator = () => {
  const [amount, setAmount] = useState(200000);
  const [interest, setInterest] = useState(10);
  const [months, setMonths] = useState(22);
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [interestPercentage, setInterestPercentage] = useState("");
  const [principalPercentage, setPrincipalPercentage] = useState("");

  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const handleInterestChange = (e) => {
    setInterest(parseFloat(e.target.value));
  };

  const handleMonthsChange = (e) => {
    setMonths(parseInt(e.target.value));
  };

  useEffect(() => {
    calculateEMI();
  }, [amount, interest, months]);

  const calculateEMI = () => {
    const monthlyInterest = interest / 100 / 12;
    const totalMonths = months;
    const x = Math.pow(1 + monthlyInterest, totalMonths);
    const emi = (amount * x * monthlyInterest) / (x - 1);
    const totalAmountPayable = emi * totalMonths;
    const totalInterestPayable = totalAmountPayable - amount;
    const principalPercentage = (amount / totalAmountPayable) * 100;
    const interestPercentage =
      (totalInterestPayable / totalAmountPayable) * 100;

    setMonthlyPayment(emi.toFixed(2));
    setTotalPayment(totalAmountPayable.toFixed(2));
    setTotalInterest(totalInterestPayable.toFixed(2));
    setPrincipalPercentage(principalPercentage.toFixed(2));
    setInterestPercentage(interestPercentage.toFixed(2));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 pe-lg-3 p-2">
          <form className="credit bg-white shadow rounded-3 p-3 h-100 my-2">
            <div className="form-group">
              <label htmlFor="amount">Amount of money</label>

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  ₹
                </span>
                <input
                  type="number"
                  step="0.001"
                  value={amount}
                  onChange={handleAmountChange}
                  class="form-control"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <input
                className="slider w-100 my-3"
                type="range"
                min="0"
                max="10000000"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="percent">Interest rate (%)</label>

              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  %
                </span>
                <input
                  type="number"
                  step="0.001"
                  value={interest}
                  onChange={handleInterestChange}
                  class="form-control"
                  aria-describedby="addon-wrapping"
                />
              </div>

              <input
                className="slider w-100 my-3"
                type="range"
                min="1"
                max="50"
                value={interest}
                onChange={handleInterestChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="months">Loan Tenure (in months)</label>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  Months
                </span>
                <input
                  type="text"
                  value={months}
                  onChange={handleMonthsChange}
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
              <input
                className="slider w-100 my-3"
                type="range"
                min="1"
                max="360"
                value={months}
                onChange={handleMonthsChange}
              />
            </div>
          </form>
        </div>

        <div className="col-lg-8 ps-lg-3 p-2">
          <div className="bg-white shadow rounded-3 p-3 h-100 my-2">
            <div className="row">
              <div className="col-md-7 pt-4">
                <div className="position-relative">
                  <SplitChart
                    first={principalPercentage}
                    second={interestPercentage}
                    total={amount}
                  />
                  <div className="chartBottom p-3 fw-semibold fs-6 w-100">
                    <div className="my-4 d-flex justify-content-between">
                      <span>
                        <FaSquare className="colorText me-2" />
                        Principal Amount:
                      </span>
                      <span className="principal secondText">{amount}</span>
                    </div>
                    <div className="my-4 d-flex justify-content-between">
                      <span>
                        <FaSquare className="text-secondary me-2" />
                        Interest Amount:
                      </span>
                      <span className="interest secondText">
                        {totalInterest}
                      </span>
                    </div>

                    <div className="my-4 d-flex justify-content-between">
                      <span>Total Payable Amount:</span>
                      <span className="pay secondText">{totalPayment}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-5 pb-4">
                <div className="py-5 themeBg rounded mt-4">
                  <h3 className="fs-4 mt-4 fw-medium text-center">
                    Estimated Monthly Installments(EMI)
                  </h3>
                  <p className="fs-3 pb-4 text-black text-center pt-1 fw-bold">
                    ₹{monthlyPayment}
                  </p>
                </div>

                <button className="btn herobtn w-100 mt-3">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
