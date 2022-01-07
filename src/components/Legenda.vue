<template>
  <div class="legenda">
    <div class="legenda-item">
      <span> Revisão: </span>
      <span>
        {{ horas.revisao }}
      </span>
    </div>
    <div class="legenda-item">
      <span> Matéria A: </span>
      <span>
        {{ horas.materia }}
      </span>
    </div>
    <div class="legenda-item">
      <span> Matéria B: </span>
      <span>
        {{ horas.materia }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legenda",
  props: {
    horas: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.legenda-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.legenda-item:nth-child(1) {
  background: #4D8BD7
}
.legenda-item:nth-child(2) {
  background: #F06F06
}
.legenda-item:nth-child(3) {
  background: #7F7F7E
}
</style>