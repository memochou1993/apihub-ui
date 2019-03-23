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
      <AppProgressCircular />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppProgressCircular from '@/components/AppProgressCircular.vue';

export default {
  components: {
    AppProgressCircular,
  },
  computed: {
    ...mapState([
      'noData',
    ]),
  },
};
</script>
