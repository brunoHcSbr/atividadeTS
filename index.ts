import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nomeAluno = prompt("Nome do aluno: ")

let nota: number[] = []

for(let i = 0; i<4; i++){
    let x = prompt(`${i+1} - Digite a nota do aluno: `)
    nota.push(Number(x))
}

function calcularMedia(x: number[]): number{
    let media = (x[0] + x[1] + x[2] + x[3]) / 4
    return media
}

interface Aluno{
    nome: string,
    nota1: number,
    nota2: number,
    nota3: number,
    nota4: number,
    mediaFinal: number
}

const aluno: Aluno = {
    nome: nomeAluno,
    nota1: nota[0], 
    nota2: nota[1],
    nota3: nota[2],
    nota4: nota[3],
    mediaFinal: calcularMedia(nota)
}

console.log(aluno)
