<template>
  <div
    class="text-xs-center ma-5"
  >
    <div
      v-if="loading"
    >
      Loading...
    </div>
    <div
      v-else
    >
      No records found.
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>
