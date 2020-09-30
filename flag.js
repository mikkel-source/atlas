let url = new URLSearchParams(window.location.search)
console.log(url)
if (url.has("id")) {
    console.log(url.get("id"))
    fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(function (data) {
            //console.log(data)
            let flaglist = document.querySelector(".flaglist")
            data.forEach(function (country) {
                console.log(country.flag)
                let template = document.querySelector("#template").content.cloneNode(true)
                let image = template.querySelector("img")
                image.src = country.flag
                flaglist.appendChild(image)
            });
        })
};
