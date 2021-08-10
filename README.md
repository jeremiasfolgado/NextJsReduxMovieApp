
# [NextJs-Redux-Styled-Components MovieApp](https://next-js-redux-movie-app.vercel.app/)


Esta aplicación surge en el contexto de que mis compañeros de grupo proponen estas tecnologías para el desarrollo de nuestro proyecto final en el bootcamp Henry. Una vez finalizado le bootcamp decidí darle estilos y sumarla a mi portfolio, ya que el estoy muy agradecido porque me permitió acostumbrarme a la sintaxis y anticiparme a obstaculos que luego aparecerían en el proyecto final. Como ejercicio personal la interface esta redactada en inglés.

La App es super simple, consume [OMDb API](https://www.omdbapi.com/) cuando el usuario inserta una palabra o más en la barra de búsqueda se captura la respuesta de la api, si tiene resultados estos son renderizados en pantalla, y si no, muestra el mensaje que devuelve la api. Desde el diseño en general busca tener los elementos mínimos para mantener un mensaje claro, es responsive y desde el UX se le brinda información al usuario de que componentes contienen acciones a partir de animaciones o cambios en sus atributos. Los estilos se desarrollaron integramente en styled-components sin utilización de librerías externas. Como lo mas desafiante de la app el componente de favoritos, esto fue resuelto con un estado de Redux que almacena en un array esa información, teniendo en cuenta que no se agreguen por duplicado y que ademas avise al usuario con algun código que ya tiene almacenada la información.

Si sos programador y queres hacer un Pull request o revisar el codigo, clona el repositorio `npm install` y de
berás crear un archivo .env.local y crear variables de entorno con el siguiente nombre NEXT_PUBLIC_API_KEY y el valor de tu api key. 


![movieApp](https://res.cloudinary.com/ddwvq00p6/image/upload/v1628607261/weatherapp/backtothefuture_jdsi5d.jpg)