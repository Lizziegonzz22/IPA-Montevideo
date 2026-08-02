# 🌱 IPA-Montevideo: Calculadora de Pureza Atmosférica Urbano

Un software interactivo de ciencia ciudadana y bioindicadores ambientales desarrollado con **HTML5, CSS3 y JavaScript**. La aplicación permite calcular el Índice de Pureza Atmosférica (IPA) en las diferentes zonas y barrios de Montevideo, evaluando la frecuencia y morfología de los líquenes presentes en la corteza de los árboles urbanos para determinar la calidad del aire en tiempo real.

| Estructura | Estilos | Lógica | Entorno |
| :---: | :---: | :---: | :---: |
| 🧡 **HTML5** | 🔷 **CSS3** | 🟨 **JavaScript** | 📱 **Responsive** |

**PROBAR APLICACIÓN EN VIVO:** [Click aquí para abrir el Monitor Ambiental IPA](https://lizziegonzz22.github.io/IPA-Montevideo/)


---

##   Índice de Contenidos
*   [Características Principales](#características-principales)
*   [Estructura del Proyecto](#estructura-del-proyecto)
*   [¿Cómo Funciona el Sistema?](#cómo-funciona-el-sistema)
*   [Compilación y Ejecución](#compilación-y-ejecución)
*   [Modelado Científico Aplicado](#modelado-científico-aplicado)
*   [Autor](#autor)

---

##   Características Principales

*   **Zonificación Urbana:** Adapta los cálculos matemáticos según las realidades de tránsito de Montevideo (Centro/Tres Cruces vs. Áreas Protegidas como Santiago Vázquez o El Prado).
*   **Identificación de Morfotipos:** Clasifica los líquenes por su tolerancia ecológica (Crustosos, Foliosos y Fruticulosos) para automatizar la recolección de datos de campo.
*   **Interfaz Dinámica Novedosa:** Modifica el entorno visual del usuario en tiempo real sin recargar la página, utilizando variables de color internacionales para la calidad del aire.
*   **Diseño Adaptativo:** Desarrollado bajo la filosofía *Mobile First*, permitiendo que los investigadores utilicen la aplicación en sus celulares directo en la calle.

---

##   Estructura del Repositorio

El proyecto mantiene una arquitectura web frontend limpia y estándar:

```bash
IPA-Montevideo/
├── index.html          # Estructura semántica, formulario y opciones de barrios
├── styles.css          # Diseño moderno, modo oscuro y animaciones de alerta
├── script.js           # Lógica matemática, multiplicadores de zona y manipulación DOM
└── README.md           # Documentación del proyecto (este archivo)
```

---

##   ¿Cómo Funciona el Sistema?

El software procesa los datos ingresados a través de tres etapas consecutivas:

```text
 1. Carga de Muestra           2. Algoritmo JavaScript        3. Respuesta Visual DOM
   (Barrio + Líquenes)          (Peso + Multiplicador)         (Alerta de Color + % Barra)
            │                              │                               │
            ▼                              ▼                               ▼
 [ Formulario de Campo ] ────────► [ Ecuación del IPA ] ────────► [ Diagnóstico en Pantalla ]
```

1.  **Entrada:** El usuario selecciona la zona urbana de Montevideo y tilda los líquenes observados en el tronco del árbol.
2.  **Cálculo:** JavaScript asigna un peso biológico a cada especie (mayor puntaje a las más sensibles) y aplica un factor de corrección por polución vial según la zona elegida.
3.  **Salida:** El DOM revela el cuadro de resultados y pinta la interfaz de acuerdo al rango: **Rojo** (Aire Malo / Menor a 15), **Amarillo** (Aire Moderado / 16 a 45) o **Verde** (Aire Excelente / Mayor a 45).

---

##   Compilación y Ejecución

Al ser un proyecto web nativo, **no requiere instalación de servidores ni consolas adicionales**.

### Ejecución Local:
1.  Descargá los archivos `index.html`, `styles.css` y `script.js` en una misma carpeta.
2.  Hacé doble clic sobre el archivo `index.html`.
3.  El proyecto se abrirá automáticamente en tu navegador web predeterminado (Chrome, Firefox, Safari, Edge).

### Despliegue Online (GitHub Pages):
Este proyecto está configurado para ejecutarse en la nube. Podés activar tu propio enlace web entrando a la pestaña **Settings > Pages** de este repositorio y seleccionando la rama `main` para guardar.

---

##   Modelado Científico Aplicado

El programa automatiza una versión adaptada de la metodología clásica de liquenometría urbana:

*   **Líquenes Crustosos (Valor 12):** Tipo costra. Soportan altos niveles de dióxido de nitrógeno y azufre emitidos por los caños de escape.
*   **Líquenes Foliosos (Valor 28):** Tipo hoja. Requieren condiciones intermedias de humedad y menor polución por tránsito.
*   **Líquenes Fruticulosos (Valor 50):** Tipo arbusto. Bioindicadores de máxima pureza. Desaparecen ante la mínima presencia de smog.

$$IPA = \frac{\text{Suma de Puntos de Especies} \times \text{Factor de Zona}}{4 - \text{Especies Encontradas}}$$

---

##   Autor

*   **Lizzie González** - *Desarrollo e Investigación Ambiental* - [Lizziegonzz22](https://github.com)
