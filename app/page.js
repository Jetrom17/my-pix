// pages/index.js

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My PIX</h1>
      <p className={styles.description}>
        Projeto visa garantir a disponibilidade e flexibilidade de suas chaves PIX na hora de compartilhar.
      </p>

      <h2 className={styles.step}>Como funciona?</h2>
      <p className={styles.paragraph}>
  Você monta os parâmetros inserindo os valores desejados.
  <br />
  <br />
  <code className={styles.code}>
    https://my-pix.vercel.app/api?name=&Telefone=&email=&cpf=&random=
  </code>
  <br />
  <br />
  Insira o seu nome após o sinal de igual:
  <br />
  <code className={styles.code}>?name=</code>João
  <br />
  Insira o seu número de telefone após o sinal de igual:
  <br />
  <code className={styles.code}>&Telefone=</code>123456789
  <br />
  Insira o seu email após o sinal de igual:
  <br />
  <code className={styles.code}>&email=</code>joao@example.com
  <br />
  Insira o seu CPF após o sinal de igual:
  <br />
  <code className={styles.code}>&cpf=</code>123.456.789-00
  <br />
  Insira um valor aleatório após o sinal de igual:
  <br />
  <code className={styles.code}>&random=</code>xyz123
  <br />
  Caso, não queira incluir ou não tenha uma das chaves PIX, não insira o parâmetro desejado (name, Telefone, email, cpf, random) na URL, apenas aos que vai usar. Se preferir "QR CODE", apenas acesse a rota substituindo meu email:
  <br />
  <br />
  <p className={styles.paragraph}>
        <a 
    href="https://my-pix.vercel.app/api/qrcode?qrcode=jeiel.lima.miranda@gmail.com" 
    className={styles.link}
    target="_blank" 
    rel="noopener noreferrer"
    >
        https://my-pix.vercel.app/api/qrcode?qrcode=jeiel.lima.miranda@gmail.com
        </a>
      </p>
      <br />
      <code className={styles.code}>api/qrcode?qrcode=</code>jeiel.lima.miranda@gmail.com
  <br />
</p>
<br />

      <p className={styles.paragraph}>
        Garantido:
      </p>

      <ol style={{ marginLeft: '20px' }}>
        <li className={styles.step}> Segurança 🛡️</li>
        <li className={styles.step}> Fácil acesso 🌐</li>
        <li className={styles.step}> Rápidez 🚀</li>
        <li className={styles.step}> Flexibilidade ⛲</li>
      </ol>
      <br />

      <p className={styles.paragraph}>
  Assim ficará como exemplo a cima, experimente acessar:
  <br />
  <br />
  <a 
    href="https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123" 
    className={styles.link}
    target="_blank" 
    rel="noopener noreferrer"
  >
    https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123
  </a>
</p>
<br />


      <p className={styles.paragraph}>
        Se você gostou. Por favor, faça um PIX para minha conta:
        <a 
    href="https://my-pix.vercel.app/api?name=Jeiel&email=jeiel.lima.miranda@gmail.com" 
    className={styles.link}
    target="_blank" 
    rel="noopener noreferrer"
    >
        https://my-pix.vercel.app/api?name=Jeiel&email=jeiel.lima.miranda@gmail.com
        </a>
      </p>
      <br />

<div className={styles.box}>
 <h1 className={styles.title}>
        Rio Grande do Sul
        </h1>
        <p className={styles.link}>
        <a href="https://adra.org.br/sos-rs/">sos@adra.org.br</a>
      </p>
      <p className={styles.paragraph}>
        -- ADRA --
        <br />
        TRANSFERÊNCIA BANCÁRIA
        <br />
        Banco Santander 033
        <br />
        Agência: 1181
        <br />
        Conta Corrente: 13001730-4
        <br />
        CNPJ: 01.467.063-0001/1
      </p>
      <p className={styles.paragraph}>
        CARTÃO DE CRÉDITO OU BOLETO
        <br />
        Acesse o link: 
        <a 
          href="https://adra.club/doe_rgs" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          adra.club/doe_rgs
        </a>
      </p>
      <p className={styles.paragraph}>
        DOAÇÕES INTERNACIONAIS
        <br />
        Acesse o link: 
        <a 
          href="https://doacoes.adra.org.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.link}
        >
          doacoes.adra.org.br
        </a>
      </p>
      </div>
    </div>
  );
}
