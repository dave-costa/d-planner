<template>
  <div class="main-container">
    <Card title="foda-se" value="foda-se again" />
    <Card title="foda-se" value="foda-se again" />
    <Card title="foda-se" value="foda-se again" />
    <Card title="foda-se" value="foda-se again" />
    <Card title="foda-se" value="foda-se again" />
  </div>
</template>

<script>
import Card from "../modules/client/components/organisms/Card.vue"

export default {
  components: {
    Card,
  },

  data() {
    return {
      index: 1,
    }
  },
}
</script>

<style>
.main-container {
background-color: #1c1c29;
height: 100vh;
color: white;
display: flex;
flex-direction: row;
}
</style>
