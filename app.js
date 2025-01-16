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


 /* liste yap */
const filmInput=document.querySelector(".film-input");
const filmButton=document.querySelector(".film-button");
const filmList=document.querySelector(".film-list");

document.addEventListener("DOMContentLoaded", getFilms);
filmButton.addEventListener("click", addFilm);
filmList.addEventListener("click", deleteFilm);

 function addFilm(event){
    const filmDiv=document.createElement("div");
    filmDiv.classList.add("film");

    const newFilm=document.createElement("li");
    newFilm.innerText=filmInput.value;
    newFilm.classList.add("film-item");

    filmDiv.appendChild(newFilm);

    saveLocalFilms(filmInput.value);

    filmList.appendChild(filmDiv);

    const trashButton=document.createElement("button");
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    filmDiv.appendChild(trashButton);

    filmInput.value="";

    event.preventDefault();  
}

 function deleteFilm(e){
     const item=e.target;
     if(item.classList[0]==="trash-btn"){
         const film=item.parentElement;
         film.remove();
     }
 }

 function saveLocalFilms(film){
     let films;
     if(localStorage.getItem("films")===null){
         films=[];
     }
     else{
         films=JSON.parse(localStorage.getItem('films'));
     }
     films.push(film);
     localStorage.setItem("films", JSON.stringify(films));
 }

 function getFilms(){
    let films;
    if(localStorage.getItem("films")===null){
       films=[];
   }
   else{
       films=JSON.parse(localStorage.getItem('films'));
   }
   films.forEach(function(film) {

    
   const filmDiv = document.createElement("div");
   filmDiv.classList.add("film");

 
   const newFilm=document.createElement("li");
   newFilm.innerText=film;
   newFilm.classList.add("film-item");

   filmDiv.appendChild(newFilm);

   filmList.appendChild(filmDiv);

   const trashButton=document.createElement("button");
   trashButton.innerHTML='<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   filmDiv.appendChild(trashButton);

   filmInput.value="";
       
   });
}
