<template>
  <div
    id="app"
  >
    <v-app>
      <TheToolbar />
      <TheDrawer
        v-if="project"
      />
      <v-content>
        <v-container
          grid-list-xl
        >
          <router-view />
        </v-container>
      </v-content>
      <TheFooter
        v-if="! project"
      />
    </v-app>
  </div>
</template>

<script>
import TheToolbar from './components/TheToolbar.vue';
import TheDrawer from './components/TheDrawer.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheToolbar,
    TheDrawer,
    TheFooter,
  },
  computed: {
    project() {
      return this.$route.params.project;
    },
  },
};
</script>
