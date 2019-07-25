const body = document.body;
const main = document.createElement('main');
const sectionUl = document.createElement('section');
let cards = document.createElement("ul");
let series = [];
let test = [];
let episodeList = [];
let episodeCounter = 1;
const section = document.createElement('section');
let form = document.createElement('form');
const ooooooo = document.createElement('span');

function renderScreen() {
    const header = document.createElement('header');

    const title = renderTitle('h2', 'Biblioteca das séries');

    //criando o form principal
    const labelTitle = renderTitle('label', 'Título');
    let inputTitle = renderInput('titulo');
    labelTitle.appendChild(inputTitle);

    const labelDescription = renderTitle('label', 'Descrição');
    let inputDescription = renderInput('descricao');
    labelDescription.appendChild(inputDescription);
    
    const labelEpisode = document.createElement('p');
    const labelEpisodeTxt = document.createTextNode('Episodio');
    labelEpisode.appendChild(labelEpisodeTxt);


    const labelTemporada = renderTitle('label', 'Temporada');
    let inputTemporada = renderInput('temporada');
    labelTemporada.appendChild(inputTemporada);

    const labelName = renderTitle('label', 'Nome do Episodio');
    let inputName = renderInput('nameEpisode');
    labelName.appendChild(inputName);

    const labelDuration = renderTitle('label', 'Duração');
    let inputDuration = renderInput('duracao');
    labelDuration.appendChild(inputDuration);

    const labelCategory = renderTitle('label', 'Categoria');
    let inputCategory = renderInput('categoria');
    labelCategory.appendChild(inputCategory);


    //botoes
    let buttonEpisodio = renderTitle('button', 'Add Temporada');

    let buttonAdd = renderTitle('button', 'Salvar');
    buttonAdd.setAttribute('type', 'submit');
    
    header.appendChild(title);
    main.appendChild(section);
    section.appendChild(form);
    
    
    form.appendChild(labelTitle);
    form.appendChild(labelDescription);
    form.appendChild(labelEpisode);
    form.appendChild(labelTemporada);
    form.appendChild(labelName);
    form.appendChild(labelDuration);
    form.appendChild(labelCategory);
    form.appendChild(ooooooo);


    // renderEpisodio(form);
    
    buttonEpisodio.addEventListener("click", event => {
        event.preventDefault();
        const spanTemporada = document.createElement('span');

        let episodioButton = renderTitle('button', 'Excluir Episodio');
        
        episodioButton.addEventListener("click", event => {
            event.preventDefault();
            // spanTemporada.innerHTML = '';
            // test.map((item) => {
            //     console.log(item, 'test')
            //     const labelDItem = renderTitle('p', item.testando);
            //     //return labelDItem
            //     ooooooo.appendChild(labelDItem);
            // })
        })
        
        renderEpisodio(spanTemporada); 
        spanTemporada.appendChild(episodioButton);

        form.appendChild(spanTemporada);
        //console.log('buttonEpisodio', spanTemporada)
    });

    form.appendChild(buttonEpisodio);
    form.appendChild(buttonAdd);

    body.appendChild(header);
    body.appendChild(main);

    return main;
    console.log(form.elements, 'ppoooo')
}

function render() {
    while (cards.firstChild) {
		cards.removeChild(cards.firstChild);
    };
//console.log(series, 'series render')
	series.map((note, index) => {
        renderSerie(note, index);
	});
};

form.addEventListener("submit", event => {
    event.preventDefault();
    
    series.push({
        title: form.elements.titulo.value,
        description: form.elements.descricao.value,
        status: '',
        season: form.elements.temporada.value,
        nameEpisode: form.elements.nameEpisode.value,
        duration: form.elements.duracao.value,
        category: form.elements.categoria.value,
        test
    })
    render();
    cleanValue()
    console.log(series, 'test')
});

