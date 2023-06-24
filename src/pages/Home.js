const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Phonebook welcome page
        <span role="img" aria-label="Greeting icon">
          
        </span>
      </h1>
    </div>
  );
}
