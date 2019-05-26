<?php

	class Core
	{
		/**
	    * Controlador que se va ejecutar por defecto
	    * @var string
	    */
		protected $Core_controlador = 'login';
		/**
	    * Método que se va ejecutar por defecto
	    * @var string
	    */
		protected $Core_metodo = 'index';
		/**
	    * Parámetros que vienen de la url
	    * @var array
	    */
		protected $Core_parametros = [];
		/**
	    * Array de datos de la url, para definir el controlador, método y sus parámetros
	    * @var array
	    */
		private $url;

		/**
	     * Método Constructor
	     */
		public function __construct()
		{
			session_start();

			$this->url = $this->getUrl();
			try
			{
				//validamos que por url exista el controllador y podamos instanciarlo
				if(file_exists(ROOT_APP.DS.'controllers'.DS.ucwords($this->url[0]).'Controller.php'))
				{

					$this->Core_controlador = ucwords($this->url[0])."Controller";
					require_once(ROOT_APP.DS.'controllers'.DS.$this->Core_controlador.'.php');

					if(class_exists($this->Core_controlador))
					{
						//instanciamos el Core_controlador
						$this->Core_controlador = new $this->Core_controlador;

						unset($this->url[0]);

						//validamos si se paso algun metodo y si este existe dentro de la clase sino se pasa index
						if(isset($this->url[1]))
						{
							if(method_exists($this->Core_controlador, $this->url[1]))
							{
								$this->Core_metodo = $this->url[1];
								unset($this->url[1]);
							}
							//validamos si se pasaron parametros sino se solicita la clase y el metodo y pasamos parametros vacios
							$this->Core_parametros = ($this->url) ? array_values($this->url) : [];
							call_user_func_array([$this->Core_controlador, $this->Core_metodo], $this->Core_parametros);
							unset($this->url);
						}
						else
						{
							$this->Core_metodo = 'index';
							call_user_func([$this->Core_controlador, $this->Core_metodo]);
						}
					}
					else
					{
						$errors[0]=array("type"=>404,"mensaje"=>"");
						throw new Exception("Error, no existe o no se puede cargar la clase: ".$this->Core_controlador, E_USER_WARNING);
					}

				}
				else
				{
					//no existe el controlador en disco se envia error 404 notfound
					$errors[0]=array("type"=>404,"mensaje"=>"");
					throw new Exception("No es posible cargar el archivo", E_USER_WARNING);
				}
			}
			catch(Exception $e){
    				echo $e->getMessage();
    				if($errors[0]["type"] == 404)
					{
						header('Location: '.BASE_URL.'error'.DS.'index'.DS.'404');
					    unset($errors);
					    exit();
					}

			} catch (ErrorException $e) {
			    // Handle error
			    echo $e->getMessage();
			}

		}

		/**
	     * Método getUrl, dividimos la url en un array para proceder al llamamiento de cada controlador
	     */
		public function getUrl()
		{
			if(isset($_GET['url']))
			{
				$this->url = rtrim($_GET['url'],'/');
				$this->url = filter_var($this->url,FILTER_SANITIZE_URL);
				$this->url = explode('/', $this->url);

				if($this->url[0] == 'index.php')
				{
					$this->url[0]=$this->Core_controlador;
					$this->url[1]=$this->Core_metodo;
				}

				return $this->url;
			}
		}

	}