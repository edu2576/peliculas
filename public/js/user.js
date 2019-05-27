window.addEventListener("load",function(){

	document.getElementById('guardar').addEventListener("click", function(){
		save();
	}, false);

},false);


let save = function(){

	let formulario = new FormData(document.getElementById("user"))
	let method = document.getElementById("user").dataset['method'];
	let URLactual = window.location;
	let ruta = URLactual.origin
	let url;

	if(method == 'index')
	{
		url = ruta+'/peliculas/user/';
		location.href=url;
	}
	else
	{
		let data = {
			'name': document.getElementById('name').value,
			'nickname': document.getElementById('nickname').value,
			'password': document.getElementById('password').value
		}

		let sw = validate(data);

		if(sw == true)
		{
			url = ruta+'/peliculas/user/'+method;

			fetch(url, {
			 	method: 'POST',
			  	body: formulario
			}).then(function(response) {
				if(response.ok)
				{
					url = ruta+'/peliculas/user/';
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
	if(!data.name && data.name == '')
	{
		mensaje += 'El campo nombre es obligatorio.\n';
	}

	if(!data.name.match(/^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ0-9_-\s]{5,}$/))
	{
		mensaje += 'El campo nombre debe contar con cinco carácteres como mínimo.\n';
	}

	if(!data.nickname && data.nickname == '')
	{
		mensaje += 'El campo nombre es obligatorio.\n';
	}

	if(!data.nickname.match(/^[A-Za-z0-9_]+$/))
	{
		mensaje += 'El campo usuario debe contar letras, números o guiones bajos.\n';
	}

	if(!data.password && data.password == '')
	{
		mensaje += 'El campo contraseña es obligatorio.\n';
	}

	if(!data.password.match(/^(?=\w*\d)(?=\w*[A-Z])/))
	{
		mensaje += 'El campo contraseña debe contar con mínimo una letra mayúscula y un número.\n';
	}

	if(Object.keys(mensaje).length !== 0)
    {
    	document.getElementById('mensaje').innerText = mensaje;

    	return false;
    }

    return true;
};