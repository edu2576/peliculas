<?php

	class LoginModel
	{
		private $conectar;

		public function __construct()
		{
			if(class_exists('Connection'))
			{
				$this->conectar = new Connection();

			}
		}

		public function query($sql)
		{
			$result = $this->conectar->executeQuery($sql);
			return $result;
		}

	}