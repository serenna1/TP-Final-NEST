
Veterinaria Pet Link REST API – Guía de Usuario
Descripción:
Esta API REST está diseñada para gestionar mascotas, dueños, turnos veterinarios e historial médico. Permite registrar y consultar mascotas, agendar turnos, registrar diagnósticos, vacunas y tratamientos, y consultar el historial completo de cada mascota.

Rutas y Uso:

1 Mascotas

- Listar todas las mascotas
  Método: GET
  URL: /inicio
  Respuesta: JSON con todas las mascotas registradas.


- Consultar mascota por ID
  Método: GET
  URL: /inicio/:id
  Parámetros:
    id: ID de la mascota
  Respuesta: JSON con los datos de la mascota solicitada o mensaje si no se encuentra.
- Registrar nueva mascota
  Tener en cuenta: las comillas dobles "" en cada valor   
  Método: POST
  URL: /inicio/registro
  Body (JSON):
     {
      "id": "4",
      "nombre": "Felicitas",
      "raza": "Labrador Retriever",
      "edad": "5",
      "vacunas": [{ "fecha": "20-09-15", "nombre": "Rabia" }],
      "tratamientos": [{ "fecha": "20-10-26", "descripcion": "Ninguno" }],
      "diagnostico": [{ "fecha": "20-10-25", "descripcion": "Revision Anual" }],
      "duenio": "Andrea Filipina",
      "telefono": "555-9955"
 }
  Respuesta: Mensaje de confirmación.
2 Administración 

- Listar turnos
  Método: GET
  URL: /gestion/turnos
  Respuesta: JSON con todos los turnos agendados.
- Agendar nuevo turno
  Tener en cuenta: las comillas dobles ""
  Método: POST
  URL: /gestion/nuevo_turno
  Body (JSON):
    {
            "telefono": "555-1234",
            "duenio": "Juan Perez",
            "nombreMascota": "Firulais",
            "fecha": "20-11-25",
            "hora": "16:00"
        }
  Respuesta: Mensaje de confirmación.
- Consultar historial completo de mascotas
  Método: GET
  URL: /gestion/ficha
  Respuesta: JSON con todos los historiales de mascotas.
- Consultar historial por ID de mascota
  Método: GET
  URL: /gestion/ficha/:id
  Parámetros:
    id: ID de la mascota
  Respuesta: JSON con el historial de la mascota solicitada o mensaje si no se encuentra.
  - Agregar informe (diagnósticos, vacunas, tratamientos) a una mascota
  Tener en cuenta: es por id es decir hay que mirar primero el id de la mascota de Juan Perez (1) y luego a ese cliente se le agrega a  informe  (/gestion/informe/1). Para corroborar si se se agrego vamos a /gestion/ficha/1

  Método: POST
  URL: /gestion/informe/:id
  Parámetros:
    id: ID de la mascota
  Body (JSON):
       {
      "diagnostico": [{ "fecha": "2025-11-01", "descripcion": "Infeccion Urinaria" }],
      "vacunas": [{ "fecha": "20-12-2024", "nombre": "Rabia" }],
      "tratamientos": [{ "fecha": "20-12-2024", "descripcion": "Antibióticos" }],
      "duenio": "Juan Perez"
    }
  Respuesta: Mensaje de confirmación o error si la mascota no existe o los datos son inválidos.
  - Consultar mascotas que necesitan revisión anual
  Método: GET
  URL: /gestion/chequeos_anuales
  Respuesta: JSON con mensaje y lista de mascotas que no tienen registrado un diagnóstico de "Revision Anual".

  Consideraciones adicionales:
- Todas las respuestas se devuelven en formato JSON.
- Validaciones básicas incluidas: no permitir registrar mascotas sin dueño, no permitir turnos con datos incompletos, manejo de errores si no se encuentra la mascota.

