# CypressApiTesting
Para iniciar el proyecto, primero devemos instalar el servidor json, para ello mediante un terminal en la carpeta del servidor haremos: 
  
 1-> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
 
 2-> export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

 3-> json-server --watch db.json

Con esto ya tendriamos el servidor en funcionamiento y a la espera, a continuacion en otro terminal esta vez en el directorio del proyecto introducimos:
npx cypress open

El cypress se abrira y seleccionamos el navegador deseado en esta caso suelo usar Google Chrome, y ya podremos correr los tests de test.cy.js
