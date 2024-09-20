<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My PIX</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            font-size: 2em;
        }
        h2 {
            font-size: 1.5em;
        }
        p {
            margin: 10px 0;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 4px;
        }
        a {
            color: blue;
            text-decoration: underline;
        }
        ol {
            margin-left: 20px;
        }
    </style>
</head>
<body>
    <div>
        <h1>My PIX</h1>
        <p>Projeto visa garantir a disponibilidade e flexibilidade de suas chaves PIX na hora de compartilhar.</p>

        <h2>Como funciona?</h2>
        <p>
            Você monta os parâmetros inserindo os valores desejados.
            <br><br>
            <code>https://my-pix.vercel.app/api?name=&Telefone=&email=&cpf=&random=</code>
            <br><br>
            Insira o seu nome após o sinal de igual:
            <br>
            <code>?name=</code>João
            <br>
            Insira o seu número de telefone após o sinal de igual:
            <br>
            <code>&Telefone=</code>123456789
            <br>
            Insira o seu email após o sinal de igual:
            <br>
            <code>&email=</code>joao@example.com
            <br>
            Insira o seu CPF após o sinal de igual:
            <br>
            <code>&cpf=</code>123.456.789-00
            <br>
            Insira um valor aleatório após o sinal de igual:
            <br>
            <code>&random=</code>xyz123
            <br><br>
            Caso não queira incluir ou não tenha uma das chaves PIX, não insira o parâmetro desejado na URL. 
            <br><br>
            Para acessar a página de visualização das suas chaves, utilize o seguinte formato:
            <br>
            <code>https://my-pix.vercel.app/view?name=João&Telefone=123456789&email=joao@example.com&cpf=123.456.789-00&random=xyz123</code>
            <br>
            Isso irá gerar um cartão PIX com suas informações de forma organizada.
            <br><br>
            Se preferir gerar um "QR CODE", acesse a rota substituindo seu email:
            <br><br>
            <a href="https://my-pix.vercel.app/api/qrcode?qrcode=seuemail@gmail.com" target="_blank" rel="noopener noreferrer">
                https://my-pix.vercel.app/api/qrcode?qrcode=seuemail@gmail.com
            </a>
            <br><br>
            <code>api/qrcode?qrcode=</code>seuemail@gmail.com
            <br>
        </p>
        <br>

        <p>Garantido:</p>

        <ol>
            <li>Segurança 🛡️</li>
            <li>Fácil acesso 🌐</li>
            <li>Rápidez 🚀</li>
            <li>Flexibilidade ⛲</li>
        </ol>
        <br>

        <p>
            Assim ficará como exemplo:
            <br><br>
            <a href="https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123" target="_blank" rel="noopener noreferrer">
                https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123
            </a>
        </p>
        <br>

        <p>
            Se você gostou. Por favor, faça um PIX para minha conta:
            <a href="https://my-pix.vercel.app/api?name=Jeiel&email=jeiel.lima.miranda@gmail.com" target="_blank" rel="noopener noreferrer">
                https://my-pix.vercel.app/api?name=Jeiel&email=jeiel.lima.miranda@gmail.com
            </a>
        </p>
        <br>
    </div>
</body>
</html>
