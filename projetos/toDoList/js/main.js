let form = document.querySelector('form');
let containerUl = document.getElementById('containerList');

let notes = [];

form.addEventListener("submit", event => {
	event.preventDefault();

	notes.push({
		title: form.elements.title.value,
		description: form.elements.description.value,
		tags: form.elements.tags.value,
		color: form.elements.color.value,
	})
	cleanInput();
	render()
});


function render() {

let newList = document.createElement('li');
let newTitle = document.createElement('h2');
let newDescription = document.createElement('p');
let newTags = document.createElement('p');

	notes.map((note) => {
		newTitle.innerHTML = note.title;
		newDescription.innerHTML = note.description;
		newTags.innerHTML = note.tags;
		containerUl.appendChild(newList)
		newList.appendChild(newTitle)
		newList.appendChild(newDescription)
		newList.appendChild(newTags)
	};
};

function cleanInput() {
	form.elements.title.value = '';
	form.elements.description.value = '';
	form.elements.tags.value = '';
}


// const data=[];

// function handleInput(e){
// 	data[e.name] = e.value;
// }

// function submitData(){
// 	console.log(data)
// 	let newList = document.createElement('li');

// 	let newTitulo = document.createElement('h2');
// 	let newDescricao = document.createElement('p');
// 	let newTags = document.createElement('p');
// 	let newStatus = document.createElement('p');
// 	let newImg = document.createElement('img');
// 		newTitulo.innerHTML = data.titulo;
// 		newDescricao.innerHTML = data.descricao + ' - ';
// 		newTags.innerHTML = data.status + ' - ';
// 		newStatus.innerHTML = data.tags;
// 		container.appendChild(newList);
// 		newList.appendChild(newDescricao);
// 		newList.appendChild(newTags);
// 		newList.appendChild(newStatus);
// 		image();
// }

// function image() {
//   const img = document.createElement("IMG");
//   img.setAttribute("src", "trash.png");
//   img.setAttribute("width", "18");
//   img.setAttribute("height", "15");
// 	img.setAttribute("alt", "The Pulpit Rock");
// 	container.appendChild(img);
// }