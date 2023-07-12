<template>
  <div class="example">{{ msg }}</div>
  <div class="example">{{ helloMessage }}</div>
</template>
  
<script>
export default {
  data() {
    return {
      helloMessage: 'Hello world!'
    }
  },
  props: {
    msg: String
  },
  mounted() {
    alert(import.meta.env.VITE_TEST);
  }
  
}
</script>