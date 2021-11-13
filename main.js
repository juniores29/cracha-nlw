const linksSocialMedia = {
  github: 'juniores29',
  youtube: 'junior junior',
  facebook: 'genesio junior',
  instagram: 'juniorr.genesio',
  twitter: 'genesiojunior'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithuProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //alert(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.userName
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGithuProfileInfos()

//ARROW FUNCIONS :contrai a formula da função(anônima)
