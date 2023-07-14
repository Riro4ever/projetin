<script setup>
import { ref, onMounted, computed, reactive} from 'vue';

// const props = defineProps(['msg']);

let helloMessage = ref('Hello world!')
let person = reactive({ // reactive define objetos 
  name: 'John',
  age: 33
});

let nota = ref(null); // ref define valores primitivos
let situacao = computed(() => {
  // para pegar o conteudo de uma ref é necessário acessar sua propriedade .value(apenas no script, no template é normal)
  return nota.value ? (nota.value >= 6 ? 'Aprovado!' : 'Reprovado') : '';
});

onMounted(() => {
  //Sintaxe para pegar variaveis de ambiente
  console.log(import.meta.env.VITE_TEST);
});
</script>

<template>
  <!-- <div>{{ props.msg }}</div> -->
  <div>{{ person.name }}</div>
  <label>
    Nota: 
    <input type="text" name="nota" v-model="nota">
  </label>
  <div>{{ situacao }}</div>
</template>