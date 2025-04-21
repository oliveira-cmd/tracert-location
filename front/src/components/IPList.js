import React, { useEffect, useState } from "react";
import { fetchIPData } from "../api";
import { Helmet } from "react-helmet";

const IPList = () => {
  const [ipData, setIpData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchIPData();
      setIpData(data);
    };
    getData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Lista de IPs | Meu Projeto</title>
        <meta name="description" content="Visualize informações sobre endereços IP." />
      </Helmet>
      <div>
        <h1>Lista de Endereços IP</h1>
        {ipData.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {ipData.map((ip, index) => (
              <li key={index}>
                <strong>IP:</strong> {ip.ip} <br />
                <strong>País:</strong> {ip.country} ({ip.country_code}) <br />
                <strong>Cidade:</strong> {ip.city} <br />
                <strong>Organização:</strong> {ip.connection.org} <br />
                <img src={ip.flag.img} alt={`Bandeira de ${ip.country}`} width="30" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default IPList;