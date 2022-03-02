import React from 'react';
import "./widgetSm.css";
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function WidgetSm() {
  return <div className='widgetSm'>

      <span className="widgetSmTitle">New Join Member</span>
      <ul className="widgeSmList">
        <li className="widgeSmItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tuan Dung</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
              <VisibilityIcon className='widgetSmIcon'/>
              Display
          </button>
        </li>
        <li className="widgeSmItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tuan Dung</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
              <VisibilityIcon className='widgetSmIcon'/>
              Display
          </button>
        </li>
        <li className="widgeSmItem">
          <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Tuan Dung</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
              <VisibilityIcon className='widgetSmIcon'/>
              Display
          </button>
        </li>
      </ul>
  </div>;
}
