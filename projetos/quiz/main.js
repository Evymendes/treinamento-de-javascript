const quiz = [
  {
    question: '1- Qual a capital da Dinamarca?',
    answer: [ 
      'Pyongiang', 'Copenhague', 'Sidney', 'Toledo'
    ],
    rightAnswer: 'Copenhague',
  },
  {
    question: '2- Qual a capital do Rio de Janeiro?',
    answer: [
      'Rio de Janeiro', 'Brasília', 'Carioca', 'São Paulo',
    ],
    rightAnswer: 'Rio de Janeiro',
  },
  {
    question: '3- Qual a capital da Bahia?',
    answer: [
      'Salvador', 'Vitória', 'Sergipe', 'Bahia',
    ],
    rightAnswer: 'Salvador',
  },
  {
    question: '4- Qual a capital da Bélgica?',
    answer: [
      'Cabul', 'Cairo', 'Bruxelas', 'Belfast'
    ],
    rightAnswer: 'Bruxelas',
  },
  {
    question: '5- Qual a capital da Nova Zelândia?',
    answer: [
      'Douglas', 'Wellington', 'Willemstad', 'West Island'
    ],
    rightAnswer: 'Wellington',
  }
]

let lenghtSelected = 0;
let score = 0;
let div = document.createElement('div');

function renderQuiz() {
  let selectedQuestion = quiz[lenghtSelected];
  let form = document.createElement('form');
  
  let questionElement = document.createElement('h4');
  let questionTxt = document.createTextNode(selectedQuestion.question);
  questionElement.appendChild(questionTxt);
  form.appendChild(questionElement);
  
  selectedQuestion.answer.map((item) => {
    let input = document.createElement('input');

    input.setAttribute('type', 'radio');
    input.setAttribute('value', item);
    input.setAttribute('name', selectedQuestion.answer);
    input.setAttribute('required', 'true');

    let label = document.createElement('label');
    let labelTxt = document.createTextNode(item);
    label.appendChild(labelTxt);

    form.appendChild(input);
    form.appendChild(label);
  })

  let button = document.createElement('button');
  let buttonTxt = document.createTextNode('Próximo');
  button.appendChild(buttonTxt);
  form.appendChild(button);
 
  form.addEventListener("submit", event => {
    event.preventDefault();
    let userResponse = form.elements[selectedQuestion.answer].value;

    if(userResponse === selectedQuestion.rightAnswer) {
      score += 1
    }

    document.body.innerHTML = '';
    if (lenghtSelected !== quiz.length -1) {
      lenghtSelected = lenghtSelected + 1;
      document.body.appendChild(renderQuiz())
    }

    else {
      
      let createResult = document.createElement('h2');
      let createTxt = document.createTextNode('Você acertou: ' + score);
      div.appendChild(createResult);
      createResult.appendChild(createTxt);

      let buttonRefazer = document.createElement('button');
      let buttonTxt = document.createTextNode('Refazer');
      buttonRefazer.appendChild(buttonTxt);
      div.appendChild(buttonRefazer);
      buttonRefazer.setAttribute("id", "Div1");
      document.body.appendChild(div)
      buttonRefazer.addEventListener("click", event => {
        document.body.innerHTML = '';
        div.innerHTML = '';
        lenghtSelected = 0;
        score = 0;
        document.body.appendChild(renderQuiz())
    });
    }
  });  
  return form
}

document.body.appendChild(renderQuiz())