<?php

	class MovieController
	{
		private $movie;

		public $method;
		public $action;

		/**
         * @method __construct() verificamos si se ha iniciado sesión e instanciamos el modelo de película
         */
		function __construct()
		{
			if(!isset($_SESSION['id']) or $_SESSION['id'] == 0)
			{
				header('Location: '.BASE_URL.'login');
				exit();
			}

			require_once ROOT_APP.DS.'models'.DS.'MovieModel.php';
			$this->movie = new MovieModel;
		}

		/**
		 * @method index() entramos a la grid que lista las películas almacenadas en la base de datos
		 */
		public function index()
		{
			$sql = "SELECT * FROM movie";
			$this->result = $this->movie->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'movieGridView.html';
		}

		/**
		 * @method create() entramos al formulario que permite crear películas
		 */
		public function create()
		{
			$this->method = 'insert';
			$this->action = 'Crear';
			require_once ROOT_APP.DS.'views'.DS.'movieView.html';
		}


		/**
		 * @method insert() metodo en el que almacenamos los registros en base de datos
		 */
		public function insert()
		{
			$this->movie->title = filter_var($_POST['title'],FILTER_SANITIZE_STRING);
			$this->movie->synopsis = filter_var($_POST['synopsis'],FILTER_SANITIZE_STRING);
			$this->movie->year = filter_var($_POST['year'],FILTER_SANITIZE_NUMBER_INT);

			$this->movie->insert();

		}

		/**
		 * @method edit() entramos al formulario que permite modificar películas
		 * @param  integer $id id del registro que se va a modificar en base de datos
		 */
		public function edit($id)
		{
			$this->method = 'update';
			$this->action = 'Modificar';

			$sql = "SELECT * FROM movie WHERE id = $id";
			$this->result = $this->movie->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'movieView.html';
		}

		/**
		 * @method update() metodo en el que modificamos los registros en base de datos
		 */
		public function update()
		{
			$id = filter_var($_POST['id'],FILTER_SANITIZE_NUMBER_INT);
			$this->movie->title = filter_var($_POST['title'],FILTER_SANITIZE_STRING);
			$this->movie->synopsis = filter_var($_POST['synopsis'],FILTER_SANITIZE_STRING);
			$this->movie->year = filter_var($_POST['year'],FILTER_SANITIZE_NUMBER_INT);


			$this->movie->update($id);
		}

		/**
		 * @method delete() método para eliminar los registros en base de datos
		 * @param  integer $id id del registro que se va a eliminar en base de datos
		 */
		public function delete($id)
		{
			$this->movie->delete($id);
			$this->message = "El registro ha sido eliminado correctamente.";
			header('Location: '.BASE_URL.'movie');
		}

		/**
		 * @method show() entramos al formulario para mostrar los datos en el formulario
		 * @param  integer $id id del registro que se va a mostrar en el formulario
		 */
		public function show($id)
		{
			$this->method = 'index';
			$this->action = 'Volver';

			$sql = "SELECT * FROM movie WHERE id = $id";
			$this->result = $this->movie->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'movieView.html';
		}
	}