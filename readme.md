    # EJERCICIO CLON SITIO WEB TESLA

    Esta pagima es un clon de la web de Tesla que he aprovechado para poner en practica estilos de CSS.
    La web de TESLA es una pagina cn un diseño minimalista y moderno. Si bien parece haber pocos elementos
    de entrada, tiene muchos detalles significativos que le dan ese aspecto de vanguardia que nos presente.

    ## CRITERIOS PRINCIPALES

    1- El video de fondo no es un background ya que CSS no admite esto. Por lo cual es un elemento mas dentro sitio, lo cual implica varios desafios a la hora de manipularlo y lograr que se vea bien y que el viewport no se exceda por las dimensiones del mismo. 

    2- Se aplico la tecnica de slides mediante snap-mandatory para lograr el efecto de pase directo de una seccion a la otra.

    3- El menu se activa mediante JS para lograr que aparezca y ocupe espacio en el DOM solo cuando es activado y no antes. Al activarse el menu se aplica un efectro filtro blur sobre el video.

    4- Toda la estructura principal se maneja con diferentes niveles de Grid, lo que hace muy comod ir ajustando y trabajando las proporciones desde este tipo de control.

    5- Por el momento queda pendiente ajustar el cambio de color de los textos del menu de navegacion que deberia lograrse con un observador de interseccion via JS. 