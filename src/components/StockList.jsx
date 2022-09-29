import React from "react";
import { useState, useEffect } from "react";
import finnHub from "../apis/finnHub";
const StockList = () => {
  const [watchList, setWatchList] = useState([]);
  const [stock, setStock] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/quote", {
          params: {
            symbol: "MSFT",
          },
        });
        // console.log(response);
        setStock(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div>StockList</div>;
};

export default StockList;
