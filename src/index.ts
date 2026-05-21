import db from './database/connection'

async function testarConexao() {
    try {
        await db.raw('SELECT 1')
        console.log('Banco de dados conectado com sucesso!')
    } catch (error) {
        console.log('Erro ao conectar:', error)
    } finally {
        await db.destroy()
    }
}

testarConexao()