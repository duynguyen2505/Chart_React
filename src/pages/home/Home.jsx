import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { Userdata } from "../../dummyData";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
  return <div className='home'>
      <FeaturedInfo/>
      <Chart data = {Userdata} title= "User Analytics" grid dataKey = "Active User"/>
      <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
      </div>
  </div>;
}
