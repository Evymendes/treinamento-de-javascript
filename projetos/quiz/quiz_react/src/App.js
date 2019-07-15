import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lenghtSelected: 0,
      score: 0,
      value: '',
      quiz: [
        {
          question: '1- Qual a capital da Dinamarca?',
          answer: [ 
            'Pyongiang',
            'Copenhague',
            'Sidney',
            'Toledo',
          ],
          rightAnswer: 'Copenhague',
        },
        {
          question: '2- Qual a capital do Rio de Janeiro?',
          answer: [
            'Rio de Janeiro',
            'Brasília',
            'Carioca',
            'São Paulo',
          ],
          rightAnswer: 'Rio de Janeiro',
        },
        {
          question: '3- Qual a capital da Bahia?',
          answer: [
            'Salvador',
            'Vitória',
            'Sergipe',
            'Bahia',
          ],
          rightAnswer: 'Salvador',
        },
        {
          question: '4- Qual a capital da Bélgica?',
          answer: [
            'Cabul',
            'Cairo',
            'Bruxelas',
            'Belfast',
          ],
          rightAnswer: 'Bruxelas',
        },
        {
          question: '5- Qual a capital da Nova Zelândia?',
          answer: [
            'Douglas',
            'Wellington',
            'Willemstad',
            'West Island',
          ],
          rightAnswer: 'Wellington',
        }
      ]
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleNext = () => {
    const { quiz, lenghtSelected, value, score } = this.state;
    
    if(value !== ''){
      let selectedQuestion = quiz[lenghtSelected].rightAnswer;
      if( value === selectedQuestion) {
        this.setState({
          score:  score + 1,
          lenghtSelected: lenghtSelected + 1,
          value: '',
        })
      }
      this.setState({
        lenghtSelected: lenghtSelected + 1,
        value: '',
      })
      return this.renderForm()
    }
  }

  handleAgain = () => {
    this.setState({
      score:  0,
      lenghtSelected: 0,
    })
    return this.renderForm()
  }

  renderForm = () => {
    const { quiz, lenghtSelected, score } = this.state;

    let selectedQuestion = quiz[lenghtSelected];
    if ( lenghtSelected !== quiz.length ) {
      return (
        <div>
          <h2>{selectedQuestion.question}</h2>
          {selectedQuestion.answer.map((item) => {
            return (
              <label key={item}>
                <input 
                  type='radio'
                  name={selectedQuestion.answer}
                  value={item}
                  onChange={(item) => this.handleChange(item)}
                  required
                />
                {item}
              </label>
            )
          })}
          <button onClick={this.handleNext}>
            Próximo
          </button>
        </div>
      )
    }
    return (
      <div>
        <h2>Você acertou: {score}</h2>
        <button onClick={this.handleAgain}>
          Refazer
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderForm()}
      </div>
    );
   }
}

export default App;

