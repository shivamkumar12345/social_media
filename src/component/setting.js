import React, {useRef} from "react";
import './setting.css';
import bridge from '../assets/images/bridge.jpg';
import Card from "@mui/material/Card";
const Setting = ({imageName, setAspectRatio}) =>{
    const imageRef = useRef(null);
    const setImage =(flag)=>{
        switch(flag) {
            case 1:
                setAspectRatio(1);
                imageRef.current.style.height = "100px";
                imageRef.current.style.width = "100px";
                break;
            case 2:
                setAspectRatio(2);
                imageRef.current.style.height = "125px";
                imageRef.current.style.width = "100px";
                break;
            case 3:
                setAspectRatio(3);
                imageRef.current.style.height = "113px";
                imageRef.current.style.width = "200px";
                break;
        }
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

    return( <>
    <div className="setting_container">
        <div className="setting_pic_cont">
            <Card className="setting_card" ref={imageRef} >
                <img src={getImage(imageName)} />
            </Card>
        </div>
        <div className="setting_ratio_cont" style={{marginTop: "20px", height: "100px"}}>
            <span>Aspect Ratio</span>
            <div className="setting_ratio">
                <div><Card onClick={()=> setImage(1)} style={{width:"24px", height:"24px", background:"#fff", borderColor:"blue"}}/>1:1</div>
                <div><Card onClick={()=> setImage(2)} style={{width:"24px", height:"32px"}}/>4:5</div>
                <div><Card onClick={()=> setImage(3)} style={{width:"40px", height:"24px"}}/>16:9</div>
            </div>
        </div>
        <div className="setting_footer">
            <span>Filters </span>
        <div className="setting_filter">
            <div className="card_footer"> 
                <img src={bridge}/>
                <span>None</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("leaf")}/>
                <span>blur</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("mixer")}/>
                <span>bright</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("garden")}/>
                <span>dark</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("garden")}/>
                <span>dark</span>
            </div>
            <div className="card_footer"> 
                <img src={bridge}/>
                <span>None</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("leaf")}/>
                <span>blur</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("mixer")}/>
                <span>bright</span>
            </div>
            <div className="card_footer"> 
                <img src={bridge}/>
                <span>None</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("leaf")}/>
                <span>blur</span>
            </div>
            <div className="card_footer" >
                <img src={getImage("mixer")}/>
                <span>bright</span>
            </div>
            
            
        </div>
        </div>
      
    </div>
    </>);
};
export default Setting;