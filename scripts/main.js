
const navURLs= [
    {label: "Home", url: "index.html"},
    {label: "National Parks", url: "parks.html"},
    {label: "Mountains", url: "mountains.html"},
];


document.addEventListener("DOMContentLoaded", () => {
    const nav= document.getElementById("nav");
    navURLs.forEach(item => nav.innerHTML += `<a href="${item.url}">${item.label}</a>`);
    
});