// pages/api/index.js

export default async function handler(req, res) {
  const { query } = req;
  const { name, Telefone, email, cpf, random } = query;

  const domain = 'https://my-pix.vercel.app';

  // Criar um objeto com os parâmetros opcionais
  const params = {
    name,
    Telefone,
    email,
    cpf,
    random
  };

  // Filtrar parâmetros não fornecidos (undefined ou null) e gerar a query string dinamicamente
  const filteredParams = Object.entries(params)
    .filter(([key, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  // Gera a URL completa para a página estática
  const staticUrl = `${domain}/view?${filteredParams}`;

  // Faz uma solicitação ao is.gd para encurtar a URL gerada
  try {
    const response = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(staticUrl)}`);
    const shortUrl = await response.text();

    // Em vez de redirecionar, devolva a URL encurtada como resposta
    res.status(200).json({ shortUrl });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encurtar a URL' });
  }
}
