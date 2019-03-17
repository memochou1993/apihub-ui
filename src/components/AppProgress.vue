<template>
  <div>
    <v-progress-linear
      height="2"
      :color="color"
      :indeterminate="loading"
      class="ma-0"
    />
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    },
    color() {
      return this.error ? 'error' : 'success';
    }
  },
};
</script>
