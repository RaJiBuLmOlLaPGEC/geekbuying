let i=0;
let id;

function start(){
    let images=["image1.webp","image2.webp","image3.webp"];
    document.getElementById('slideshow').innerHTML=null;
    let image=document.createElement('img');
    image.src=images[i];
    document.getElementById("slideshow").append(image);
    i++;
    id=setInterval(function(){
        
        if(i===images.length)
        {
            i=0;
        }
        document.getElementById('slideshow').innerHTML=null;
        image=document.createElement('img');
        image.src=images[i];
        document.getElementById("slideshow").append(image);
        i++;
    },3000);
};
start();
let timemin=59;
let timesec=59;
let timehr=05;
let id2;
timer(timehr,timemin,timesec);
function timer(h,m,s)
{
    id2=setInterval(()=>{
        s--;
        document.getElementById("time").innerHTML=null;
        document.getElementById("time").innerHTML=`<p>Ends in ${h}:${m}:${s}</p>`;
        if(s==0)
        {
            m--;
            s=59;
        }
        if(m==0)
        {
            h--;
            m=59;
        }
        if(h==0)
        {
            stop();
        }
    },1000);
}
function stop(){
    document.getElementById("time").innerHTML=`<p>Ends in 00:00:00</p>`;
    clearInterval(id2);
}