// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  if(req.method === "POST"){
    const data = req.body;
    if(!values.name || !values.email || !values.subject || !values.message)
  }
  return res.status(400).json({ message: 'Bad request' })
}

export default handler;