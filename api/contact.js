export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ok:false, error:'Method not allowed'});
  const { email, message } = req.body || {};
  if(!email) return res.status(400).json({ok:false, error:'Email requis'});
  return res.status(200).json({ok:true});
}