export default function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f3f4f6",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
        🚧 Frontend Coming Soon 🚧
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#4b5563" }}>
        Backend workflows are ready anfdfdd running on GCP Cloud Run work .
      </p>
      <a
        href="https://h2s-fastapi-app-342923646426.europe-west1.run.app/docs"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "1.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#2563eb", 
          color: "white",
          borderRadius: "0.5rem",
          textDecoration: "none"
        }}
      >
        View Backend API
      </a>
    </div>
  );
}
