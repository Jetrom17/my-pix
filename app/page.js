// pages/index.js

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Criando uma API com Next.js</h1>
      <p className={styles.description}>
        Em brve...
      </p>

      <h2 className={styles.step}> Em brve...</h2>
      <p className={styles.paragraph}>
      Em brve...
        <code className={styles.code}>api</code> dentro do diretório 
        <code className={styles.code}>pages</code>. Este diretório será usado para definir os endpoints da sua API.
      </p>

      <p className={styles.paragraph}>
      Em brve...
      </p>

      <p className={styles.paragraph}>
        Para montar sua própria API de Chave PIX, você pode seguir os seguintes passos:
      </p>
      <ol>
        <li className={styles.step}> Em brve...</li>
        <li className={styles.step}> Em brve...</li>
        <li className={styles.step}> Em brve...</li>
        <li className={styles.step}> Em brve...</li>
        <li className={styles.step}> Em brve...</li>
      </ol>

      <p className={styles.paragraph}>
        Para usar a API de Chave PIX, um usuário pode enviar uma solicitação HTTP para um endpoint específico, fornecendo informações como nome, telefone, e-mail, CPF e chave aleatória (se disponível). Com base nessas informações, a API pode criar, atualizar ou consultar informações sobre a chave PIX do usuário.
      </p>

      <p className={styles.paragraph}>
        Por exemplo, um usuário pode enviar a seguinte solicitação HTTP para criar uma nova chave PIX:
        <br />
        <code className={styles.code}>https://my-pix.vercel.app/api?name=Jo%C3%A3o&Telefone=123456789&email=joao@example.com&cpf=123.456.789-10&random=abc123</code>
      </p>

      <p className={styles.paragraph}>
        Se o usuário não quiser exibir o CPF ou não tiver uma chave PIX específica, ele pode enviar uma solicitação sem incluir o parâmetro 
        <code className={styles.code}>cpf</code>.
      </p>
    </div>
  );
}
