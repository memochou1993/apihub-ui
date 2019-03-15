<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      left
      clipped
      disable-resize-watcher
    >
      <v-list>
        <v-list-tile
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          exact
        >
          <v-list-tile-action>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-tile-action>
          <v-list-tile-content
            class="subheading"
          >
            <v-list-tile-title>
              {{ link.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        {
          title: 'Endpoints',
          to: {
            name: 'endpoints.show',
            params: {
              endpoint: 1,
            },
          },
          icon: 'fa-project-diagram',
        },
      ],
      projects: [
        'First',
        'Second',
      ],
    };
  },
};
</script>
