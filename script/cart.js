let total=0;
let myproducts=JSON.parse(localStorage.getItem("cartdata")) || [];
myproducts.map(function(el,i){
    let box=document.createElement('div');
    let image=document.createElement('img');
    image.src=el.image;
    let title=document.createElement("h3");
    title.innerText=el.title;
    let price=document.createElement("p");
    price.innerHTML=`${el.price}`;
    let remove=document.createElement("button");
    remove.innerText="Remove";
    remove.addEventListener('click',function(){
        removeitem(el,i);
    });
    box.append(image,title,price,remove);
    document.querySelector('#myproducts').append(box);
    let p=el.price.split(" ");
    let pr=+p[1];
    total+=pr;
    document.querySelector("#total>h2").innerText=total;
});
function removeitem(el,i){
    myproducts.splice(i,1);
    localStorage.setItem("cartdata",JSON.stringify(myproducts));
    alert("Item Removed!");
    window.location.reload();
}
