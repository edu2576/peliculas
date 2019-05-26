<?php

	class MovieModel
	{
		private $conectar, $tabla, $id, $campos, $datos;

		function __construct()
		{
			$this->tabla = "movie";
			$this->id = "id";
			$this->campos = array('title',
                                    'synopsis',
                                    'year');

			if(class_exists('Connection'))
			{
				$this->conectar = new Connection();
			}
		}

		public function __set($campo, $valor)
        {
        	$this->datos[$campo] = $valor;
        }

		public function __get($campo)
        {
            if(array_key_exists($campo, $this->datos))
            {
                return $this->datos[$campo];
            }
        }

        public function query($sql)
        {
        	$result = $this->conectar->executeQuery($sql);
        	$result = json_decode(json_encode($result), true);
        	return $result;
        }

        public function insert()
        {
        	$this->conectar->insert($this->tabla, $this->campos, $this->datos);
        }

        public function update($value)
        {
        	$this->conectar->update($this->id, $value, $this->tabla, $this->datos);
        }

        public function delete($value)
        {
        	$this->conectar->delete($this->id, $value, $this->tabla);
        }

	}