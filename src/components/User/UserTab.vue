<template>
  <div>
    <v-tabs
      slider-color="info lighten-2"
      class="elevation-1"
    >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        :to="tab.to"
      >
        {{ tab.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$route.params.user;
    },
    tabs() {
      return [
        {
          title: 'Projects',
          to: {
            name: 'users.show',
            params: {
              user: this.user,
            },
            query: {
              tab: 'projetcs',
            },
          },
        },
      ];
    },
  },
};
</script>
