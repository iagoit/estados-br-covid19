<template>
    <div id="app">
        <header class="header">
            <app-header />
        </header>
        <main class="container-fluid main">
            <section class="search">
                <app-select @data="getData" />
            </section>
            <section class="cards">
                <app-card class="cards__item" :cases="regions.cases" title="Casos Confirmados" />
                <app-card class="cards__item" :deaths="regions.deaths" title="Mortes" />
                <app-card class="cards__item" :refuses="regions.refuses" title="Curados" />
                <app-card class="cards__item" :suspects="regions.suspects" title="Suspeitos" />
            </section>
        </main>
        <footer class="footer">
            <app-footer />
        </footer>
    </div>
</template>

<script>
import Header from '@/components/template/Header.vue';
import Select from '@/components/template/Select.vue';
import Card from '@/components/template/Card.vue';
import Footer from '@/components/template/Footer.vue';

export default {
    name: 'Home',
    components:{
        'app-header': Header,
        'app-select': Select,
        'app-card': Card,
        'app-footer': Footer
    },
    data() {
        return {
            regions: [],
        }
    },
    methods: {
        getData(event) {
            this.regions = event;
        }
    }
}
</script>

<style src="./style.scss" lang="scss" scoped />