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
        <div class="user-card grid border rounded-md w-[500px] shadow-2xl">
        <h1 class="text-center font-bold text-2xl"> ${user.name} </h1>
        <p> <span class='font-bold' >Username :</span> ${user.username} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.email} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.address.street} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.address.suite} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.address.city} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.address.zipcode} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.address.geo.lat} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.address.geo.lng} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.phone} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.website} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.company.name} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.company.catchPhrase} </p>
        <p>  <span class='font-bold' >Username :</span> ${user.company.bs} </p>
        <p>  </p>
        </div>
        
        `;
    userContainer.appendChild(userCard);
  });
};

LoadUser();
