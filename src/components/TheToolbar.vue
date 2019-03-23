<template>
  <div>
    <v-toolbar
      app
      dark
      clipped-left
      color="primary"
    >
      <v-toolbar-side-icon
        v-if="params.project"
        @click.stop="drawer = !drawer"
      />
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
    <v-navigation-drawer
      v-if="params.project"
      v-model="drawer"
      app
      clipped
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
            :to="link.path"
            :class="[active(link.path.name) && 'secondary lighten-4 primary--text']"
            exact
          >
            <v-list-tile-action>
              <v-icon
                :class="[active(link.path.name) && 'primary--text']"
              >
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
  data() {
    return {
      drawer: true,
    };
  },
  computed: {
    params() {
      return this.$route.params;
    },
    links() {
      return [
        {
          title: 'Overview',
          path: {
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
          path: {
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
  methods: {
    active(path) {
      return path.split('.')[0] === this.$route.name.split('.')[0];
    },
    goTo(location) {
      this.$router.push(location);
    },
    refresh() {
      //
    },
  },
};
</script>
