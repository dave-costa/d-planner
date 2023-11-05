<template>
  <div class="card-container">
    <div class="title-container">
      {{ title }}
    </div>

    <v-textarea
      bg-color="#2a2e3d"
      color="black"
      :value="value"
      variant="solo"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  components: {
  },

  props: {
    title: '',
    value: '',
  },

  data() {
    return {
      index: 1,
    }
  },
}
</script>

<style>
.card-container {
width: 400px;
margin: 1rem;
display: flex;
flex-direction: column;
gap: 2rem;
}

.title-container {
color: white;
background-color: #2a2e3d;
border-radius: 7px;
padding: 1rem;
}

</style>
