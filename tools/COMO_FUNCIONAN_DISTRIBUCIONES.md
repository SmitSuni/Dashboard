# 📊 ¿Cómo funcionan las Distribuciones Estadísticas?

## 🎯 Diferencia Fundamental

### Tu Calculadora de Estadística (statistics.html)
✅ **Trabaja con DATOS REALES**
- Pegas datos de un CSV o ingresas manualmente
- Ejemplo: `[23, 45, 67, 34, 56, 78, 90, 12]`
- Calcula estadísticas **descriptivas** (media, mediana, desv. estándar)
- El histograma muestra la **distribución de TUS datos**

### Visualizador de Distribuciones (distributions.html)
✅ **Trabaja con MODELOS MATEMÁTICOS TEÓRICOS**
- **NO necesita datos**
- Usa **fórmulas matemáticas** de probabilidad
- Los **sliders** ajustan los **parámetros** del modelo teórico
- Los gráficos muestran la **función de probabilidad** del modelo

---

## 📐 ¿Qué son las Distribuciones Teóricas?

Son **modelos matemáticos** que describen cómo se distribuyen las probabilidades de un fenómeno aleatorio.

### Ejemplo de Distribución Normal

**Parámetros:**
- `μ` (mu) = Media = 0
- `σ` (sigma) = Desviación estándar = 1

**Fórmula matemática (PDF):**
```
f(x) = (1 / (σ√2π)) × e^(-(x-μ)²/(2σ²))
```

**Cuando ajustas los sliders:**
- Cambias `μ` → La campana se mueve horizontalmente
- Cambias `σ` → La campana se ensancha o comprime

**NO estás viendo datos reales, estás viendo la CURVA TEÓRICA de probabilidad.**

---

## 🔍 Casos de Uso de Cada Herramienta

### 📊 Calculadora de Estadística
**Úsala cuando tengas DATOS REALES:**
- Calificaciones de estudiantes: `[15, 18, 12, 17, 14, 16]`
- Edades de personas encuestadas
- Tiempos de ejecución de un programa
- Resultados de experimentos

**Pregunta que responde:**
*"¿Qué características tienen MIS datos?"*

---

### 📈 Visualizador de Distribuciones
**Úsala cuando necesites:**

#### 1. **Estudiar Modelos Teóricos**
- Ver cómo se ve una Normal(μ=5, σ=2)
- Comparar diferentes distribuciones
- Entender conceptos para un examen

#### 2. **Calcular Probabilidades Teóricas**
- Si X ~ Normal(100, 15), ¿cuál es P(90 < X < 110)?
- Si lanzas 20 monedas, ¿cuál es P(X = 12 caras)?
- Si llegan 5 clientes/hora, ¿cuál es P(X ≥ 7)?

#### 3. **Pruebas de Hipótesis**
- Valores críticos de t-Student para intervalo de confianza
- χ² crítico para prueba de bondad de ajuste
- Regiones de rechazo

**Pregunta que responde:**
*"¿Cómo se comporta un fenómeno que sigue este modelo matemático?"*

---

## 🎓 Ejemplo Práctico Combinando Ambas

### Caso: Alturas de estudiantes

**Paso 1: Recolectar datos (Calculadora de Estadística)**
```
Datos: [165, 170, 168, 172, 169, 175, 171, 167, 173, 170]
Resultado:
- Media = 170 cm
- Desv. Est. = 3.16 cm
- Distribución cercana a normal
```

**Paso 2: Modelar teóricamente (Visualizador de Distribuciones)**
```
Asumir: X ~ Normal(μ=170, σ=3.16)

Usar el visualizador para:
- Ajustar μ = 170
- Ajustar σ = 3.16
- Calcular P(165 < X < 175) = ?
```

**Conclusión:**
Si las alturas siguen una distribución normal con estos parámetros, aproximadamente el 88% de los estudiantes miden entre 165 y 175 cm.

---

## 🧮 ¿Cómo se Generan los Gráficos?

### Distribución Normal
```javascript
// Para cada punto x en el eje horizontal
for (let x = μ - 4σ; x <= μ + 4σ; x += 0.1) {
    // Calcular altura de la curva usando la fórmula
    y = (1 / (σ × √(2π))) × e^(-(x-μ)²/(2σ²))

    // Dibujar punto (x, y) en el gráfico
}
```

### Distribución Binomial
```javascript
// Para cada valor posible k = 0, 1, 2, ..., n
for (let k = 0; k <= n; k++) {
    // Calcular probabilidad usando fórmula
    P(X = k) = C(n,k) × p^k × (1-p)^(n-k)

    // Dibujar barra de altura P(X = k)
}
```

**NO hay datos de entrada, solo matemática pura.**

---

## 🎯 Resumen Rápido

| Aspecto | Calculadora Estadística | Visualizador Distribuciones |
|---------|------------------------|----------------------------|
| **Entrada** | Datos reales (CSV, manual) | Parámetros (μ, σ, λ, n, p) |
| **Proceso** | Calcula estadísticas descriptivas | Evalúa fórmulas matemáticas |
| **Salida** | Media, mediana, moda de TUS datos | Curvas de probabilidad teóricas |
| **Gráfico** | Histograma de frecuencias | PDF/PMF del modelo |
| **Ejemplo** | Analizar notas de examen | Modelar cómo se distribuyen notas |

---

## 💡 Analogía Final

**Calculadora de Estadística** = Analizar las estaturas de los estudiantes de TU salón
- Mides a 30 estudiantes
- Calculas el promedio: 168 cm
- Ves el histograma de TUS datos

**Visualizador de Distribuciones** = Usar un modelo teórico de estaturas humanas
- Dices: "Asumo que las estaturas siguen Normal(μ=168, σ=8)"
- Ves la curva teórica de esa distribución
- Calculas probabilidades basadas en el modelo

---

## 🚀 ¿Cuándo Usar Cada Una?

### Usa Calculadora de Estadística cuando digas:
- "Tengo estos datos y quiero analizarlos"
- "¿Cuál es la media de mis observaciones?"
- "¿Mis datos siguen distribución normal?" (test)

### Usa Visualizador de Distribuciones cuando digas:
- "Si X sigue Normal(10, 2), ¿cuál es P(X > 12)?"
- "¿Cómo se ve una Binomial(20, 0.3)?"
- "Necesito el valor crítico de t-Student para df=15"
- "¿Cuál es la forma de Chi-cuadrado con 5 grados de libertad?"

---

**Autor:** Smit Alexander Suni Morales
**Carrera:** Ingeniería Estadística e Informática
**Universidad:** UNAP
