<template>
  <Container>
    <template v-slot:principal>
      <p>Classifique as matérias em ordem de dificuldade:</p>
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
      </v-list>
    </template>

    <template v-slot:action-button>
      <Navigators allowGoBack :action="verResultado">Próximo</Navigators>
    </template>
  </Container>
</template>

<script>
import draggable from "vuedraggable";
import Container from "@/components/Container.vue";
import Navigators from "@/components/Navigators.vue";

export default {
  name: "Materias",
  components: { Container, Navigators, draggable },
  data: () => ({
    materias: [
      { text: "Português" },
      { text: "Matemática" },
      { text: "História" },
      { text: "Geografia" },
      { text: "Literatura" },
      { text: "Inglês" },
    ],
  }),
  methods: {
    verResultado() {
      this.$store.dispatch("atualizar_materias", this.materias);
      this.$router.push({ name: "resultado" });
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  background: #ccc;
  font-weight: bold;
}

.list-item:nth-child(1) {
  background: #ff0000;
}
.list-item:nth-child(2) {
  background: #ffcccc;
}
.list-item:nth-child(5) {
  background: #ccffcc;
}
.list-item:nth-child(6) {
  background: #00ff00;
}
</style>
