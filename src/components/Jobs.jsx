import React, { useEffect, useState } from 'react'
import "../styles/Jobs.css";
import JobCards from './JobCards';

const Jobs = () => {
    const limit = 10;
    const [jobs, setJobs] = useState([]);
    const [offset, setOffset] = useState(0);
    const [total, setTotal] = useState(0);
    const [windowSize, setWindowSize] = useState(0);

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
        FetchData()
    }, [windowSize])

  return (
    <div className='jobs'>
        {
            jobs.map((job, index)=>{
                return (
                    <JobCards job={job}></JobCards>
                )
            })
        }
    </div>
  )
}

export default Jobs