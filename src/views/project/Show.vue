<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
      >
        <v-card
          class="pa-3"
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
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  components: {
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
      this.loading = true;
      this.$store.dispatch('fetchProject', {
        url: `/users/me/projects/${this.params.project}`,
        params: {
          diffForHumans: true,
          with: 'users',
        },
      })
        .catch(() => {
          this.noData = true;
        })
        .then(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },
  },
};
</script>
