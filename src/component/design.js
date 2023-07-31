import React, { useState,useRef } from "react";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button} from "@mui/material";
import SellIcon from '@mui/icons-material/Sell';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import './design.css';
import { baseurl } from "../datastore.service";

const Design = ({imageName, gotToHome, aspectRatio})=> {
    const [taged, setTaged] = useState([]);
    const [tagedPlace, setTagedPlace] = useState([]);
    const photographyRef = useRef(null);
    const textAreaRef = useRef(null);
    const foodRef = useRef(null);
    const gamingRef = useRef(null);
    const addPeople = ()=> {
        setTaged(["shivam", 'kumar', "tripathi","shivam", 'kumar', "tripathi"]);
    };
    const addPlace = ()=> {
        setTagedPlace(["Patna", 'Delhi', "Bengaluru","mumbai", 'bhopal', "bihar"]);
    };
    const addVibe = (flag) => { 
        switch(flag){
            case 1:
                photographyRef.current.style.background = "skyblue";
                break;
            case 2:
                foodRef.current.style.background = "skyblue";
                break;
            case 3:    
                gamingRef.current.style.background = "skyblue";
                break;
        };
    };
    const addPost = async()=>{
        
        await  axios.post(`${baseurl}users`,
        {postType:"video", comment: textAreaRef.current.value , postImage: imageName, aspectRatio: aspectRatio})
        .then(result=>{
            alert("posted successfully");
        },reject=>{
            alert("posted failed");
        });
        gotToHome();
    }
    const getImage=(imageName)=> {
        let image ="";
         try{
             image = require('../assets/images/' + imageName + '.jpg');
         } catch(error) { 
             image = require('../assets/images/bridge.jpg');
         } 
         return image;
     };
    return(
        <>
        <div className="design_cont">
            <div className="design_header">
                <ArrowBackIcon className="design_arrow_back"/>
                
                <Button className="design_post" style={{width:"120px"}} disabled={taged.length === 0} onClick={addPost}>Post</Button>
            </div>
            <div className="design_img">
                <img src={getImage(imageName)} style={{width:"50px", height:"50px", borderRadius: "8px"}}/>
            </div>
            <div className="design_desc">
                <span>Description</span>
                <textarea style={{height: "150px"}} ref={textAreaRef}/>
            </div>
            <div className="design_tag" onClick={addPeople}>
                <span className="design_tag_icon"><SellIcon  style={{ verticalAlign:"-0.2em"}}/> Tag People</span>
                <ChevronRightIcon className="design_right_arrow" />
            </div>
            <div className="design_name">
                {taged?.map(people => 
                <span><RemoveCircleIcon style={{fontSize:"medium", margin:"0.2em"}}/> {people}</span>)}
            </div>
            <div className="design_location" onClick={addPlace}>
                <span className="design_location_icon"><LocationOnIcon  style={{ verticalAlign:"-0.2em"}}/> Location</span>
                <ChevronRightIcon className="design_right_arrow"/>
            </div>
            <div className="design_place">
                {tagedPlace?.map(place => 
                <span><RemoveCircleIcon style={{fontSize:"medium", margin:"0.2em"}}/> {place}</span>)}
            </div>
            <span>Add your vibetag</span>
            <div className="design_footer">
                <Button className="design_photography" onClick={() => addVibe(1)} ref={photographyRef}><CameraEnhanceIcon/>Photography</Button>
                <Button className="design_food" onClick={() => addVibe(2)} ref={foodRef}><FastfoodIcon  />Food vlogs</Button>
                <Button className="design_game" onClick={() => addVibe(3)} ref={gamingRef}><VideogameAssetIcon />Gaming</Button>
            </div>

        </div>
        </>
    );
}
export default Design;