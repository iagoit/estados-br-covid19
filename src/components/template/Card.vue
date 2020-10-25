<template>
    <div>
        <div class="card">
            <h2>{{ title }}</h2>
            <h1>{{ cases || deaths || refuses || suspects }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ['title', 'cases', 'deaths', 'refuses', 'suspects']    
}
</script>

<style src="./card.scss" lang="scss">