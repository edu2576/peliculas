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

            echo $sql;
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

        public function delete($_id, $_value, $tabla)
        {
            $sql = "DELETE FROM ".$tabla." WHERE ".$_id." = ".$_value;

            echo $sql;
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
