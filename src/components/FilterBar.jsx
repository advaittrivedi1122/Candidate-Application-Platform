import React, { useContext } from 'react'
import Filters from "./Filters";
import "../styles/FilterBar.css";
import { FilterContext } from '../context/FilterContext';

const FilterBar = () => {

  const {setRoles, setNumberOfEmployees, setExperience, setRemote, setMinBasePay} = useContext(FilterContext)
  
  return (
    <div className='filterBar'>
        <Filters label="Roles" width={150} setFilter={setRoles} ></Filters>
        <Filters label="Number of Employees" width={250} setFilter={setNumberOfEmployees} ></Filters>
        <Filters label="Experience" width={150} setFilter={setExperience} ></Filters>
        <Filters label="Remote" width={150} setFilter={setRemote} ></Filters>
        <Filters label="Minimum Base Pay Salary" width={250} setFilter={setMinBasePay} ></Filters>
        <Filters label="Search Company Name" width={250}></Filters>
    </div>
  )
}

export default FilterBar