const name = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Dr. Impulse", "Prof. Chaos", "Dr. Feelgood", "Dr. Strangelove", "Dr. Wire"];
const price = [25, 51, 43, 81, 43, 76, 47, 72];
const occupation = ["gardener", "programmer", "teacher", "teacher", "teacher", "programmer", "mastermind", "driver"];
const maxFreelancers = 4;

const freelancers = [{
    name: "Dr. Strangelove",
    occupation: "mastermind",
    price: 76
},
{   
    name: "Prof. Possibility",
    occupation: "programmer",
    price: 51
}
]

function addFreelancer() {
    const newName = name[Math.floor(Math.random() * name.length)];
    const newOccupation = occupation[Math.floor(Math.random() * occupation.length)];
    const newPrice = price[Math.floor(Math.random() * price.length)];
    if (freelancers.length >= maxFreelancers) {
        clearInterval(addFreelancerInterval);
      }
    freelancers.push({ name: newName, occupation: newOccupation, price: newPrice});
}

function render() {
    const nameList = document.querySelector("#name");
    const nameElements = freelancers.map((freelancer) => {
        const nameElement = document.createElement("li");
        nameElement.textContent = freelancer.name;
        return nameElement
    });
    nameList.replaceChildren(...nameElements);

    const occupationList = document.querySelector("#occupation");
    const occupationElements = freelancers.map((freelancer) => {
        const occupationElement = document.createElement("li");
        occupationElement.textContent = freelancer.occupation;
        return occupationElement
    });
    occupationList.replaceChildren(...occupationElements);

    const priceList = document.querySelector("#price");
    const priceElements = freelancers.map((freelancer) => {
        const priceElement = document.createElement("li");
        priceElement.textContent = `$${freelancer.price}`;
        return priceElement
    });
    priceList.replaceChildren(...priceElements);
}

function averagePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0)
    const avgPrice = total / freelancers.length;
    document.getElementById("average").textContent = `The starting average price is $${avgPrice.toFixed(2)}`;
}

const addFreelancerInterval = setInterval(() => {
    addFreelancer();
    render();
    averagePrice();
}, 3000);

render();
averagePrice();

