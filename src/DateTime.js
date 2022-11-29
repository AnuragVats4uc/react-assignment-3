import React, { useContext, useState } from "react";
import { ApiContext } from "./context/ApiContext";

export const OPEN = "1. open";
export const HIGH = "2. high";
export const LOW = "3. low";
export const CLOSE = "4. close";
export const VOLUME = "5. volume";

const DateTime = () => {
  const data = useContext(ApiContext);
  const timeDateData = Object.entries(data);
  const show = 10;
  const [next, setNext] = useState(10);
  const handleChange = () => {
    setNext(next + show);
  };

  return (
    <div className="container fadeInDown">
      {data && (
        <table>
          <caption>Time Series (5min)</caption>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Date Time</th>
              <th>Open</th>
              <th>High</th>
              <th>Low</th>
              <th>Close</th>
              <th>Volumes</th>
            </tr>
          </thead>
          <tbody>
            {timeDateData.slice(0, next).map((d, index) => (
              <tr key={d[0]}>
                <td>{index + 1}</td>
                <td>{d[0]}</td>
                <td>{d[1][OPEN]}</td>
                <td>{d[1][HIGH]}</td>
                <td>{d[1][LOW]}</td>
                <td>{d[1][CLOSE]}</td>
                <td>{d[1][VOLUME]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {next < timeDateData.length && (
        <button onClick={handleChange} className="button-63">
          Load More
        </button>
      )}
    </div>
  );
};

export default DateTime;
