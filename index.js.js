const mysql = require('mysql2/promise');
const axios = require('axios');
const fs = require('fs').promises;
const usernamesJson = require('./usernames.json'); // O JSON com usernames e pontos

const TWITCH_CLIENT_ID = 'write your TWITCH_CLIENT_ID here';
const TWITCH_ACCESS_TOKEN = 'write your TWITCH_ACCESS_TOKEN here';

const DB_CONFIG = {
    host: '127.0.0.1',
    user: 'root',
    password: '', // Sem senha configurada
    port: 3306,
    database: 'twitch', // Nome do banco de dados que você deseja acessar
};

// Função para buscar o ID do usuário pelo nome de usuário (adaptada do segundo script)
async function getUserIdByUsername(username) {
    try {
        const response = await axios.get(`https://api.twitch.tv/helix/users?login=${username}`, {
            headers: {
                'Client-ID': TWITCH_CLIENT_ID,
                'Authorization': `Bearer ${TWITCH_ACCESS_TOKEN}`,
            },
        });
        return response.data.data[0]?.id || null;
    } catch (error) {
        console.error(`Erro ao buscar ID do usuário para ${username}:`, error.message);
        return null;
    }
}

// Função para registrar erros
async function logError(username, errorMessage) {
    const logMessage = `${new Date().toISOString()} - ${username}: ${errorMessage}\n`;
    await fs.appendFile('usererros.txt', logMessage, 'utf8');
}

// Função principal para atualizar o banco de dados
async function updateDatabase() {
    const connection = await mysql.createConnection(DB_CONFIG);

    for (const { username, points } of usernamesJson) {
        const userId = await getUserIdByUsername(username); // Usa a nova função para buscar o user_id

        if (userId) {
            try {
                await connection.execute(
                    'INSERT INTO points (user_id, name, points) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE name = ?, points = ?',
                    [userId, username, points, username, points]
                );
                console.log(`Usuário ${username} (ID: ${userId}) atualizado com ${points} pontos.`);
            } catch (error) {
                console.error(`Erro ao inserir/atualizar usuário ${username}:`, error.message);
                await logError(username, error.message);
            }
        } else {
            console.warn(`ID do usuário não encontrado para ${username}.`);
            await logError(username, 'ID do usuário não encontrado');
        }
    }

    await connection.end();
}

// Executa o script
updateDatabase()
    .then(() => console.log('Processo concluído.'))
    .catch((error) => console.error('Erro no processo:', error.message));
