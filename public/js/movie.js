window.addEventListener("load",function(){

	document.getElementById('guardar').addEventListener("click", function(){
		save();
	}, false);

},false);


let save = function(){

	let formulario = new FormData(document.getElementById("movie"))
	let method = document.getElementById("movie").dataset['method'];
	let URLactual = window.location;
	let ruta = URLactual.origin
	let url;

	if(method == 'index')
	{
		url = ruta+'/peliculas/movie/';
		location.href=url;
	}
	else
	{
		let data = {
			'title': document.getElementById('title').value,
			'year': document.getElementById('year').value
		}


		let sw = validate(data);

		if(sw == true)
		{
			url = ruta+'/peliculas/movie/'+method;

			fetch(url, {
			 	method: 'POST',
			  	body: formulario
			}).then(function(response) {
				if(response.ok)
				{
					url = ruta+'/peliculas/movie/';
					location.href=url;
		       		return response.text()

		   		}
		   		else
		   		{
		       		throw "Error en la llamada Ajax";
		       	}
		   	})
			.catch(error => console.error('Error:', error));
		}
	}
};

let validate = function(data){

	let mensaje = '';

	if(!data.title && data.title == '')
	{
		mensaje += 'El campo nombre es obligatorio.\n';
	}

	if(!data.year && data.year == '')
	{
		mensaje += 'El campo usuario es obligatorio.\n';
	}

	var fecha = new Date();
	var ano = fecha.getFullYear();

	if(data.year > ano)
	{
		mensaje += 'El campo año debe ser menor o igual al año actual '+ano+'.\n';
	}


	if(Object.keys(mensaje).length !== 0)
    {
    	document.getElementById('mensaje').innerText = mensaje;

    	return false;
    }

    return true;
};