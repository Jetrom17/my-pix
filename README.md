<div>
  <h1>My PIX</h1>
  <p>Projeto visa garantir a disponibilidade e flexibilidade de suas chaves PIX na hora de compartilhar.</p>

  <h2>Como funciona?</h2>
  <p>Você monta os parâmetros inserindo os valores desejados.</p>
  <p><code>https://my-pix.vercel.app/api?name=&Telefone=&email=&cpf=&random=</code></p>
  <p>Insira o seu nome após o sinal de igual: <code>?name=</code>João</p>
  <p>Insira o seu número de telefone após o sinal de igual: <code>&Telefone=</code>123456789</p>
  <p>Insira o seu email após o sinal de igual: <code>&email=</code>joao@example.com</p>
  <p>Insira o seu CPF após o sinal de igual: <code>&cpf=</code>123.456.789-00</p>
  <p>Insira um valor aleatório após o sinal de igual: <code>&random=</code>xyz123</p>
  <p>Caso, não queira incluir ou não tenha uma das chaves PIX, não insira o parâmetro desejado (name, Telefone, email, cpf, random) na URL, apenas aos que vai usar. Se preferir "QR CODE", apenas acesse a rota substituindo meu email:</p>
  <p><a href="https://my-pix.vercel.app/api/qrcode?qrcode=jeiel.lima.miranda@gmail.com" target="_blank" rel="noopener noreferrer">https://my-pix.vercel.app/api/qrcode?qrcode=jeiel.lima.miranda@gmail.com</a></p>
  <p><code>api/qrcode?qrcode=</code>jeiel.lima.miranda@gmail.com</p>

  <h2>Garantido:</h2>
  <ol>
    <li>Segurança </li>
    <li>Fácil acesso </li>
    <li>Rápidez </li>
    <li>Flexibilidade </li>
  </ol>

  <p>Assim ficará como exemplo a cima, experimente acessar:</p>
  <p><a href="https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123" target="_blank" rel="noopener noreferrer">https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123</a></p>

  <p>Se você gostou. Por favor, faça um PIX para minha conta:</p>
  <p><a href="https://my-pix.vercel.app/api?name=Jeiel&email=jeiel.lima.miranda@gmail.com" target="_blank" rel="noopener noreferrer">https://my-pix.vercel.app/api?name=Jeiel&email=jeiel.lima.miranda@gmail.com</a></p>

<hr>
<p>Para iniciar o desenvolvimento:</p>
  <code>
    npm run dev
  </code>
</div>
