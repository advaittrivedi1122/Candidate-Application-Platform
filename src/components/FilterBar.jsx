import React, { useContext } from 'react'
import Filters from "./Filters";
import "../styles/FilterBar.css";
import { FilterContext } from '../context/FilterContext';
import { TextField } from '@mui/material';

const FilterBar = () => {

  const {setRoles, setNumberOfEmployees, setExperience, setRemote, setMinBasePay, setSearchInput} = useContext(FilterContext)

  const handleSearch = async (e) => {
    // add debounce to search
    let id = setTimeout(()=>{
      // clear previous setTimeout if input changes
      if (id) {
        clearTimeout(id);
      }
      setSearchInput(e.target.value);
    }, 2000)
  }
  
  return (
    <div className='filterBar'>
        <Filters label="Roles" width={150} setFilter={setRoles} options={['frontend', 'ios', 'android', 'tech lead', 'backend']} ></Filters>
        <Filters label="Number of Employees" width={250} setFilter={setNumberOfEmployees} options={['1-10', '11-20', '21-50', '51-100', '101-200', '201-500', '500+']} ></Filters>
        <Filters label="Experience" width={150} setFilter={setExperience} options={['1','2','3','4','5','6','7','8','9','10']} ></Filters>
        <Filters label="Remote" width={150} setFilter={setRemote} options={['remote', 'hybrid', 'in-office']}></Filters>
        <Filters label="Minimum Base Pay Salary" width={250} setFilter={setMinBasePay} options={['0L', '10L','20L', '30L', '40L', '50L', '60L', '70L']}></Filters>
        {/* <Filters label="Search Company Name" width={250}></Filters> */}
        <TextField id="outlined-basic" label="Search" variant="outlined" style={{marginTop:'5px', marginLeft:'5px'}} onChange={handleSearch} />

    </div>
  )
}

export default FilterBar