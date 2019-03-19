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
      <v-toolbar-items>
        <v-btn
          icon
        >
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn
          icon
          exact
          @click="goTo({
            name: 'users.show',
            params: {
              user: '1',
            },
          })"
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
  methods: {
    goTo(location) {
      this.$router.push(location);
    },
    refresh() {
      //
    },
  },
};
</script>
