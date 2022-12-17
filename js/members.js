const membersBtn = document.querySelector(".display-members")

const table = document.querySelector(".contentsTable")
const tableHeader = document.querySelector(".table-header")
// Members
// Table Header
const thIdMember = document.createElement("th")
thIdMember.innerHTML = "ID";
const thFirstName = document.createElement("th")
thFirstName.innerHTML = "First name";
const thLastName = document.createElement("th")
thLastName.innerHTML = "Last name";
const thStreet = document.createElement("th")
thStreet.innerHTML = "Street";
const thCity = document.createElement("th")
thCity.innerHTML = "City";
const thZip = document.createElement("th")
thZip.innerHTML = "Zip";
const thApproved = document.createElement("th")
thApproved.innerHTML = "License approved";
const thRanking = document.createElement("th")
thRanking.innerHTML = "Ranking";


function getMembers() {
    fetch('http://localhost:8080/members')
        .then((Response) => Response.json())
        .then((members) => {
            console.log(members);

            members.forEach((member) => {

                const trElement = document.createElement("tr")
                const tdId = document.createElement("td")
                tdId.innerHTML = member.id;
                const tdFirstName = document.createElement("td")
                tdFirstName.innerHTML = member.firstName;
                const tdLastName = document.createElement("td")
                tdLastName.innerHTML = member.lastName;
                const tdStreet = document.createElement("td")
                tdStreet.innerHTML = member.street;
                const tdCity = document.createElement("td")
                tdCity.innerHTML = member.city;
                const tdZip = document.createElement("td")
                tdZip.innerHTML = member.zip;
                const tdApproved = document.createElement("td")
                tdApproved.innerHTML = member.licenseApproved;
                const tdRanking = document.createElement("td")
                tdRanking.innerHTML = member.ranking;



                trElement.append(
                    tdId,
                    tdFirstName,
                    tdLastName,
                    tdStreet,
                    tdCity,
                    tdZip,
                    tdApproved,
                    tdRanking);
                table.appendChild(trElement);

            });
        });
}


// Display all parties
membersBtn.addEventListener("click", () => {
    let hide = document.getElementById("hide")
    if(hide.style.display !== "none") {
        tableHeader.append(
            thIdMember,
            thFirstName,
            thLastName,
            thStreet,
            thCity,
            thZip,
            thApproved,
            thRanking);

        getMembers()
    } else{

        hide.style.display = "block"
    }

});