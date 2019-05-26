<?php

	class InitController
	{

		public function __construct()
		{

		}

		/**
	     * Método index, llamamos la vista principal
	     */
		public function index()
		{
			if(!isset($_SESSION['id']) or $_SESSION['id'] == 0)
			{
				header('Location: '.BASE_URL.'login');
				exit();
			}
			require_once ROOT_APP.DS.'views'.DS.'homeView.html';
		}
	}