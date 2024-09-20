// pages/api/index.js

export default async function handler(req, res) {
  const { query } = req;
  const { name, Telefone, email, cpf, random } = query;

  const domain = 'https://my-pix.vercel.app';
  const staticUrl = `${domain}/view?name=${encodeURIComponent(name)}&Telefone=${encodeURIComponent(Telefone)}&email=${encodeURIComponent(email)}&cpf=${encodeURIComponent(cpf)}&random=${encodeURIComponent(random)}`;

  try {
    const response = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(staticUrl)}`);
    const shortUrl = await response.text();

    // Em vez de redirecionar, devolva a URL encurtada como resposta
    res.status(200).json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encurtar a URL' });
  }
}
