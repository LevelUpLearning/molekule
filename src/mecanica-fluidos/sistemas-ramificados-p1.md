---
title: Sistemas ramificados P1
author: Olfer Claros
date: 2022-10-13
tags: ["post", "mecanica_fluidos"]
image: /assets/blog/sistemas-ramificados-p1/sistemas-ramificados-p1.png
imageAlt: 
description: Para el sistema mostrado en la figura hallar los caudales.
---

## Gráfico del sistema

![Sistema ramificado mecanica de fluidos](../../assets/blog/sistemas-ramificados-p1/sistemas-ramificados-p1.png)

Datos del sistema

$$
\begin{array}{|l|l|l|l|}
\hline
Tubería & L {[}m{]} & D{[}m{]} & ϵ/D     \\ \hline
1       & 2000      & 1        & 0,00015 \\ \hline
2       & 2300      & 0,60     & 0,001   \\ \hline
3       & 2500      & 1,20     & 0,002   \\ \hline
\end{array}
$$

## Resolución por el primer método

Realizando un análisis de las tuberías tendríamos
$$
\begin{array}{llr}
z_{A} - h_{L1} = h_{J}  \rightarrow & z_{A} - f_{1}\frac{L_{1}}{D_{1}}\frac{v_{1}^{2}}{2g} = h_{J}  \rightarrow & 120 - f_{1}\frac{2000}{1}\frac{v_{1}^{2}}{2 \cdot 9,81} = 80\space\space\textbf{(1)}\\
\\
z_{B} - h_{L2} = h_{J}  \rightarrow & z_{B} - f_{2}\frac{L_{2}}{D_{2}}\frac{v_{2}^{2}}{2g} = h_{J}  \rightarrow & 100 - f_{2}\frac{2300}{0,6}\frac{v_{2}^{2}}{2 \cdot 9,81} = 80 \space\space\textbf{(2)}\\
\\
h_{J} - h_{L3} = z_{C}\rightarrow  & h_{J} - f_{3}\frac{L_{3}}{D_{3}}\frac{v_{3}^{2}}{2g} = z_{C}\rightarrow  & 80 - f_{3}\frac{2500}{1,20}\frac{v_{3}^{2}}{2 \cdot 9,81} = 28 \space\space\textbf{(3)}

\end{array}
$$

Utilizando la ecuación de Von Karman:
$$
\frac{1}{\sqrt{f}} = - 2\log\left( \frac{\epsilon/D}{3,7} \right)
$$

$$
\begin{array}{ccc}
f_{1} = 0,013;& \ f_{2} = 0,020  ; & f_{3} = 0,023
\end{array}
$$

Utilizando las ecuaciones (1), (2) y (3):

$$
\begin{array}{ccc}
v_{1} = 5,494 [ m/s] & \rightarrow &  Q_{1} = 4,315 [ m^{3}/s]\\

v_{2} = 2,262 [ m/s] & \rightarrow &  Q_{2} = 0,640 [ m^{3}/s]\\

v_{3} = 4,614 [ m/s] & \rightarrow  & Q_{3} = 5,218 [ m^{3}/s]\\
\end{array}
$$

Calculamos $\mathrm{\Delta}Q$:

$$
\mathrm{\Delta}Q = \left( Q_{1} + Q_{2} \right) - Q_{3} = \left( 4,315 + 0,640 \right) - 5,218
$$

$$
\mathrm{\Delta}Q = - 0,263\ [ m^{3}/s]
$$

Asumiendo un valor de $h_{J} = 76\ [ m]$

