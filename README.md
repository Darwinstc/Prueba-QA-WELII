# Prueba técnica QA - WELII

Repositorio de la prueba técnica de QA que reúne pruebas de servicios REST y SOAP con Postman, automatización web con Playwright y documentación de casos de prueba.

## 1. Pruebas REST con Postman

**Servicio:** https://dummyjson.com/

1. Abrir Postman y seleccionar **Import**.
2. Importar `Welii Postman.postman_collection.json`.
3. Ejecutar las tres solicitudes:
   - **01 - Login exitoso:** comprobar HTTP 200, token y datos del usuario.
   - **02 - Login fallido:** verificar el rechazo de credenciales incorrectas y la ausencia de token.
   - **03 - Listar:** consultar `/products` y validar estructura y paginación.
4. Revisar los resultados de las validaciones en Postman.

## 2. Pruebas SOAP con Postman

**Servicio:** http://www.dneonline.com/calculator.asmx

1. Importar `Welii Soap.postman_collection.json`.
2. Revisar el XML enviado a la operación `Add` y sus encabezados.
3. Ejecutar la solicitud y verificar el código HTTP y el contenido XML.

**Observación pendiente de ajuste:** La colección publicada envía `intA=5` e `intB=3`, pero las validaciones esperan una respuesta de error. Para el caso positivo se debe comprobar HTTP 200 y `AddResult=8`. Para el negativo, enviar un valor inválido y comprobar el error SOAP.

La disponibilidad del servicio depende de un proveedor externo.

## 3. Automatización web con Playwright

**Sitio:** https://www.saucedemo.com/

**Requisitos:** Node.js, npm y conexión a Internet.

Clonar el repositorio y preparar las dependencias mediante estos comandos, en orden:

1. `git clone https://github.com/Darwinstc/Prueba-QA-WELII.git`
2. `cd Prueba-QA-WELII`
3. `npm init -y`
4. `npm install --save-dev @playwright/test`
5. `npx playwright install chromium`

**Ejecutar las pruebas:**

`npx playwright test qawelii.spec.js`

**Generar y consultar el reporte HTML:**

- `npx playwright test qawelii.spec.js --reporter=html`
- `npx playwright show-report`

El archivo `qawelii.spec.js` contiene tres escenarios:

- **Login exitoso:** iniciar sesión y verificar la pantalla de productos.
- **Login fallido:** comprobar que se muestra un error al utilizar una contraseña incorrecta.
- **Agregar producto:** añadir Sauce Labs Backpack y comprobar que aparece en el carrito.

El repositorio todavía no incluye `package.json` ni `playwright.config.js`. Los comandos anteriores permiten preparar el entorno para ejecutar el archivo existente.

## 4. Documentación y evidencias

El archivo `Prueba_QA_Welii.xlsx` contiene la documentación de las pruebas y el caso de uso de ingreso de pacientes.

Los registros contemplan precondiciones, pasos de ejecución, resultados, estado de cada caso, evidencias y defectos asociados.

Los resultados deben corresponder a pruebas ejecutadas realmente. Cuando un caso no se haya ejecutado, deberá identificarse como **Sin ejecutar**.

## Consideraciones

- Las pruebas utilizan servicios y aplicaciones públicas de demostración.
- La disponibilidad de los servicios externos puede afectar la ejecución.
- Los resultados y las evidencias se documentan independientemente de los scripts automatizados.

