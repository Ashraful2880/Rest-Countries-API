
const moreCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => loadCountries(data))
}

const loadCountries = (countries) => {
    const containerDiv = document.getElementById('container');
    countries.forEach(country => {
        const mainDiv = document.getElementById('divContainer')
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` 
            <div class="card">
                <img src="${country.flag}" class="card-img-top" alt="Country">
                <div class="card-body">
                    <h5 class="card-title">${country.name}</h5>
                    <p class="card-text">${country.region}</p>
                </div>
            </div>`
        mainDiv.appendChild(div);
    })
}
