<?php
	// Variables para trabajar con rutas absolutas
	$HTTP =  'http://';
	DEFINE('DS',DIRECTORY_SEPARATOR);
	DEFINE('BASE_URL',$HTTP.$_SERVER['HTTP_HOST'].'/peliculas/');
	DEFINE('ROOT_APP',dirname(dirname(__FILE__)));
	DEFINE('CARPETA','peliculas');