function renderSerie(note, index) {
    // console.log('renderSerie', note)
    let card = document.createElement('li');
    let title = renderTitle('h3', note.title);
    let description = renderTitle('p', note.description);
    const episodio = renderTitle('p', 'Episodio');
    let episodioSeason = renderTitle('p', note.season);
    let episodioName = renderTitle('p', note.nameEpisode);
    let episodioDuration = renderTitle('p', note.duration);
    let episodioCategoria = renderTitle('p', note.category);
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(episodio);
    card.appendChild(episodioSeason);
    card.appendChild(episodioName);
    card.appendChild(episodioDuration);
    card.appendChild(episodioCategoria);

 
    
    note.test.map((segundo, index) => {
        // segunda fez chega vazio
        // console.log(segundo, 'segundoepisodeList')

        // console.log(note, 'nnnnoooooote')
        let episodioSeason = renderTitle('h3', segundo.testando);
        //let episodioName = renderTitle('p', segundo.nameEpisode);
        // let episodioDuration = renderTitle('p', segundo.duration);
        // let episodioCategoria = renderTitle('p', segundo.category);
        //chega vazio se acrescentar mais um
        card.appendChild(episodioSeason);
        card.appendChild(episodioName);
        card.appendChild(episodioDuration);
        card.appendChild(episodioCategoria);
        console.log(segundo, 'bbb')
    });
// console.log(index, 'index')
    let buttonExluirSerie = renderTitle('button', 'Editar Serie');
    let buttonEditarSerie = renderTitle('button', 'Excluir Serie');
    let buttonStatusSerie = renderTitle('button', 'Status');
    
    card.appendChild(buttonExluirSerie);
    card.appendChild(buttonEditarSerie);
    card.appendChild(buttonStatusSerie);
    cards.appendChild(card);

    buttonEditarSerie.addEventListener("click", event => {
        event.preventDefault();
        //  return series.filter(function(el){
        //     return el != note;
        // });
        cards.children[index].remove();
        series.splice(index, 1);
    });
}

function renderTitle(element, txt) {
    const label = document.createElement(element);
    const labelTxt = document.createTextNode(txt);

    label.appendChild(labelTxt);

    return label;
}

function renderEpisodio(item) {
    
    
    //const labelTemporada = renderTitle('label', 'Temporada');
    // let inputTemporada = renderInput('temporadaa');
    // labelTemporada.appendChild(inputTemporada);

    const label = document.createElement('label');
    const labelTxt = document.createTextNode('Temporada');

    label.appendChild(labelTxt);
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
// input.setAttribute('value', txt);
    input.setAttribute('placeholder','test');
    input.setAttribute('name', 'test');
    input.setAttribute('required', 'true');


    const buttonMais = document.createElement('button');
    const buttonMaisTxt = document.createTextNode('+');
    buttonMais.appendChild(buttonMaisTxt);

    buttonMais.addEventListener("click", event => {
        event.preventDefault();
        renderNewTemporada();
        console.log('oiii')
        test.map((item) => {
            console.log(item, 'test')
            const labelDItem = renderTitle('p', item.testando);
            //return labelDItem
            ooooooo.appendChild(labelDItem);
        })
    });


    // const labelName = renderTitle('label', 'Nome do Episodio');
    // let inputName = renderInput('nameEpisodee');
    // labelName.appendChild(inputName);

    // const labelDuration = renderTitle('label', 'Duração');
    // let inputDuration = renderInput('duracaoo');
    // labelDuration.appendChild(inputDuration);

    // const labelCategory = renderTitle('label', 'Categoria');
    // let inputCategory = renderInput('categoriaa');
    // labelCategory.appendChild(inputCategory);

    // if(form.elements.temporadaa !== undefined) {
    //     console.log(form.elements.temporadaa, 'renderEpisodio')
    // }

    item.appendChild(label);
    //item.appendChild(labelName);
    // item.appendChild(labelDuration);
    // item.appendChild(labelCategory);

    item.appendChild(input);
    item.appendChild(buttonMais);
}

function renderNewTemporada() {
    test.push({
        testando: form.elements.test.value
   })
}

function renderInput(txt){
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
input.setAttribute('value', txt);
    input.setAttribute('placeholder',txt);
    input.setAttribute('name', txt);
    input.setAttribute('required', 'true');

    return input
}

function cleanValue() {
    form.elements.titulo.value = '';
    form.elements.descricao.value = '';
    form.elements.temporada.value = '';
    form.elements.nameEpisode.value = '';
    form.elements.duracao.value = '';
    form.elements.categoria.value = '';
    episodeList = []
}

function handleDeleteSerie() {
    // buttonEditarSerie.addEventListener("click", event => {
    //     event.preventDefault();
    //      return series.filter(function(el){
    //         return el != note;
    //     });
    // });
    // render();
}

body.appendChild(renderScreen());
sectionUl.appendChild(cards);
main.appendChild(sectionUl);
body.appendChild(main);
window.onload = body;
