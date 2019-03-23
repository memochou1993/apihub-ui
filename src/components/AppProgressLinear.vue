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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'loading',
      'error',
    ]),
    color() {
      return this.error ? 'error' : 'success';
    },
  },
};
</script>
