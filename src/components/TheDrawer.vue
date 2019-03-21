<template>
  <div
    v-if="params.project"
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
    params() {
      return this.$route.params;
    },
    links() {
      return [
        {
          title: 'Overview',
          to: {
            name: 'projects.show',
            params: {
              user: this.params.user,
              project: this.params.project,
            },
          },
          icon: 'dashboard',
        },
        {
          title: 'Endpoints',
          to: {
            name: 'endpoints.index',
            params: {
              user: this.params.user,
              project: this.params.project,
            },
          },
          icon: 'description',
        },
      ];
    },
  },
};
</script>
