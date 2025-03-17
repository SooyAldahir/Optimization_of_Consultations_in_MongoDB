# Optimizacion de consultas en MongoDB

Esta es una actividad para reforzar los conocimiento obtenidos durante las clases de Base de datos II, en las cuales debemos hacer uso de idices para optimizar consultas en una base de datos no relacional (MongoDB). El hacer uso de los indices, nos ayuda a hacer que nuestras consultas puedan ser mas eficientes la momento de solicitar alguna informacion de nuestr base de datos

### El modelo de datos utilizado es una coleccion de productos con los siguientes campos:
- `name`: Nombre del producto.
- `category`: Categoría del producto (por ejemplo, "electronica", "ropa").
- `price`: Precio del producto.
- `stock`: Cantidad disponible en inventario.
- `date`: Fecha de creación o actualización del producto.

### Comparacion de tiempos de ejecucion:
#### Sin indices:
- Consulta por categoría: **Tiempo sin índices: 42 ms**
- Consulta por nombre: **Tiempo sin índices: 41 ms**
- Consulta por fecha: **Tiempo sin índices: 45 ms**

#### Con indices:
- Consulta por categoría: **Tiempo con índices: 24 ms**
- Consulta por nombre: **Tiempo con índices: 0 ms**
- Consulta por fecha: **Tiempo con índices: 2 ms**