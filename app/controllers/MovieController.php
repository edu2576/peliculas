<?php

	class MovieController
	{
		private $movie;

		public $method;
		public $action;
		public $message;

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

		public function index()
		{
			$sql = "SELECT * FROM movie";
			$this->result = $this->movie->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'movieGridView.html';
		}

		public function create()
		{
			$this->method = 'insert';
			$this->action = 'Crear';
			require_once ROOT_APP.DS.'views'.DS.'movieView.html';
		}

		public function insert()
		{
			$this->movie->title = filter_var($_POST['title'],FILTER_SANITIZE_STRING);
			$this->movie->synopsis = filter_var($_POST['synopsis'],FILTER_SANITIZE_STRING);
			$this->movie->year = filter_var($_POST['year'],FILTER_SANITIZE_NUMBER_INT);

			$this->movie->insert();

		}

		public function edit($id)
		{
			$this->method = 'update';
			$this->action = 'Modificar';

			$sql = "SELECT * FROM movie WHERE id = $id";
			$this->result = $this->movie->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'movieView.html';
		}

		public function update()
		{
			$id = filter_var($_POST['id'],FILTER_SANITIZE_NUMBER_INT);
			$this->movie->title = filter_var($_POST['title'],FILTER_SANITIZE_STRING);
			$this->movie->synopsis = filter_var($_POST['synopsis'],FILTER_SANITIZE_STRING);
			$this->movie->year = filter_var($_POST['year'],FILTER_SANITIZE_NUMBER_INT);


			$this->movie->update($id);
		}

		public function delete($id)
		{
			$this->movie->delete($id);
			$this->message = "El registro ha sido eliminado correctamente.";
			header('Location: '.BASE_URL.'movie');
		}

		public function show($id)
		{
			$this->method = 'index';
			$this->action = 'Volver';

			$sql = "SELECT * FROM movie WHERE id = $id";
			$this->result = $this->movie->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'movieView.html';
		}
	}