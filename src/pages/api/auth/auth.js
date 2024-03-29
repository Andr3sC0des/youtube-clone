const credentialsAuth = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  if (req.body.password === process.env.AUTH_LOGIN_SECRET && req.body.username === process.env.AUTH_LOGIN_USER) {
    const youtubeUser = {
      name: 'YoutubeClone'
    }
    return res.status(200).json(youtubeUser)
  }

  res.status(401).end()
}

export default credentialsAuth
