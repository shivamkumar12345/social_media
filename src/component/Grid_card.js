import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './home.css';
import { baseurl } from "../datastore.service";
var style_card ={
    display: "flex",
    flexDirection:"column",
    justifyContent:"end",
    margin:"5px 0",
  }
var home_fav_border= {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    margin: "-25px 5px 10px auto",
    color:"#fff",
    cursor: "pointer"
  }

const GridCard =({id,postImage,fav,postType,showPost, aspectRatio})=>{
    const [isFav,setFav] = useState(false);
    const setFavorite = async(e)=>{
        e.stopPropagation();
        setFav(!isFav);

        await axios.put(`${baseurl}users/addfav/${id}/${isFav}`)
        .then(result=>{
            if(result.status ==200 ){
                console.log("ok");
            }
        }, reject => {
            console.log(reject);
        });
    }
    useEffect(()=> {
        setFav(fav);   
    },[]);

    const getImage=(imageName)=> {
        return require('../assets/images/' + imageName + '.jpg');
     }

    return(<>
        <Card key={id} className="home_card" onClick={()=>showPost(postType)} style={{...style_card, margin: "8px 0", height:"100%" , background: `url(${getImage(postImage)})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center"}}>        
            <div className="home_fav_border" style={home_fav_border} onClick={setFavorite}>
            {isFav?<FavoriteIcon style={{color: "red"}}/>: <FavoriteBorderOutlinedIcon /> } 
            </div>  
        </Card>
        </>);
}
export default GridCard;