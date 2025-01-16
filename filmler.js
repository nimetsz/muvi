const container= document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click",()=>{
    container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", ()=>{
    container.classList.remove("change");
});
document.querySelector(".nav-list").addEventListener("click", ()=>{
    container.classList.remove("change");
});

const color=["#338137", "#429946", "#52ad57", "#6ccf71", "#8bef8c"];
 let i=0;

 Array.from(document.querySelectorAll(".nav-link")).forEach(item=>{
     item.style.cssText=`background-color:${color[i++]}`;
 });


 
