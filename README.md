# 🔍 Buscador de Endereço IP

Este projeto permite aos usuários consultarem informações de um endereço IP, incluindo localização e país, por meio de uma aplicação **React (frontend)** e uma **API (backend)** para processar os dados.

## 🚀 Tecnologias Utilizadas

### **Frontend**
- React
- React Helmet (para manipulação de metadados)
- Styled Components ou CSS inline para estilização

### **Backend**
- Node.js
- Express.js
- API externa para busca de informações do IP

---

## 🏗️ Arquitetura do Projeto

### **Frontend (React)**
A aplicação React fornece uma interface amigável para que os usuários insiram um endereço IP e recebam informações sobre ele. Alguns recursos incluem:
- Validação do IP antes da requisição.
- Estado de carregamento e tratamento de erros.
- Exibição de detalhes de localização com interface moderna.

### **Backend (Node.js + Express)**
O backend serve como intermediário entre o frontend e a API externa de busca de IP. Ele:
- Recebe solicitações do frontend contendo um endereço IP.
- Faz uma chamada à API externa para buscar dados sobre o IP.
- Retorna os resultados para o frontend.

---

## 📦 Instalação e Configuração

1. Clone o repositório:
   ```sh
   git clone https://github.com/oliveira-cmd/tracert-location.git
   cd server
   npm install
   npm run dev
   cd ..
   cd front
   npm install
   npm start

## 🔍 Como Usar
1️⃣ **Acesse a interface web** e digite um endereço IP.  
2️⃣ **Clique no botão "Enviar"** para realizar a busca.  
3️⃣ **Aguarde** enquanto os dados são processados pelo backend.  
4️⃣ **Visualize** os detalhes sobre a localização do IP.  

## 📜 Licença
Este projeto está sob a licença **MIT**. Sinta-se livre para usá-lo e modificá-lo conforme necessário.  

## 📬 Contato
Caso tenha dúvidas ou sugestões, entre em contato via [GitHub](https://github.com/oliveira-cmd).  

---

Desenvolvido com 💡 por **Gabriel Oliveira**.