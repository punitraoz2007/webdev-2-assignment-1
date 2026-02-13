let form = document.getElementById("event-form");
let title = document.getElementById("title");
let date = document.getElementById("date");
let category = document.getElementById("category");
let description = document.getElementById("Description");
let gridCard = document.getElementById("grid-card");
let deleteAllBtn = document.getElementById("delete-all");
let sampleBtn = document.getElementById("sample-event");

let cardDetails = JSON.parse(localStorage.getItem("events")) || [];

// Save to localStorage
function saveToStorage(){
    localStorage.setItem("events", JSON.stringify(cardDetails));
}

// Render cards
function populate(){
    gridCard.innerHTML = "";

    cardDetails.forEach((card,index)=>{
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <button class="cancel-btn" data-index="${index}">❌</button>
            <h4>${card.title}</h4>
            <p class="date">📅 ${card.date}</p>
            <label>${card.category}</label>
            <p class="des">${card.description}</p>
        `;

        gridCard.appendChild(div);
    });

    saveToStorage();
}

// Add Event
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    cardDetails.push({
        title:title.value,
        date:date.value,
        category:category.value,
        description:description.value
    });

    populate();
    form.reset();
});

// Delete single
gridCard.addEventListener("click",(e)=>{
    if(e.target.classList.contains("cancel-btn")){
        let index = e.target.dataset.index;
        let card = e.target.parentElement;

        card.classList.add("fade-out");

        setTimeout(()=>{
            cardDetails.splice(index,1);
            populate();
        },400);
    }
});

// Delete all
deleteAllBtn.addEventListener("click",()=>{
    if(confirm("Delete all events?")){
        cardDetails = [];
        populate();
    }
});

// Add Sample Events
sampleBtn.addEventListener("click",()=>{
    if(cardDetails.length > 0){
        alert("Events already exist! Delete them first to add samples.");
        return;
    }

    cardDetails = [
        {
            title:"Tech Conference 2026",
            date:"2026-03-15",
            category:"Conference",
            description:"Annual technology conference with industry experts."
        },
        {
            title:"Frontend Workshop",
            date:"2026-02-20",
            category:"Workshop",
            description:"Hands-on workshop on HTML, CSS & JavaScript."
        },
        {
            title:"Startup Meetup",
            date:"2026-04-05",
            category:"Meetup",
            description:"Networking meetup for entrepreneurs and developers."
        }
    ];

    populate();
});

// Initial Load
populate();
