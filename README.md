<img src="images/IconHSI_2.png" alt="Descripción de la imagen" width="40" height="24">

🚀 <b>React Tools – Handy Utilities for Developers</b><br />
<i>A collection of useful React components for simplifying development.</i><br />
<br />
📅 FormatDate.jsx – A Simple React Date Formatter<br />
🎯 Why This Component?<br />
There are many ways to handle date formatting in JavaScript, but this is the approach I found to be simple and effective.<br />
My goal was to build a lightweight, flexible solution that correctly processes time zones and multiple languages without unnecessary complexity.<br />
<br />
🚀 **Lightweight and Dependency-Free**<br />
This component handles **date formatting in React** efficiently, without requiring any external libraries.<br />
It supports **multi-language formatting** (`en` → `mm/dd/yyyy`, `es` → `dd/mm/yyyy`) and ensures **proper UTC conversion** to avoid timezone inconsistencies.<br />
<br />
🌟 Features<br />
✅ **Detects if the input contains time ("T") and formats accordingly.**<br />
✅ **Extracts Year, Month, Day, Hour, Minute, and Second with UTC-safe handling.**<br />
✅ **Supports multiple languages:** `"en"` (mm/dd/yyyy) & `"es"` (dd/mm/yyyy).<br />
✅ **Allows different output formats:** `"D"` (Date), `"T"` (Time), `"DT"` (Date & Time).<br />
✅ **No external dependencies – Ready to use directly!**<br />

🚀 Installation & Usage<br />
1️⃣ **Install & Import**<br />
No installation required! Simply import the component into your React project:<br />
<b>import FormatDate from "@/(componentspath)/FormatDate"; or import FormatDate from "@/Components/FormatDate";</b>

2️⃣ Usage Example<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="en" />` Output: 05/12/2025<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="es" />` Output: 12/05/2025<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="en" />` Output: 05/12/2025, 21:31:00<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="es" />` Output: 12/05/2025, 21:31:00<br />
<br />
🛠️ How to Contribute  
🚀 **Want to contribute to `react-tools`?** We'd love your help! Follow these steps to collaborate:  
✅ **1️⃣ Fork this repository:** Click on "Fork" in the top right of this page to create your own copy.  
✅ **2️⃣ Clone your fork:**  
git clone https://github.com/YOUR_USERNAME/react-tools.git  
cd react-tools

✅ 3️⃣ Create a new branch:  
git checkout -b feature-new-component

✅ 4️⃣ Add your new component or improve existing ones.  
✅ 5️⃣ Commit your changes:  
git add .  
git commit -m "Added new feature"  
git push origin feature-new-component  
<<<<<<< HEAD
✅ 6️⃣ Open a Pull Request: Go to GitHub and click "New pull request" to submit your contribution!  
  
📝 Contribution Guidelines  
🔹 Follow the existing folder structure.   
🔹 Ensure your code is clean, optimized, and well-documented.   
🔹 If adding a new component, update the README.md with usage examples.   
🔹 Test your changes before submitting a Pull Request.  
  
🔥 Join our open-source journey and help improve react-tools!   
🚀 📢 Have questions? Open an issue in GitHub or reach out!  
=======
✅ 6️⃣ Open a Pull Request: Go to GitHub and click "New pull request" to submit your contribution!

📝 Contribution Guidelines  
🔹 Follow the existing folder structure.  
🔹 Ensure your code is clean, optimized, and well-documented.  
🔹 If adding a new component, update the README.md with usage examples.  
🔹 Test your changes before submitting a Pull Request.

🔥 Join our open-source journey and help improve react-tools!  
🚀 📢 Have questions? Open an issue in GitHub or reach out!
>>>>>>> 0b5575a (update)

