import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    title: '',
    description: '',
    color: '#ffffff',
    tags: '',
    check: 'Afazer',
    status: '',
    cards: [{
      title: '',
      description: '',
      color: '',
      tags: '',
      check: '',
      status: '',
    }]
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let card = {
      title: this.state.title,
      description: this.state.description,
      color: this.state.color,
      tags: this.state.tags,
    }

    this.setState({
      title: '',
      description: '',
      color: '#ffffff',
      tags: '',
      cards: [
        ...this.state.cards,
        card,
      ]
    })
  }

  handleChangeSelect = (event) => {
    console.log(event.target.value, 'llll')
    return event.target.value;
    // this.setState({
    //   check: event.target.value,
    // });
  }

  handleSubmitSelect = (event, index) => {
    event.preventDefault();
    console.log(this.handleChangeSelect(), 'oiiii')
    const { cards } = this.state;
    const note = this.state.cards[index]

    cards[index] = {
      ...note,
      check: !note.check
    }

    this.setState({
      cards,
    });
  }

  renderToDo = () => {
    return (
      <ul>
        {
          this.state.cards.map((item, index) => {
            return (
              <li key={index} style={{backgroundColor: item.color}}>
                <h2>
                  {item.title}
                </h2>
                <p>
                  {item.description}
                </p>
                <p>
                  {item.tags}
                </p>
                {/* {this.renderButton(item)} */}
                <div className='buttons'>
                  <button onClick={() => this.handleEdit(item, index)}>
                    Editar
                  </button>
                  <button onClick={() => this.handleDelete(item)}>
                    Excluir
                  </button>
                  <form onSubmit={() => this.handleSubmitSelect(index) }>
                    <select value={this.state.value} onChange={this.handleChangeSelect}>
                      <option value="Afazer">À fazer</option>
                      <option value="fazendo">Fazendo</option>
                      <option value="feito">Feito</option>
                    </select>
                  </form>
               </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  handleEdit = (item) => {
    
    this.setState({ 
      title: item.title,
      description: item.description,
      color: item.color,
      tags: item.tags,
    });
  }
  
  handleDelete = (item) => {
    console.log(this.state.cards, 'oiioooasdo')
    this.setState({
      cards: this.state.cards.filter((element) => element !== item)
    })
  }
  
  
  render() {
    console.log(this.state, '---------------')
  const { title, description, tags } = this.state
  return (
    <main className='App'>
    <form onSubmit={this.handleSubmit}>
      <label>
        Título:
        <input
          type='text'
          name='title'
          onChange={this.handleChange}
          // onBlur={this.handleBlur}
          value={title}
        />
      </label>
      <label>
        Descrição:
        <input
          type='text'
          name='description'
          onChange={this.handleChange}
          // onBlur={this.handleBlur}
          value={description}
        />
      </label>
      <label>
        Cor:
        <input
          type='color'
          name='color'
          onChange={this.handleChange}
          value={this.state.color}
        />
      </label>
      <label>
        Tags:
        <input
          type='text'
          name='tags'
          onChange={this.handleChange}
          // onBlur={this.handleBlur}
          value={tags}
        />
      </label>
      <button type='submit'>
        Enviar
      </button>
    </form>
      {this.renderToDo()}
    </main>
  );
}}

export default App;
