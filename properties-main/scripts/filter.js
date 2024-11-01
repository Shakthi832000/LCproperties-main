// Filter

filterObjects("all");

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("property-box");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i= 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
// Render Properties on page

function renderProperties(x) {
    let propertyContainer = document.querySelector("#propertties-container")
    propertyContainer.innerHTML = "";
    x.forEach((property) => {
        propertyContainer.innerHTML += `
        ${x}
        `
    })
}

// Search Filter

function searchPropeties(){
    let searchProp = document.querySelector("searchProp").value;

    let searchedProperties = x.filter(property.toLowerCase().includes(searchedProperties.toLowerCase()));

    renderProperties(searchedProperties);
}