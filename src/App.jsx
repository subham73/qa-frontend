// export default function App() {
//   return (
//     <div style={{
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       height: "100vh",
//       backgroundColor: "#f3f4f6",
//       textAlign: "center"
//     }}>
//       <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#1f2937" }}>
//         🚧 Frontend Coming Soon 🚧
//       </h1>
//       <p style={{ fontSize: "1.2rem", color: "#4b5563" }}>
//         Backend workflows are ready anfdfdd running on GCP Cloud Run work .
//       </p>
//       <a
//         href="https://h2s-fastapi-app-342923646426.europe-west1.run.app/docs"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           marginTop: "1.5rem",
//           padding: "0.5rem 1rem",
//           backgroundColor: "#2563eb", 
//           color: "white",
//           borderRadius: "0.5rem",
//           textDecoration: "none"
//         }}
//       >
//         View Backend API
//       </a>
//     </div>
//   ); 
// }

import { useEffect, useState } from "react";

export default function App() {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showData, setShowData] = useState(false);

  const fetchRequirements = () => {
    setLoading(true);
    fetch("https://h2s-fastapi-app-342923646426.europe-west1.run.app/all_requirements")
      .then((res) => res.json())
      .then((data) => {
        setRequirements(data);
        setLoading(false);
        setShowData(true);
      })
      .catch((err) => {
        console.error("Error fetching requirements:", err);
        setLoading(false);
      });
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", textAlign: "center", color: "#1f2937" }}>
        📋 Compliance Requirements
      </h1>

      {!showData && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={fetchRequirements}
            style={{
              padding: "0.75rem 1.5rem",
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Show Requirements
          </button>
        </div>
      )}

      {loading && <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading requirements...</p>}

      {showData && !loading && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem"
        }}>
          {requirements.map((item) => (
            <div key={item.req_id} style={{
              backgroundColor: "white",
              padding: "1rem",
              borderRadius: "0.5rem",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "600", color: "#111827" }}>{item.req}</h2>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "0.5rem" }}>
                <strong>Regulations:</strong> {item.regulations.join(", ") || "None"}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: "0.25rem" }}>
                <strong>Timestamp:</strong> {new Date(item.ts).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}