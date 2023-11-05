<template>
  <div
    @blur="isOpen = false"
    v-if="isOpen"
    class="w-[350px] h-[100%] relative px-4 bg-red-400 py-5 flex flex-col"
  >
    <div @click="isOpen = false" class="absolute right-0 top-5 cursor-pointer">
      <v-icon start icon="mdi-close"></v-icon>
    </div>
    <div style="flex: 1" class="mt-16 flex flex-col gap-y-3">
      <span class="font-bold text-2xl text-center">Meus projetos</span>
      <v-btn
        @click="$router.push(`/${p.id}`)"
        v-for="(p, index) in projects"
        :key="index"
        height="70px"
      >
        {{ p.project }}
      </v-btn>
    </div>
    <div class="w-full bottom-5">
      <div
        v-if="newProject"
        style="border-radius: 0.375rem 0.375rem 0 0"
        class="h-[50px] bg-slate-50"
      >
        <v-text-field
          @change="addInputForCurrent"
          @blur="newProject = false"
          label="Adicione o nome do projeto"
        ></v-text-field>
      </div>
      <v-btn
        @click="newProject = true"
        width="100%"
        color="#edeff3"
        prepend-icon="mdi-plus"
      >
        Adicionar projeto
      </v-btn>
    </div>
  </div>
</template>

<script>
import AddButtonVue from "../atoms/AddButton.vue"
export default {
  data() {
    return {
      isOpen: true,
      newProject: false,
      currentName: true,
      projects: [
        { id: 1, project: "Dave1" },
        { id: 2, project: "Dave2" },
        { id: 3, project: "Dave3" },
      ],
    }
  },
  methods: {
    addInputForCurrent(val) {
      this.projects.push({
        id: this.projects.length + 1,
        project: val.target.value,
      })
    },
  },
  components: {
    AddButtonVue,
  },
}
</script>
