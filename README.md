# Twitch User Points Updater

This Node.js script updates a MySQL database with Twitch user information, including usernames and points. The script retrieves user IDs using the Twitch API and ensures that data is inserted or updated in the database. Errors are logged in a separate file for review.

## Features
- Fetches Twitch user IDs using their usernames via the Twitch API.
- Updates MySQL database with user information and points.
- Logs errors to a file (`usererros.txt`) for troubleshooting.

## Requirements
- Node.js (>= 14.x)
- MySQL database
- Twitch API credentials (Client ID and Access Token)

## Installation

### Automatic Installation
1. Clone this repository: `git clone https://github.com/djgamer07/twitch-user-points-updater.git && cd twitch-user-points-updater`
2. Install dependencies: `npm install`

### Manual Installation
1. Create a new directory and navigate to it: `mkdir twitch-user-points-updater && cd twitch-user-points-updater`
2. Initialize a new Node.js project: `npm init -y`
3. Install the required dependencies: `npm install axios mysql2`
4. Create a file named `index.js` and paste the script content into it.
5. Create a `package.json` file if needed, and add the following content: `{"dependencies": {"axios": "^1.7.9","mysql2": "^3.11.5"}}`
6. Ensure you have a `usernames.json` file with the following structure: `[{"username": "user1","points": 100},{"username": "user2","points": 200}]`

## Configuration
1. Replace the `TWITCH_CLIENT_ID` and `TWITCH_ACCESS_TOKEN` placeholders in the script with your Twitch API credentials.
2. Update the `DB_CONFIG` object in the script with your MySQL database credentials: `const DB_CONFIG = {host: '127.0.0.1',user: 'root',password: '',port: 3306,database: 'twitch'};`

## Usage
1. Run the script: `node index.js`
2. Check the `usererros.txt` file for any errors during the process.

## Notes
- **This script is designed to be used after [StreamElements-Leaderboard-Scraper](https://github.com/djgamer07/StreamElements-Leaderboard-Scraper), but it can be adapted for any purpose!**
- Ensure your database is configured correctly with a table named `points` having the columns `user_id`, `name`, and `points`.
- Grant sufficient privileges to the database user for inserting and updating data.
- Twitch API credentials are required to access user data. You can generate them from the Twitch Developer Portal.

---

# Atualizador de Pontos de Usuários da Twitch

Este script em Node.js atualiza um banco de dados MySQL com informações de usuários da Twitch, incluindo nomes de usuários e pontos. Ele obtém IDs de usuários usando a API da Twitch e garante que os dados sejam inseridos ou atualizados no banco de dados. Erros são registrados em um arquivo separado para análise.

## Funcionalidades
- Obtém IDs de usuários da Twitch usando nomes de usuários via API da Twitch.
- Atualiza banco de dados MySQL com informações de usuários e pontos.
- Registra erros no arquivo `usererros.txt` para solução de problemas.

## Requisitos
- Node.js (>= 14.x)
- Banco de dados MySQL
- Credenciais da API da Twitch (Client ID e Access Token)

## Instalação

### Instalação Automática
1. Clone este repositório: `git clone https://github.com/djgamer07/twitch-user-points-updater.git && cd twitch-user-points-updater`
2. Instale as dependências: `npm install`

### Instalação Manual
1. Crie um novo diretório e navegue até ele: `mkdir twitch-user-points-updater && cd twitch-user-points-updater`
2. Inicie um novo projeto Node.js: `npm init -y`
3. Instale as dependências necessárias: `npm install axios mysql2`
4. Crie um arquivo chamado `index.js` e cole o conteúdo do script nele.
5. Crie um arquivo `package.json` se necessário, e adicione o seguinte conteúdo: `{"dependencies": {"axios": "^1.7.9","mysql2": "^3.11.5"}}`
6. Certifique-se de ter um arquivo `usernames.json` com a seguinte estrutura: `[{"username": "usuario1","points": 100},{"username": "usuario2","points": 200}]`

## Configuração
1. Substitua os placeholders `TWITCH_CLIENT_ID` e `TWITCH_ACCESS_TOKEN` no script pelas suas credenciais da API da Twitch.
2. Atualize o objeto `DB_CONFIG` no script com suas credenciais do banco de dados MySQL: `const DB_CONFIG = {host: '127.0.0.1',user: 'root',password: '',port: 3306,database: 'twitch'};`

## Uso
1. Execute o script: `node index.js`
2. Verifique o arquivo `usererros.txt` para erros durante o processo.

## Notas
- **Este script foi feito para ser utilizado após o [StreamElements-Leaderboard-Scraper](https://github.com/djgamer07/StreamElements-Leaderboard-Scraper), mas pode ser adaptado a qualquer necessidade!**
- Certifique-se de que seu banco de dados está configurado corretamente com uma tabela chamada `points` contendo as colunas `user_id`, `name` e `points`.
- Conceda privilégios suficientes ao usuário do banco de dados para inserir e atualizar dados.
- As credenciais da API da Twitch são necessárias para acessar os dados dos usuários. Você pode gerá-las no Portal de Desenvolvedores da Twitch.
