const credentialsAuth = (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }
  if (req.body.username === process.env.AUTH_LOGIN_USER && req.body.password === process.env.AUTH_LOGIN_SECRET) {
    const user = {
      id: 1,
      name: req.body.username,
      email: `${req.body.username}@example.com`,
      following: ['Kassiapiano', 'aimeecarty6474'],
      likedVideos: ['XUzwdBQDzxw']
    }
    return res.status(200).json(user)
  } else {
    return res.status(401).json({ error: 'Invalid credentials' })
  }
}

export default credentialsAuth
