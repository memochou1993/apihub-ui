<template>
  <div
    v-if="!params.project"
  >
    <v-footer
      height="auto"
    >
      <v-card
        class="flex primary white--text text-xs-center"
      >
        <v-card-text>
          &copy; 2019 ApiHub
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  computed: {
    params() {
      return this.$route.params;
    },
  },
};
</script>
