import React, { useState } from "react";
import { fetchIPData } from "../api";
import { Helmet } from "react-helmet";

const IPSearch = () => {
  const [ip, setIp] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!ip) {
      setError("Por favor, insira um endereço IP válido.");
      return;
    }
    setError(null);
    setData(null);
    setLoading(true);

    const result = await fetchIPData(ip);
    setLoading(false);

    if (!result) {
      setError("Nenhum dado encontrado para esse IP.");
    } else {
      setData(result);
    }
  };

  return (
    <>
      <Helmet>
        <title>Busca de IP | Meu Projeto</title>
        <meta name="description" content="Insira um IP e veja detalhes sobre sua localização." />
      </Helmet>

      <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#1E1E2E", color: "#FFFFFF", borderRadius: "10px" }}>
        <h1 style={{ color: "#FFD700" }}>Buscador de Endereço IP</h1>
        <input
          type="text"
          placeholder="Digite um endereço IP..."
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #FFD700", marginBottom: "10px" }}
        />
        <button 
          onClick={handleSearch} 
          style={{ 
            backgroundColor: "#FFD700", 
            color: "#1E1E2E", 
            padding: "10px 15px", 
            borderRadius: "5px", 
            border: "none", 
            cursor: "pointer"
          }}
        >
          Enviar
        </button>

        {error && <p style={{ color: "#FF6347", marginTop: "10px" }}>{error}</p>}

        {loading && <p style={{ color: "#00BFFF" }}>🔄 Carregando...</p>}

        {data && !loading && (
          <div style={{ backgroundColor: "#282A36", padding: "15px", borderRadius: "10px", marginTop: "20px" }}>
            <h2 style={{ color: "#FFD700" }}>Detalhes dos IPs:</h2>
            {data.map((ipDetails, index) => (
              <div key={index} style={{ marginBottom: "10px", padding: "10px", backgroundColor: "#3A3F5C", borderRadius: "5px" }}>
                <p><strong style={{ color: "#FFD700" }}>IP:</strong> {ipDetails.ip}</p>
                <p><strong style={{ color: "#FFD700" }}>País:</strong> {ipDetails.country} ({ipDetails.country_code})</p>
                <p><strong style={{ color: "#FFD700" }}>Cidade:</strong> {ipDetails.city}</p>
                <p><strong style={{ color: "#FFD700" }}>Organização:</strong> {ipDetails.connection.isp}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default IPSearch;