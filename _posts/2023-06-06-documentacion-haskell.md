---
title: The weakness of Haskell's docs
layout: post
---

Una clásica crítica a la documentación de Haskell es que la comunidad
usa los (excelentes) tipos como suplemento de documentación real, en vez
de usarlos como complemento. Uno se pregunta "¿cómo se hace X?" y te 
responden que veas los tipos de la librería y lo "sabrás". Lo cual puede
ser cierto para ciertas mentes, aunque no mucho para la mía[^mentes]. 

[^mentes]: Y probablemente tampoco para muchas otras, como demuestra el fracaso de Haskell en términos de popularidad.

Ejemplos de documentación que lleva al éxito se encuentran en librerías
famosas de Python (requests, django) o javascript, que incluyen tutoriales.
Esto hace que comenzar sea mucho más rápido. Pero el paso 2 no lo es.
Una referencia es irremplazable, y ese es el propósito de los tipos de
las librerías de Haskell.

Debo decir que es "exhaustante" en cierto sentido que lo primero que uno
ve al entrar a un paquete haskell es una lista de 20 tipos, antes de saber
siquiera para qué los va a usar. No ayuda mucho. Y después ve implementaciones
y son parecidas a lo siguiente:

```haskell
-- implementación ficticia de algo
doThing :: Type w e a -> Type w e b
doThing = go (bar . foo)
  where go f x = case f x of
            Just y -> y
            Nothing -> go (f . f) x
```

Y se supone que hay que entender inmediatamente las 5 abstracciones que
se encuentran ahí en 3 líneas, inmediatamente. Pero a futuro, alguien opinará
que el `case .. of` es muy explícito y lo reemplazará por una llamada a `maybe`.
Por supuesto, no hay documentación para la función, porque se debería poder
entender mediante los tipos.

La función `doThing` está improvisada a la mala, probablemente no haga typecheck.
Pero si lo hace, estoy bastante seguro de que incluye un loop infinito.
Desafortunadamente, los loops infinitos son más o menos comunes en el mundo Haskell:

```haskell
-- implementación real, en la librería estándar
fix f = let x = f x in x
```

Afortunadamente, esta función sí está documentada. A continuación pego la
documentación:

> `fix f` is the least fixed point of the function `f`,
> i.e. the least defined `x` such that `f x = x`.
> 
> For example, we can write the factorial function using direct recursion as
> 
> ```
> >>> let fac n = if n <= 1 then 1 else n * fac (n-1) in fac 5
> 120
> ```
> 
> This uses the fact that Haskell’s `let` introduces recursive bindings. We can
> rewrite this definition using `fix`,
> 
> ```
> >>> fix (\rec n -> if n <= 1 then 1 else n * rec (n-1)) 5
> 120
> ```
> 
> Instead of making a recursive call, we introduce a dummy parameter `rec`;
> when used within `fix`, this parameter then refers to `fix`’s argument, hence
> the recursion is reintroduced.

## Haskell con menos abstracción

Tal como la debilidad del ecosistema JS es que usan demasiadas dependencias,
la debilidad del ecosistema Haskell es que usan demasiadas abstracciones.
Así que, cuando hice mi memoria, decidí que yo no caería en este problema.
Usaría tipos concretos, o con un parámetro como máximo (kind (* -> *)).
Haría implementaciones explícitas, sin usar estilo point-free.
No haría tantos tipos distintos, porque creaban confusión.
Tampoco usaría muchas dependencias, solo comprometiéndome con algunas necesarias
para lo que hacía[^lens].

[^lens]: Debo decir que rompí esta regla usando `lens`, porque llevaba mucho tiempo queriendo aprender a usar esa librería.

¿Cómo resultaron estas ideas? Algunas bien, otras no. La que más me arrepiento
es parametrizar poco mis tipos. A veces uno no nota las diferencias sutiles que hay
entre los distintos tipos involucrados en un programa, y resultaba útil agregar
información extra como parámetros nuevos, aunque en otras partes se rellenara
con `()` (el equivalente a `void` de Haskell). Y lo que se ganaba en términos
de claridad de los tipos era fácil de conseguir de vuelta definiendo sinónimos
de tipos (`type X = Y Int`). Así uno se da cuenta de por qué el paquete Haskell
promedio tiene tantos tipos definidos al principio, por desagradable que sea
como usuario.

Lo de no usar estilo point-free yo diría que fue buena idea eso sí.

## Conclusión

He divagado bastante, pero:

1. Las librerías, si tienen la intención de ser usadas, merecen un tutorialcillo
  en la documentación.
2. Los tipos sí son buena referencia, pero para alguien que ya sabe usar la
  librería.
3. Nada que ver, pero me carga la sintaxis de Haskell, lo difícil que hace separar
  implementaciones en distintas líneas, y por ello lo mucho que fomenta usar variables de una letra.

Si ya has usado Haskell, todo esto sonará obvio. Si no, quizá no? Quién sabe,
[lo publico igual](https://jvns.ca/blog/2023/06/05/some-blogging-myths/).
