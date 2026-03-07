import React, { useContext, useState } from "react";

import { Tooltip, Grow } from "@mui/material";
// tooltip - used for hovering an icon and name occurance while hovering

import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";

import { watchlist } from "../data/data";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {

  // data for graph
const labels = watchlist.map((subArrray) => subArrray["name"]) ;

 const data = {
  labels,
  datasets: [
    {
      label: "Price",
      data: watchlist.map((stock) => stock.price),
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 5)',
        'rgba(54, 162, 235, 5)',
        'rgba(255, 206, 86, 5)',
        'rgba(75, 192, 192, 5)',
        'rgba(153, 102, 255, 5)',
        'rgba(255, 159, 64, 5)',
      ],
      borderWidth: 3,
    },
  ],
};



  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data = {data} />
    </div>
  );
};

export default WatchList;

// making component inside component as the data needed is tightly coupled

const WatchListItem = ({ stock }) => {
  const [showAction, setShowAction] = useState(0);

  const handleMouseEnter = (e) => {
    setShowAction(true);
  };
  const handleMouseExit = (e) => {
    setShowAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {/* "&&" only when the condition of showAction is true only then the watchlistactions will be displayed  */}
      {showAction && <WatchListActions uid={stock.name} />}
    </li>
  );
};


// watchlist buttons on hover component
const WatchListActions = ({uid}) =>{
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return(
    <span className="actions">
      {/* tooltip : used for giving hover effect when we hover on the button  */}
      <Tooltip title="Buy (B)"
      placement="top"
      arrow TransitionComponent={Grow}
      onClick={handleBuyClick}
      >
        <button className="buy">Buy</button>
      </Tooltip>

      <Tooltip title="Sell (S)"
      placement="top"
      arrow TransitionComponent={Grow}>
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip title="Analytics (A)"
      placement="top"
      arrow TransitionComponent={Grow}>
        <button className = "action"><BarChartOutlined className="icon"/></button>
      </Tooltip>

      <Tooltip title="More"
      placement="top"
      arrow TransitionComponent={Grow}>
        <button className = "action"><MoreHoriz className="icon"/></button>
      </Tooltip>
    </span>
  )
}
