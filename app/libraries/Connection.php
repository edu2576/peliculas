<?php

    class Connection
    {
        protected $error, $conexion;

        /**
         * @method __construct() inicializamos las propiedades con los parámetros de la base de datos y realizamos la conexion a la base de datos
         */
        public function __construct()
        {
            $data = array(
                'domain' => '',
                'host' => 'localhost',
                'user' => 'root',
                'password' => '',
                'charset' => 'utf8',
                'db' => 'peliculas'
            );

            $this->conexion=new mysqli($data['host'], $data['user'], $data['password'], $data['db']);
            $this->conexion->query("SET NAMES '".$data['charset']."'");

            if($this->conexion->connect_error)
            {
                die('Error de Conexión ('.$this->conexion->connect_errno.') '.$this->conexion->connect_error);
            }
        }

        /**
         * @method executeQuery() método para ejecutar consultas en la base de datos
         * @param  string $sql Consulta que se realizará a la base de datos
         * @return array[]      Datos que se consultan de la base de datos
         */
        public function executeQuery($sql)
        {
            $query=$this->conexion->query($sql);

            if($this->conexion->error)
            {
                try {
                    throw new Exception("MySQL error ".$this->conexion->error." <br> Query:<br> $sql", $this->conexion->errno);
                } catch(Exception $e ) {
                    if($this->error === true)
                    {
                        echo "Error No: ".$e->getCode(). " - ". $e->getMessage() . "<br >";
                        echo nl2br($e->getTraceAsString());
                    }
                }
            }

            $resultSet = array();
            if($query==true)
            {
                if($query->num_rows)
                {
                    while($row = $query->fetch_array())
                    {
                       $resultSet[]=$row;
                    }
                }

            }
            return $resultSet;
        }

        /**
         * @method  insert() método para almacenar datos en la base de datos
         * @param  string  $tabla   Nombre de la tabla en la que se va a insertar datos
         * @param  array[] $_campos Array de nombres de los campos de la tabla
         * @param  array[] $_datos  Array de datos que se va a insertar en la base de datos
         * @return integer          Último id de la tabla
         */
        public function insert($tabla, $_campos, $_datos)
        {
            $campos = implode(', ',$_campos);
            $datos =implode("', '",$_datos);

            $setArray = array();
            foreach ($_datos as $key => $value)
            {
                $setArray[] = ($value == 'NULL' ? $value : "'".$value."'");
            }

            $datos = implode(', ',$setArray);

            $sql ="INSERT INTO ".$tabla." (".$campos.")
                    VALUES (".$datos.")";

            $query = $this->conexion->query($sql);

            if($this->conexion->error)
            {
                try {
                    throw new Exception("MySQL error ".$this->conexion->error." <br> Query:<br> $sql", $this->conexion->errno);
                } catch(Exception $e ) {
                    if($this->error === true)
                    {
                        echo "Error No: ".$e->getCode(). " - ". $e->getMessage() . "<br >";
                        echo nl2br($e->getTraceAsString());
                    }
                }
            }

            return $this->conexion->insert_id;
        }

         /**
         * @method  update() método para modificar datos en la base de datos
         * @param  string  $_id     Nombre del campo id de la tabla
         * @param  integer $_value  Id que se va modificar en la base de datos
         * @param  string  $tabla   Nombre de la tabla en la que se va a insertar datos
         * @param  array[] $_datos  Array de datos que se va a insertar en la base de datos
         * @return string
         */
        public function update($_id, $_value, $tabla, $_datos)
        {
            $setArray = array();
            foreach ($_datos as $key => $value)
            {
                $setArray[] = $key." = ".($value == 'NULL' ? $value : "'".$value."'");
            }

            $datos = implode(', ',$setArray);


            $sql = "UPDATE ".$tabla." SET  ".$datos. " WHERE ".$_id." = ".$_value;
            //echo $sql.'<br><br>';
            $query=$this->conexion->query($sql);

            if($this->conexion->error)
            {
                try {
                    throw new Exception("MySQL error ".$this->conexion->error." <br> Query:<br> $sql", $this->conexion->errno);
                } catch(Exception $e ) {
                    if($this->error === true)
                    {
                        echo "Error No: ".$e->getCode(). " - ". $e->getMessage() . "<br >";
                        echo nl2br($e->getTraceAsString());
                    }
                }
            }

            return $this->conexion->affected_rows;
        }

        /**
         * @method  delete() método para eliminar datos en la base de datos
         * @param  string  $_id     Nombre del campo id de la tabla
         * @param  integer $_value  Id que se va modificar en la base de datos
         * @param  string  $tabla   Nombre de la tabla en la que se va a insertar datos
         * @return string
         */
        public function delete($_id, $_value, $tabla)
        {
            $sql = "DELETE FROM ".$tabla." WHERE ".$_id." = ".$_value;

            $query=$this->conexion->query($sql);

            if($this->conexion->error)
            {
                try {
                    throw new Exception("MySQL error ".$this->conexion->error." <br> Query:<br> $sql", $this->conexion->errno);
                } catch(Exception $e ) {
                    if($this->error === true)
                    {
                        echo "Error No: ".$e->getCode(). " - ". $e->getMessage() . "<br >";
                        echo nl2br($e->getTraceAsString());
                    }
                }
            }

            return $query;
        }
    }
