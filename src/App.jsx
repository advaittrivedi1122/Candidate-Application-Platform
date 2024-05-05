import { useEffect, useState } from "react";
import { FilterContext } from "./context/FilterContext";
import FilterBar from "./components/FilterBar";
import Jobs from "./components/Jobs";
import "./styles/App.css";

function App() {
  const [roles, setRoles] = useState([]);
  const [numberOfEmployees, setNumberOfEmployees] = useState([]);
  const [experience, setExperience] = useState([])
  const [remote, setRemote] = useState([]);
  const [minBasePay, setMinBasePay] = useState([]);

  useEffect(()=>{
    console.log("Roles", roles)
    console.log("Number of Employees", numberOfEmployees)
    console.log("Experience", experience)
    console.log("Remote", remote)
    console.log("Min Base Pay", minBasePay)
  }, [roles, numberOfEmployees, experience, remote, minBasePay])

  return (
    <div className="app" >
      <FilterContext.Provider value={{ roles, setRoles, numberOfEmployees, setNumberOfEmployees, experience, setExperience, remote, setRemote, minBasePay, setMinBasePay }}>
        <FilterBar></FilterBar>
        <Jobs></Jobs>
      </FilterContext.Provider>
    </div>
  );
}

export default App;