import React from 'react';
import logo from '../assets/images/bridge.jpg'
import axios from "axios";
import { useRef } from 'react'
import {Link,useNavigate} from "react-router-dom";
import { ButtonToolbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'
import Button from 'react-bootstrap/Button';
import { baseurl } from '../datastore.service';

export const CreateAccount = () => {
  const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" title="Popover bottom" style={{
      padding: '10px', textAlign: 'justify', width: 'fit-content', height: 'fit-content', borderRadius: '10px',
    }}>
      <strong style={{padding: '10px',}}>"Keep me Signed in"</strong>
      <hr/>
      Choosing "Keep me signed in" reduces the number of times you're asked to Sign-In on this device.
      To keep your account secure, use this option only on your personal devices.
    </Popover>
  );
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef1 = useRef(null)
    const passwordRef2 = useRef(null)
    const navigate= useNavigate()
    const submitData = async(e) => {
        e.preventDefault();
        if (nameRef.current.value == "" || emailRef.current.value == "" || passwordRef1.current.value == "" || passwordRef2.current.value == "") {
          alert("Please enter data to all feilds!!");
          return;

        }
        else if (passwordRef1.current.value.length < 6 || passwordRef2.current.value.length < 6) {
            alert('Password must contain at least 6 characters');
            return;
        }
        else if (passwordRef1.current.value != passwordRef2.current.value) {
            alert('Password is not matching');
            return;
        }
        
        const details = {
            userName: nameRef.current.value, 
            userId: emailRef.current.value, 
            userPassword: passwordRef2.current.value
        }
        
      //localStorage.setItem('user-details', JSON.stringify(details))
      if (details.userName != "" && details.userId != "" && details.userPassword != "") {
            await axios.get(`${baseurl}identity/exist/${details.userId}`)
            .then(result => {
                if(result.status === 200 && result.data){
                    alert("data already exist");
                    navigate({ pathname: "/" });
                    return;
                }else if(result.status == 200 ){
                    submitOnDb(details);    // when data is new
                }
            },reject => {
                alert("data failed to check");
                return;
            });
        
      }

    }
    const submitOnDb = async(data)=>{
        await axios.post(`${baseurl}identity`, data)
        .then(result => {
            alert("signup success");
            navigate({ pathname: "/home" });
        }, reject => {
            console.log("failed");
        });
    }
    return (
          <>
            <div className="container" style={{maxWidth: "380px",height:'fit-content',border: "1px solid lightgray",borderRadius:"5px",padding: "20px"}}>
            <div className="row">
              <div className="panel panel-primary">
                  <div className="panel-body">
                      <form className="form">
                          <div className="form-group">
                            <h2 className="h2" style={{paddingBottom:"20px",fontWeight:"400",color: "black"}}>Create account</h2>
                          </div>
                          <div className="form-group">
                              <label className="control-label" for="signupName" style={{paddingBottom:'10px',fontWeight:'500'}}>Your name</label>
                              <input id="signupName" type="text" maxlength="50" className="form-control" ref={nameRef }/>
                          </div>
                          <div className="form-group">
                              <label className="control-label" for="signupEmail" style={{paddingBottom:'10px',fontWeight:'500'}}>Email</label>
                              <input id="signupEmail" type="email" maxlength="50" className="form-control" style={{ paddingBottom: '10px' }} ref={emailRef }/>    
                          </div>
                          <div className="form-group">
                              <label className="control-label" for="signupPassword" style={{paddingBottom:'10px',fontWeight:'500'}}>Password</label>
                              <input id="signupPassword" type="password" maxlength="25" className="form-control" placeholder="at least 6 characters" length="20" ref={ passwordRef1}/>
                              <p style={{marginTop:'5px',fontSize:'13.7px',fontWeight:"400",marginLeft:'0'}}><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="blue" className="bi bi-info" viewBox="0 0 16 16">
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                              </svg>Passwords must be at least 6 characters.</p>
                          </div>
                          <div className="form-group">
                              <label className="control-label" for="signupPasswordagain" style={{paddingBottom:'10px',fontWeight:'500'}}>Re-enter Password</label>
                              <input id="signupPasswordagain" type="password" maxlength="25" className="form-control" ref={ passwordRef2}/>
                          </div>
                          <p className="form-group" style={{fontWeight: "400", fontSize: "13px", lineHeight: "22px"}}>
                                          By creating an account, you agree to our <a href="#" style={{color: 'blue'}}>Conditions of Use</a> and <a href="#" style={{color: 'blue'}}>Privacy Notice</a>.</p>
                          <div className="form-check">
                            <Link to="/">
                              <label className="form-check-label">Already have account?</label>
                            </Link>
                          </div>
                          <div className="form-group">
                              <Link to="/home">
                                <button onClick={submitData} id="signupSubmit" type="submit" className="btn btn-info btn-block" style={{
                                  margin: "20px 0 20px 0", width: '338px',fontWeight:'400',fontSize:'14px',background:'#f77d0099',border:'1px solid #f77d0099'
                              }}>Create your Highon account</button>
                              </Link>
                          </div>
                      </form>
                  </div>
              </div>         
            </div>
        </div>
                      
    </>
    )
}

