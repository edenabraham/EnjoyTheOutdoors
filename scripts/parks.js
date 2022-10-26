
function locationOption(item){
    const option= document.createElement("option");
    option.value=item;
    option.innerHTML= item;
    return option;
}


document.addEventListener("DOMContentLoaded", () => {
    const select= document.getElementById("location");
    locationsArray.forEach(item => select.appendChild(locationOption(item)));
    select.addEventListener("change", (e) =>{
        alert(select.selectedOptions[0].value)
    })
});