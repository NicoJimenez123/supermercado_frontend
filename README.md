# Frontend
Este es el frontend para nuestra página web

# Para crear el contenedor ejecutar el siguiente comando dentro del directorio raíz:
```
docker build -t supermercado -f Dockerfile .
```
# Para ejecutar el contenedor y permitir acceder al servidor desde fuera del container ejecutar:
```
docker run -d -p 8080:3000 supermercado
```
# Para acceder al contenedor ejecutar:
```
docker exec -it {container_id} /bin/bash
```
# Para obtener el container_id ejecutar:
```
docker ps
```