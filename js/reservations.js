const reservationBtn = document.querySelector(".display-reservations")

const table = document.querySelector(".contentsTable")
const tableHeader = document.querySelector(".table-header")
// Reservations
// Table Header
const thIdReservation = document.createElement("th")
thIdReservation.innerHTML = "ID";
const thReservationDate = document.createElement("th")
thReservationDate.innerHTML = "Reservation date";
const thRentalDate = document.createElement("th")
thRentalDate.innerHTML = "Rental date";
const thCarId = document.createElement("th")
thCarId.innerHTML = "Car Id";
const thMemberId = document.createElement("th")
thMemberId.innerHTML = "Member Id";



function getReservations() {
    fetch('http://localhost:8080/reservations')
        .then((Response) => Response.json())
        .then((reservations) => {
            console.log(reservations);

            reservations.forEach((reservation) => {

                const trElement = document.createElement("tr")
                const tdId = document.createElement("td")
                tdId.innerHTML = reservation.id;
                const tdReservationDate = document.createElement("td")
                tdReservationDate.innerHTML = reservation.reservationDate;
                const tdRentalDate = document.createElement("td")
                tdRentalDate.innerHTML = reservation.rentalDate;
                const tdCarId = document.createElement("td")
                tdCarId.innerHTML = reservation.car_id;
                const tdMemberId = document.createElement("td")
                tdMemberId.innerHTML = reservation.member_id;


                trElement.append(
                    tdId,
                    tdReservationDate,
                    tdRentalDate,
                    tdCarId,
                    tdMemberId,
                );
                table.appendChild(trElement);

            });
        });
}


// Display all parties
reservationBtn.addEventListener("click", () => {

    tableHeader.append(
        thIdReservation,
        thReservationDate,
        thRentalDate,
        thCarId,
        thMemberId,
    );

    getReservations()


});