Realizando un análisis para cada tubería tendríamos:
$$
\begin{array}{lrlr}
z_{A} - h_{L1} = h_{J} \rightarrow  & z_{A} - f_{1}\frac{L_{1}}{D_{1}}\frac{v_{1}^{2}}{2g} = \ h_{J} \rightarrow & 120 - f_{1}\frac{2000}{1}\frac{v_{1}^{2}}{2 \cdot 9,81} = 76 \ &\textbf{(1)}\\
\\
z_{B} - h_{L2} = h_{J} \rightarrow  & z_{B} - f_{2}\frac{L_{2}}{D_{2}}\frac{v_{2}^{2}}{2g} = \ h_{J}\rightarrow & 100 - f_{2}\frac{2300}{0,6}\frac{v_{2}^{2}}{2 \cdot 9,81} = 76\ &\textbf{(2)}\\
\\
h_{J} - h_{L3} = z_{C}\rightarrow  & \ h_{J} - f_{3}\frac{L_{3}}{D_{3}}\frac{v_{3}^{2}}{2g} = z_{C}\rightarrow & 76 - f_{3}\frac{2500}{1,20}\frac{v_{3}^{2}}{2 \cdot 9,81} = 28\ &\textbf{(3)}
\end{array}
$$

Utilizando la ecuación de Von Karman:

$$
\begin{array}{ccc}
f_{1} = 0,013; & \ f_{2} = 0,020; & f_{3} = 0,023\\
\end{array}
$$

Utilizando las ecuaciones (1), (2) y (3):
$$
\begin{array}{lcr}
v_{1} = 5,762\  [ m/s] &\ \rightarrow  & Q_{1} = 4,525\ [ m^{3}/s]\\

v_{2} = 2,478\ [ m/s] &\ \ \rightarrow  & Q_{2} = 0,701\ [ m^{3}/s]\\

v_{3} = 4,433\ [ m/s] &\ \ \rightarrow  & Q_{3} = 5,014\ [ m^{3}/s]\\
\end{array}
$$

Calculando $\mathrm{\Delta}Q$:

$$
\mathrm{\Delta}Q = \left( Q_{1} + Q_{2} \right) - Q_{3} = \left( 4,525 + 0,701 \right) - 5,014
$$

$$\mathrm{\Delta}Q = 0,212\ [ m^{3}/s]$$

Trabajando ahora con el valor de $h_{J} = 77,785\ [ m]$

Realizando un análisis para cada tubería tendríamos:
$$
z_{A} - h_{L1} = h_{J}\rightarrow  \ \ z_{A} - f_{1}\frac{L_{1}}{D_{1}}\frac{v_{1}^{2}}{2g} = h_{J}\rightarrow  120 - f_{1}\frac{2000}{1}\frac{v_{1}^{2}}{2 \cdot 9,81} = 77,785 \ \textbf{   (1)}\\

z_{B} - h_{L2} = h_{J}\rightarrow  z_{B} - f_{2}\frac{L_{2}}{D_{2}}\frac{v_{2}^{2}}{2g} = \ \ h_{J}\rightarrow  100 - f_{2}\frac{2300}{0,6}\frac{v_{2}^{2}}{2 \cdot 9,81} = 77,785 \textbf{   (2)}\\

h_{J} - h_{L3} = z_{C}\rightarrow  \ \ h_{J} - f_{3}\frac{L_{3}}{D_{3}}\frac{v_{3}^{2}}{2g} = z_{C}\rightarrow  77,785 - f_{3}\frac{2500}{1,20}\frac{v_{3}^{2}}{2 \cdot 9,81} = 28 \textbf{   (3)}\\
$$

Utilizando la ecuación de Von Karman:
$$
f_{1} = 0,013 \ \ ; \ f_{2} = 0,020 \ \ ; \ f_{3} = 0,023
$$

Utilizando las ecuaciones (1), (2) y (3):
$$
v_{1} = 5,644\ \ [ m/s] \ \rightarrow   Q_{1} = 4,433\ [ m^{3}/s]\\

v_{2} = 2,384\ [ m/s] \ \ \rightarrow   Q_{2} = 0,674\ [ m^{3}/s]\\

v_{3} = 4,515\ [ m/s] \ \ \rightarrow   Q_{3} = 5,106\ [ m^{3}/s]\\
$$

