import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Setting from "./setting";
import Design from "./design";
import './design.css';
import './gallery.css';
var list= [
    {id:1, image:"bridge"}, {id:2, image:"leaf"},{id:3, image:"building"},{id:4, image:"mixer"},{id:5, image:"garden"},{id:6, image:"circle_image"},{id:7, image:"bridge"},
    {id:8, image:"bridge"}, {id:9, image:"leaf"},{id:10, image:"building"},{id:11, image:"bridge"}, {id:12, image:"leaf"},{id:13, image:"building"},
];
var selectedImage;
var aspectRatio ="1:1";
const Gallery = ({onBack,gotToHome})=> {
    const [isSetting, setSettingVisible] = useState(false);
    const [isDesign, setDesignvisible] = useState(false);
   
    const handleClick = (flag,image = "bridge") =>{
        switch(flag) {
            case 1:
                selectedImage =  image; console.log(selectedImage);
                setSettingVisible(true);
                break;
            case 2:
                setSettingVisible(false);
                break;
            case 3:
                setDesignvisible(true);
                setSettingVisible(false);
        }
    }
    const setAspectRatio =(flag)=>{
        aspectRatio = flag ===1 ? "1:1": flag ===2 ? "4:5": "16:9";
    }
    return(
        <>{isDesign? <Design imageName={selectedImage} gotToHome={gotToHome} aspectRatio = {aspectRatio}/> : 
            <div>
                <div className="design_header">
                    <ArrowBackIcon className="design_arrow_back" onClick={onBack}/>
                    
                    <Button className="design_post" style={{width:"120px",backgroundColor:"black"}} disabled={!isSetting} onClick={()=> handleClick(3)}>Next</Button>
                </div>
                {isSetting ? <Setting imageName={selectedImage}  setAspectRatio = {setAspectRatio}/> :
                    <Grid container justifyContent="center" columns={15} rowGap={3} columnGap={3}>
                        { list?.map((val) =>
                            <Grid key={val.id} xs={4}>
                            <Card className="gallery_card" onClick={()=>handleClick(1,val.image)}>
                            <img src={require('../assets/images/' + val.image + '.jpg')}/>
                            </Card>
                        </Grid>
                        )}
                    </Grid> 
                }

            </div>}
        </>
    );
}
export default Gallery;