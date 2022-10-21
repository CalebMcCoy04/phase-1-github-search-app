const gitForm = document.getElementById('github-form')
const userList = document.querySelector('#user-list')


gitForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const formUserRequest = gitForm.search.value

  fetch(`https://api.github.com/search/users?q=${formUserRequest}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.github.v3+json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      //renderUser(data.items[0])
        data.items.forEach(user =>{
          renderUser(user)
        })
    })
    })


// keys:
// avatar: avatar_url
//URL: html_url
//username: login 
// id: id

function renderUser(user) {
  const li = document.createElement('li')
  li.style.display = 'flex';
  li.style.flexDirection = 'column';
  



  const username = document.createElement('h1')
  const avatar = document.createElement('img')
  //const pageLink = document.createElement('a')

  username.textContent = user.login
  avatar.src = user.avatar_url
  //pageLink.href = user.html_url
  
  // username.classList = "userdatacontainer"
  // avatar.classList = "userdatacontainer"
  const urlButton = document.createElement("button")
  urlButton.textContent = `Go to ${user.login}'s page!`
  urlButton.addEventListener("click", () => {
    window.location.assign(user.html_url)
  })
  
  
  userList.append(li)
  li.append(username, avatar, urlButton)
  console.log()
  
}