import React, { Component } from 'react'
import onboarding1 from '../pics/Onboarding_01.png'
// import Translate from 'react-translate-component';

export default class Onboarding01 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="container" style={{height:"100vh"}}>
            {/* pic up */}
                <div>
                    <img alt="firstPic" width="100%" src={onboarding1}></img>
                </div>
                <div style={{}} className="textBox">
                    {/* <h3 className="header1" style={{}}>סיוע</h3> */}
                    {/* <Translate style={{}} content="intro_title1" component="h2" unsafe={true}/> */}
                    <h2>header</h2>

                    {/* <Translate style={{}} content="intro_description1" component="p" className="piska" unsafe={true}/> */}
                    <p>piska</p>
                </div>
                <div style={{display:"flex", flexDirection:"row", position:"absolute", bottom:"10%", width:"90%"}}>
                            <div  style={{ fontSize:"22pt",width:"100%", textAlign:"left" }} onClick={this.props.skipBtn}>
                                {/* <Translate style={{}} content="skip" component="span" unsafe={true}/> */}
                                <span>skip</span>
                            </div>
                            
                            <div onClick={this.props.btnNext} style={{width:"100%", textAlign:"right" }} >
                                <img alt='icon' src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"/>
                            </div>
                    {/* <MDBFooter color="cyan" className="font-small darken-3 pt-0">
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol  className="py-5">
                                    <div className="mb-5 flex-center"></div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer  fluid>
                            <a href='#' style={{fontFamily:"sfRegular", fontSize:"18pt", textAlign:"left", }} onClick={this.props.skipBtn} className="fb-ic">
                            <Translate style={{}} content="skip" component="span" unsafe={true}/>
                            </a>
                            <a href='#' onClick={this.props.btnNext} style={{marginLeft:"50%"}} className="pin-ic">
                            <img alt='icon' src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"/>
                            </a>
                        </MDBContainer>
                    </div>
                    </MDBFooter> */}
                </div>
            </div>
        )
    }
}
