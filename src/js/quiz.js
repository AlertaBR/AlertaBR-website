document.addEventListener('DOMContentLoaded', () => {
  // --- Quiz ---
  const perguntas = [
    {
      pergunta: "Você mora próximo a algum curso d'água (rio, lago, canal)?",
      alternativas: [
        { texto: "Sim, a menos de 100 metros", correcao: 4 },
        { texto: "Sim, entre 100 e 500 metros", correcao: 3 },
        { texto: "Sim, mas a mais de 500 metros", correcao: 2 },
        { texto: "Não moro próximo a nenhum curso d'água", correcao: 1 },
      ],
    },
    {
      pergunta: "Sua região costuma sofrer com enchentes durante chuvas fortes?",
      alternativas: [
        { texto: "Frequentemente", correcao: 4 },
        { texto: "Ocasionalmente", correcao: 3 },
        { texto: "Raramente", correcao: 2 },
        { texto: "Nunca", correcao: 1 },
      ],
    },
    {
      pergunta: "Como é a qualidade da infraestrutura de drenagem da sua rua?",
      alternativas: [
        { texto: "Quase inexistente ou muito precária", correcao: 4 },
        { texto: "Regular, com alguns problemas", correcao: 3 },
        { texto: "Boa, mas pode melhorar", correcao: 2 },
        { texto: "Excelente, não tenho problemas", correcao: 1 },
      ],
    },
    {
      pergunta: "Você já precisou deixar sua casa por causa de desastres naturais?",
      alternativas: [
        { texto: "Sim, várias vezes", correcao: 4 },
        { texto: "Sim, uma vez", correcao: 3 },
        { texto: "Não, mas conheço alguém que passou por isso", correcao: 2 },
        { texto: "Não, nunca precisei", correcao: 1 },
      ],
    },
    {
      pergunta: "Qual a condição das ruas do seu bairro durante as chuvas?",
      alternativas: [
        { texto: "Alagadas e difíceis de transitar", correcao: 4 },
        { texto: "Com poças e lama", correcao: 3 },
        { texto: "Com pequenos pontos alagados", correcao: 2 },
        { texto: "Sem problemas, sempre transitáveis", correcao: 1 },
      ],
    },
    {
      pergunta: "Você possui algum tipo de proteção contra enchentes em casa?",
      alternativas: [
        { texto: "Não, nenhuma proteção", correcao: 4 },
        { texto: "Sim, pequenas barreiras improvisadas", correcao: 3 },
        { texto: "Sim, proteções parciais", correcao: 2 },
        { texto: "Sim, proteção adequada e oficial", correcao: 1 },
      ],
    },
    {
      pergunta: "Sua região é frequentemente avisada sobre riscos de enchentes ou desastres?",
      alternativas: [
        { texto: "Sim, constantemente", correcao: 4 },
        { texto: "Sim, algumas vezes", correcao: 3 },
        { texto: "Raramente", correcao: 2 },
        { texto: "Nunca recebi avisos", correcao: 1 },
      ],
    },
    {
      pergunta: "Como você classificaria a resposta das autoridades em situações de emergência na sua região?",
      alternativas: [
        { texto: "Muito lenta ou inexistente", correcao: 4 },
        { texto: "Regular, com atrasos", correcao: 3 },
        { texto: "Boa, geralmente eficiente", correcao: 2 },
        { texto: "Excelente e rápida", correcao: 1 },
      ],
    },
    {
      pergunta: "Você tem um plano de evacuação ou emergência para sua família?",
      alternativas: [
        { texto: "Não tenho nenhum plano", correcao: 4 },
        { texto: "Tenho um plano pouco claro", correcao: 3 },
        { texto: "Tenho um plano definido, mas não treinado", correcao: 2 },
        { texto: "Tenho um plano claro e treinado com a família", correcao: 1 },
      ],
    },
    {
       pergunta: "Você costuma receber notícias ou dicas sobre como evitar desastres naturais na sua comunidade?",
  alternativas: [
    { texto: "Nunca recebo", correcao: 1 },
    { texto: "Raramente recebo", correcao: 2 },
    { texto: "Às vezes recebo", correcao: 3 },
    { texto: "Sempre recebo", correcao: 4 },
  ],
    },
  ];

const afirmacoes = [
  { text: 'Você provavelmente mora em uma área de <span class="risco-baixo">baixo risco</span>. Continue atento e mantenha os cuidados.' },
  { text: 'Sua região apresenta <span class="risco-moderado">risco moderado</span>. Fique atento às condições climáticas e sinais de perigo.' },
  { text: 'Sua área pode ter <span class="risco-alto">alto risco</span>. Considere medidas preventivas e fique preparado para emergências.' },
  { text: 'Você está em uma zona de <span class="risco-altissimo">risco muito alta</span>. É importante buscar orientação e tomar todas as precauções.' },
];

  const container = document.getElementById('perguntas');
  const btn = document.getElementById('btn');
  const pergunta = document.getElementById('pergunta');
  const startBtn = document.getElementById('startBtn');
  const contadorPergunta = document.getElementById('contadorPergunta');


  contadorPergunta.style.color = 'yellow';

  let contador = 0;
  let somaResposta = 0;
  let respostaSelecionada = null;

  const h2 = document.querySelector('h2');
  if (h2) h2.style.display = 'none';
  pergunta.style.display = 'none';
  btn.style.display = 'none';
  contadorPergunta.style.display = 'none';

  function renderizarPerguntas(index) {
    container.innerHTML = '';
    respostaSelecionada = null;
    pergunta.textContent = perguntas[index].pergunta;
    contadorPergunta.textContent = `Pergunta ${index + 1} / ${perguntas.length}`;

    perguntas[index].alternativas.forEach(item => {
      const newBtn = document.createElement('button');
      newBtn.textContent = item.texto;
      container.appendChild(newBtn);

      newBtn.addEventListener('click', () => {
        respostaSelecionada = item.correcao;

        [...container.children].forEach(btn => btn.classList.remove('selected'));
        newBtn.classList.add('selected');
      });
    });
  }

  startBtn.addEventListener('click', () => {
  const input1 = document.getElementById('input1').value.trim();
  const input2 = document.getElementById('input2').value.trim();
  const input3 = document.getElementById('input3').value.trim();
    if (input1 === '' || input2 === ''){
      alert('Por favor, preencha todos os campos')
    }
    else if(input2 != input3){
      alert('A confirmação do e-mail não corresponde ao e-mail informado.');
    }
    else{
    document.querySelector('.inicio').style.display = 'none';
    pergunta.style.display = 'block';
    btn.style.display = 'inline-block';
    contadorPergunta.style.display = 'block';
    renderizarPerguntas(contador);
    }
  });

  btn.addEventListener('click', () => {
    if (respostaSelecionada === null) {
      alert('Escolha uma resposta antes');
      return;
    }

    somaResposta += respostaSelecionada;
    contador++;

    if (contador < perguntas.length) {
      renderizarPerguntas(contador);
    } else {
      btn.style.display = 'none';
      pergunta.textContent = '';
      container.innerHTML = '';
      contadorPergunta.style.display = 'none';

      let indiceAfirmacao;
      if (somaResposta <= 15) {
        indiceAfirmacao = 0;
      } else if (somaResposta <= 25) {
        indiceAfirmacao = 1;
      } else if (somaResposta <= 35) {
        indiceAfirmacao = 2;
      } else {
        indiceAfirmacao = 3;
      }

      const finalP = document.createElement('p');
      finalP.textContent = 'Fim do Quiz!';
      finalP.style.color = '#ffcc00';

      const respostaP = document.createElement('p');
      respostaP.innerHTML = afirmacoes[indiceAfirmacao].text;

      respostaP.style.color = '#ffffff';
      respostaP.style.marginTop = '10px';

      const resultadoDiv = document.createElement('div');
      resultadoDiv.classList.add('resultado-final');
      resultadoDiv.appendChild(finalP);
      resultadoDiv.appendChild(respostaP);

      const restartBtn = document.createElement('button');
      restartBtn.textContent = 'Recomeçar Quiz';
      restartBtn.style.marginTop = '20px';
      restartBtn.style.padding = '10px 20px';
      restartBtn.style.fontSize = '1rem';
      restartBtn.style.cursor = 'pointer';

      resultadoDiv.appendChild(restartBtn);
      container.appendChild(resultadoDiv);

      restartBtn.addEventListener('click', () => {
        contador = 0;
        somaResposta = 0;
        respostaSelecionada = null;

        resultadoDiv.remove();

        btn.style.display = 'inline-block';
        pergunta.style.display = 'block';
        contadorPergunta.style.display = 'block';

        renderizarPerguntas(contador);
      });
    }
  });

  // --- Menu hamburguer ---
  const hamburguerBtn = document.getElementById("hamburguerBtn");
  const navContent = document.querySelector(".navContent");

  if (hamburguerBtn && navContent) {
    hamburguerBtn.addEventListener("click", () => {
      navContent.classList.toggle("active");
      hamburguerBtn.classList.toggle("active");
    });

    navContent.addEventListener("click", (e) => {
      if (e.target.classList.contains("item-menu")) {
        navContent.classList.remove("active");
        hamburguerBtn.classList.remove("active");
      }
    });
  }
});
