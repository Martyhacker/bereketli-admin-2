import React from 'react';
import Dashboard from '../../pages/dashboard/Dashboard';
import { TopNav } from '../topnav/TopNav';
import MyRoutes from '../../pages/MyRoutes'

const Layout = props => {
  return (
  <div>
      <div className='layout__content'>
        <TopNav/>
        <div className='layout__content-main'>
          <MyRoutes/>
          {/* {props.content} */}
          
        </div>
      </div>
  </div>
  );
};

export default Layout;
