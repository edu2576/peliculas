<?php

	class UserController
	{
		private $user;

		public $method;
		public $action;


        /**
         * @method __construct() verificamos si se ha iniciado sesión e instanciamos el modelo de usuario
         */
		function __construct()
		{
			if(!isset($_SESSION['id']) or $_SESSION['id'] == 0)
			{
				header('Location: '.BASE_URL.'login');
				exit();
			}

			require_once ROOT_APP.DS.'models'.DS.'UserModel.php';
			$this->user = new UserModel;
		}

		/**
		 * @method index() entramos a la grid que lista los usuarios almacenados en la base de datos
		 */
		public function index()
		{
			$sql = "SELECT * FROM login";
			$this->result = $this->user->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'userGridView.html';
		}

		/**
		 * @method create() entramos al formulario que permite crear usuarios
		 */
		public function create()
		{
			$this->method = 'insert';
			$this->action = 'Crear';
			require_once ROOT_APP.DS.'views'.DS.'userView.html';
		}

		/**
		 * @method insert() metodo en el que almacenamos los registros en base de datos
		 */
		public function insert()
		{
			$this->user->name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
			$this->user->nickname = filter_var($_POST['nickname'],FILTER_SANITIZE_STRING);
			$this->user->password = password_hash(filter_var($_POST['password'],FILTER_SANITIZE_STRING), PASSWORD_DEFAULT);

			$this->user->insert();

		}

		/**
		 * @method edit() entramos al formulario que permite modificar usuarios
		 * @param  integer $id id del registro que se va a modificar en base de datos
		 */
		public function edit($id)
		{
			$this->method = 'update';
			$this->action = 'Modificar';

			$sql = "SELECT * FROM login WHERE id = $id";
			$this->result = $this->user->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'userView.html';
		}

		/**
		 * @method update() metodo en el que modificamos los registros en base de datos
		 */
		public function update()
		{
			$id = filter_var($_POST['id'],FILTER_SANITIZE_NUMBER_INT);
			$this->user->name = filter_var($_POST['name'],FILTER_SANITIZE_STRING);
			$this->user->nickname = filter_var($_POST['nickname'],FILTER_SANITIZE_STRING);
			$this->user->password = password_hash(filter_var($_POST['password'],FILTER_SANITIZE_STRING), PASSWORD_DEFAULT);


			$this->user->update($id);
		}

		/**
		 * @method delete() método para eliminar los registros en base de datos
		 * @param  integer $id id del registro que se va a eliminar en base de datos
		 */
		public function delete($id)
		{
			$this->user->delete($id);
			header('Location: '.BASE_URL.'user');
		}

		/**
		 * @method show() entramos al formulario para mostrar los datos en el formulario
		 * @param  integer $id id del registro que se va a mostrar en el formulario
		 */
		public function show($id)
		{
			$this->method = 'index';
			$this->action = 'Volver';

			$sql = "SELECT * FROM login WHERE id = $id";
			$this->result = $this->user->query($sql);

			require_once ROOT_APP.DS.'views'.DS.'userView.html';
		}
	}