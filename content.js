var elements = document.getElementsByClassName('fwn fcg');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    console.log(element);
    var t =element.innerText.toString();
    if (t.search('eating') !== -1){
            var lst = t.split(" ");
            ind = lst.indexOf('eating');
            var searchText = lst[ind+1].toString();
            var xhr = new XMLHttpRequest();
            var urls = "https://food-finder-service.herokuapp.com/api/foodplaces?name=" + searchText.toString();
            xhr.open("GET", urls, false);
            xhr.send();
            xmlDoc=xhr.responseText;
            var div = document.createElement("div");
            div.innerHTML = xmlDoc;
            // div.style.width = "100px";
            // div.style.height = "100px";
            // div.style.background = "red";
            // div.style.color = "white";
            // div.innerHTML = "Hello";

    }
}