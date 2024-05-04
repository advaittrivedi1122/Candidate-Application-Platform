import React from 'react'
import Filters from "./Filters";
import "../styles/FilterBar.css";

const FilterBar = () => {
  return (
    <div className='filterBar'>
        <Filters label="Roles" width={150}></Filters>
        <Filters label="Number of Employees" width={250}></Filters>
        <Filters label="Experience" width={150}></Filters>
        <Filters label="Remote" width={150}></Filters>
        <Filters label="Minimum Base Pay Salary" width={250}></Filters>
        <Filters label="Search Company Name" width={250}></Filters>
    </div>
  )
}

export default FilterBar