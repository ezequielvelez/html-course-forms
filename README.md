# Notas sobre formularios web

## Indice  
- [Notas sobre formularios web](#notas-sobre-formularios-web)
  - [Indice](#indice)
  - [Introducción | El individuo cómo generador de datos y la importancia de las  interfaces en los sistemas informáticos.](#introducción--el-individuo-cómo-generador-de-datos-y-la-importancia-de-las--interfaces-en-los-sistemas-informáticos)
  - [¿Qué son los formularios web?](#qué-son-los-formularios-web)
  - [Introducción a sus características](#introducción-a-sus-características)
  - [Estructura básica de un formulario](#estructura-básica-de-un-formulario)
  - [Algunos atributos principales](#algunos-atributos-principales)
    - [Los atributos for y id](#los-atributos-for-y-id)
    - [El atributo name](#el-atributo-name)
    - [El atributo type con valor submit](#el-atributo-type-con-valor-submit)
  - [Notas sobre input y sus diferentes tipos](#notas-sobre-input-y-sus-diferentes-tipos)
    - [Tipos | Fechas](#tipos--fechas)
    - [Tipos | Móbiles](#tipos--móbiles)
    - [Tipos | Seleccionables](#tipos--seleccionables)
      - [radio](#radio)
      - [checkbox](#checkbox)
      - [selects](#selects)
      - [datalist](#datalist)
    - [Tipos | Otros](#tipos--otros)
  - [Atributos para los inputs relacionados con sus tipos](#atributos-para-los-inputs-relacionados-con-sus-tipos)
  - [Considerar la experiencia del usuario](#considerar-la-experiencia-del-usuario)
  - [El uso de ```<div>```, ```<p>``` , ```<ul>``` , ```<li>``` y ```<h...>```](#el-uso-de-div-p--ul--li-y-h)
  - [¿Por qué tantos widgets?](#por-qué-tantos-widgets)
  - [Conclusión](#conclusión)
  - [Enlaces](#enlaces)



## Introducción | El individuo cómo generador de datos y la importancia de las  interfaces en los sistemas informáticos.

Es evidente que los datos son de vital importancia en esta **economía de la información** y que la *tecnología y la informática* permiten que estos datos se almacenen de manera eficiente y poder tener una rápida accesibilidad a ella cúando se requiera. Los usuarios viven *interactuando* con estos dispositivos día a día para realizar cualquier tipo de actividad, desde realizar un pedido desde una aplicación, buscar cómo llegar a determinado sitios, hasta realizar trámites bancarios. ***Por lo tanto, podemos entender al individuo cómo un generador de datos constantes a través, también, de estos dispositivos electrónicos cómo smartphones, tablets, laptops, entre otros***.  

Ahora bien, cuándo entendemos esto, también podemos comprender que así cómo el individuo genera datos, ***requiere de una relación íntima con estos sistemas informáticos para volcar cualquier dato que se necesite con el fin de cumplir diferenciados objetivos***. También podemos entender que el usuario tiene contancto con estos sistemas a través de su **interfaz**. Por lo tanto, ***HTML** proporciona diferentes elementos para cumplir estos objetivos en los sistemas web*. Estos elementos son los **formularios** y sus **controles o widgets**


## ¿Qué son los formularios web?

Los formularios web son un conjunto de espacios
en el documento con el proósito de recibir datos
que arroje el usuario. Es decir, es el principal
punto de interacción entre el usuario y el sistema
web. En otra palabra, los formularios web permiten que el usuario influya en la pagina o aplicación.  

## Introducción a sus características

Los formularios web se compone de ciertas características que lo hacen ser un formulario.
Uno de ellos son los botones o también llamado
widgets y otros elementos.

* Cajas de entrada de datos o inputs
* Casillas de verificación o checkbox
* Botones
* Opciones
* Cajas desplegables

## Estructura básica de un formulario

Hay 4 elementos que componen la estructura básica de un formulario. Estos son:

<dl>
    <dt>form:</dt>
    <dd>Es el contenedor de todo el formulario. Asi cómo hay contenedores de secciones y de artículos, o contenedor no semántico cómo un div, los formularios también tienen su contenedor.</dd>
    <dt>Fieldset</dt>
    <dd>Es un agrupador de elementos en los formularios que ayuda a categorizar los mismos</dd>
    <dt>Legend</dt>
    <dd>Es el título que llevará el fieldset</dd>
    <dt>label:</dt>
    <dd>Es el título del campo o caja dónde se introduciran los datos</dd>
    <dt>input:</dt>
    <dd>Es el contenedor de todo el formulario</dd>
    <dt>textarea</dt>
    <dd>Es dónde podemos incluir cualquier mensaje que queramos enviar con el formulario</dd>
    <dt>button:</dt>
    <dd>Es botón que permitirá el envío del formulario</dd>
</dl>


```HTML

    <form>
       <label>Nombre</label>
       <input type=text/>
       <label>Mensaje</label>
       <textarea>
       <button type='submit'>
    </form>

```

```HTML
    <form>
        <fieldset>
            <legend>Datos personales</legend>
            <label></label>
            <input>
            <label></label>
            <input>
            <label></label>
            <input>
        </fieldset>
    </form>

```

## Algunos atributos principales

### Los atributos for y id

Es importante destacar algunos atributos principales para nuestro formulario básico.  
En primer lugar, necesitamos cómo usuarios dar **"click"** dentro del campo para ingresar nuestros datos. Hasta aqui no hay ningún problema, pero, ¿Qué pasa si queremos pinchar el label o el título del campo?. Al hacerlo vemos que no sucede nada. *Cómo usuarios nos gustaría pinchar el título del campo y que el cursor inmediatamente nos situe dentro del input para poder escribir*.  Ante este problema la solución es la siguiente: HTML nos permite realizar un tipo de **vinculación** entre el **label** y el **input** de la siguiente manera con los atributos **for** y **id**:

```HTML

    <label for="name">Nombre</label>
    <input id="name">

```

Ahora sí, al hacer "click" en el título podemos escribir. 

### El atributo name

En segundo lugar, debemos indicarle un **name**. Esto nos permite poder identificar a los campos del formularios para que el servidor lo entienda. Muchas veces nos servirá para darle tanto un nombre que sea general y para cada parte un valor distinto, lo que se conoce como **clave/valor**. Por ejemplo podemos asignar un nombre "género"
para los checkbox con valores distintos para cada uno cómo masculino, femenino o prefiero no decirlo.

```HTML

    <label for="name">Nombre</label>
    <input id="name" name="user-name">

```

### El atributo type con valor submit

En tercer lugar a tener en cuenta es que para que el botón pueda enviarse necesita de un type submit para indicarle que es un tipo de entrada para enviar

```HTML

    <button type="submit">

```

## Notas sobre input y sus diferentes tipos
Sabemos que los input sirven para que el usuario vuelque los diferentes datos en él. Pero sabemos que en un formulario podemos ingresar **tipos de datos** diferentes, cómo los siguientes:
- Textos
- Un número de teléfono
- Un correo electrónico
- Una contraseña
- Una fecha
- Realizar una búsqueda
- Escoger una opción dentro de otras opciones
- Una dirección web
- Entre otros.

Para ello, el atributo que nos servirá es el atributo **type** que, cómo habíamos dicho, nos servirá para decirle al navegador de que tipo de entrada o input es el campo a completar.


___

### Tipos | Fechas
  
<dl>
    <dt>date:</dt>
    <dd>Es un control para introducir una fecha (Día, mes y año).</dd>
    <dt>time: </dt>
    <dd>Es un control para introducir una hora.</dd>
    <dt>month:</dt>
    <dd>Es un control para introducir un mes.</dd>
    <dt>week:</dt>
    <dd>Es un control para introducir una semana.</dd>
</dl>

```HTML

    <h2>Indique cuándo puede asistir</h2>
    <form>
        <label>Fecha</label>
        <input type="date">
        <label>Hora</label>
        <input type="time">
        <label>Mes</label>
        <input type="month">
        <label>Semana</label>
        <input type="week">
    </form>

```
___

### Tipos | Móbiles

Los tipos para estos campos permiten configurar o ***afectar la apariencia del teclado*** cuándo se encuentra en un teléfono mobil y tablets, de tal manera de que la apariencia del teclado sea la más eficiente para el usuario tanto cuándo por ejemplo introduce un correo electrónico apareciendo el "@" o cuándo introduce una busqueda apareciendo el ícono de búsqueda, mejorando entonces su **accesibilidad**.

<dl>
    <dt>text:</dt>
    <dd>Es un campo de texto para introducir simplemente texto.</dd>
    <dt>tel: </dt>
    <dd>Es un control para introducir un número de teléfono</dd>
    <dt>number: </dt>
    <dd>Es un control para introducir números</dd>
    <dt>search:</dt>
    <dd>Es un cuadro de texto para realizar busquedas.</dd>
    <dt>url:</dt>
    <dd>Es un campo para introducir una dirección web.</dd>
    <dt>email:</dt>
    <dd>Es un campo para introducir un correo electrónico.</dd>
</dl>


```HTML

    <h2>Datos personales</h2>
    <form>
        <label>Nombre</label>
        <input type="text">
        <label>Edad</label>
        <input type="number">
        <label>DNI</label>
        <input type="number">
        <label>Correo electrónico</label>
        <input type="email">
        <label>Blog</label>
        <input type="url">
    </form>

    <h2>Archivo</h2>
    <form>
        <label>Buscar</label>
        <input type="search">
    </form>

```

___
  
### Tipos | Seleccionables


<dl>
    <dt>radio:</dt>
    <dd>Es un control para seleccionar una opcion dentro de otras opciones relacionadas</dd>
    <dt>checkbox: </dt>
    <dd>Es un control para selecciona múltiples opciones dentro de otras opciones relacionadas</dd>
    <dt>select </dt>
    <dd>Es un campo que despliega una listas de opciones relacionadas dónde se puede seleccionar múltiples opciones. Cada opción irá dentro de una etiqueta option. Las mismas opciones se pueden agrupar en categorias con optgroup</dd>
    <dt>datalist </dt>
    <dd>Es cómo un select, a diferencia que permite escribir lo que se busca en un campo que admite un fitro y coincide la busqueda con caracteres o conjuntos de caracteres que se va indicando</dd>
</dl>


#### radio

```HTML

    <h2>Género</h2>
    <form>
        <label>Masculino</label>
        <input type="radio" name="género" value="masculino">
        <label>Femenino</label>
        <input type="radio" name="género" value="femenino">
        <label>Prefiero no decirlo</label>
        <input type="radio" name="género" value="desconocido">
        <button type="submit" type="reset">
    </form>

```

#### checkbox

```HTML
    <h2>Términos y condiciones</h2>
    <form>
        <label>Acepto los términos y condiciones</label>
        <input type="checkbox" name="validacón" value="términos">
        <label>Quiero recibir el newslatter</label>
        <input type="checkbox" name="validación" value="newslatter">
        <button type="submit" type="reset">
    </form>

```

#### selects

```HTML

    <h2>Productos</h2>
    <form>
        <select name="golosinas" multiple>
            <option value="caramelos">caramelos</option>
            <option value="chocolates">chocolates</option>
            <option value="chupetines">chupetines</option>
        </select>
    </form>

```


```HTML
    <h2>Helados</h2>
    <form>
        <select name="helados">
            <optgroup label="agua">
                <option value="frutilla">Frutilla</option>
                <option value="limón">Limón</option>
                <option value="durazno">Durazno</option>
            </optgroup>
           <optgroup label="crema">
                <option value="chocolate">Chocolate</option>
                <option value="vainilla">Vainilla</option>
                <option value="menta">Menta</option>
            </optgroup>
        </select>
    </form>

```

#### datalist

```HTML
    <h2>Helados</h2>
    <form>
        <input type="list" list="Helados">
        <datalist id="helados">
            <option value="frutilla">Frutilla</option>
            <option value="limón">Limón</option>
            <option value="durazno">Durazno</option>
            <option value="chocolate">Chocolate</option>
            <option value="vainilla">Vainilla</option>
            <option value="menta">Menta</option>
        </datalist>
    </form>

```
*Nota: Es importante destacar que en los elementos de tipo radio y checkbox tanto en name cómo
el value van dentro de input. En cambio, en los elementos selects se deben de colocar el name en el select y el value en el option. El label debe colocarse en los optgroup en las categorías de los elementos selects*

___  


### Tipos | Otros


<dl>
    <dt>color:</dt>
    <dd>Es un control para elejir un color.</dd>
    <dt>range: </dt>
    <dd>Es un control para introducir un número dentro de un rango</dd>
    <dt>reset </dt>
    <dd>Se coloca para los botones para resetear los valores del formularios</dd>
    <dt>submit </dt>
    <dd>Se coloca en los botones para enviar el formulario</dd>
    <dt>file </dt>
    <dd>Es un control para permitirle al usuario seleccionar un archivo desde su equipo</dd>
    <dt>meter </dt>
    <dd>Es un control para representar un valor dentro de un rango</dd>
    <dt>progress </dt>
    <dd>Es un control para ilustrar el progreso de una tarea</dd>
</dl>

```HTML

    <h2>Productos</h2>
    <form>
        <label>Elige la cantidad</label>
        <input type="range">
        <button type="submit" type="reset">
    </form>

```

___

## Atributos para los inputs relacionados con sus tipos

Hay que tener en cuenta que para que funcione sin errores estos tipos de inputs van a requerir ciertos atributos cómo los siguientes:

<dl>
    <dt>required:</dt>
    <dd>Es un atributo que le indicará al usuario que es un campo obligatorio de completar</dd>
    <dt>checked:</dt>
    <dd>Es un atributo que le indicará al navegador que marque esa opción por defecto. Funciona para los radio y los checkbox</dd>
    <dt>selected:</dt>
    <dd>Es un atributo que indica los elementos por defecto en los selects</dd>
    <dt>name: </dt>
    <dd>Es un atributo que indicará el nombre del input o la categoría a la que pertenece </dd>
    <dt>value:</dt>
    <dd>Es el valor dentro de la categoría name a la que pertenece. Cabe destacar que name y value van de la mano en las listas de opciones cómo en los tipos checkbox o radio.</dd>
    <dt>multiple:</dt>
    <dd>Es un atributo que permite al usuario seleccionar más de una opción en los elementos seleccionables de la etiqueta select.</dd>
    <dt>label:</dt>
    <dd>Es un atributo que se le coloca a los optgroup con el nombre de la categoría de los elementos selects.</dd>
    <dt>placeholder:</dt>
    <dd>Es un atributo que permite darle al usuario un indicio de lo que tiene que escribir.</dd>
    <dt>readonly:</dt>
    <dd>Es un atributo le indica al usuario que ese campo es de solo lectura. El campo se envía</dd>
    <dt>disabled:</dt>
    <dd>Es un atributo que desactiva el campo. El campo no se envía</dd>
    <dt>min | max:</dt>
    <dd>Es un atributo que indica los valores máximos y mínimos de valores numéricos</dd>
    <dt>min-length | max-length:</dt>
    <dd>Es un atributo que indica los valores máximos y mínimos de valores de texto</dd>
    <dt>autofocus:</dt>
    <dd>Es un atributo que indica el foco en un campo en específico.</dd>
</dl>


## Considerar la experiencia del usuario

Uno de los errores que se pueden cometer es colocar todas las secciones que puede tener un formulario en una sola página. Esto genera que el usuario se sienta abrumado por el exceso de información ante la falta de simpleza. ***El individuo ha aprendido a lo largo de los tiempos a categorizar aquello que lo rodea para simplificar sus quehaceres diarios, desde usar tablas de multiplicación para simplificar la suma, categorizar sus tareas de manera metódica, hasta la forma de ordenar***. De la misma manera que el categorizar puede simplificar el día con día al individuo, ***categorizar los formularios puede mejorar su experiencia***.

Teniendo en cuenta lo anterior HTML nos proporciona elementos cómo ```<fieldset>``` y ```<legend>``` para seccionar un formulario. De igual manera la MDN recomienda tener cada sección de un formulario en páginas diferentes:

>
>Desde el punto de vista de la experiencia del usuario (UX), es importante recordar que cuanto más grande es tu formulario, más te arriesgas a frustrar a las personas y perder usuarios. Tiene que ser simple y conciso: solicita solo los datos que necesitas.


>Cada vez que tengas un conjunto de botones de opción, debes anidarlos dentro de un elemento ```<fieldset>```. Hay otros casos de uso y el elemento ```<fieldset>``` también se puede usar en general para seccionar un formulario. Idealmente, los formularios largos deberían tener una extensión de varias páginas, pero si un formulario se alarga y ha de estar contenido en una sola página, colocar las diferentes secciones relacionadas dentro de diferentes conjuntos de campos mejora su usabilidad.


Además es recomendable escuchar los lectores de pantalla para validar el correcto marcado HTML:

>
>Debido a la influencia que tiene sobre las tecnologías de asistencia, el elemento ```<fieldset>``` es uno de los elementos clave para crear formularios accesibles. Sin embargo, no hay que abusar de él. Si es posible, cada vez que crees un formulario, intenta escuchar cómo lo interpreta un lector de pantalla. Si suena raro, intenta mejorar la estructura del formulario.


## El uso de ```<div>```, ```<p>``` , ```<ul>``` , ```<li>``` y ```<h...>```

La MDN dice que un formulario no deja de ser marcas HTML y, que, por lo tanto, se puede hacer uso de otros elementos cómo lo descripto en el título.  

```HTML

<form>
    <fieldset>
        <legend>Datos personales</legend>
        <p>
            <label for="name">Nombre</label>
            <input type="text" id="name" name="name">
        </p>
        <p>
            <label for="surname">Apellido</label>
            <input type="text" id="surname" name="surname">
        </p>
        <p>
            <label for="email">Apellido</label>
            <input type="email" id="email" name="email">
        </p>
    </fieldset>
    <fieldset>
        <legend>Género</legend>
        <ul>
            <li>
                <label for="male">Masculino</label>
                <input type="radio" id="male" name="gender" value="male">
            </li>
            <li>
                <label for="female">Femenino</label>
                <input type="radio" id="female" name="gender" value="female">
            </li>
            <li>
                <label for="i-prefer-not-to-say">Prefiero no decirlo</label>
                <input type="radio" id="i-prefer-not-to-say" name="gender" value="i-prefer-not-to-say">
            </li>
        </ul>
    </fieldset>
</form>

```

## ¿Por qué tantos widgets?

Es importante el uso completo según la necesidd y correcto de los widgets o controles debido a lo que se denomina ***validaciones del lado del cliente***.   
Hay dos tipos de validaciones:

- Validaciones del lado del cliente.
- Validaciones del lado del servidor.

Según el artículo <cite cite="https://academy.leewayweb.com/validaciones-lado-cliente-o-lado-servidor/">Validaciones ¿lado clientee o lado servidor?</cite> ***las validaciones del lado del servidor es una necesidad y del lado del cliente es comodidad. Por lo tanto sirve a la experiencia del usuario***.
>
>La validación del lado servidor es una necesidad mientras que la validación del lado cliente es una comodidad.

Es importante aclarar que ***las validaciones del lado del cliente en los formularios no son imprecindibles para la seguridad***, cualquiera podría entrar al inspector de elementos y desactivar estos controles. Por ejemplo, se puede desactivar el require y hacer que un campo pase de ser obligatorio a no obligatorio. Por otro lado, convertir un input de tipo password a tipo text y, en efecto, observar su contraseña.

>"Sin embargo, ¡la validación del lado del cliente no debe considerarse una medida de seguridad exhaustiva! Sus aplicaciones siempre deben realizar comprobaciones de seguridad en cualquier dato enviado por el formulario en el lado del servidor()..."

Las validaciones de formularios, cómo dice la <cite>MDN</cite>, *verifican que los datos estén en el formato correcto y según las restricciones establecidas por la aplicación*.

Por lo tanto ***los controles son la herramientas para comunicarle al usuario si ingresó correctamente los datos, pero no cómo medida de seguridad imprecindible***.

## Conclusión

Hasta ahora se ha visto la importancia de los formularios para la interacción con los usuarios y cómo fundamental para almacenamiento, tratamiento y servicio de los datos para los usuarios. Así también vimos cómo estructurar un formulario, los diferentes tipos de controles y campos, la importancia de no abrumar al usuario con tanta información y, por lo tanto, aprender a seccionar los formularios según categorías. Por útlimo se estudió la importancia de los widgets en las validaciones de formularios en el lado del cliente. ***Por consiguiente queda por entender las diferentes maneras de configurar las características de apariencias en los formularios con *css* con el fín de mejorar su estética***.


___

## Enlaces
- Mi primer formulario HTML (MDN)
  [https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form](https://developer.mozilla.org/es/docs/Learn/Forms/Your_first_form) 

- Introducción a los formularios (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=JGNlQDdN85M&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=42](https://www.youtube.com/watch?v=JGNlQDdN85M&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=42)

- Estructura básica de un formulario (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=Qi2kYmCmJLQ&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=41](https://www.youtube.com/watch?v=Qi2kYmCmJLQ&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=41)

- Name & id (stackoverflow)
[https://es.stackoverflow.com/questions/63780/es-correcto-usar-el-mismo-id-y-name-en-los-input-de-un-formulario-html](https://es.stackoverflow.com/questions/63780/es-correcto-usar-el-mismo-id-y-name-en-los-input-de-un-formulario-html)

- Input (MDN)
[https://developer.mozilla.org/es/docs/Web/HTML/Element/input](https://developer.mozilla.org/es/docs/Web/HTML/Element/input)

- Inputs para fechas (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=cL0cPMdpqlk&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=44](https://www.youtube.com/watch?v=cL0cPMdpqlk&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=44)

- Inputs para móviles (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=_MJqIjiz4BA&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=45](https://www.youtube.com/watch?v=_MJqIjiz4BA&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=45)

- Inputs extra (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=XBWZ-n5AnbE&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=46](https://www.youtube.com/watch?v=XBWZ-n5AnbE&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=46)

- Input radio (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=PGTtW_3ON-g&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=47](https://www.youtube.com/watch?v=PGTtW_3ON-g&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=47)

- Input checkbox (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=dUU2LalQIfA&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=49](https://www.youtube.com/watch?v=dUU2LalQIfA&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=49)

- Elementos selects (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=oYzRuK6ky6k&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=49](https://www.youtube.com/watch?v=oYzRuK6ky6k&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=49)
[https://www.youtube.com/watch?v=BnOpcULpB-Y&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=50](https://www.youtube.com/watch?v=BnOpcULpB-Y&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=50)[https://www.youtube.com/watch?v=tBVhRhF_MtA&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=51](https://www.youtube.com/watch?v=tBVhRhF_MtA&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=51)

- Más elementos para formularios (Curso | Dorian Desings)
[https://www.youtube.com/watch?v=nFVQEiahbvc&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=52](https://www.youtube.com/watch?v=nFVQEiahbvc&list=PLROIqh_5RZeB92ME1GFyeqDVOa-gL0Ybd&index=52)

- Cómo estructurar un formulario HTML
[https://developer.mozilla.org/es/docs/Learn/Forms/How_to_structure_a_web_form](https://developer.mozilla.org/es/docs/Learn/Forms/How_to_structure_a_web_form)

- Validación de formularios del lado del cliente
[https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

- Validaciones ¿lado clientee o lado servidor?
(https://academy.leewayweb.com/validaciones-lado-cliente-o-lado-servidor/)[https://academy.leewayweb.com/validaciones-lado-cliente-o-lado-servidor/]


- Mauro Chojrin (Twitter) - extracto sobre validaciones
(https://twitter.com/mchojrin)[https://twitter.com/mchojrin]

- Using the "accept" attribute on File Inputs - HTML Tutorial
(https://www.youtube.com/watch?v=_J4p2VFNAAk)[https://www.youtube.com/watch?v=_J4p2VFNAAk]

- 07 - tutorial formularios html5 y css3 | input type file y como personalizarlo
(https://www.youtube.com/watch?v=feVXVUNgeb4&list=TLPQMjIwNDIwMjK8f1GozJaRxQ&index=2)[https://www.youtube.com/watch?v=feVXVUNgeb4&list=TLPQMjIwNDIwMjK8f1GozJaRxQ&index=2]













