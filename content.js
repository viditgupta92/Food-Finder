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
            xmlDoc = xhr.responseText;
            // var div = document.createElement("div");
            var jsonResponse = JSON.parse(xmlDoc);
            element = elements[i+1];
            for(i= 0; i< jsonResponse.length; i++){
                element.innerHTML += "<br>";
                element.innerHTML += jsonResponse[i]["name"];
                element.innerHTML += " ,  ";
                element.innerHTML += jsonResponse[i]["address"];

            }
            // for( var i = 0; i < data.length; i++ )
            // {
            //     o = data[i];
            //     var li = document.createElement("li");
            //     li.appendChild(document.createTextNode(o.title));
            //     ul.appendChild(li);
            // }
    }
}