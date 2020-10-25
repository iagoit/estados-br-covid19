<template>
    <div>
        <div class="header">
            <a class="header__logo" href="#"><img :src="logo" alt="Covid-19 Brazil"></a>
        </div>
    </div>
</template>

<script>
/**
 * Neste caso a data, função, irá ter um retorno, que neste caso seria a logo.
 */
export default {
    name: "Header",
    data() {
        return {
            logo: 'logo.png',
        }
    }
}
</script>

<style src="./header.scss" lang="scss">