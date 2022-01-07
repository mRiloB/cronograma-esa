<template>
  <div :class="['navigators', `${allowGoBack ? 'both' : 'next'}`]">
    <v-btn
      color="#fff"
      large
      tile
      @click="$router.go(-1)"
      v-show="allowGoBack"
    >
      Voltar
    </v-btn>
    <v-btn color="#045D14" large dark tile @click="action">
      <slot></slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Navigator",
  props: {
    allowGoBack: {
      type: Boolean,
      default: false,
    },
    action: {
      type: Function,
      default: () => {
        console.warn('Por favor, passe uma função para a prop :action=""');
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.navigators {
  display: flex;
  align-items: center;
  width: 100%;
}
.next {
  justify-content: flex-end;
}
.both {
  justify-content: space-between;
}
</style>
