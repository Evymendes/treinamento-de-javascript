const body = document.body;
const main = document.createElement('main');
const sectionUl = document.createElement('section');
let cards = document.createElement("ul");
let series = [];
let episodeList = [];

function renderScreen() {
    const section = document.createElement('section');
    let form = document.createElement('form');
    const header = document.createElement('header');

    const title = renderTitle('h2', 'Biblioteca das séries');
    
    const labelTitle = renderTitle('label', 'Título');
    let inputTitle = renderInput('Título');
    labelTitle.appendChild(inputTitle);

    const labelDescription = renderTitle('label', 'Descrição');
    let inputDescription = renderInput('Descrição');
    labelDescription.appendChild(inputDescription);
    
    const labelEpisode = document.createElement('p');
    const labelEpisodeTxt = document.createTextNode('Episodio');
    labelEpisode.appendChild(labelEpisodeTxt);

    const labelTemporada = renderTitle('label', 'Temporada');
    let inputTemporada = renderInput('Temporada');
    labelTemporada.appendChild(inputTemporada)

    const labelName = renderTitle('label', 'Nome do Episodio');
    let inputName = renderInput('nameEpisode');
    labelName.appendChild(inputName);

    const labelDuration = renderTitle('label', 'Duração');
    let inputDuration = renderInput('Duração');
    labelDuration.appendChild(inputDuration);

    let buttonEpisodio = renderTitle('button', 'Add Episódio');

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
    form.appendChild(buttonEpisodio);
    form.appendChild(buttonAdd);
    
    buttonEpisodio.addEventListener("click", event => {
        event.preventDefault();
        const spanTemporada = document.createElement('span');

        const labelTemporada = renderTitle('label', 'Temporada');
        let inputTemporada = renderInput('Temporada');
        labelTemporada.appendChild(inputTemporada)

        const labelName = renderTitle('label', 'Nome da temporada');
        let inputName = renderInput('nameEpisode');
        labelName.appendChild(inputName);

        const labelDuration = renderTitle('label', 'Duração');
        let inputDuration = renderInput('Duracao');
        labelDuration.appendChild(inputDuration);

        let episodioButton = document.createElement('button');
        let buttonTxt = document.createTextNode('Excluir Episodio');
        episodioButton.appendChild(buttonTxt);

        episodioButton.addEventListener("click", event => {
            event.preventDefault();
            spanTemporada.style.display = 'none';
        })

        spanTemporada.appendChild(labelTemporada);
        spanTemporada.appendChild(labelName);
        spanTemporada.appendChild(labelDuration);
        spanTemporada.appendChild(episodioButton);

        form.appendChild(spanTemporada);
    });
    
    form.addEventListener("submit", event => {
        event.preventDefault();
        episodeList.push({
            season: form.elements.Temporada.value,
            nameEpisode: form.elements.nameEpisode.value,
            category: '',
            duration: form.elements.Duração.value,
        })
        series.push({
            title: form.elements.Título.value,
            description: form.elements.Descrição.value,
            status: '',
            episodeList,
        })

        render();
    });

    body.appendChild(header);
    body.appendChild(main);

    return main;
}

function render() {
    while (cards.firstChild) {
		cards.removeChild(cards.firstChild);
    };
    
	series.map((note, index) => {
		renderEpisode(note, index)
	});
};

function renderEpisode(note, index) {
    let card = document.createElement('li');

    let title = renderTitle('h3', note.title);
    let description = renderTitle('p', note.description);
    const episodio = renderTitle('p', 'Episodio');
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(episodio);
    
    let episodeMap = note.episodeList.map((note, index) => {
        let episodioSeason = renderTitle('h3', note.season);
        let episodioName = renderTitle('p', note.nameEpisode);
        let episodioDuration = renderTitle('p', note.duration);
        
        card.appendChild(episodioSeason);
        card.appendChild(episodioName);
        card.appendChild(episodioDuration);
    });

    let episodioButton = renderTitle('button', 'Excluir Serie');
    
    card.appendChild(episodioButton);
    cards.appendChild(card);
}

function renderTitle(element, txt) {
    const label = document.createElement(element);
    const labelTxt = document.createTextNode(txt);

    label.appendChild(labelTxt);

    return label;
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

body.appendChild(renderScreen())
sectionUl.appendChild(cards)
main.appendChild(sectionUl)
body.appendChild(main)
window.onload = body;