Calculando $\mathrm{\Delta}Q$:
$$
\mathrm{\Delta}Q = \left( Q_{1} + Q_{2} \right) - Q_{3} = \left( 4,433 + 0,674 \right) - 5,106\\

\mathrm{\Delta}Q = 0,001\ [ m^{3}/s]\\
$$
Entonces los caudales buscados son:
$$
Q_{1} = 4,433\ [ m^{3}/s]\\

Q_{2} = 0,674\ [ m^{3}/s]\\

Q_{3} = 5,106\ [ m^{3}/s]\\
$$

## Segundo Método

Asumiendo un valor de $h_{J} = 80\ [ m]$

Realizando un análisis para cada tubería tendríamos:
$$
z_{A} - h_{L1} = h_{J}\  \  \rightarrow     z_{A} - f_{1}\frac{L_{1}}{D_{1}}\frac{v_{1}^{2}}{2g} = h_{J}    \ \ \  \rightarrow   120 - f_{1}\frac{2000}{1}\frac{v_{1}^{2}}{2 \cdot 9,81} = 80  \ \ \ (1)\\

z_{B} - h_{L2} = h_{J}  \ \  \rightarrow   \ \ z_{B} - f_{2}\frac{L_{2}}{D_{2}}\frac{v_{2}^{2}}{2g} = \ \ h_{J}    \ \ \  \rightarrow   100 - f_{2}\frac{2300}{0,6}\frac{v_{2}^{2}}{2 \cdot 9,81} = 80  \ (2)\\

h_{J} - h_{L3} = z_{C}  \ \  \rightarrow     h_{J} - f_{3}\frac{L_{3}}{D_{3}}\frac{v_{3}^{2}}{2g} = z_{C}    \ \ \  \rightarrow   80 - f_{3}\frac{2500}{1,20}\frac{v_{3}^{2}}{2 \cdot 9,81} = 28  \ (3)\\
$$

Utilizando la ecuación de Von Karman, para empezar la suposición de los factores de fricción:
$$
f_{1} = 0,013    ;  \ \ \ f_{2} = 0,020    ;  \ \ \ f_{3} = 0,023\\
$$
$$
Reynolds:  \ \ N_{\text{Re}} = \frac{\text{vD}}{\nu}      \ \ ;    Colebrook:  \frac{1}{\sqrt{f}} = - 0,86Ln\left( \frac{\epsilon/D}{3,7} + \frac{2,51}{N_{\text{Re}}\sqrt{f}} \right)\text{\ \ \ }
$$

### TABLA DE ITERACION
$$
\begin{array}{ccccc}
f_{sup1} & v_{1}\ [m/s] & 
Q_{1}\ [ m^{3}/s] & N_{Re1} &
f_{1}\\ \hline
0,013 & 5,494 & 4,315 & 4777391,30 & 0,014\\
0,014 & 5,294 & 4,158 & 4603478,26 & 0,014\\
\end{array}
$$

$$
\begin{array}{ccccc}
f_{sup2} & v_{2}\ [ m/s] &
Q_{2}\ [ m^{3}/s] & N_{Re2} &
f_{2} \\ \hline
0,020 & 2,262 & 0,640 & 1180173,91 & 0,020\\
\end{array}
$$

$$
\begin{array} {ccccc}
f_{sup2} & v_{2}\ [ m/s] &
Q_{2}\ [ m^{3}/s] & N_{Re2} &
f_{2}\\ \hline
0,023 & 4,614 & 5,218 & 4814608,70 & 0,024\\
0,024 & 4,517 & 5,109 & 4713391,30 & 0,024\\
\end{array}
$$

Entonces, se tiene:

Utilizando las ecuaciones (1), (2) y (3):
$$
v_{1} = 5,294\ \ [ m/s]      \  \rightarrow     \ \ Q_{1} = 4,158\ [ m^{3}/s]\\

v_{2} = 2,262\ [ m/s]      \ \  \rightarrow     \ \ Q_{2} = 0,640\ [ m^{3}/s]\\

