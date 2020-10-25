<template>
    <div>
        <div class="footer">
            <p class="footer__title">2020 © Criado por <a class="footer__title__link" :href="github" target="_blank">Iago Teixeira</a></p>
        </div>
    </div>
</template>

<script>
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