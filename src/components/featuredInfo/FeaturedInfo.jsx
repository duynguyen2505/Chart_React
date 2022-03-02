import React from 'react';
import "./featuredInfo.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
export default function FeaturedInfo() {
  return <div className='featured'>
      <div className="featuredItem">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
              <span className="featureMoney">$2,415</span>
              <span className="featureMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Sale</span>
          <div className="featuredMoneyContainer">
              <span className="featureMoney">$2,415</span>
              <span className="featureMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
              <span className="featureMoney">$2,415</span>
              <span className="featureMoneyRate">+25.4 <ArrowUpwardIcon className="featuredIcon "/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      
  </div>;
}
