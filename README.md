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

### Análisis del Impacto de los Índices:
Al ejecutar los scripts sin haber creado los índices previamente, se observa que el tiempo de ejecución se mantiene entre 40 y 46 ms, sin importar el tipo de consulta que se realice. Esto indica que, en ausencia de índices, MongoDB tiene que realizar un escaneo completo de la colección, lo que ralentiza las consultas. Sin embargo, al analizar los tiempos de ejecución de los mismos scripts después de haber creado los índices, se nota una diferencia sumamente significativa. En al menos dos de los scripts, el tiempo de ejecución se redujo en aproximadamente un 95%, mientras que en el tercero la reducción fue de aproximadamente un 50%. Esto demuestra que la implementación de índices tiene un impacto considerable en el rendimiento de las consultas, ya que permite a MongoDB acceder a los datos de manera mucho más eficiente. Los índices son esenciales cuando se manejan grandes volúmenes de datos, ya que optimizan la búsqueda y mejoran significativamente la velocidad de las consultas, disminuyendo la carga en el sistema y evitando escaneos innecesarios de la colección. Esto resalta la importancia de utilizar índices en bases de datos MongoDB, especialmente cuando se trata de colecciones grandes y consultas frecuentes. 