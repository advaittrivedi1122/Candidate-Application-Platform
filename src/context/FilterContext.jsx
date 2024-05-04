import { createContext, useState } from 'react';

export const FilterContext = createContext(null);

const FilterProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <FilterContext.Provider value={{ theme, setTheme }}>
      {children}
    </FilterContext.Provider>
  );
};