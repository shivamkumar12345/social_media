import React from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CollectionsIcon from '@mui/icons-material/Collections';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
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
    margin:"8px auto 8px 8px",
    fontSize: "medium"
}
var post ={
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    fontSize: "24px"
};
const Pick = ({onBack, onPickSelect})=> {
    return(<>
        <div className="create_post_cont" style={container} >
            <ArrowBackIcon className="cancel_btn" style={cancel_btn} onClick={onBack}/>
            <div style={{ ...post, paddingBottom: "20px", borderBottom: "1px solid #afadad"}} onClick={onPickSelect}>
                <AddAPhotoIcon style={{fontSize:"40px", margin:"-2px 50px 0 8px"}}/>
                <span style={{marginRight:"auto", marginLeft:"0px"}} >Pick from gallery</span>
            </div>
            <div style={{...post, padding:"20px 0"}}>
                <CollectionsIcon style={{fontSize:"40px", margin:"-2px 50px 0 8px"}}/>
                <span style={{marginRight:"auto", marginLeft:"0px"}}>Capture with camera</span>
            </div>
        </div>
    </>);
};
export default Pick;