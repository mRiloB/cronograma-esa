<template>
  <v-list>
    <v-subheader>{{ title }}</v-subheader>
    <v-list-item>
      <v-list-item-content>
        <div class="item-content">
          <span
            ><v-chip dark color="#4D8BD7"></v-chip> {{ revisao }}</span
          >
          <span>{{ horas.revisao }}</span>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <div class="item-content">
          <span
            ><v-chip dark color="#F06F06"></v-chip> {{ materiaA }}</span
          >
          <span>{{ horas.materia }}</span>
        </div>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <div class="item-content">
          <span
            ><v-chip dark color="#7F7F7E"></v-chip> {{ materiaB }}</span
          >
          <span>{{ horas.materia }}</span>
        </div>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "CronogramaCard",
  props: {
    title: {
      type: String,
      default: "default",
    },
    revisao: {
      type: String,
      default: "default",
    },
    materiaA: {
      type: String,
      default: "default",
    },
    materiaB: {
      type: String,
      default: "default",
    },
    horas: {
      type: Object,
      default: () => ({ revisao: "0", materia: "0" }),
    },
  },
};
</script>

<style lang="scss" scoped>
.item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>
