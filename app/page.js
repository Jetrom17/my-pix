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
        <br />
        Caso não queira incluir ou não tenha uma das chaves PIX, não insira o parâmetro desejado na URL. 
        <br />
        <br />
        Para acessar a página de visualização das suas chaves, utilize o seguinte formato:
        <br />
        <code className={styles.code}>
          https://my-pix.vercel.app/view?name=João&Telefone=123456789&email=joao@example.com&cpf=123.456.789-00&random=xyz123
        </code>
        <br />
        Isso irá gerar um cartão PIX com suas informações de forma organizada.
        <br />
        <br />
        Se preferir gerar um "QR CODE", acesse a rota substituindo seu email:
        <br />
        <br />
        <a 
          href="https://my-pix.vercel.app/api/qrcode?qrcode=seuemail@gmail.com" 
          className={styles.link}
          target="_blank" 
          rel="noopener noreferrer"
        >
          https://my-pix.vercel.app/api/qrcode?qrcode=seuemail@gmail.com
        </a>
        <br />
        <br />
        <code className={styles.code}>api/qrcode?qrcode=</code>seuemail@gmail.com
        <br />
      </p>
      <br />

      <p className={styles.paragraph}>
        Garantido:
      </p>

      <ol style={{ marginLeft: '20px' }}>
        <li className={styles.step}>Segurança 🛡️</li>
        <li className={styles.step}>Fácil acesso 🌐</li>
        <li className={styles.step}>Rápidez 🚀</li>
        <li className={styles.step}>Flexibilidade ⛲</li>
      </ol>
      <br />

      <p className={styles.paragraph}>
        Assim ficará como exemplo:
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
    </div>
  );
}
