import React,{useEffect, useState} from "react";
import { LinearProgress } from "@mui/material";
import Card from "@mui/material/Card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./story.css";

const Story =({id, postImage, fav, showHome}) => {
    const [progress, setProgress] = useState(0);

      const getImage=(imageName)=> {
        let image ="";
         try{
             image = require('../assets/images/' + imageName + '.jpg');
         } catch {
             image = require('../assets/images/bridge.jpg');
         }
         return image;
     }
    useEffect(() => {
        let oldProgress =0;
        const timer = setInterval(() => {
          setProgress(() => { 
            if (oldProgress >= 100) {
                clearInterval(timer);
                return 0;
            } oldProgress+=2;
            return oldProgress;
          });
        }, 500);
    
        return () => {
          clearInterval(timer);
        };
      },[]);

    return(<>
         <LinearProgress variant="determinate" value={progress} /> 
        <Card className="story_div" style={{ background: `url(${getImage(postImage)})`}}>
            <ArrowBackIcon onClick={showHome} className="story_arrowback"/>
        </Card>
    
    </>);
};
export default Story;