import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.log(error);

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>404</h1>
        <p style={styles.subtitle}>Oops! Page not found.</p>
        <p style={styles.message}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={styles.buttonContainer}>
          <button style={styles.button} onClick={() => navigate("/")}>
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212",
    color: "#ffffff",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "6rem",
    fontWeight: "bold",
    margin: "0",
    color: "#ff5555",
  },
  subtitle: {
    fontSize: "2rem",
    fontWeight: "600",
    margin: "10px 0",
  },
  message: {
    fontSize: "1rem",
    margin: "20px 0",
    color: "#cccccc",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",  
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#121212",
    backgroundColor: "#ff5555",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#ff7777",
  },
};