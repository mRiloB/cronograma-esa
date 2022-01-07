<template>
  <Container>
    <template v-slot:principal>
      <h1 class="mb-3">Seu cronograma</h1>
      <CronogramaCard
        v-for="(item, id) in items"
        :key="id"
        :title="item.title"
        :revisao="item.revisao"
        :materiaA="item.matA"
        :materiaB="item.matB"
        :horas="item.horas"
      />
    </template>

    <template v-slot:action-button>
      <v-btn color="#045D14" dark large tile block @click="$router.go(-1)"
        >Voltar</v-btn
      >
    </template>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";
import CronogramaCard from "@/components/CronogramaCard.vue";

const createCard = (title, revisao, matA, matB, horas) => {
  return {
    title,
    revisao,
    matA,
    matB,
    horas,
  };
};

export default {
  name: "Materias",
  components: { Container, CronogramaCard },
  data: () => ({
    items: [],
  }),
  mounted() {
    this.loadItems();
  },
  methods: {
    loadItems() {
      const materias = this.storeMaterias;
      const horas = this.storeHoras;

      this.items = [
        createCard(
          "Segunda-feira",
          materias[3].text,
          materias[0].text,
          materias[5].text,
          horas
        ),
        createCard(
          "Terça-feira",
          materias[2].text,
          materias[1].text,
          materias[4].text,
          horas
        ),
        createCard(
          "Quarta-feira",
          materias[0].text,
          materias[2].text,
          materias[3].text,
          horas
        ),
        createCard(
          "Quinta-feira",
          materias[1].text,
          materias[0].text,
          "Redação/Leitura",
          horas
        ),
        createCard(
          "Sexta-feira",
          materias[4].text,
          materias[1].text,
          materias[3].text,
          horas
        ),
        createCard(
          "Sábado",
          materias[5].text,
          materias[0].text,
          materias[2].text,
          horas
        ),
        createCard("Domingo", "Descanso", "Redação/Leitura", "Descanso", {
          revisao: "",
          materia: "",
        }),
      ];
    },
  },
  computed: {
    storeHoras() {
      return this.$store.state.horas;
    },
    storeMaterias() {
      return this.$store.state.materias;
    },
  },
};
</script>

<style lang="scss" scoped></style>
