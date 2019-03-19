<template>
  <div>
    <v-layout
      row
      wrap
    >
      <AppBreadcrumbs />
      <v-flex
        xs12
      >
        <AppProgress />
        <v-card
          class="pa-3"
        >
          <div
            v-if="!project"
          >
            <AppNoData />
          </div>
          <div
            v-else
          >
            <v-card-title
              primary-title
              class="headline"
            >
              {{ project.name }}
            </v-card-title>
            <v-card-text
              class="subheading"
            >
              {{ project.description }}
            </v-card-text>
            <v-chip
              v-for="(user, index) in project.users"
              :key="index"
              color="accent lighten-2"
              text-color="secondary darken-4"
              @click="goTo({
                name: 'users.show',
                params: {
                  user: user.id.toString(),
                },
              })"
            >
              <v-avatar>
                <v-icon
                  color="white"
                >
                  account_circle
                </v-icon>
              </v-avatar>
              {{ user.name }}
            </v-chip>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppProgress from '@/components/AppProgress.vue';
import AppNoData from '@/components/AppNoData.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

export default {
  components: {
    AppProgress,
    AppNoData,
    AppBreadcrumbs,
  },
  computed: {
    ...mapGetters([
      'me',
    ]),
    isMe() {
      return this.params.user === this.me;
    },
    params() {
      return this.$route.params;
    },
    project() {
      return this.$store.state.project;
    },
  },
  watch: {
    $route() {
      this.fetchProject();
    },
  },
  created() {
    this.fetchProject();
  },
  methods: {
    goTo(location) {
      this.$router.push(location);
    },
    fetchProject() {
      const user = this.isMe ? 'me' : this.params.user;
      this.$store.dispatch('fetchProject', {
        url: `/users/${user}/projects/${this.params.project}`,
        params: {
          diffForHumans: true,
          with: 'users',
        },
      });
    },
  },
};
</script>
