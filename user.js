const LoadUser = () => {
  const Url = "https://jsonplaceholder.typicode.com/users";
  fetch(Url)
    .then((res) => res.json())
    .then((json) => displayUser(json));
};

const displayUser = (users) => {
  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = ''
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `
        <div class="user-card border rounded-b-xl shadow-2xl">
        <h1 class="text-center font-bold text-2xl"> ${user.name} </h1>
        <p> <span class='font-bold' >Username :</span> ${user.username} </p>
        <p>  <span class='font-bold' >Email :</span> ${user.email} </p>
        <p>  <span class='font-bold' >Address :</span> ${user.address.street}, ${user.address.suite}, ${user.address.city} </p>
        <p>  <span class='font-bold' >Zip Code :</span> ${user.address.zipcode} </p>
        <p>  <span class='font-bold' >Geo :</span> ${user.address.geo.lat}/${user.address.geo.lng} </p>
        <p>  <span class='font-bold' >Phone No. :</span> ${user.phone} </p>
        <p>  <span class='font-bold' >Website :</span> ${user.website} </p>
        <p>  <span class='font-bold' >Company Name :</span> ${user.company.name} </p>
        <p>  <span class='font-bold' >Catch Phrase :</span> ${user.company.catchPhrase} </p>
        <p>  <span class='font-bold' >Base Line :</span> ${user.company.bs} </p>
        </div>
        `;
    userContainer.appendChild(userCard);
  });
};

LoadUser();
