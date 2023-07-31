import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';

import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
var container ={
    display:"flex",
    flexDirection:"column",
    justifyContent: "center",
    verticalAlign: "center",
    height: "180px",
    width: "350px",
    borderRadius: "16px",
    backgroundColor: "#ccc",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
};
var cancel_btn = {
    alignItem: "flex-end",
    margin:"8px 8px 8px auto",
    fontSize: "40px"
}
var post ={
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    fontSize: "24px"
};
const CreatePost = ({onCancel,onPick})=> {
    return(<>
        <div className="create_post_cont" style={container} >
            <CancelIcon className="cancel_btn" style={cancel_btn} onClick={onCancel}/>
            <div style={{ ...post, paddingBottom: "20px", borderBottom: "1px solid #afadad"}} onClick={onPick}>
                <AddBoxOutlinedIcon style={{fontSize:"40px", margin:"-2px 50px 0 8px"}}/>
                <span style={{marginRight:"auto", marginLeft:"0px"}}>Create a post</span>
            </div>
            <div style={{...post, padding:"20px 0"}}>
                <AddBoxOutlinedIcon style={{fontSize:"40px", margin:"-2px 50px 0 8px"}}/>
                <span style={{marginRight:"auto", marginLeft:"0px"}}>Create a story</span>
            </div>
        </div>
    </>);
};
export default CreatePost;