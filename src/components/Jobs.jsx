import React, { useContext, useEffect, useState } from 'react'
import "../styles/Jobs.css";
import JobCards from './JobCards';
import { FilterContext } from '../context/FilterContext';

const Jobs = () => {
    const limit = 10;
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [windowSize, setWindowSize] = useState(0);

    const { roles, numberOfEmployees, experience, remote, minBasePay, searchInput  } = useContext(FilterContext)

    // needs to be called when windowSize changed (changes when end of page is reached)
    const FetchData = async () => {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "limit" : limit,
                "offset" : offset
            })
        };

        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log("Fetched data :", result)
            setJobs([...jobs, ...result.jdList]);
            setOffset(limit + offset);
            if (!total) {
                setTotal(result.totalCount);
            }
        })
        .catch((error) => console.error(error));
    }

    // check filters applicable to job post
    const checkRole = (role)=>{
        let renderJob = false;
        if (!role) {
            return renderJob;
        }
        if (roles.length == 0) {
            renderJob = true;
        } else if (roles.includes(role)) {
            renderJob = true;
        }
        return renderJob;
    }
    const checkExperience = (minExp, maxExp)=>{
        let renderJob = false;
        if (!minExp && !maxExp) {
            return renderJob;
        }
        if (experience.length == 0) {
            renderJob = true;
        } else {
            // try every possibility to check of we should render this job according to experience filter
            experience.map((exp)=>{
                exp = Number(exp)
                if (minExp && maxExp) {
                    if ((exp >= minExp) && (exp <= maxExp)) {
                        renderJob = true;
                    }
                } else if (minExp && !maxExp) {
                    if (exp >= minExp) {
                        renderJob = true;
                    }
                } else if (!minExp && maxExp) {
                    if (exp <= maxExp) {
                        renderJob = true;
                    }
                }
            })
        }
        return renderJob;
    }
    const checkRemote = (location)=>{
        let renderJob = false;
        if (!location) {
            return renderJob;
        }
        if (remote.length == 0) {
            renderJob = true;
        } else {
            remote.map((jobType)=>{
                if (location.includes(jobType)) {
                    renderJob = true;
                } else if (remote.includes("in-office") && !["remote", "hybrid"].includes(location)) {
                    renderJob = true;
                }
            })
        }
        return renderJob;
    }
    const checkBasePay = (minimumBasePay)=>{
        let renderJob = false;
        if (!minimumBasePay) {
            return renderJob;
        }
        if (minBasePay.length == 0) {
            renderJob = true;
        } else {
            minBasePay.map((minPay)=>{
                minPay = Number(minPay.replace('L', ''))
                if (minPay <= minimumBasePay) {
                    renderJob = true;
                }
            })
        }
        return renderJob;
    }
    const checkSearch = (companyName)=>{
        let renderJob = false;
        if (searchInput.length == 0) {
            renderJob = true;
        } else if (companyName.includes(searchInput)) {
            renderJob = true;
        }
        return renderJob;
    }

    // OnScroll function that handles infinite scroll functionality
    window.onscroll = function(ev) {
        const windowSum = window.innerHeight + Math.round(window.scrollY);
        if (windowSum >= document.body.offsetHeight) {
            // you're at the bottom of the page
            console.log("🚀 ~ Jobs ~ you're at the bottom of the page:")
            if (windowSum > windowSize) {
                setWindowSize(windowSum);
            }
        }
    };
    
    useEffect(()=>{
        console.log("WindowSize Changed", windowSize)
        if (offset == 0 || ((offset + limit) < total)) {
            FetchData()
        }
    }, [windowSize])

  return (
    <div className='jobs'>
        {
            jobs.map((job, index)=>{
                return (
                    (
                        checkRole(job.jobRole) &&
                        checkExperience(job.minExp, job.maxExp) &&
                        checkRemote(job.location) &&
                        checkBasePay(job.minJdSalary) &&
                        checkSearch(job.companyName.toLowerCase()) &&
                        job.minExp !== null
                ) &&
                    <JobCards job={job}></JobCards>
                )
            })
        }
    </div>
  )
}

export default Jobs