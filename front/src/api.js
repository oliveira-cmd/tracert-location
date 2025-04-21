import axios from "axios";

const API_URL = "http://localhost:5555/"; // Substitua pela URL da API

export const fetchIPData = async (ip) => {
  try {
    const response = await axios.post(`${API_URL}tracert/tracert`, {ip});
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados da API", error);
    return [];
  }
};