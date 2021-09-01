
const getInput = () => {
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    input.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.docs));
}


const displaySearchResult = results => {
    const divContainer = document.getElementById('book-container');
    divContainer.textContent = '';
    const resultFound = document.getElementById('result-found');
    const para = document.createElement('p');
    para.innerHTML = `
        <h6 class="text-center"> Founded Search Result for this keyword is ${results.length} </h6>
    `;
    resultFound.appendChild(para);
    results.forEach(result => {
        const div = document.createElement('div');
    div.innerHTML = `
    <div class="col height">
        <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg" class="card-img-top" alt="..." height="350px">
            <div class="card-body">
                <h5> <b> Name : </b>  ${result.title} </h5>
                <h6 class="card-title"> <b> Author : </b> ${result.author_name}</h6>
                <p>First Published in ${result.first_publish_year}, <br> Publisher : ${result.publisher}</p>
            </div>
        </div>
    </div>`
        divContainer.appendChild(div);
    })
    
};


// let fruit = [{name: 'hello'}, {school: 'dklhs'}, {roll: 52}];

// console.log(fruit.length);