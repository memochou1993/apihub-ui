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
        v-if="params.user"
      >
        <v-btn
          icon
        >
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="onTabChange('projects')"
        >
          <v-icon>apps</v-icon>
        </v-btn>
        <v-btn
          icon
          @click="refresh()"
        >
          <v-icon>refresh</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {
    params() {
      return this.$route.params;
    },
  },
  methods: {
    onTabChange(tab) {
      this.$router.push({
        name: 'users.show',
        params: {
          user: this.params.user,
        },
        query: {
          tab,
        },
      });
    },
    refresh() {
      //
    },
  },
};
</script>
