<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        md3
        xs12
      >
        Project Show
      </v-flex>

      <v-flex
        md9
        xs12
      >
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    project() {
      return this.$route.params.project;
    },
  },
  created() {
    this.fetchProject();
  },
  methods: {
    fetchProject() {
      this.loading = true;
      this.$store.dispatch('fetchProject', {
        url: `/users/me/projects/${this.project}`,
        params: {
          diffForHumans: true,
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
