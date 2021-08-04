# 07-javascript-basics

## Javascript Examples

- Seleccionar el botón de SCV e iniciar Repositorio
- Seleccionar la carpeta con el proyecto (nombre)
- Se muestran los archivos con cambios o que no han sido adicionados al repo
- Adicionar archivos al Staged Area (pulsar en el +)
- Si seleccionas el archivo te debe mostrar las líneas diferentes
- Realizar commit indicando un mensaje y pulsar (+) o [ctrl + Enter]
- Los archivos no aparecerán en el Staged Area

### Steps summary

- Create a directory (folder) for your code
- Add a file
- Git inicialize
- Edit code
- Add file to the Stage Area
- Commit changes

# Indicar un repositorio remoto

- Adicionar un repositorio remoto (ctrl + shift + p)
- Pulsar: add remote
- Entrar la url del repositorio remoto
- Entrar el nombre del repositorio remoto
- Ejecutar: git fetch (para habilitar actualizaciones periodicas)
  - VSC abre una ventana, pulsar yes

### Steps summary

- Add a remote repo (Hey Git, I have a Remote!)
- Git fetch

# Sincronizando el código con Github

- En el borde inferior derecho hay botón (publicar cambios)
- Ejecutar: Git sync
- Entrar credenciales

## Actualizando cambios desde Github al repo local

- Puedes ejecutar: git pull from...
- o ejecutar: git sync

# Creando branch

- Puedes verificar las ramas: git checkout to (muestra las ramas locales y remotas)
- Ejecutar: git create branch
- El archivo modificado muestra una 'M' a la izquierda
- Ejecutar: git commit
- Si cambio a la rama master: git checkout (no están los cambios)
- Para actualizar los cambios en la rama master:
  - git checkout master
  - git merge branch (seleccionar la rama)

VSC solo envia a Github los cambios realizados en la rama seleccionada

- Selecciono la rama que deseo sincronizar: git checkout
- Ejecutar: git sync

# Para clonar un repositorio remoto para tu repo local

- Crear un directorio local con el mismo nombre
- Abrir VSC y ejecutar: git clone (poner la url)
- Indicar el directorio para almacenarlo

- Git commit all (para confirmar todos los cambios)
