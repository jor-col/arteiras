import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { method } = req;
  // console.log("http req method:", method);
  // console.log("REQ:", req, "RES:", res);
  return {
    GET: res.status(200).send({ message: 'Hello from Next.js!' }),
    POST: res.status(200).send({ message: "POST succesful" }),
  }[method!]
  // if method does not exist on object above, should throw error...
  // res.status(200).send({ message: 'Hello from Next.js!' })
};
