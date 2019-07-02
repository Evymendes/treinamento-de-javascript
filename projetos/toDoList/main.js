const data=[];

function handleInput(e){
	data[e.name] = e.value;
}

function submitData(){
	console.log(data)
	let newList = document.createElement('li');

	let newTitulo = document.createElement('h2');
	let newDescricao = document.createElement('p');
	let newTags = document.createElement('p');
	let newStatus = document.createElement('p');
	let newImg = document.createElement('img');
		newTitulo.innerHTML = data.titulo;
		newDescricao.innerHTML = data.descricao + ' - ';
		newTags.innerHTML = data.status + ' - ';
		newStatus.innerHTML = data.tags;
		container.appendChild(newList);
		newList.appendChild(newDescricao);
		newList.appendChild(newTags);
		newList.appendChild(newStatus);
		image();
}

function image() {
  const img = document.createElement("IMG");
  img.setAttribute("src", "trash.png");
  img.setAttribute("width", "18");
  img.setAttribute("height", "15");
	img.setAttribute("alt", "The Pulpit Rock");
	container.appendChild(img);
}