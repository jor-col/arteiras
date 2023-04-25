export async function POST(req: Request, res: Response) {
  console.log(req)
  return new Response('Hello, Next.js!')
}
