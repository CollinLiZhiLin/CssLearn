import "./static/less/style.less";
import "./static/css/iconfont.css";
import "./static/font/iconfont.js";
// import  './static/js/test';
import axios from 'axios';
import '../mock/getData';
window.onload=function(){
    var changeBg= document.querySelectorAll("#wrap > .footer > div");
    var midNode = document.querySelector("#wrap > .midle");
    var divNode = document.querySelectorAll("#wrap > .midle > div")
    var Img = document.createElement('img');
    // console.log(midNode);
        for(let i=0;i<changeBg.length;i++){
            changeBg[i].onclick=function(){
                midNode.style.left= i*-360+"px";
            }
        }
        axios.get("/api/getData").then(function(res){
            console.log(res.data.img_url);
            Img.src=res.data.img_url;
            Img.style.position="absolute";
            Img.style.left = '20px';
            Img.style.top = '30px';
            divNode[0].appendChild(Img);
        });
}