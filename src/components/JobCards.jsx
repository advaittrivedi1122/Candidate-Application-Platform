import React from 'react'
import "../styles/JobCards.css"

const JobCards = ({job}) => {
  return (
    <div className='jobCards'>
            <div className="card-container">
                <div className="card">
                <div className='posted-div'>
                    <span className='posted'> ⏳ Posted 10 days ago</span>
                </div>
                <div className='logo-title'>
                    <div className="logo">
                        <img src={job.logoUrl} alt="Logo" />
                    </div>
                    <div className="title">
                        <div className='company'>{job.companyName}</div>
                        <div className='role'>{job.jobRole}</div>
                        <div className='location'>{job.location}</div>
                    </div>
                </div>
                {
                    (job.minJdSalary && job.maxJdSalary) && (
                        <div className="estimated-salary">
                        Estimated Salary: ₹{job.minJdSalary} - {job.maxJdSalary} LPA ✅
                        </div>
                    )
                }
                {
                    (job.minJdSalary && !job.maxJdSalary) && (
                        <div className="estimated-salary">
                        Estimated Salary: ₹{job.minJdSalary}+ LPA ✅
                        </div>
                    )
                }
                {
                    (!job.minJdSalary && job.maxJdSalary) && (
                        <div className="estimated-salary">
                        Estimated Salary: Upto ₹{job.maxJdSalary} LPA ✅
                        </div>
                    )
                }
                <div className='about'>
                    <div className="about-company">About Company:</div>
                    <div className="about-us">About us</div>
                    <div className="description">
                        {job.jobDetailsFromCompany}
                    </div>
                    <div className="view-job">
                        <div>View Job</div>
                    </div>
                </div>
                <div className='apply'>
                    <div className='min-experience'>Minimum Experience</div>
                    <div className='experience-years'>{job.minExp} years</div>
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