import React from 'react'

function Landing() {
  return (
    <div className='bg-dark'>
        <div className='container text-white pt-5'>
            <h1 className='text-center text-bold'>Landing template for startups</h1>
            <p className='text-center fs-4'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
            <div className="d-flex justify-content-center">
                <button type="button" class="btn btn-primary me-2 w-25">Start free trial</button>
                <button type="button" class="btn btn-secondary ms-2 w-25">Learn more</button>
            </div>
            <div className='pt-5'>
                <img className='img-fluid' src="./image/landingpage.webp" alt="qqq"/>
            </div>
            <div className="class pt-5">
                <h2 className='text-center fw-bold'>The majority our customers do not</h2>
                <h2 className='text-center fw-bold'>understand their workflows.</h2>
                <p className='text-center pt-3'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                <p className='text-center'>mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
  )
}

export default Landing