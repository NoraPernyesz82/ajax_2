"use strict";
function loadDoc(){
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            myFunction(this)
        }
    }
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}

function myFunction(that) {
    let XMLSzoveg = that.responseXML;
    let cdTomb = XMLSzoveg.getElementsByTagName("CD");
    
    let txt = "<table>";
    txt += "<tr><td>Title</td><td>Artis</td><td>Country</td><td>Conpany</td><td>Price</td><td>Year</td></tr>"
    for(let i = 0; i < cdTomb.length; i++){
        txt += "<tr>"
        txt += `<td> ${cdTomb[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue}</td>`;
        txt += `<td> ${cdTomb[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue}</td>`;
        txt += `<td> ${cdTomb[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue}</td>`;
        txt += `<td> ${cdTomb[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue}</td>`;
        txt += `<td> ${cdTomb[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue}</td>`;
        txt += `<td> ${cdTomb[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue}</td>`;
        txt += "</tr>";
    }
    txt += "</table>";
    document.getElementById("ide").innerHTML = txt;
}