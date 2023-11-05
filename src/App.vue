<script setup>
import AddButton from "./modules/client/components/atoms/AddButton.vue"
import SideMenu from "./modules/client/components/organisms/SideMenu.vue"
</script>

<template>
  <div class="h-full flex flex-row">
    <SideMenu />

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
