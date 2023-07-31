import React, { useEffect, useState } from "react";
import axios from "axios";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import SearchIcon from '@mui/icons-material/Search';
import GridCard from "./Grid_card";
import Story from "./story";
import './home.css';
import Post from "./post";
import { baseurl, setPostArray } from "../datastore.service";

const Home =({onPostClick})=>{
    const [isPost, setPostvisible] = useState(false);
    const [isStory,setStory] = useState(false);
    const [postList, setPostList] = useState([]);
    const ratio ={
        "1:1": "200px",
        "4:5": "250px",
        "16:9": "113px",
    }
    useEffect(()=>{
        const fetchAllPost =async()=>{
        await axios.get(`${baseurl}users/allpost`)
            .then(result=>{
                if(result.status ==200 ){ 
                    setPostList(result.data);
                    setPostArray(result.data);
                }
            }, reject => {
                console.log(reject);
            });
        };
        fetchAllPost();
    },[]);
   
    const showPost =(type) => {
        if(type === "video"){
            setStory(true);
        }else {
            setPostvisible(true);
        }
    }
    const showHome = ()=> {
            setStory(false);
            setPostvisible(false);
    }
    const getHeight= (aspectRatio)=> { 
        if(aspectRatio !== null){
            return ratio[aspectRatio];
        }else return "200px";
    }
    return (
        <>
        <div className="home_header">
            <div className="home_title">
                <h1>Highon</h1>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="home_search">
                <AddBoxOutlinedIcon fontSize="large" onClick={onPostClick}/>
                <SearchIcon fontSize="large"/>
            </div>
        </div>
        <div >
        <div className="home_cont">  
            { isPost ?  (
                    postList?.map((val)=> { 
                        if(val.postType !== 'video')
                        return   <Post key={val.id} val={val} showHome={showHome}/>;
                    })   
                ) : isStory ? (
                    
                postList?.map(({id,postImage,favorite,postType})=> { 
                    if(postType === 'video')
                    return   <Story key={id} id={id} postImage={postImage} fav={favorite} showHome={showHome}/>;
                })   
            ) :     <div className="main_card_container">
                        { postList?.map(({id,postImage,favorite,postType,aspectRatio})=> 
                            <div className="card_cont" style={{height: "200px"}}>
                              <GridCard key={id} id={id} postImage={postImage} fav={favorite} postType={postType} showPost={showPost}/>
                            </div>)
                        }   
                    </div>
                }
        </div>
        </div>
    
        
        </>
    );
};
export default Home;