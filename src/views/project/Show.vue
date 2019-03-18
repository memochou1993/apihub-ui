<template>
  <div>
    <v-layout
      row
      wrap
    >
      <AppBreadcrumbs
        current="Overview"
      />
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
    params() {
      return this.$route.params;
    },
    project() {
      return this.$store.state.project;
    },
  },
  created() {
    this.fetchProject();
  },
  methods: {
    fetchProject() {
      this.$store.dispatch('fetchProject', {
        url: `/users/me/projects/${this.params.project}`,
        params: {
          diffForHumans: true,
          with: 'users',
        },
      });
    },
  },
};
</script>
