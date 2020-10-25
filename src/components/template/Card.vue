<template>
    <div>
        <div class="card">
            <h2>{{ title }}</h2>
            <h1>{{ cases || deaths || refuses || suspects }}</h1>
        </div>
    </div>
</template>

<script>
/**
 * Nesse caso o export default foi criado para ser reutilizado (pai-filho).
 * O props é um array neste caso, é colocado no componente como se fosse um atribulo.
 * Casos confirmados, mortes, curados e suspeitos.
 */
export default {
    name: "Card",
    props: ['title', 'cases', 'deaths', 'refuses', 'suspects']    
}
</script>

<style src="./card.scss" lang="scss">