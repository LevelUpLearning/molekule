---
title: Métodos Numericos con App Designer 
author: Juan Carlos
date: 2022-10-13
tags: ["post", "analisis_numerico"]
image: /assets/blog/appDesigner.jpg
imageAlt: 
description: Resolución de un problema usando Newton Raphson en Matlab App Designer.
---

## Aplicación  de Newton Raphson en un problema de Química

### Newton Raphson

En análisis numérico, el método de Newton es un algoritmo para encontrar aproximaciones de los ceros o raíces de una función real. También puede ser usado para encontrar el máximo o mínimo de una función, encontrando los ceros de su primera derivada.

### Descripción del Método

El método de Newton es un método abierto, en el sentido de que no está garantizada su convergencia global. La única manera de alcanzar la convergencia es seleccionar un valor inicial lo suficientemente cercano a la raíz buscada. Aunque no sea siempre el mejor método para un problema dado, su simplicidad formal y su rapidez de convergencia hacen que, con frecuencia, sea el primer algoritmo a considerar para esta tarea.

Para ultilizar el método debemos acondicionar la ecuación a resolver a la forma $f(x)=0$ y aplicaremos la formula:

$$
\tag{1} f(x)=0
$$

$$
\tag{2} f'(x_o)=\frac{f(x_o+h)-f(x_o-h)} {2 \cdot h}
$$

$$
\tag{3} x_1=x_o - \frac {f(x_o)} {f'(x_o)}
$$

Criterio de paro:

$$
\tag{4} error=|x_1-x_o|
$$

$$
\tag{5} x_o=x_1
$$
### Aplicación del Método

1. Definir: $x_o$ , $error$, $h$ (valor del orden $10^{-5}$ o menor) , $tol$ (valor del orden $10^{-3}$ o menor)
2. Definir la ecuación a resolver: $f(x)=0$
3. Hallar $f(x_o)$ remplazando $x_o$ en la ecuación (1)
4. Hallar $f'(x_o)$ remplazando $h$ y $x_o$ en la ecuación (2)
5. Hallar $x_1$ remplazando $x_o$ , $f(x_o)$ , $f'(x_o)$ en la ecuación (3)
6. Hallar el $error$, con la ecuación (4)
7. Comparar $error$ contra $tol$
8. Si $error$>$tol$, entonces aplicar la ecuación (5), y volver al paso (3)
9. Si $error$<$tol$, entonces terminan las iteraciones, $x_1$ es solución final. 

### Estudio de caso

En un proceso de ingeniería química el vapor de agua $(H_{2}O)$ se calienta a temperaturas lo suficientemente altas para que una porción significativa del agua se disocie, o se rompa, para formar oxígeno $(O_2)$ e hidrógeno $(H_2)$:

$$
H_{2}O \leftrightarrow H_2 + \frac 1 2 O_2
$$

Si se asume que ésta es la única reacción que se lleva a cabo, la fracción molar x de $H_{2}O$ que se disocia se representa por:

$$
K=\frac x {1-x} \sqrt{\frac {2\cdot p_t} {2+x}}
$$

Donde:

K = la constante de equilibrio de la reacción, K=0.04 

$P_t$= la presión total de la mezcla, $P_t$= 3.5 atm 

Determine el valor de x que satisfaga la ecuación.

### Solución

Comenzaremos por realizar la suiguiente interfaz gráfica para nuesdtra aplicación, se ha cambiado los nombres de los objetos utilizados en el *Component  Browser* y tambien los textos que muestran en en la interfaz mediante el *Component Properties*.

<p style="text-align:center;"><img src="../../assets/blog/AppDesNewton/fig1.jpg" height="100%" width="100%"/></p>

<p style="text-align:center; font-size: small">Figura 1: Diseño de la interfaz gráfica de nuestra Aplicación</p>

Luego debemos programar todo el método de Newton Raphson en el boton CALCULAR:

<p style="text-align:center;"><img src="../../assets/blog/AppDesNewton/fig2.jpg" height="100%" width="100%"/></p>

<p style="text-align:center; font-size: small">Figura 2: añadiendo un evento Add ButtonPushedFcn Callback al boton CALCULAR</p>

Una vez dentro de la vista de código, insertar el siguiente código:

```matlab
%Obteniendo datos iniciales de los Edit Field
xo=str2num(app.edt_vinicial.Value)
tol=str2num(app.edt_tol.Value)
Pt=str2num(app.edt_Pt.Value)
K=str2num(app.edt_K.Value)

%Definiendo la función a resolverse
f=@(x) x/(1-x)*sqrt(2*Pt/(2+x))-K

%Definiendo el valor de h, error 
error=10
h=0.00005
i=1

%Programando el método numérico Newton Raphson 
while error>tol
    fx=f(xo);
    dfx=(f(xo+h)-f(xo-h))/(2*h);
    x1=xo-fx/dfx;
    error=abs(x1-xo);
    xov(i)=xo;
    fxv(i)=fx;
    dfxv(i)=dfx;
    x1v(i)=x1;
    errorv(i)=error;
    xo=x1;
    i=i+1;
end

%Guardando los valores de xo, x1, fx, dfx, error en una matriz
tabla=[xov' fxv' dfxv' x1v' errorv']

%Imprimiendo la matriz en la UITable
app.UITable.ColumnName={'xo','f(xo)','df(xo)','x1','error'}
app.UITable.Data=tabla

%Imprimiendo el valor de x1 encontrado en una Edit Field
app.edt_valX.Value=num2str(x1)
```

El resultado obtenido es el siguiente:

<p style="text-align:center;"><img src="../../assets/blog/AppDesNewton/fig3.jpg" height="80%" width="80%"/></p>

<p style="text-align:center; font-size: small">Figura 3: Resultados obtenido del valor de x por el método de Newton Raphson</p>

## Referencia
* Nieves & Dominguez (2014). Metodos Numéricos Aplicados a la Ingeniería (4ta Edición). Grupo Editorial Patria. ISBN 978-607-438-926-5.