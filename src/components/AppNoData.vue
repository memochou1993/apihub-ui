<template>
  <div
    class="text-xs-center ma-5"
  >
    <div
      v-if="error"
    >
      No records found.
    </div>
    <div
      v-else
    >
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.state.error;
    },
  },
};
</script>
