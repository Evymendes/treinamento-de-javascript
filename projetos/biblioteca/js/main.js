const body = document.body;
const main = document.createElement('main');
const sectionUl = document.createElement('section');
let cards = document.createElement("ul");
let series = [];
let seasonList = [];
const section = document.createElement('section');
let form = document.createElement('form');
const renderNewSeason = document.createElement('div');
const header = document.createElement('header');
const title = renderTitle('h2', 'Biblioteca das séries');

function renderScreen() {
    const labelTitle = renderTitle('label', 'Título');
    let inputTitle = renderInput('title');
    labelTitle.appendChild(inputTitle);

    const labelDescription = renderTitle('label', 'Descrição');
    let inputDescription = renderInput('description');
    labelDescription.appendChild(inputDescription);
    
    const labelEpisode = document.createElement('p');
    const labelEpisodeTxt = document.createTextNode('Episodio');
    labelEpisode.appendChild(labelEpisodeTxt);

    const labelSeason = renderTitle('label', 'season');
    let inputseason = renderInput('season');
    labelSeason.appendChild(inputseason);

    const labelName = renderTitle('label', 'Nome do Episodio');
    let inputName = renderInput('nameEpisode');
    labelName.appendChild(inputName);

    const labelDuration = renderTitle('label', 'Duração');
    let inputDuration = renderInput('duration');
    labelDuration.appendChild(inputDuration);

    const labelCategory = renderTitle('label', 'category');
    let inputCategory = renderInput('category');
    labelCategory.appendChild(inputCategory);
    
    let buttonEpisode = renderTitle('button', 'Add season');
    buttonEpisode.setAttribute('id', 'add');

    let buttonAdd = renderTitle('button', 'Salvar');
    buttonAdd.setAttribute('type', 'submit');
    
    header.appendChild(title);
    main.appendChild(section);
    section.appendChild(form);
    
    form.appendChild(labelTitle);
    form.appendChild(labelDescription);
    form.appendChild(labelEpisode);
    form.appendChild(labelSeason);
    form.appendChild(labelName);
    form.appendChild(labelDuration);
    form.appendChild(labelCategory);
    form.appendChild(renderNewSeason);
    
    buttonEpisode.addEventListener("click", event => {
        event.preventDefault();
      
        const spanSeason = document.createElement('span');

        renderEpisodio(spanSeason); 

        form.appendChild(spanSeason);

        buttonEpisode.style.display = "none";
    });

    form.appendChild(buttonEpisode);
    form.appendChild(buttonAdd);

    body.appendChild(header);
    body.appendChild(main);

    return main;
}

function render() {
    while (cards.firstChild) {
		cards.removeChild(cards.firstChild);
    };

	series.map((note, index) => {
        renderSerie(note, index);
    });
};

form.addEventListener("submit", event => {
    event.preventDefault();
    
    series.push({
        title: form.elements.title.value,
        description: form.elements.description.value,
        status: '',
        season: form.elements.season.value,
        nameEpisode: form.elements.nameEpisode.value,
        duration: form.elements.duration.value,
        category: form.elements.category.value,
        seasonList
    });

    var list = document.querySelectorAll('#itemSeason');
    for(var i = list.length - 1; 0 <= i; i--)
    if(list[i] && list[i].parentElement)
    list[i].parentElement.removeChild(list[i]);

    render();
    cleanValue();
});

