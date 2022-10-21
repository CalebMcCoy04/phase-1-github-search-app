const gitForm = document.getElementById('github-form')

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
      console.log(data)
    })
})
