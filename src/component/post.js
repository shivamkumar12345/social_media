import React, {useState} from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { baseurl } from "../datastore.service";
import "./post.css";

var home_fav_border= {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "-30px 10px 10px auto",
    color:"#fff",
  }
var ratio ={
    "1:1": "300px",
    "4:5": "150px",
    "16:9": "250px",
}
var val ={};
const Post = ({showHome, ...rest})=>{
    val =rest.val;
    const [isFav,setFav] = useState(false);
    const setFavorite = async(e)=>{
        e.stopPropagation();
        setFav(!isFav);

        await axios.put(`${baseurl}users/addfav/${val.id}/${isFav}`)
        .then(result=>{
            if(result.status ==200 ){
                console.log("ok");
            }
        }, reject => {
            console.log(reject);
        });
    }
    const getImage=(imageName)=> {
       let image ="";
        try{
            image = require('../assets/images/' + imageName + '.jpg');
        } catch(error) { 
            image = require('../assets/images/bridge.jpg');
        } 
        return image;
    }
    const getHeight= (aspectRatio)=> { console.log(aspectRatio);
        if(aspectRatio !== null){
            return ratio[aspectRatio];
        }else return "200px";
    }
    return(
        <>
        <div className='post_cont'>
            <Card sx={{ maxWidth: 345 }} className='post_card'>
                    <CardHeader
                        avatar={
                        <Avatar className='avatar' src={getImage(val.userProfile)} sx={{marginRight:"0px"}} aria-label="recipe">
                            S
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreHorizIcon />
                        </IconButton>
                        }
                        title={<strong>She is impressive </strong>}
                        subheader="July 25, 2023"
                    />
                    <Card className="home_card" style={{height: getHeight(val.aspectRatio)}}>        
                        <img src={getImage(val.postImage)} />
                        {/* <FavoriteBorderOutlinedIcon/>  */}
                        <div className="home_fav_border" style={home_fav_border} onClick={setFavorite} >
                        {isFav?<FavoriteIcon style={{color: "red"}}/>: <FavoriteBorderOutlinedIcon /> } 
                        </div> 
                    </Card>
                    <CardContent>
                    <div style={{display:'flex', flexDirection:'row'}}>
                    <div style={{display:'flex', flexDirection:'row'}}>
                        <Avatar className='avatar' src={getImage(val.userProfile)}  aria-label="recipe">
                            R
                        </Avatar>
                        <Avatar className='avatar' src={getImage(val.userProfile)} sx={{ marginLeft: "-10px"}} aria-label="recipe">
                            R
                        </Avatar>
                        <Avatar className='avatar' src={getImage(val.userProfile)} sx={{ marginLeft: "-10px"}} aria-label="recipe">
                            R
                        </Avatar>
                    </div>
                    <span className='post_desc' style={{maxHeight:"1em", marginLeft: "8px"}}> This is impressive</span>
                </div>
                <Typography className='post_desc' variant="body2" color="text.secondary">
                    {val.comment}
                </Typography>
            </CardContent>
            </Card>
        </div>
        </>
    );
};
export default Post;