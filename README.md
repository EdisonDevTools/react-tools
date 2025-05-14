🎯 Why This Component?
There are many ways to handle date formatting in JavaScript, but this is the approach I found to be simple and effective. 
My goal was to build a lightweight, flexible solution that correctly processes time zones and multiple languages without unnecessary complexity.

📅 FormatDate.jsx – A Simple React Date Formatter  
🚀 **Lightweight and Dependency-Free**  
This component handles **date formatting in React** efficiently, without requiring any external libraries. 
It supports **multi-language formatting** (`en` → `mm/dd/yyyy`, `es` → `dd/mm/yyyy`) and ensures **proper UTC conversion** to avoid timezone inconsistencies.  

🌟 Features  
✅ **Detects if the input contains time ("T") and formats accordingly.**  
✅ **Extracts Year, Month, Day, Hour, Minute, and Second with UTC-safe handling.**  
✅ **Supports multiple languages:** `"en"` (mm/dd/yyyy) & `"es"` (dd/mm/yyyy).  
✅ **Allows different output formats:** `"D"` (Date), `"T"` (Time), `"DT"` (Date & Time).  
✅ **No external dependencies – Ready to use directly!**  

🚀 Installation & Usage  
1️⃣ **Install & Import**  
No installation required! Simply import the component into your React project:  
import FormatDate from "@/(componentspath)/FormatDate"; or import FormatDate from "@/Components/FormatDate";

2️⃣ Usage Example
<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="en" />   // Output: 05/12/2025
<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="es" />   // Output: 12/05/2025
<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="en" />  // Output: 05/12/2025, 21:31:00
<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="es" />  // Output: 12/05/2025, 21:31:00

📌 About
🚀 Created by Edison – First published utility to help developers globally. 🔗 GitHub Repository: (https://github.com/EdisonDevTools)

**Español:**
🌎 ¿Por qué este componente?
Existen muchas formas de manejar fechas en JavaScript, pero este enfoque es simple y eficiente. 
Mi intención fue crear una solución ligera y flexible que procesara zonas horarias y múltiples idiomas sin agregar complejidad innecesaria.

🛠️ FormatDate.jsx – Un Formateador de Fechas Simple en React
🚀 Sin dependencias externas – Este componente formatea fechas en React sin necesidad de librerías adicionales. 
Soporta múltiples idiomas (en → mm/dd/yyyy, es → dd/mm/yyyy) y maneja zonas horarias correctamente con UTC.

🌟 Características
✅ Detecta si la fecha tiene hora ("T") y la procesa correctamente. 
✅ Extrae Año, Mes, Día, Hora, Minuto y Segundo sin errores de zona horaria. 
✅ Soporta idiomas múltiples: "en" (mm/dd/yyyy) & "es" (dd/mm/yyyy). 
✅ Diferentes formatos de salida: "D" (Fecha), "T" (Hora), "DT" (Fecha y Hora). 
✅ Sin librerías externas – Listo para usarse directamente.

🚀 Instalación y Uso
No requiere instalación, solo importa el componente en tu proyecto React: import FormatDate from "@/(Carpeta de componentes)/FormatDate" or import FormatDate from "@/Components/FormatDate";

Ejemplo de uso:
<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="es" />   // Salida: 12/05/2025
<FormatDate date="2025-05-12T21:31:00.000000Z" format="D" language="en" />   // Salida: 05/12/2025
<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="es" />  // Salida: 12/05/2025, 21:31:00
<FormatDate date="2025-05-12T21:31:00.000000Z" format="DT" language="en" />  // Salida: 05/12/2025, 21:31:00

📌 Autor & Publicación
🚀 Creado por Edison – Primera utilidad publicada para ayudar a la comunidad. 🔗 Repositorio en GitHub: (https://github.com/EdisonDevTools)
