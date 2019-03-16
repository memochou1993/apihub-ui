<template>
  <div>
    <v-toolbar
      app
      dark
      clipped-left
      color="primary"
    >
      <v-toolbar-title
        class="headline"
      >
        ApiHub
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items
        v-if="user"
      >
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          icon
          exact
        >
          <v-icon>
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$route.params.user || 0;
    },
    links() {
      return [
        {
          icon: 'apps',
          to: {
            name: 'users.show',
            params: {
              user: this.user,
            },
            query: {
              tab: 'projects',
            },
          },
        },
      ];
    },
  },
};
</script>
