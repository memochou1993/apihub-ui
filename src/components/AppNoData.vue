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
        <AppProgressCircular
          v-if="show"
        />
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
  data() {
    return {
      show: false,
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    noData() {
      return this.$store.state.noData;
    },
  },
  created() {
    setTimeout(() => {
      this.show = true;
    }, 250);
  },
};
</script>

<style lang="stylus">
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
