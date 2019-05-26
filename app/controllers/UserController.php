<?php

	class UserController
	{
		private $user;

		public $method;
		public $action;
		public $message;

		function __construct()
		{
			/*if(!isset($_SESSION['id']) or $_SESSION['id'] == 0)
			{
				header('Location: '.BASE_URL.'login');
				exit();
			}*/

			require_once ROOT_APP.DS.'models'.DS.'UserModel.php';
			$this->user = new UserModel;
		}

		public function index()
		{
			$sql = "SELECT * FROM login";
			$this->result = $this->user->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'userGridView.html';
		}

		public function create()
		{
			$this->method = 'insert';
			$this->action = 'Crear';
			require_once ROOT_APP.DS.'views'.DS.'userView.html';
		}

		public function insert()
		{
			$this->user->name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
			$this->user->nickname = filter_var($_POST['nickname'],FILTER_SANITIZE_STRING);
			$this->user->password = password_hash(filter_var($_POST['password'],FILTER_SANITIZE_STRING), PASSWORD_DEFAULT);

			$this->user->insert();

		}

		public function edit($id)
		{
			$this->method = 'update';
			$this->action = 'Modificar';

			$sql = "SELECT * FROM login WHERE id = $id";
			$this->result = $this->user->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'userView.html';
		}

		public function update()
		{
			$id = filter_var($_POST['id'],FILTER_SANITIZE_NUMBER_INT);
			$this->user->name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
			$this->user->nickname = filter_var($_POST['nickname'],FILTER_SANITIZE_STRING);
			$this->user->password = password_hash(filter_var($_POST['password'],FILTER_SANITIZE_STRING), PASSWORD_DEFAULT);


			$this->user->update($id);
		}

		public function delete($id)
		{
			$this->user->delete($id);
			$this->message = "El registro ha sido eliminado correctamente.";
			header('Location: '.BASE_URL.'user');
		}

		public function show($id)
		{
			$this->method = 'index';
			$this->action = 'Volver';

			$sql = "SELECT * FROM login WHERE id = $id";
			$this->result = $this->user->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'userView.html';
		}
	}