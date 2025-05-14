🎯 Why This Component?<br />
There are many ways to handle date formatting in JavaScript, but this is the approach I found to be simple and effective.<br />
My goal was to build a lightweight, flexible solution that correctly processes time zones and multiple languages without unnecessary complexity.<br />
<br />
📅 FormatDate.jsx – A Simple React Date Formatter<br />
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

📌 About<br />
🚀 Created by Edison – First published utility to help developers globally. 🔗 GitHub Repository: (https://github.com/EdisonDevTools)<br />
<br />
**Español:**<br />
🌎 ¿Por qué este componente?<br />
Existen muchas formas de manejar fechas en JavaScript, pero este enfoque es simple y eficiente.<br />
Mi intención fue crear una solución ligera y flexible que procesara zonas horarias y múltiples idiomas sin agregar complejidad innecesaria.<br />
<br />
🛠️ FormatDate.jsx – Un Formateador de Fechas Simple en React<br />
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
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="es" />`  Salida: 12/05/2025<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="en" />`  Salida: 05/12/2025<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="es" />` Salida: 12/05/2025, 21:31:00<br />
`<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="en" />` Salida: 05/12/2025, 21:31:00<br />
<br />
📌 Autor & Publicación<br />
🚀 Creado por Edison – Primera utilidad publicada para ayudar a la comunidad. 🔗 Repositorio en GitHub: (https://github.com/EdisonDevTools)<br />
