const carsBtn = document.querySelector(".display-cars")

const table = document.querySelector(".contentsTable")
const tableHeader = document.querySelector(".table-header")
// Members
// Table Header
const thIdCar = document.createElement("th")
thIdCar.innerHTML = "ID";
const thBrand = document.createElement("th")
thBrand.innerHTML = "Brand";
const thModel = document.createElement("th")
thModel.innerHTML = "Model";
const thPricePerDay = document.createElement("th")
thPricePerDay.innerHTML = "Price Per Day";
const thBestDiscount = document.createElement("th")
thBestDiscount.innerHTML = "Best Discount";


function getCars() {
    fetch('http://localhost:8080/cars')
        .then((Response) => Response.json())
        .then((cars) => {
            console.log(cars);

            cars.forEach((car) => {

                const trElement = document.createElement("tr")
                const tdId = document.createElement("td")
                tdId.innerHTML = car.id;
                const tdBrand = document.createElement("td")
                tdBrand.innerHTML = car.brand;
                const tdModel = document.createElement("td")
                tdModel.innerHTML = car.model;
                const tdPricePerDay = document.createElement("td")
                tdPricePerDay.innerHTML = car.pricePerDay;
                const tdBestDiscount = document.createElement("td")
                tdBestDiscount.innerHTML = car.bestDiscount;


                trElement.append(
                    tdId,
                    tdBrand,
                    tdModel,
                    tdPricePerDay,
                    tdBestDiscount,
                );
                table.appendChild(trElement);

            });
        });
}


// Display all parties
carsBtn.addEventListener("click", () => {

    tableHeader.append(
        thIdCar,
        thBrand,
        thModel,
        thPricePerDay,
        thBestDiscount,
    );

    getCars()


});