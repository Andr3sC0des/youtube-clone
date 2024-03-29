const credentialsAuth = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  if (req.body.password === process.env.AUTH_LOGIN_SECRET && req.body.username === process.env.AUTH_LOGIN_USER) {
    const user = {
      username: req.body.username,
      following: ['Kassiapiano'],
      likedVideos: []
    }
    return res.status(200).json(user)
  } else {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
}

export default credentialsAuth