function renderSerie(note, index) {
    let card = document.createElement('li');
    let title = renderTitle('h3', note.title);
    let description = renderTitle('p', note.description);
    const episodio = renderTitle('p', 'Episodio');
    let episodioSeason = renderTitle('p', note.season);
    let episodioName = renderTitle('p', note.nameEpisode);
    let episodioDuration = renderTitle('p', note.duration);
    let episodiocategory = renderTitle('p', note.category);

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(episodio);
    card.appendChild(episodioSeason);
    card.appendChild(episodioName);
    card.appendChild(episodioDuration);
    card.appendChild(episodiocategory);
    
    span = renderTitle('span', '');
            
    note.seasonList.map((item) => {
        season = renderTitle('p', item.season);
        nameEpisode = renderTitle('p', item. nameEpisode);
        duration = renderTitle('p', item.duration);
        category = renderTitle('p', item.category);

        span.appendChild(season);
        span.appendChild(nameEpisode);
        span.appendChild(duration);
        span.appendChild(category);
        
    })

    card.appendChild(span);

    let buttonEditSerie = renderTitle('button', 'Editar Serie');
    let buttonDeleteSerie = renderTitle('button', 'Excluir Serie');
    let buttonStatusSerie = renderTitle('button', 'Status');
    
    card.appendChild(buttonDeleteSerie);
    card.appendChild(buttonEditSerie);
    card.appendChild(buttonStatusSerie);

    cards.appendChild(card);

    buttonDeleteSerie.addEventListener("click", event => {
        event.preventDefault();
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

    const labelSeason = renderTitle('label', 'Temporada');
    let inputseason = renderInput('newSeason');
    labelSeason.appendChild(inputseason);
    
    const labelName = renderTitle('label', 'Nome do Episodio');
    let inputName = renderInput('newEpisode');
    labelName.appendChild(inputName);
    
    const labelDuration = renderTitle('label', 'Duração');
    let inputDuration = renderInput('newDuration');
    labelDuration.appendChild(inputDuration);

    const labelCategory = renderTitle('label', 'Categoria');
    let inputCategory = renderInput('newCategory');
    labelCategory.appendChild(inputCategory);

    const buttonAdd = document.createElement('button');
    const buttonAddTxt = document.createTextNode('+');
    buttonAdd.appendChild(buttonAddTxt);
    
    const buttonCancel = document.createElement('button');
    const buttonCancelTxt = document.createTextNode('cancel');
    buttonCancel.appendChild(buttonCancelTxt);
    

    buttonAdd.addEventListener("click", event => {
        event.preventDefault();
        
        if(form.elements.newSeason.value !== '' && form.elements.newEpisode.value !== '' && form.elements.newDuration.value !== '' && form.elements.newCategory.value !== '') {
            seasonList.push({
                season: form.elements.newSeason.value,
                nameEpisode: form.elements.newEpisode.value,
                duration: form.elements.newDuration.value,
                category: form.elements.newCategory.value,
           })
        }

        const span = renderTitle('span', '');
        span.setAttribute('id', 'itemSeason');

        let episodioSeason = renderTitle('p', form.elements.newSeason.value);
        let episodioName = renderTitle('p', form.elements.newEpisode.value);
        let episodioDuration = renderTitle('p', form.elements.newDuration.value);
        let episodiocategory = renderTitle('p', form.elements.newCategory.value);
        let episodioDelete = renderTitle('button', 'Delete');

        episodioDelete.addEventListener("click", event => {
            event.preventDefault();
            let newseason = event.target.parentNode; 
            newseason.remove()
        })

         span.appendChild(episodioSeason);
         span.appendChild(episodioName);
         span.appendChild(episodioDuration);
         span.appendChild(episodiocategory);
         span.appendChild(episodioDelete);
         renderNewSeason.appendChild(span);

         form.elements.newSeason.value = '';
         form.elements.newEpisode.value = '';
         form.elements.newDuration.value = '';
         form.elements.newCategory.value = '';
    });

    buttonCancel.addEventListener("click", event => {
        event.preventDefault();
        let span = event.target.parentNode;
        const buttonAddseason = document.getElementById('add')
        buttonAddseason.style.display = "block"; 
        span.remove()
    });
    
    item.appendChild(labelSeason);
    item.appendChild(labelName);
    item.appendChild(labelDuration);
    item.appendChild(labelCategory);

    item.appendChild(buttonAdd);
    item.appendChild(buttonCancel);
}

function renderInput(txt){
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', txt);
    input.setAttribute('required', 'true');

    return input
}

function cleanValue() {
    form.elements.title.value = '';
    form.elements.description.value = '';
    form.elements.season.value = '';
    form.elements.nameEpisode.value = '';
    form.elements.duration.value = '';
    form.elements.category.value = '';
}

body.appendChild(renderScreen());
sectionUl.appendChild(cards);
main.appendChild(sectionUl);
body.appendChild(main);
window.onload = body;
