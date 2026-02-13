
let form = document.getElementById("event-form"); 
let title = document.getElementById("title"); 
let date = document.getElementById("date"); 
let category = document.getElementById("category"); 
let description = document.getElementById("Description");


let gridCard = document.getElementById("grid-card"); 


let cardDetails = [];   

const populate = () => {

    gridCard.innerHTML = '';
    
    
    cardDetails.forEach((card,index) => {
        gridCard.innerHTML += `<div class="card">
        <button class="cancel-btn" id="${index}">&#x274C;</button>
        <h4>${card.title}</h4>
        <p class="date">&#128197; ${card.date}</p>
        <br>
        <label>${card.category}</label>
        <p class="des">${card.description}</p>
        </div>`;
    })

}

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    cardDetails.push({
        "title":title.value,
        "date":date.value,
        "category":category.value,
        "description":description.value,
    });

    populate();
    
    title.value = '';
    date.value = '';
    description.value = '';
})


gridCard.addEventListener( 'click', (e)=>{
    if (e.target.classList.contains("cancel-btn")) {
        const index = e.target.dataset.index;
        cardDetails.splice(index, 1);
        populate();
    }
})

