import React from 'react';
import logo from '../assets/images/bridge.jpg'
import axios from "axios";
import { useRef } from 'react'
import { Link, useNavigate } from "react-router-dom";
// import { isAuth } from "../Redux/action";
//import { useDispatch } from "react-redux";

import { ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import { baseurl } from '../datastore.service';

export const Login = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const navigate = useNavigate()
    const handlelogin = (e) => {
        e.preventDefault();
        checkLogin();
    }
    const checkLogin = async()=>{
        await axios.get(`${baseurl}identity/user/${emailRef.current.value}/${passwordRef.current.value}`)
        .then(result => {   console.log(result);
            if(result.status=== 200 ){
                if(result.data){
                    alert('Login successful');
                    navigate('/home');
                }else {
                    alert('Login failed');
                    navigate('/signup');
                }
            }
        }, reject => {
            alert("Login failed")
            navigate('/signup');
        });
    }
    return (
        <>  
            <div className="container" style={{maxWidth: "350px",height:'fit-content',border: "1px solid lightgray",borderRadius:"5px",padding: "20px"}}>
                <div className="row">
                    <div className="panel panel-primary">
                        <div className="panel-body">
                            <form className="form" onSubmit={handlelogin}>
                                <div className="form-group">
                                    <h2 className="h2" style={{paddingBottom:"20px",fontWeight:"400",color: "black"}}>Log In</h2>
                                </div>
                                <div className="form-group">
                                    <label className="control-label" for="signupEmail" style={{paddingBottom:'10px',fontWeight:'500'}}>Email</label>
                                    <input id="signupEmail" type="email" maxlength="50" className="form-control" ref={emailRef} />     
                                </div>
                                <div className="form-group">
                                    <label className="control-label" for="signupPassword" style={{paddingBottom:'10px',fontWeight:'500'}}>Password</label>
                                    <input id="signupPassword" type="password" maxlength="25" className="form-control" length="20" ref={passwordRef} />
                                </div>
                                <div className="form-group">
                                    {/* <Link to="/home"> */}
                                        <button id="signupSubmit" type="submit" className="btn btn-info btn-block" style={{margin: "20px 0 20px 0", width: '306px',fontWeight:'400',fontSize:'14px',background:'#f77d0099',border:'1px solid #f77d0099'}}>LOG IN</button>
                                    {/* </Link>  */}
                                </div>
                                <p className="form-group" style={{fontWeight: "400", fontSize: "13px",lineHeight: "22px"}}>
                                    By creating an account, you agree to our <a href="" style={{color: "blue"}}>Terms of Use</a> and our <a href="#" style={{color: "blue"}}>Privacy Policy</a>.</p>
                                <hr/>
                            </form>
                        </div>
                    </div>         
                </div>
            </div>
            <div className="footerBox" style={{
                marginTop: "70px", 
                background: "linear-gradient(180.47deg,rgba(196, 196, 196, 0.2) 0.41%,rgba(233, 228, 228, 0.2) 0.42%,rgba(250, 243, 243, 0) 99.59%"}}>
                
                <div className="conditions" style={{
                    width: "350px",
                    marginTop: "30px",
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginLeft: "39%",fontSize: "13px",
                    lineHeight: "12px",
                    color: "#6366c4"}}>
                    <p>Conditions of Use</p>
                    <p>Privacy Notice</p>
                    <p>Help</p>
                </div>
                <div>
                    <p className="copyRight" style={{fontWeight: "300",
                        fontSize: "13px",
                        lineHeight: "12px",
                        color: "#222222",
                        marginLeft: "45%",position: "relative",right: "40px"}}>
                        &#169;1996-2021, Amazon.com, Inc. or its affilates
                    </p>
                </div>
            </div>
        </>
    )
}

