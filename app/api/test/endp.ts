

export default function GET(req: Request, res: Response) {
  console.log(req)
  res.json([{ 'name': 'John Doe' }])
}
