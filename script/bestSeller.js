let products=[{image:"https://img.gkbcdn.com/p/2020-04-03/ENCHEN-Multi-purpose-Electric-Hair-Clipper-Trimmer-Black-901271-._w280_p1_.jpg",title:"ENCHEN Multi-Trimmer",price:'&#8377 1368.15'},
{image:"https://img.gkbcdn.com/p/2020-10-12/P301-ANC-Bluetooth-5-0-TWS-Earbuds-426451-0._w280_p1_.jpg",title:"P301 ANC Bluetooth",price:'&#x20B9 2978.69'},
{image:"https://img.gkbcdn.com/p/2022-05-30/tronsmart-element-groove-bluetooth-speaker-black-bbd0c8-1653893706349._w280_p1_.jpg",title:"Bluetooth Speaker",price:'&#x20B9 2415.00'},
{image:"https://img.gkbcdn.com/p/2020-05-15/xiaomi-air-2se-bluetooth-5-0-tws-earphones-1589512870436._w280_p1_.jpg",title:"Xiaomi 5.0 TWS",price:'&#x20B9 3220.27'}];
products.map(function(el,i){
    let box=document.createElement("div");
    let image=document.createElement('img');
    image.src=el.image;
    let title=document.createElement("p");
    title.innerText=el.title;
    let price=document.createElement('p');
    price.innerHTML=`${el.price}`;
    let btn=document.createElement("button");
    btn.innerText="Buy Now";
    box.append(image,title,price,btn);
    document.getElementById("bestSeller").append(box);
    btn.addEventListener("click",function(){
        goToCart(el);
    });
    
})
function goToCart(el){
    
    let cartdata=JSON.parse(localStorage.getItem("cartdata")) || [];
    cartdata.push(el);
    alert('Added Sucessfully!');
    localStorage.setItem("cartdata",JSON.stringify(cartdata));
}