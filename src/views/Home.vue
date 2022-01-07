<template>
  <v-container class="home">
    <img src="@/assets/logo_eu_militar.png" width="150" />
    <h2 class="text-center">
      Monte seu cronograma de estudos do curso preparatório ESA - Eu Militar
    </h2>
    <v-btn color="#045D14" large dark tile @click="$router.push({name: 'horas'})">Montar cronograma</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
}
</style>