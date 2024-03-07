import tags from '@/db/tags.json'

export default function handler (req, res) {
  res.status(200).json({ tags })
}
