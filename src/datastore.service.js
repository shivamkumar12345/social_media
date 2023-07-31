export const baseurl = "http://localhost:8080/";
var postArray = [];

export function setPostArray(posts){
    postArray = posts;
}
export function getPostArray(){
    return postArray;
}