<template>
  <div
    @blur="isOpen = false"
    v-if="isOpen"
    class="w-[350px] h-[100%] relative px-4 bg-red-400 flex flex-col"
  >
    <div @click="isOpen = false" class="absolute right-0 top-5 cursor-pointer">
      <v-icon start icon="mdi-close"></v-icon>
    </div>
    <div class="mt-16 flex flex-col gap-y-3">
      <v-btn height="70px"> Button </v-btn>
      <v-btn height="70px"> Button </v-btn>
      <v-btn height="70px"> Button </v-btn>
      <v-btn height="70px"> Button </v-btn>
      <v-btn height="70px"> Button </v-btn>
      <v-btn height="70px"> Button </v-btn>
    </div>
    <div>A</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true,
    }
  },
}
</script>
