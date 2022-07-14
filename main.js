const LinksSocialMedia = {
  github: 'LeleCastanheira',
  youtube: 'channel/UC32-1fnsPYOiL3XTLc0aYVw',
  facebook: 'leticia.l.castanheira',
  instagram: 'lelecastanheira',
  twitter: 'LeCastanheiraaa'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()


function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    UserImage.src = data.avatar_url
    userlogin.textContent = data.login
  })
  
}

getGitHubProfileInfos()