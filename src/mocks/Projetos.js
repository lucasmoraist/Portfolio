import codechella from '../assets/codechella.svg';
import grafico from '../assets/grafico.svg';
import certificate from '../assets/certificate.svg';
import security from '../assets/security.svg';

const Projetos = [
    {
        id: 1,
        nome: "Codechella",
        descricao: "O Festival CodeChella é uma celebração anual da música alternativa que se destaca por sua diversidade de gêneros e sua missão de proporcionar uma experiência verdadeiramente encantadora e inesquecível para todos os seus visitantes.",
        img: codechella,
        link: "https://github.com/lucasmoraist/CodeChella"
    },
    {
        id: 2,
        nome: "Gráfico com Chart.js",
        descricao: "Este projeto foi um desafio proposto pelo cubo do itau, e a ideia era criar uma tabela e gráfico dinâmico, onde o gráfico iria pegar as informações da tabela e ia deveolver em forma de gráfico as informações.",
        img: grafico,
        link: "https://github.com/lucasmoraist/Participation-Graph"
    },
    {
        id: 3,
        nome: "Security",
        descricao: "API desenvolvida para aplicação de práticas de segurança. nesta api foi utilizada o spring security junto ao jwt para fazer validação através do token retornado pela resposta do email e senha correto.",
        img: security,
        link: "https://github.com/lucasmoraist/Security"
    },
    {
        id: 4,
        nome: "Gerador de Certificado",
        descricao: "Api Rest desenvolvida para apresentar o resultado do exame prestato pelo aluno. também rankeando eles através de query na interface do projeto.",
        img: certificate,
        link: "https://github.com/lucasmoraist/certificate-generator"
    }
]

export default Projetos;