import qr from 'qrcode';

export default async function handler(req, res) {
  // Recupere o parâmetro "qrcode" da consulta da solicitação
  const { qrcode } = req.query;

  // Verifique se o parâmetro "qrcode" foi fornecido
  if (!qrcode) {
    return res.status(400).json({ error: 'Parâmetro "qrcode" ausente na solicitação' });
  }

  try {
    // Gere o QR code como uma URL de dados
    const qrDataURL = await qr.toDataURL(qrcode, { width: 300, height: 300 }); // Ajuste aqui o tamanho do QR code

    // Renderize o layout do QR code com HTML e CSS
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>QR Code do Pix</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          }
          .qrcode-container {
            text-align: center;
          }
          .pix-info {
            margin-bottom: 20px;
            font-size: 24px;
          }
          img {
            max-width: 100%;
            max-height: 100%;
          }
        </style>
      </head>
      <body>
        <div class="qrcode-container">
          <div class="pix-info">Esse é meu Pix</div>
          <div class="pix-info">${qrcode}</div>
          <div>
            <img src="${qrDataURL}" alt="QR Code do Pix">
          </div>
        </div>
      </body>
      </html>
    `;

    // Envie a resposta com o HTML
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    console.error('Erro ao gerar QR code:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
