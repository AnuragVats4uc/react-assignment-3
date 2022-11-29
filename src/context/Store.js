import React, { useState,useEffect } from "react";
import { ApiContext } from "./ApiContext";

const Store = ({ children }) => {
  const TIME_SERIES = "Time Series (5min)";
  const [data, setData] = useState({});
  const fetchData = async () => {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
    );
    const fetchResonseData = await response.json();
    if (!response.ok) {
      return null;
    } else {
      await setData(fetchResonseData[TIME_SERIES]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};

export default Store;