v_{3} = 4,517\ [ m/s]      \ \  \rightarrow     \ \ Q_{3} = 5,109\ [ m^{3}/s]\\
$$

Calculando $\mathrm{\Delta}Q$:
$$
\mathrm{\Delta}Q = \left( Q_{1} + Q_{2} \right) - Q_{3} = \left( 4,158 + 0,640 \right) - 5,109\\

\mathrm{\Delta}Q = - 0,311\ [ m^{3}/s]
$$

Asumiendo un valor de $h_{J} = 76\ [ m]$

Realizando un análisis para cada tubería tendríamos:
$$
z_{A} - h_{L1} = h_{J}  \ \  \rightarrow     z_{A} - f_{1}\frac{L_{1}}{D_{1}}\frac{v_{1}^{2}}{2g} = h_{J}    \ \ \  \rightarrow   120 - f_{1}\frac{2000}{1}\frac{v_{1}^{2}}{2 \cdot 9,81} = 76  \ \ \ \textbf{(1)}\\

z_{B} - h_{L2} = h_{J}  \ \  \rightarrow   \ \ z_{B} - f_{2}\frac{L_{2}}{D_{2}}\frac{v_{2}^{2}}{2g} = \ \ h_{J}    \ \ \  \rightarrow   100 - f_{2}\frac{2300}{0,6}\frac{v_{2}^{2}}{2 \cdot 9,81} = 76  \ \textbf{(2)}\\

h_{J} - h_{L3} = z_{C}  \ \  \rightarrow     h_{J} - f_{3}\frac{L_{3}}{D_{3}}\frac{v_{3}^{2}}{2g} = z_{C}    \ \ \  \rightarrow   76 - f_{3}\frac{2500}{1,20}\frac{v_{3}^{2}}{2 \cdot 9,81} = 28  \ \textbf{(3)}\\
$$

Utilizando la ecuación de Von Karman, para empezar la suposición de los factores de fricción:
$$
f_{1} = 0,013    ;  \ \ \ f_{2} = 0,020    ;  \ \ \ f_{3} = 0,023
$$

$$
Reynolds:  \ \ N_{\text{Re}} = \frac{\text{vD}}{\nu}      \ \ ;
$$
$$
Colebrook:  \frac{1}{\sqrt{f}} = - 0,86Ln \left( \frac{\epsilon/D}{3,7} + \frac{2,51}{N_{\text{Re}}\sqrt{f}} \right)
$$

### TABLA DE ITERACION

$$
\begin{array} {ccccc}
 
f_{sup1} & v_{1}\ [ m/s] &
Q_{1}\ [ m^{3}/s] & N_{Re1} &
f_{1}\\ \hline
  
  
0,013 & 5,762 & 4,525 & 5010434,78 & 0,013\\
  
\end{array}
$$

$$
\begin{array} {ccccc}
 
f_{sup2} & v_{2}\ [ m/s] &
Q_{2}\ [ m^{3}/s] & N_{Re2} &
f_{2}\\ \hline
  
  
0,020 & 2,478 & 0,701 & 1292869,56 & 0,020\\
  
\end{array}
$$

$$
\begin{array} {ccccc}
 
f_{sup2} & v_{2}\ [ m/s] &
Q_{2}\ [ m^{3}/s] & N_{Re2} &
f_{2}\\ \hline
  
  
0,023 & 4,433 & 5,014 & 4625739,13 & 0,024\\
0,024 & 4,517 & 5,109 & 4713391,30 & 0,024\\
  
\end{array}
$$

Utilizando las ecuaciones (1), (2) y (3):
$$
v_{1} = 5,762\ \ [ m/s]      \  \rightarrow     \ \ Q_{1} = 4,525\ [ m^{3}/s]\\

v_{2} = 2,478\ [ m/s]      \ \  \rightarrow     \ \ Q_{2} = 0,701\ [ m^{3}/s]\\

v_{3} = 4,517\ [ m/s]      \ \  \rightarrow     \ \ Q_{3} = 5,109\ [ m^{3}/s]\\
$$

