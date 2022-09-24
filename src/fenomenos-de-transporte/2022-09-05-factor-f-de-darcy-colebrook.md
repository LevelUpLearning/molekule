---
title: Cálculo del factor f de Darcy por Colebrook
author: Ever Vino
date: 2022-09-05
tags: ["post", "fenomenos_de_transporte"]
image: /assets/blog/article-2.jpg
imageAlt: 
description: Cálculo del factor de fricción f de Darcy con la ecuación de Colebrook, usando el método del punto fijo.
---

El despejar el factor de fricción $f$ en la ecuación de Colebrook puede parecer difícil pero se resuelve rápidamente, aplicando en método del punto fijo.

## Problema

Halle el factor f de Darcy de la ecuación de Colebrook con el número de Reynolds $Re=10^5$ y factor de rugosidad relativa $eps=10^{-4}$.

La ecuación de colebrook

$$\frac{1}{\sqrt{f}}+2\log_{10}\left(\frac{eps}{3.71}+\frac{2.51}{Re\sqrt{f}}\right)=0$$

## Resolución

Simplificando la ecuación haciendo $y=\frac{1}{\sqrt{f}}$.

Así nuestra nueva ecuación es:

$$y=-2\log_{10}\left(\frac{eps}{3.71}+\frac{2.51}{Re}y\right)$$

Esta es la que utilizaremos para resolver para $y$, una vez resuelta,regresamos a la variable original $f$.

Codificando en python:

```py
import math

def darcy(Re, eps):
     
    f0 = 0.01
    y0 = 1 / math.sqrt(f0)
    y = - 2 * math.log10(eps / 3.71 + 2.51 / Re * y0) 

    while abs(y0 - y) > 10e-7:
        y0 = y
        y = eps / 3.71 + 2.51 / Re * y0
        y = - 2 * math.log10(y) 
    f = 1 / y ** 2
    return f

print(darcy(eps=1e-4, Re=1e5))

# Resultado 0.018512499331350084
```

Entonces $f = 0.01851$.
