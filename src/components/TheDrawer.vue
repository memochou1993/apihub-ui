<template>
  <div
    v-if="project"
  >
    <v-navigation-drawer
      app
      clipped
      permanent
      width="250"
    >
      <v-list
        dense
      >
        <template
          v-for="(link, index) in links"
        >
          <v-list-tile
            :key="index"
            :to="link.to"
            active-class="secondary lighten-4 primary--text"
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
          <v-divider
            v-if="index + 1 < links.length"
            :key="`${index}-divider`"
          />
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$route.params.user;
    },
    project() {
      return this.$route.params.project;
    },
    links() {
      return [
        {
          title: 'Overview',
          to: {
            name: 'projects.show',
            params: {
              user: this.user,
              project: this.project,
            },
          },
          icon: 'dashboard',
        },
        {
          title: 'Endpoints',
          to: {
            name: 'endpoints.show',
            params: {
              endpoint: 1,
            },
          },
          icon: 'description',
        },
      ];
    },
  },
};
</script>
