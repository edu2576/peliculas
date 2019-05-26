<?php

	/**
	 *
	 */
	class LoginController
	{
		public $message;
		public $user;
		public $pass;
		private $model;

		public function __construct()
		{

			if(isset($_SESSION['id']) and $_SESSION['id'] != 0)
			{
				header('Location: '.BASE_URL.'init'.DS.'index');
				exit();
			}
			require_once ROOT_APP.DS.'models'.DS.'LoginModel.php';
			$this->model = new LoginModel;
			$this->message = '';
		}

		public function index()
		{
			require_once ROOT_APP.DS.'views'.DS.'loginView.html';
		}

		public function validate()
		{
			if($_SERVER['REQUEST_METHOD'] === 'POST' and isset($_POST['user']) and isset($_POST['pass']))
			{
				$this->user = filter_var($_POST['user'],FILTER_SANITIZE_STRING);
				$this->pass = filter_var($_POST['pass'],FILTER_SANITIZE_STRING);


				$sql = "SELECT id, name, password FROM login WHERE nickname = '$this->user'";
				$result = $this->model->query($sql);

				if(password_verify($this->pass, $result[0]['password']))
				{
					$_SESSION['id'] = $result[0]['id'];
					header('Location: '.BASE_URL.'init'.DS.'index');

				}
				else
				{
					$this->message = 'Usuario y/o contraseña invalidos';
					require_once ROOT_APP.DS.'views'.DS.'loginView.html';
				}
			}
		}
	}