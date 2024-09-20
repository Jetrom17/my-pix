// pages/view.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ViewPage = () => {
  const router = useRouter();
  const { name, Telefone, email, cpf, random } = router.query;

  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    if (name || Telefone || email || cpf || random) {
      setContentLoaded(true);
    }
  }, [name, Telefone, email, cpf, random]);

  if (!contentLoaded) {
    return <p style={styles.loading}>Carregando...</p>;
  }

  return (
    <div style={styles.pageContainer}>
      <div style={styles.card}>
        <div style={styles.cardHeader}>
          <h1 style={styles.title}>{name ? `Chaves PIX de ${name}` : 'Minhas Chaves PIX'}</h1>
          <p style={styles.subTitle}>Compartilhe suas chaves PIX com facilidade</p>
        </div>

        <div style={styles.pixContainer}>
          {Telefone && (
            <div style={styles.pixItem}>
              <div style={styles.pixDetails}>
                <span style={styles.pixLabel}>Telefone</span>
                <span style={styles.pixKey}>{Telefone}</span>
              </div>
              <button style={styles.copyButton} onClick={() => copyToClipboard(Telefone)}>Copiar</button>
            </div>
          )}
          {email && (
            <div style={styles.pixItem}>
              <div style={styles.pixDetails}>
                <span style={styles.pixLabel}>Email</span>
                <span style={styles.pixKey}>{email}</span>
              </div>
              <button style={styles.copyButton} onClick={() => copyToClipboard(email)}>Copiar</button>
            </div>
          )}
          {cpf && (
            <div style={styles.pixItem}>
              <div style={styles.pixDetails}>
                <span style={styles.pixLabel}>CPF</span>
                <span style={styles.pixKey}>{cpf}</span>
              </div>
              <button style={styles.copyButton} onClick={() => copyToClipboard(cpf)}>Copiar</button>
            </div>
          )}
          {random && (
            <div style={styles.pixItem}>
              <div style={styles.pixDetails}>
                <span style={styles.pixLabel}>Chave Aleatória</span>
                <span style={styles.pixKey}>{random}</span>
              </div>
              <button style={styles.copyButton} onClick={() => copyToClipboard(random)}>Copiar</button>
            </div>
          )}
        </div>

        <p style={styles.thankYou}>Muito obrigado! Deus te abençoe em dobro.</p>
      </div>
    </div>
  );
};

// Função para copiar texto
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('Chave copiada com sucesso!');
  }).catch((err) => {
    console.error('Erro ao copiar texto: ', err);
  });
}

// Estilos em objetos
const styles = {
  pageContainer: {
    backgroundColor: '#f0f4f8',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
  },
  cardHeader: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#333',
    marginBottom: '5px',
  },
  subTitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  pixContainer: {
    marginTop: '20px',
  },
  pixItem: {
    backgroundColor: '#fafafa',
    border: '1px solid #ddd',
    padding: '12px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  pixDetails: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  pixLabel: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#999',
    marginBottom: '4px',
  },
  pixKey: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#333',
  },
  copyButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 15px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
  copyButtonHover: {
    backgroundColor: '#0056b3',
  },
  thankYou: {
    fontSize: '14px',
    color: '#666',
    marginTop: '20px',
  },
  loading: {
    fontSize: '18px',
    color: '#666',
    textAlign: 'center',
  }
};

export default ViewPage;
