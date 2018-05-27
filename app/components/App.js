import React from 'react';
import NaviApp from './constant';
import './index.css';
import {DashBoard} from './Dashboard';

class MainApp extends React.Component {
    render() {
        return (
			<div>
			   <NaviApp />
         <DashBoard />
      </div>
        );
    }
}




export default MainApp;
