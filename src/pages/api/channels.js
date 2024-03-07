// Recommendations
// 100 videos
import channels from '@/db/channels.json'

export default function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ channels })
  }
}
