<template>
    <div>
        <div class="footer">
            <p class="footer__title">Desenvolvido por <a class="footer__title__link" :href="github" target="_blank">Iago Teixeira</a></p>
        </div>
    </div>
</template>

<script>
/**
 * Neste caso a data, função, irá ter um retorno, que neste caso seria o Github do autor.
 */
export default {
    name: "Footer",
    data() {
        return {
            github: 'https://github.com/iagoit',
        }
    },
}
</script>

<style src="./footer.scss" lang="scss">