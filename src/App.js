import './App.css';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Pick from './component/Pick';
import CreatePost from './component/create_post';
import Design from './component/design';
import Gallery from './component/gallery';
import Home from './component/home';
import Post from './component/post';
import Setting from './component/setting';
import { Login } from './component/login';
import { CreateAccount } from './component/signup';
import { Router } from 'react-router-dom';
function App() {
  const [isPostVisible, setPostvisible] =useState(false);
  const [isPickVisible, setPickVisible] = useState(false);
  const [isGalleryVisible, setGalleryVisible] = useState(false);
  const onPostClick =()=>{
    setPostvisible(true);
  }
  const showComponent= (flag)=>{
    switch(flag){
      case 1:
        setPickVisible(true);
        setPostvisible(false);
        setGalleryVisible(false);
        break;
      case 2:
        setPickVisible(false);
        setPostvisible(true);
        setGalleryVisible(false);
        break;
      case 3:
        setPickVisible(false);
        setPostvisible(false);
        setGalleryVisible(true);
        break;
      case 4:
        setGalleryVisible(false);
        setPickVisible(true);
        break;
      case 5:
        setPickVisible(false);
        setGalleryVisible(false);
        setPostvisible(false);
        break;
    }
       
  }
  return (
    <div className="App">
      
       <Grid className="home_container" container style={{height: "800px", marginTop: "20px"}}>
            <Grid xs style={{background: "#fff"}}/>
            <Grid xs={6}>
                {isPostVisible ? <CreatePost onCancel={()=> setPostvisible(false)} onPick={()=>showComponent(1)}/> : 
                (isPickVisible ? <Pick onBack={()=> showComponent(2)} onPickSelect={()=> showComponent(3)}/> :
                ( isGalleryVisible ? <Gallery onBack={() =>showComponent(4)} gotToHome={()=>showComponent(5)}/>:
                <Home onPostClick={onPostClick}/>)) }
            </Grid>
            <Grid xs style={{background: "#fff"}}/>
        </Grid>
        {/* <Login/> */}
        {/* <CreateAccount/> */}
        {/* <Post/> */}
        {/* <Design/> */}
        {/* <CreatePost/> */}
        {/* <Pick/> */}
        {/* <Gallery/> */}
        {/* <Setting/> */}
    </div>
  );
}

export default App;