📌 About<br />
🚀 Created by Edison – First published utility to help developers globally. 🔗 GitHub Repository: (https://github.com/EdisonDevTools)<br />
<br />
**Español:**<br />
🛠️ FormatDate.jsx – Un Formateador de Fechas Simple en React<br />
<br />
🌎 ¿Por qué este componente?<br />
Existen muchas formas de manejar fechas en JavaScript, pero este enfoque es simple y eficiente.<br />
Mi intención fue crear una solución ligera y flexible que procesara zonas horarias y múltiples idiomas sin agregar complejidad innecesaria.<br />
<br />
🚀 Sin dependencias externas – Este componente formatea fechas en React sin necesidad de librerías adicionales.<br />
Soporta múltiples idiomas (en → mm/dd/yyyy, es → dd/mm/yyyy) y maneja zonas horarias correctamente con UTC.<br />
<br />
🌟 Características<br />
✅ Detecta si la fecha tiene hora ("T") y la procesa correctamente. <br />
✅ Extrae Año, Mes, Día, Hora, Minuto y Segundo sin errores de zona horaria. <br />
✅ Soporta idiomas múltiples: "en" (mm/dd/yyyy) & "es" (dd/mm/yyyy). <br />
✅ Diferentes formatos de salida: "D" (Fecha), "T" (Hora), "DT" (Fecha y Hora). <br />
✅ Sin librerías externas – Listo para usarse directamente.<br />

🚀 Instalación y Uso<br />
No requiere instalación, solo importa el componente en tu proyecto React: <br />
<b>import FormatDate from "@/(Carpeta de componentes)/FormatDate" o import FormatDate from "@/Components/FormatDate";</b>

Ejemplo de uso:<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="es" />` Salida: 12/05/2025<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="en" />` Salida: 05/12/2025<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="es" />` Salida: 12/05/2025, 21:31:00<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="en" />` Salida: 05/12/2025, 21:31:00<br />
<br />
🛠️ Cómo Contribuir  
<<<<<<< HEAD
🚀 ¿Quieres aportar a react-tools?   
=======
🚀 ¿Quieres aportar a react-tools?  
>>>>>>> 0b5575a (update)
¡Nos encantaría contar con tu ayuda!  
Sigue estos pasos para colaborar:  
✅ 1️⃣ Haz un fork de este repositorio: En la parte superior derecha, haz clic en "Fork" para crear tu propia copia.  
✅ 2️⃣ Clona tu fork:  
git clone https://github.com/TU_USUARIO/react-tools.git  
cd react-tools  
✅ 3️⃣ Crea una nueva rama:  
<<<<<<< HEAD
git checkout -b nueva-funcionalidad  
=======
git checkout -b nueva-funcionalidad
>>>>>>> 0b5575a (update)

✅ 4️⃣ Agrega tu nuevo componente o mejora los existentes.  
✅ 5️⃣ Confirma los cambios:  
git add .  
git commit -m "Agregado nuevo componente"  
<<<<<<< HEAD
git push origin nueva-funcionalidad  

✅ 6️⃣ Abre un Pull Request: Ve a GitHub, haz clic en "New pull request" y envía tu contribución!  
=======
git push origin nueva-funcionalidad

✅ 6️⃣ Abre un Pull Request: Ve a GitHub, haz clic en "New pull request" y envía tu contribución!
>>>>>>> 0b5575a (update)

📝 Guía de Contribución
🔹 Sigue la estructura de carpetas existente.  
🔹 Asegúrate de que tu código esté limpio, optimizado y bien documentado.  
🔹 Si agregas un nuevo componente, actualiza el README.md con ejemplos de uso.  
🔹 Prueba tus cambios antes de enviar un Pull Request.  
🔥 ¡Únete a nuestra iniciativa open-source y ayuda a mejorar react-tools!  
<<<<<<< HEAD
🚀 📢 ¿Tienes dudas? Abre un Issue en GitHub o contáctanos!  
=======
🚀 📢 ¿Tienes dudas? Abre un Issue en GitHub o contáctanos!
>>>>>>> 0b5575a (update)

📌 Autor & Publicación  
🚀 Creado por Edison – Primera utilidad publicada para ayudar a la comunidad. 🔗 Repositorio en GitHub: (https://github.com/EdisonDevTools)<br />
