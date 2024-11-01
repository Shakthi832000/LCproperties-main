let _card =document.getElementById("sbrCards");
let _agents =document.getElementById("agentsJS");



let cards = [
    {
        id: "one",
        image: "../images/buy_property.png",
        title: "Buy Property",
        description: "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
        buttonLink: "#",
    },
    {
        id: "two",
        image: "../images/sell_property.png",
        title: "Sell Property",
        description: "No matter what path you take to sell your home, we can help you navigate a successful sale.",
        buttonLink: "#",
    },
    {
        id: "three",
        image: "../images/rent_property.png",
        title: "Rent Property",
        description: "We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.",
        buttonLink: "#",
    },
    ]

let generateCards = () => {
    return (_card.innerHTML = cards.map((x) =>{
        return `
        <div class="col-md-4 d-flex justify-content-center mt-md-5">
            <a href="${x.buttonLink}" class="text-decoration-none">
            <div class="custom-cards text-white">
                <img width="220" class="mx-auto d-block rounded mt-3" width="200" src="${x.image}" alt="">
                <div class="details">
                    <h3 class="text-md-center" style="color: orange;">${x.title}</h3>
                    <p class="text-wrap text-md-center  text-white" style="width: 14rem; color: black;">${x.description}.
                    </p>
                </div>
            </a>
            </div>
        </div>
    
        `
    }).join("")
)}

generateCards();








const agentsDetails = [
    {
        _name: 'Sibongile',
        _surname: 'Rwayi',
        company: 'LC Properties',
        office: '011 055 8547',
        mobile: '085 678 8097',
        email: 'sibongile@lcproperties.com',
         img: '../images/Sibongile.jpg',
    },
    {
        _name: 'Philani',
        _surname: 'Mxathule',
        company: 'LC Properties',
        office: '021 053 8527',
        mobile: '071 678 3457',
        email: 'philani@lcproperties.com',
        img: '../images/Philani.jpg',
    },
    {
        _name: 'Silizwe',
        _surname: 'Pani',
        company: 'LC Properties',
        office: '031 964 2317',
        mobile: '071 250 1122',
        email: 'silizwe@lcproperties.com',
        img: '../images/Silizwe.jpg',
    },
];

let generateAgents = () => {
    return (_agents.innerHTML = agentsDetails.map((a) =>{
        return `
        
            
            <div class="col-md-4 d-flex justify-content-center my-md-5 mx-5">
            <a href="#" class="text-decoration-none">
            <div class="custom-cards text-white">
            <img width="220" class="rounded mt-3" width="200" src="${a.img}" alt="">
                <div class="details">
                    <h3 class="text-md-center" style="color: orange;">${a._name} ${a._surname} - ${a.company}</h3>
                    <p class="text-wrap text-md-center  text-white" style="width: 14rem; color: black;">${a.email}.
                    </p>
                    <p class="text-wrap text-md-center  text-white" style="width: 14rem; color: black;">${a.mobile}.
                    </p>
                </div>
            </a>
            </div>
        </div>
            
        `
    }).join("")
)}

generateAgents();









