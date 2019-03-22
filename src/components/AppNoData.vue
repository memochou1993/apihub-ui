<template>
  <div
    class="text-xs-center ma-5"
  >
    <div
      v-if="noData"
    >
      No records found.
    </div>
    <div
      v-else
    >
      <transition name="fade">
        <AppProgressCircular />
      </transition>
    </div>
  </div>
</template>

<script>
import AppProgressCircular from '@/components/AppProgressCircular.vue';

export default {
  components: {
    AppProgressCircular,
  },
  computed: {
    noData() {
      return this.$store.state.noData;
    },
  },
};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active
  transition: opacity .25s
.fade-enter, .fade-leave-to
  opacity: 0
</style>
