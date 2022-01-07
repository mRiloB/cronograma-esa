<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap");
#app {
  height: 100%;
  width: 100%;
  background-color: #000;
  font-family: "Open Sans", sans-serif;
  color: #fff;
}
</style>
