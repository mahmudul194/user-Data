const LoadUser = () => {
  const Url = "https://jsonplaceholder.typicode.com/users";
  fetch(Url)
    .then((res) => res.json())
    .then((json) => displayUser(json));
};

const displayUser = (users) => {
  const userContainer = document.getElementById("user-container");
  // userContainer.innerHTML = ' '
  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.innerHTML = `
        <div class="user-card grid border rounded-md w-[500px] shadow-2xl">
        <h1 class="text-center font-bold text-2xl"> ${user.name} </h1>
        <p> ${user.address.street} </p>
        <p> ${user.address.suite} </p>
        <p> ${user.address.city} </p>
        <p> ${user.address.zipcode} </p>
        <p> ${user.address.geo.lat} </p>
        <p> ${user.address.geo.lng} </p>
        <p> ${user.phone} </p>
        <p> ${user.website} </p>
        <p>  </p>
        <p>  </p>
        <p>  </p>
        <p>  </p>
        </div>
        
        `;
    userContainer.appendChild(userCard);
  });
};

LoadUser();