Calculamos $\mathrm{\Delta}Q$:
$$
\mathrm{\Delta}Q = \left( Q_{1} + Q_{2} \right) - Q_{3} = \left( 4,525 + 0,701 \right) - 5,109
$$
$$
\mathrm{\Delta}Q = 0,117\ [ m^{3}/s]
$$

Trabajando ahora con el valor de $h_{J} = 77,093\ [ m]$

Realizando un análisis para cada tubería tendríamos:
$$
z_{A} - h_{L1} = h_{J}  \ \  \rightarrow     z_{A} - f_{1}\frac{L_{1}}{D_{1}}\frac{v_{1}^{2}}{2g} = h_{J}    \ \ \  \rightarrow   120 - f_{1}\frac{2000}{1}\frac{v_{1}^{2}}{2 \cdot 9,81} = 77,093  \ \ \ \textbf{(1)}\\

z_{B} - h_{L2} = h_{J}  \ \  \rightarrow   \ \ z_{B} - f_{2}\frac{L_{2}}{D_{2}}\frac{v_{2}^{2}}{2g} = \ \ h_{J}    \ \ \  \rightarrow   100 - f_{2}\frac{2300}{0,6}\frac{v_{2}^{2}}{2 \cdot 9,81} = 77,093  \ \textbf{(2)}\\

h_{J} - h_{L3} = z_{C}  \ \  \rightarrow     h_{J} - f_{3}\frac{L_{3}}{D_{3}}\frac{v_{3}^{2}}{2g} = z_{C}    \ \ \  \rightarrow   77,093 - f_{3}\frac{2500}{1,20}\frac{v_{3}^{2}}{2 \cdot 9,81} = 28  \ \textbf{(3)}
$$

Utilizando la ecuación de Von Karman, para empezar la suposición de los factores de fricción:

$$
f_{1} = 0,013    ;  \ \ \ f_{2} = 0,020    ;  \ \ \ f_{3} = 0,023
$$
$$
Reynolds:  \ \ N_{\text{Re}} = \frac{\text{vD}}{\nu}      \ \ ; 
$$
$$
Colebrook:  \frac{1}{\sqrt{f}} = - 0,86Ln\left( \frac{\epsilon /D}{3,7} + \frac{2,51}{N_{\text{Re}}\sqrt{f}} \right)\text{\ \ \ }
$$

### TABLA DE ITERACION
$$
\begin{array} {ccccc}
 
f_{sup1} & v_{1}\ [ m/s] &
Q_{1}\ [ m^{3}/s] & N_{Re1} &
f_{1}\\ \hline
  
  
0,013 & 5,690 & 4,469 & 4947826,09 & 0,013\\
  
\end{array}
$$
$$
\begin{array} {ccccc}
 
f_{sup2} & v_{2}\ [ m/s] &
Q_{2}\ [ m^{3}/s] & N_{Re2} &
f_{2}\\ \hline
  
  
0,020 & 2,421 & 0,685 & 1263130,43 & 0,020\\
  
\end{array}
$$

$$
\begin{array} {ccccc}
 
f_{sup2} & v_{2}\ [ m/s] &
Q_{2}\ [ m^{3}/s] & N_{Re2} &
f_{2}\\ \hline
   
  
0,023 & 4,483 & 5,070 & 4677913,04 & 0,024\\
0,024 & 4,517 & 5,109 & 4713391,30 & 0,024\\
  
\end{array}
$$

Calculamos $\mathrm{\Delta}Q$:
$$
\mathrm{\Delta}Q = \left( Q_{1} + Q_{2} \right) - Q_{3} = \left( 4,469 + 0,685 \right) - 5,109\\

\mathrm{\Delta}Q = 0,045\ [ m^{3}/s]
$$

Entonces los caudales bus cados son:
$$
Q_{1} = 4,469\ [ m^{3}/s]\\

Q_{2} = 0,685\ [ m^{3}/s]\\

Q_{3} = 5,109\ [ m^{3}/s]\\
$$
