import React from 'react'
import testimg from '../Image/testi.png'
import quo from '../Image/quo.png'
import TestimonialSlider from './TestimonailSlider'

export default function Testimonial() {
  return (
    <div className="bg-light py-5 pb-lg-0">
        <div className='container'>
        <h2 className="text-center fs-1 fw-bold pb-4">What Our Customers Say</h2>
        <div className="row">
            <div className="col-lg-6 position-relative">
                <img src={testimg} alt="" className='img-fluid' />
                <img src={quo} alt="" className="quote d-none d-lg-block" />
            </div>
            <div className="col-lg-6">
            <TestimonialSlider />
            </div>
        </div>
    </div>
    </div>
  )
}
