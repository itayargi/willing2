import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RecentPosts from './RecentPosts'

export default function TestingTab() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="RECENT" />
        <Tab label="LOCATION" />
        <Tab label="MINE" />
      </Tabs>
    </Paper>
   
        </div>
  );
}