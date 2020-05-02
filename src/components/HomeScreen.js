import React, { Component } from "react";
import RecentPosts from "./RecentPosts";
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import FullWidthTabs from "./AllHomeTabs";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import LocationPosts from "./LocationPosts";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state={
      post:[]
    }
    
  }
  // token=092a40c8-819d-4aee-acf8-103c04278e17
  componentDidMount= async()=>{
    
    

    
  
  }
  render() {

    return (
      <div>
      <div
          style={{
            display: "grid",
            color: "white",
            height: "10vh",
            backgroundColor: "rgb(57, 55, 119)"
          }}
          className="homeHeader"
        >
          <h3 style={{ margin: "auto" }}>HOME SCREEN</h3>
        </div>
        <div className="container" style={{}}>
            {/* <RecentPosts updateUser={this.props.updateUser}/> */}
            {/* <LocationPosts/> */}
            <FullWidthTabs updateUser={this.props.updateUser}/>
        </div>
      </div>
    );
  }
}
