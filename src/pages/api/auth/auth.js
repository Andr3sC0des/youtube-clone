const credentialsAuth = (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  if (req.body.password === process.env.AUTH_LOGIN_SECRET && req.body.username === process.env.AUTH_LOGIN_USER) {
    const user = {
      username: req.body.username,
      following: ['Kassiapiano']
    }
    return res.status(200).json(user)
  }

  res.status(401).end()
}

export default credentialsAuth
