// pages/api/index.js

export default async function handler(req, res) {
  const { query } = req;
  const { name, Telefone, email, cpf, random } = query;

  // O domínio deve ser inserido manualmente ou obtido dinamicamente
  const domain = 'https://special-barnacle-xx6vpwqxr5jfvjvv-3000.app.github.dev';

  // Gera a URL completa para a página estática
  const staticUrl = `${domain}/view?name=${encodeURIComponent(name)}&Telefone=${encodeURIComponent(Telefone)}&email=${encodeURIComponent(email)}&cpf=${encodeURIComponent(cpf)}&random=${encodeURIComponent(random)}`;

  // Faz uma solicitação ao is.gd para encurtar a URL gerada
  try {
    const response = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(staticUrl)}`);
    const shortUrl = await response.text();

    // Redireciona o usuário diretamente para a URL encurtada
    res.writeHead(302, { Location: shortUrl });
    res.end();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao encurtar a URL' });
  }
}
