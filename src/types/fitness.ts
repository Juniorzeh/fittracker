export interface Usuario {
    id: number
    nome: string
    email: string
    dataNascimento: Date
    peso: number
    altura: number
}

export type NivelExperiencia = 'iniciante' | 'intermediario' | 'avancado'

export interface Exercicio {
    id: number
    nome: string
    grupoMuscular: string
    descricao?: string
}

export interface SerieExercicio {
    exercicioId: number
    repeticoes: number
    cargaKg: number
    descansoSegundos: number
}

export interface Treino {
    id: number
    usuarioId: number
    nome: string
    nivel: NivelExperiencia
    exercicios: SerieExercicio[]
    criadoEm: Date
}

export function calcularIMC(usuario: Usuario): number {
    return usuario.peso / (usuario.altura ** 2)
}

export function classificarIMC(imc: number): 'abaixo' | 'normal' | 'sobrepeso' | 'obesidade' {
    if (imc < 18.5) return 'abaixo'
    if (imc < 25) return 'normal'
    if (imc < 30) return 'sobrepeso'
    return 'obesidade'
}

// Para criar um usuário — id vem do banco, não do front
export type CriarUsuario = Omit<Usuario, 'id'>

// Para atualizar — todos os campos viram opcionais
export type AtualizarUsuario = Partial<Omit<Usuario, 'id'>>

// Para resposta da API — nunca expõe o id interno diretamente
export type UsuarioPublico = Pick<Usuario, 'id' | 'nome' | 'email'>

// Para criar um treino — id e criadoEm vêm do banco
export type CriarTreino = Omit<Treino, 'id' | 'criadoEm'>