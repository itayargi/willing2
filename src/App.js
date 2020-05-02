import React, { Component } from 'react'
import HomeScreen from './components/HomeScreen'
import Register from './components/Register'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import VerifyCode from './components/VerifyCode'
import OnboardingMain from './components/OnboardingMain'
import VerifiedEnd from './components/VerifiedEnd'
import RequestDetails from './components/RequestDetails'
import TranslateFile from './TranslateFile'
import FullWidthTabs from './components/AllHomeTabs';
import TestingTab from './components/TestingTab';

export default class App extends Component {
  state={
       header:["1"],
       post:["1"],
       location:["1"],
       distance:["1"],
       date:["1"],
       phone:[],
       userName:[],
       token:[],
       verify:false,

  }
  //add the token from register
  addToken=(token)=>{
    this.setState({token:token})
    console.log(this.state)
  }
  //add verify status to true
  addVerify=(status)=>{
    this.setState({verify:true})
    console.log('the state verify changed to true')
  }
  //update the state with the choosen post
  updateUser = (header, post, location, distance, date, phone, userName)=>{
    this.setState({header:header, post:post, location:location, distance:distance, date:date, phone:phone, userName:userName})
    console.log(this.state)
   }

  render() {
    return (
      <div>
      {/* <FullWidthTabs/> */}
       <Router>
        <Switch>
        <Route exact path='/register' component={()=>{return <div><Register addToken={this.addToken}/></div>}} />
        <Route exact path='/verify' component={()=>{return <div><VerifyCode addVerify={this.addVerify} token={this.state.token}/></div>}} />
        <Route exact path='/onboardingMain' component={()=>{return <div style={{maxHeight:"100vh"}}><OnboardingMain /></div>}} />
        <Route exact path='/verifiedEnd' component={()=>{return <div><VerifiedEnd token={this.state.token} /></div>}} />
        <Route exact path='/homePage' component={()=>{return <div><HomeScreen verify={this.state.verify} token={this.state.token} updateUser={this.updateUser} /></div>}} />
        <Route exact path='/requestD' component={()=>{return <div><RequestDetails user={this.state}/></div>}} />

        </Switch>
      </Router>
      </div>
    )
  }
}
