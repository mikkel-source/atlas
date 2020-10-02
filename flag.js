fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(function (data) {
        let flaglist = document.querySelector(".flaglist")
        data.forEach(function (country) {
            let template = document.querySelector("#template").content.cloneNode(true)
            let image = template.querySelector("img")
            image.src = country.flag
            flaglist.appendChild(image)
        });
    })
    ;
