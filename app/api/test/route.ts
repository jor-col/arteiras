
import type { NextApiRequest, NextApiResponse } from 'next'

export function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log(req)
  return new Response('Hello, Next.js!')
}

export function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req)
  return new Response('Hello, Next.js!')
}

