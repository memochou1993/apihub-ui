<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
      >
        <AppBreadcrumbs />
      </v-flex>
      <v-flex
        xs12
      >
        <AppProgressLinear />
        <v-card
          class="pa-3"
        >
          <div
            v-if="loading"
          >
            <AppNoData />
          </div>
          <div
            v-else
          >
            <v-card-title>
              <div class="headline">
                {{ project.name }}
              </div>
            </v-card-title>
            <v-divider />
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
                  dark
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
import { mapState, mapGetters } from 'vuex';
import AppProgressLinear from '@/components/AppProgressLinear.vue';
import AppNoData from '@/components/AppNoData.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

export default {
  components: {
    AppProgressLinear,
    AppNoData,
    AppBreadcrumbs,
  },
  data() {
    return {
      project: null,
    };
  },
  computed: {
    ...mapState([
      'loading',
      'refresh',
    ]),
    ...mapGetters([
      'me',
    ]),
    params() {
      return this.$route.params;
    },
    isMe() {
      return this.params.user === this.me;
    },
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.fetchProject();
  },
  watch: {
    refresh() {
      this.$store.dispatch('setRefresh', false);
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
      })
        .then(({ data }) => {
          this.project = data;
        })
        .catch(() => {
          this.$router.replace({
            name: 404,
          });
        });
    },
  },
};
</script>
