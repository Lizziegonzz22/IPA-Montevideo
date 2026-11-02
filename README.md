# IPA-Montevideo: Monitor Ambiental de Pureza Atmosférica Urbano 

La aplicación permite calcular el Índice de Pureza Atmosférica (IPA) en zonas clave de Montevideo, evaluando la presencia y morfología de los líquenes en la corteza de los árboles. 

**Probar aplicación:** [Monitor Ambiental IPA](https://lizziegonzz22.github.io/IPA-Montevideo/)
---

## Índice de Contenidos
* [Características Principales](#características-principales)
* [Estructura del Proyecto](#estructura-del-proyecto)
* [¿Cómo Funciona el Sistema?](#cómo-funciona-el-sistema)
* [Modelado Científico Aplicado](#modelado-científico-applied)
* [Autor](#autor)

---

## Características Principales

* **Zonificación Urbana Selectiva:** Adapta los cálculos matemáticos según el entorno vial de tres puntos críticos de Montevideo (**Centro, Prado y Colón**).
* **Identificación de Morfotipos:** Clasifica los líquenes por su tolerancia ecológica (Crustosos, Foliosos y Fruticulosos) para facilitar el muestreo ambiental.

---

## Estructura del Proyecto

El proyecto mantiene una arquitectura web frontend limpia, modular y estándar:

```bash
IPA-Montevideo/
├── index.html          # Estructura semántica, menú con Centro, Prado y Colón, y nodos decorativos
├── styles.css          # Paleta forestal, vectores de hongos/árboles en CSS y tarjetas orgánicas
├── script.js           # Lógica matemática ajustada a las 3 zonas y manipulación dinámica del DOM
└── README.md           # Documentación del proyecto (este archivo)
```

---

## ¿Cómo Funciona el Sistema?

El software procesa los datos ingresados a través de tres etapas consecutivas:

```text
 1. Carga de Muestra           2. Algoritmo JavaScript        3. Respuesta Visual DOM
   (Barrio + Líquenes)          (Peso + Multiplicador)         (Alerta Forestal + Barra)
            │                              │                               │
            ▼                              ▼                               ▼
 [ Formulario de Campo ] ────────► [ Ecuación del IPA ] ────────► [ Diagnóstico en Pantalla ]
```

1. **Entrada:** El usuario selecciona el barrio de Montevideo (**Centro**, **El Prado** o **Colón**) y marca las tipologías de líquenes detectadas en el tronco del árbol.
2. **Cálculo:** JavaScript asigna el peso biológico correspondiente a cada morfotipo y aplica el factor de corrección ambiental simulado para la zona elegida:
   * **Centro (0.6):** Alta contaminación por tránsito denso que disminuye los índices.
   * **Colón (1.2):** Entorno periférico semiurbano con buena cobertura vegetal.
   * **Prado (1.4):** Zona de parques con alta humedad que beneficia activamente el ecosistema de bioindicadores.
3. **Salida:** El DOM revela el bloque de resultados calculando el puntaje final y pintando la barra medidora según los rangos adaptados de calidad del aire: **Rojo** (Aire Mala / ≤ 15.0), **Amarillo** (Aire Moderada / 15.1 a 45.0) o **Verde** (Aire Excelente / > 45.0).

---

## Modelado Científico Aplicado

El programa automatiza una versión simplificada de la metodología clásica de liquenometría urbana:

* **Líquenes Crustosos (Valor 12):** Tipo costra. Soportan altos niveles de dióxido de nitrógeno y azufre emitidos por los caños de escape viales.
* **Líquenes Foliosos (Valor 28):** Tipo hoja. Requieren condiciones intermedias de humedad y menor impacto atmosférico vehicular.
* **Líquenes Fruticulosos (Valor 50):** Tipo arbusto. Bioindicadores de máxima pureza. Desaparecen por completo ante la mínima presencia de smog.

$$IPA = \frac{\text{Suma de Puntos de Especies} \times \text{Factor de Zona}}{4 - \text{Especies Encontradas}}$$

---

## Autor

* **Lizzie González** - [Lizziegonzz22](https://github.com)
