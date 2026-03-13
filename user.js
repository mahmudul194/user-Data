const LoadUser = () =>{
    const Url = "https://jsonplaceholder.typicode.com/users"
    fetch(Url).then(res => res.json()).then(json => displayUser(json))
}

const displayUser = users =>{
    users.forEach(user =>{
        const userContainer = document.getElementById('user-container')
        userContainer.innerHTML = ' '
    })
}

LoadUser();