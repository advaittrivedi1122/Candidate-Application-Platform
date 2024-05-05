import React from 'react'
import "../styles/JobCards.css"

const JobCards = () => {
  return (
    <div className='jobCards'>
            <div className="card-container">
                <div className="card">
                <div className='posted-div'>
                    <span className='posted'> ⏳ Posted 10 days ago</span>
                </div>
                <div className='logo-title'>
                    <div className="logo">
                        <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598325603_7ico7.jpg" alt="" />
                    </div>
                    <div className="title">
                        <div className='company'>Fampay</div>
                        <div className='role'>Backend Engineer</div>
                        <div className='location'>Banglore</div>
                    </div>
                </div>
                <div className="estimated-salary">
                Estimated Salary: ₹18 - 35 LPA ✅
                </div>
                <div className='about'>
                    <div className="about-company">About Company:</div>
                    <div className="about-us">About us</div>
                    <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsam aliquid quas, ipsa facilis ducimus animi perspiciatis quod sequi ab dolorem, soluta perferendis culpa maiores autem eligendi? Esse consequuntur quidem, dolorem nemo dolore deserunt perferendis nam assumenda rerum eos inventore sequi numquam nulla praesentium reiciendis, atque facilis repudiandae. Eveniet in architecto a, libero reiciendis incidunt accusamus dolorum, consequuntur obcaecati expedita tempora! Laudantium expedita odio quos ea et. Fugit veritatis sint adipisci odit omnis accusantium, voluptatum incidunt vitae sit tenetur dignissimos laboriosam aspernatur iste ab praesentium nam blanditiis consequatur laborum sapiente dolore beatae doloremque impedit perspiciatis! Eum esse earum debitis officia!
                    </div>
                    <div className="view-job">
                        <div>View Job</div>
                    </div>
                </div>
                <div className='apply'>
                    <div className='min-experience'>Minimum Experience</div>
                    <div className='experience-years'>2 years</div>
                    <div >
                        <button className='easy-apply'> ⚡ Easy Apply</button>
                    </div>
                    <div>
                        <button className='unlock-referral'>Unlock Referral asks</button>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default JobCards