<template>
  <div
    v-if="! project"
  >
    <v-footer
      height="auto"
    >
      <v-card
        class="flex primary lighten-1 white--text text-xs-center"
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
    project() {
      return this.$route.params.project;
    },
  },
};
</script>
