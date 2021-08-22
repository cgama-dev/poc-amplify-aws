// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const date = new Date().toISOString()
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=5, stale-while-revalidate, public');
  res.status(200).json({ name: 'Cleyton Gama', data:date })
}
