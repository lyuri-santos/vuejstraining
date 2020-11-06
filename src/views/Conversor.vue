<template>
    <div class ="conversor">
        <!-- <h2>{{moedaA}} Para {{moedaB}}</h2> -->
        <h2>BRL Para US$</h2>
        <input ntype="text" v-model="moedaA_value" v-bind:placeholder ="moedaA">
        <input type="button" value="Converter" v-on:click="converter">
        <h2>{{moedaB_value}}</h2>
    </div>
</template>
<script>
export default {
  name: 'Conversor',
  props: ['moedaA', 'moedaB'],
  data () {
    return {
      moedaA_value: '',
      moedaB_value: 0
    }
  },
  methods: {

    converter () {
      var cotacao = 5.1
      this.moedaB_value = (cotacao * parseFloat(this.moedaA_value))
        .toFixed(2)
    }
  }
}
</script>

<style scoped>

</style>
