import React, { createContext, useContext, useState } from 'react';

// Create a context object
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [Base64Image, setBase64Image] = useState({image1:"",image2:""});

  return (
    <DataContext.Provider value={{ Base64Image, setBase64Image }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the data context
export const useData = () => useContext(DataContext);
