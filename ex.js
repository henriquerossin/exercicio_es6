const alunos = [
    { nome: 'Alice', nota: 7 },
    { nome: 'Bruno', nota: 5 },
    { nome: 'Carlos', nota: 6 },
    { nome: 'Diana', nota: 8 },
    { nome: 'Eduarda', nota: 4 },
];

const filtrarAprovados = (listaAlunos) => listaAlunos.filter(({ nota }) => nota >= 6);

const aprovados = filtrarAprovados(alunos);

console.log('Alunos aprovados:', aprovados);
