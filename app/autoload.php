<?php

	//Buscamos si existe la clase Core y la instanciamos

	require_once 'config/config.php';
	spl_autoload_register(function($libreria){

		if(file_exists(ROOT_APP.DS.'libraries'.DS.$libreria.'.php') and
			is_readable(ROOT_APP.DS.'libraries'.DS.$libreria.'.php'))
		{
			require_once ROOT_APP.DS.'libraries'.DS.$libreria.'.php';
		}
	});

	$core = new Core;