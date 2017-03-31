
var listas=[];
//molde para crear listas
function Lista(id,title){
  this.id = id;
  this.title = title;
  this.pendientes = [];

  this.agregarPendiente = function(pendiente){
    this.pendientes.push(pendiente);
  }
}
//molde para guardar pendientes
function Pendient(id, content){//crear el molde para los pendientes con una clase (o molde)
    this.id=id;
    this.content=content;     //la memoria de data solo deberia contener el data pero no el li completo. con el content, algo que proporcionamos como usuarios

}

function createList(){//crea a nivel Data
  var title=document.getElementById("listTitle");
  var id = Date.now();
  var lista = new Lista(id,title.value);
  listas.push(lista);
  //console.log(lista);
//se ha creado el pedazo de memoria con la informacion antes de mostrarlo
  renderHTML(lista);//cuando tengo un objeto, se llama para mostrarlo en HTML
//falta crear los pendientes

}

function renderHTML(lista){//va a hacer todo lo que tenga que hacer en html a partir de la funcion donde se le manda llamar
  //crea memoria visual
  var sectionContainer= document.createElement("section");
  var containerList=document.getElementById("containerList");

  var inputPendient=document.createElement("input");
  var buttonPendient=document.createElement("input");
  //crear botones dentro de la lista
  inputPendient.type = "text";
  inputPendient.id="text-" + lista.id;
  buttonPendient.type = "submit";
  buttonPendient.value = "Enviar Pendiente";
  //agregar Pendiente
  buttonPendient.onclick= agregarPendiente;                                                   //con parentesis, ejecuta la funcion, sin parentesis, se define la funcion pero no se ejecuta, se protege
  //buttonPendient.setAttribute.  mala practica
//mandar a la memoria visual los 3 anteriores
  buttonPendient.setAttribute("data-lista-id",lista.id);//Cada vez que yo cree un boton dinamicamente le voy a crear 4 cosas text,submit.
  //para diferencia la data de un input a otro, lo agregue pero que no sea con el mismo id
  //se pueden separar los ids porque son id diferentes, uno es data-lista-id y el otro es el id por si mismo, ya son dif.

  sectionContainer.id=lista.id;//
  var h3Title=document.createElement("h3");
  h3Title.innerText=lista.title;
  //conectar el h3 y el section container
  sectionContainer.appendChild(h3Title);

  containerList.appendChild(sectionContainer);
  //Crear los hijos
  containerList.appendChild(inputPendient);
  containerList.appendChild(buttonPendient);
/*
  //Crear botón borrar elemento junto con li
		var botonBorrarPendiente = document.createElement('input');
		botonBorrarPendiente.type = "button";
		botonBorrarPendiente.value = "eliminar tarea";
		botonBorrarPendiente.onclick = function(){
			ul.removeChild(li);
		}
		li.appendChild(botonBorrarPendiente);

    //Agregar botón de borrar lista
	var botonBorrarLista = document.createElement('input');
	botonBorrarLista.type = "button";
	botonBorrarLista.value = "Eliminar Lista";
	botonBorrarLista.onclick= function(){
		containerList.removeChild(sectionContainer);
	}
  containerList.appendChild(botonBorrarLista);
  sectionContainer.appendChild(containerList);
  borrarInput();

}

function borrarInput(){
  nombreNuevaLista.value = " ";
}
*/

  //console.log(sectionContainer);
  //extraer el valor del titulo es lista.title

};
function agregarPendiente(){
  var idDeListaAModificar= this.getAttribute("data-lista-id");
  var objetoAAgregarElPendiente=listas.filter(function(lista){
    return lista.id == idDeListaAModificar;

  })

    var textoDePendient=document.getElementById("text-"+ idDeListaAModificar).value;

    var pendient =new Pendient(Date.now(),textoDePendient);
    console.log(pendient);
    objetoAAgregarElPendiente[0].agregarPendiente(pendient);
    renderHTMLPendiente(idDeListaAModificar,pendient);

};

function renderHTMLPendiente(idListaAModificar,pendiente){
  var liContainer= document.createElement("li");
  liContainer.innerText = pendiente.content;
  var listaAModificar=document.getElementById(idListaAModificar);
  console.log(listaAModificar);
  listaAModificar.appendChild(liContainer);
}
