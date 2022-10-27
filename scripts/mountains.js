function mountainImage(item){
    const img = document.createElement("img");
    img.src = "images/" + item.img;
    return img;
}

function mountainTitle(item){
    const text = document.createElement("div");
    text.classList.add("card-title");
    text.innerHTML = item.name;
    return text;
}

function mountainDescription(item) {
    const about= document.createElement("div");
    about.classList.add("card-description");
    about.innerHTML = about.desc;
    return about;
    
}
function mountainCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(mountainImage(item));    
    card.appendChild(mountainTitle(item));
    card.appendChild(mountainDescription(item));
    return card;
}

document.addEventListener("DOMContentLoaded",()=>{
    mountainsArray.forEach( m => document.body.appendChild(mountainCard(m)));
});