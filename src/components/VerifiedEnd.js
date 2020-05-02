import React, { Component } from 'react'
import '../App.css'
import verified from '../pics/verified.svg'
import { Link } from "react-router-dom";
import axios from 'axios'

export default class VerifiedEnd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           recentPosts:[],
           locationPosts:[],  
        }
    }
    componentDidMount= async()=>{
        const tokenLocalStorage= localStorage.getItem('token')
        //check location and send it to server
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            const lat= position.coords.latitude.toString();
            const lon= position.coords.longitude.toString();
            const data={"lat":lat, "lng":lon}
            
            if(tokenLocalStorage){
                var serverL= '/users/' + tokenLocalStorage +'/_location'
                axios.post(serverL,data).then(response=>{
                  if(response.data.success){
                    console.log('yeahhhhhhhhhhhhh')
                  }
                  else{
                    console.log('nooooooooooooooo')
                  }
                  // console.log(response.data)
              })
              .catch(error=>{
                  console.log('Error sending location to server' , error)
                  alert('not getting location')
  
              })
        }
        }); 
        
    }
        const connectionCheck= navigator.onLine;
    if (!connectionCheck){
      console.error('You are not connected to the internet, connection is required')
      alert('no internet')
  }
  else{
      console.log("connection is on")
      // alert('We have connection')
      let token= localStorage.getItem('token')
      try{
        // fetching Recent posts
        let adress="/requests/_filters?token=" + token + "&status=1&sortBy=1"
        let res = await axios({
            url:adress,
            method:"get",
            
        })
        let data = res.data;
        this.setState({recentPosts:data})
        console.log('fetching recentPosts')
    }catch (e){
        console.log(`😱 Axios requestRegister failed: ${e}`);
        alert(`${e}`)
    }
    // fetching Location posts
    try{
      let adress="/requests/_filters?token=" + token + "&status=1&sortBy=2"
      let res = await axios({
          url:adress,
          method:"get",
          
      })
      let data = res.data;
      this.setState({locationPosts:data})
      console.log('fetching location')
  }catch (e){
      console.log(`😱 Axios LocationPosts failed: ${e}`);
      alert(`${e}`)
  }
  //saving data in localStorage
  const recentPtoString=JSON.stringify(this.state.recentPosts)
  localStorage.setItem('recentPosts',recentPtoString )
  const locationPtoString=JSON.stringify(this.state.locationPosts)
  localStorage.setItem('locationPosts',locationPtoString )

  }
    }
    
    render() {
        return (
            <div style={{height:"100vh", position:"relative"}}>
                <div id="picUp">
                    <h2 style={{paddingTop:"30px", color:"rgb(253, 253, 253)"}}>Verified!</h2>
                    <img style={{margin:"auto"}} src={verified} alt="verified"></img>
                </div>
                <div style={{height:"150pt", display:"grid"}}>
                    <p style={{color:"rgb(74, 75, 75)", margin:"auto", fontSize:"40pt", paddingLeft:"40px"}}>Welcome to Willing!</p>
                </div>
                <div style={{position:"absolute", bottom:"10%", width:"100%", display:"grid"}}>
                {/* <button style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white", margin:"auto"}}>START</button> */}
               <Link style={{margin:"auto"}} to='/homePage'><button style={{backgroundColor:"rgb(80, 210, 194)", width:"200pt", height:"35pt", borderRadius:"50pt", color:"white", }}>START</button></Link>

                </div>
            </div>
        )
    }
}
