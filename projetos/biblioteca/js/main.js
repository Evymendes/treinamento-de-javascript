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
    const title = document.createElement('h2');
    const titleTxt = document.createTextNode('Biblioteca das séries');
    
    const labelTitle = document.createElement('label');
    const labelTitleTxt = document.createTextNode('Título');
    let inputTitle = document.createElement('input');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('value', 'Título');
    inputTitle.setAttribute('placeholder',"Título");
    inputTitle.setAttribute('name', 'Título');
    inputTitle.setAttribute('required', 'true');
    
    const labelDescription = document.createElement('label');
    const labelDescriptionTxt = document.createTextNode('Descrição');
    const inputDescription = document.createElement('input');
    inputDescription.setAttribute('type', 'text');
    inputDescription.setAttribute('value', 'Descrição');
    inputDescription.setAttribute('name', 'Descrição');
    inputDescription.setAttribute('required', 'true');
    
    const labelEpisode = document.createElement('p');
    const labelEpisodeTxt = document.createTextNode('Episodio');
    const labelTemporada = document.createElement('label');
    const labelTemporadaTxt = document.createTextNode('Temporada');
    const inputTemporada = document.createElement('input');
    inputTemporada.setAttribute('type', 'text');
    inputTemporada.setAttribute('value', 'Temporada');
    inputTemporada.setAttribute('name', 'Temporada');
    inputTemporada.setAttribute('required', 'true');
    
    const labelName = document.createElement('label');
    const labelNameTxt = document.createTextNode('Nome do Episodio');
    const inputName = document.createElement('input');
    inputName.setAttribute('required', 'true');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('value', 'nameEpisode');
    inputName.setAttribute('name', 'nameEpisode');
    inputName.setAttribute('required', 'true');
    
    const labelDuration = document.createElement('label');
    const labelDurationTxt = document.createTextNode('Duração');
    const inputDuration = document.createElement('input');
    inputDuration.setAttribute('required', 'true');
    inputDuration.setAttribute('type', 'text');
    inputDuration.setAttribute('value', 'Duracao');
    inputDuration.setAttribute('name', 'Duracao');
    inputDuration.setAttribute('required', 'true');
    
    const buttonEpisodio = document.createElement('button');
    buttonEpisodio.setAttribute('type', 'button');
    const buttonTxt = document.createTextNode('Add Episódio');
    
    const buttonAdd = document.createElement('button');
    const buttonAddTxt = document.createTextNode('Salvar');
    buttonAdd.setAttribute('type', 'submit');
    
    body.appendChild(header);
    body.appendChild(main);
    main.appendChild(section);
    header.appendChild(title);
    title.appendChild(titleTxt);
    
    section.appendChild(form);
    form.appendChild(labelTitle);
    labelTitle.appendChild(labelTitleTxt);
    labelTitle.appendChild(inputTitle);
    
    form.appendChild(labelDescription);
    labelDescription.appendChild(labelDescriptionTxt);
    labelDescription.appendChild(inputDescription);
    
    labelEpisode.appendChild(labelEpisodeTxt);
    form.appendChild(labelEpisode);
    
    labelTemporada.appendChild(labelTemporadaTxt);
    form.appendChild(labelTemporada);
    labelTemporada.appendChild(inputTemporada)
    
    labelName.appendChild(labelNameTxt);
    form.appendChild(labelName);
    labelName.appendChild(inputName);
    
    labelDuration.appendChild(labelDurationTxt);
    form.appendChild(labelDuration);
    labelDuration.appendChild(inputDuration);
    
    buttonEpisodio.appendChild(buttonTxt);
    form.appendChild(buttonEpisodio);

    buttonAdd.appendChild(buttonAddTxt);
    form.appendChild(buttonAdd);
    
    buttonEpisodio.addEventListener("click", event => {
        event.preventDefault();
        // series.push({
        //     episode: [
        //         {
        //             season: form.elements.Temporada.value,
        //             nameEpisode: form.elements.nameEpisode.value,
        //             category: '',
        //             duration: form.elements.Duracao.value,
        //         }
        //     ]
        // })
        // episodeList.push({
        //     season: form.elements.Temporada.value,
        //     nameEpisode: form.elements.nameEpisode.value,
        //     category: '',
        //     duration: form.elements.Duracao.value,
        // })
//render form depois de clicar no bottao add episodio
        const spanTemporada = document.createElement('span');
        const labelTemporada = document.createElement('label');
        const labelTemporadaTxt = document.createTextNode('Temporada');
        const inputTemporada = document.createElement('input');
        // spanTemporada.innerHTML = input.value;
        console.log(spanTemporada.innerHTML = inputTemporada.value, 'inputTemporada')
       
        inputTemporada.setAttribute('type', 'text');
        inputTemporada.setAttribute('value', 'Temporada');
        inputTemporada.setAttribute('name', 'Temporada');
        inputTemporada.setAttribute('required', 'true');
        
        const labelName = document.createElement('label');
        const labelNameTxt = document.createTextNode('Nome da temporada');
        const inputName = document.createElement('input');
        inputName.setAttribute('required', 'true');
        inputName.setAttribute('type', 'text');
        inputName.setAttribute('value', 'nameEpisode');
        inputName.setAttribute('name', 'nameEpisode');
        inputName.setAttribute('required', 'true');
        
        const labelDuration = document.createElement('label');
        const labelDurationTxt = document.createTextNode('Duração');
        const inputDuration = document.createElement('input');
        inputDuration.setAttribute('required', 'true');
        inputDuration.setAttribute('type', 'text');
        inputDuration.setAttribute('value', 'Duracao');
        inputDuration.setAttribute('name', 'Duracao');
        inputDuration.setAttribute('required', 'true');

        let episodioButton = document.createElement('button');
        let buttonTxt = document.createTextNode('Excluir Episodio');

        episodioButton.addEventListener("click", event => {
            event.preventDefault();
            spanTemporada.style.display = 'none';
        })

        labelTemporada.appendChild(labelTemporadaTxt);
        spanTemporada.appendChild(labelTemporada);
        labelTemporada.appendChild(inputTemporada)
        
        labelName.appendChild(labelNameTxt);
        spanTemporada.appendChild(labelName);
        labelName.appendChild(inputName);
        
        labelDuration.appendChild(labelDurationTxt);
        spanTemporada.appendChild(labelDuration);
        labelDuration.appendChild(inputDuration);
        
        episodioButton.appendChild(buttonTxt);
        spanTemporada.appendChild(episodioButton);
        form.appendChild(spanTemporada);
    });
    

    form.addEventListener("submit", event => {
        event.preventDefault();
        episodeList.push({
            season: form.elements.Temporada.value,
            nameEpisode: form.elements.nameEpisode.value,
            category: '',
            duration: form.elements.Duracao.value,
        })
        series.push({
            title: form.elements.Título.value,
            description: form.elements.Descrição.value,
            status: '',
            episodeList,
        })

        render();
    });

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
    let title = document.createElement('h3');
    let titleTxt = document.createTextNode(note.title);

    let description = document.createElement('p');
    let descriptionTxt = document.createTextNode(note.description);
    console.log(note, 'node')

    let episodio = document.createElement('p');
    let episodioTxt = document.createTextNode('Episodio');

    title.appendChild(titleTxt);
    description.appendChild(descriptionTxt);
    episodio.appendChild(episodioTxt);
    
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(episodio);
    
    let episodeMap = note.episodeList.map((note, index) => {
        //render cars names
        console.log(note, 'node notemap')
        let episodioSeason = document.createElement('p');
        let seasonTxt = document.createTextNode(note.season);

        let episodioName = document.createElement('p');
        let nameTxt = document.createTextNode(note.nameEpisode);
        
        let episodioDuration = document.createElement('p');
        let durationTxt = document.createTextNode(note.duration);

        
        episodioSeason.appendChild(seasonTxt);
        episodioName.appendChild(nameTxt);
        episodioDuration.appendChild(durationTxt);
        card.appendChild(episodioSeason);
        card.appendChild(episodioName);
        card.appendChild(episodioDuration);
    });
    let episodioButton = document.createElement('button');
    let buttonTxt = document.createTextNode('Excluir Serie');
    episodioButton.appendChild(buttonTxt);
    
    card.appendChild(episodioButton);
    cards.appendChild(card);
}

body.appendChild(renderScreen())
sectionUl.appendChild(cards)
main.appendChild(sectionUl)
body.appendChild(main)
window.onload = body;