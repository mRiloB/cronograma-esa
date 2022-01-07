<template>
  <v-container>
    <div class="principal">
      <slot name="principal"></slot>
    </div>
    <div class="action-button">
      <slot name="action-button"></slot>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.principal {
  padding-bottom: 50px;
  height: 100%;
}
.action-button {
  position: fixed;
  bottom: 1px;
  left: 0;
  height: 50px;
  padding: 0 12px;
  width: 100%;
}
</style>
