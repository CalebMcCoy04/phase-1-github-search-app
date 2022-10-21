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
      renderUser(data.items[0])
    })
    })


// keys:
// avatar: avatar_url
//URL: html_url
//username: login 
// id: id

function renderUser(user) {
  const li = document.createElement('li')
  const username = document.createElement('h1')
  const avatar = document.createElement('img')
  const pageLink = document.createElement('a')

  username.textContent = user.login
  avatar.src = user.avatar_url
  pageLink.href = user.html_url
  pageLink.textContent = `Go to ${user.login}'s page!`

  userList.append(li)
  li.append(username, avatar, pageLink)
  console.log()
}

