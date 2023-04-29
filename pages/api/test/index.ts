import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).send({ message: 'Hello from Next.js!' })
}

export function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req)
  return new Response('Hello, Next.js!')
}

