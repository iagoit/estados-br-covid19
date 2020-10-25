<template>
    <div>
        <div class="select">      
            <div class="select__box">
                <select name="regions" id="regions"  class="select__input" v-model="regionSelected">
                    <option disabled value="">Escolha um estado</option>
                    <option v-for="(value, index) in regions.data"                          
                            :key="index"
                            :value="value.state">
                            {{ value.state }}                            
                    </option>
                </select>
            </div>     
            <div>
                <h1 class="title">Segue abaixo os dados de: {{ regionSelected }} </h1>
            </div>                 
        </div>
    </div>
</template>

<script>
/**
 * Aqui sera realizado a seleção de estados, a transformação da API em JSON e a vizualização de dados.
 */
export default {
    name: "Select",
    // Função que retorna os estados e estados selecionados.
    data() {
        return {
            regions: {},
            state: '',
            regionSelected: ''
        }
    },
    created() {
        this.getData();
    },  
    // O metodo do componente que transforma a API, em um JSON.
    methods: {
        getData() {
            fetch("https://covid19-brazil-api.now.sh/api/report/v1")
            .then(res => res.json())
            .then(res => {
                this.regions = res;                           
            });
        }
    },
    // Utilizado para ver as alterações do data do componente.
    // Neste caso irá mostrar os resultados dos dados filtrados.
    watch: {
        regionSelected(value) {
            this.state = this.regions.data.find((es) => es.state === value);
            this.$emit("data", this.state);
        }
    }
}
</script>

<style src="./select.scss" lang="scss">