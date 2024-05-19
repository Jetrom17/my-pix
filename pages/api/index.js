// pages/api/index.js

export default function handler(req, res) {
  const { query } = req;

  const { name, Telefone, email, cpf, random } = query;

  // Função para gerar a página HTML com base nos parâmetros
  const generateHTMLPage = () => {
    let html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chaves PIX de ${name}</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: black;
            padding: 20px;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: left;
          }
          .copy-icon {
            cursor: pointer;
          }
          .copy-icon i {
            font-size: 1.2em;
            color: gray;
            margin-left: 5px;
          }
          .pix-key {
            font-weight: bold; 
            color: green;
          }
        </style>
        <script>
          function copyToClipboard(text) {
            navigator.clipboard.writeText(text)
              .then(() => {
                alert('Texto copiado para a área de transferência!');
              })
              .catch(err => {
                console.error('Erro ao copiar texto:', err);
              });
          }
        </script>
      </head>
      <body>
        <div class="container">
          <p>Sou ${name} e essas são minhas chaves PIX para você copiar e colar no seu aplicativo bancário:</p>`;

    if (Telefone) {
      html += `<p>- Telefone: <span class="pix-key">${Telefone}</span> <span class="copy-icon" onclick="copyToClipboard('${Telefone}')"><i class="bi bi-clipboard-check"></i></span></p>`;
    }
    if (email) {
      html += `<p>- Email: <span class="pix-key">${email}</span> <span class="copy-icon" onclick="copyToClipboard('${email}')"><i class="bi bi-clipboard-check"></i></span></p>`;
    }
    if (cpf) {
      html += `<p>- CPF: <span class="pix-key">${cpf}</span> <span class="copy-icon" onclick="copyToClipboard('${cpf}')"><i class="bi bi-clipboard-check"></i></span></p>`;
    }
    if (random) {
      html += `<p>- Random: <span class="pix-key">${random}</span> <span class="copy-icon" onclick="copyToClipboard('${random}')"><i class="bi bi-clipboard-check"></i></span></p>`;
    }

    html += `<p>Muito obrigado. Deus te abençoe em dobro!</p>
        </div>
      </body>
      </html>`;
    
    return html;
  };

  // Retorna a página HTML como resposta
  res.status(200).send(generateHTMLPage());
}
