import { useEffect, useState } from "react";
import { FilterContext } from "./context/FilterContext";
import FilterBar from "./components/FilterBar";
import "./styles/App.css";

function App() {
  const [roles, setRoles] = useState([]);

  useEffect(()=>{
    console.log(roles)
  }, [roles])

  return (
    <div className="app">
      <FilterContext.Provider value={{ roles, setRoles }}>
        <FilterBar></FilterBar>
      </FilterContext.Provider>
    </div>
  );
}

export default App;