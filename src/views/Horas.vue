<template>
  <Container>
    <template v-slot:principal>
      <p>Horas dedicadas por dia:</p>
      <v-select :items="horasItems" v-model="horas" solo dense></v-select>
      <Legenda :horas="horas" />
    </template>

    <!-- <p>Classifique as matérias em ordem de dificuldade:</p>
    <v-list rounded class="list-container">
      <v-subheader>Arraste para cima ou para baixo</v-subheader>
      <draggable v-model="materias">
        <template v-for="(mat, id) in materias">
          <v-list-item :key="id" class="list-item">
            <v-list-item-content>
              <span>{{ mat.text }}</span>
            </v-list-item-content>
          </v-list-item>
        </template>
      </draggable>
    </v-list> -->

    <template v-slot:action-button>
      <Navigators allowGoBack :action="verMaterias">Próximo</Navigators>
    </template>
  </Container>
</template>

<script>
// import draggable from "vuedraggable";
import Container from "@/components/Container.vue";
import Legenda from "@/components/Legenda.vue";
import Navigators from "@/components/Navigators.vue";

export default {
  name: "Horas",
  components: { Container, Legenda, Navigators },
  data: () => ({
    horas: { revisao: "10 min", materia: "25 min" },
    horasItems: [
      { text: "1 h", value: { revisao: "10 min", materia: "25 min" } },
      { text: "2 h", value: { revisao: "25 min", materia: "50 min" } },
      { text: "3 h", value: { revisao: "35 min", materia: "1 h e 10 min" } },
      { text: "4 h", value: { revisao: "50 min", materia: "1 h e 35 min" } },
      { text: "5 h", value: { revisao: "1 h", materia: "2 h" } },
      {
        text: "6 h",
        value: { revisao: "1 h e 10 min", materia: "2 h e 25 min" },
      },
    ],
  }),
  methods: {
    verMaterias() {
      this.$store.dispatch("atualizar_horas", this.horas);
      this.$router.push({ name: "materias" });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
