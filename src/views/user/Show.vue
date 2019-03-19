<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        md3
      >
        <v-card
          v-if="user"
          color="secondary lighten-5"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            :aspect-ratio="16/9"
          />
          <v-card-title>
            <div
              class="headline"
            >
              {{ user.name }}
            </div>
            <div
              class="title secondary--text"
            >
              {{ user.username }}
            </div>
          </v-card-title>
        </v-card>
      </v-flex>

      <v-flex
        md9
      >
        <UserTab />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserTab from '@/components/User/UserTab.vue';

export default {
  components: {
    UserTab,
  },
  computed: {
    params() {
      return this.$route.params;
    },
    user() {
      return this.$store.state.user.user;
    },
  },
  beforeRouteUpdate (to, from, next) {
    next();
    if (to.params.user !== from.params.user) {
      this.fetchUser();
    }
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { user } = this.params;
      this.$store.dispatch('fetchUser', {
        url: `/users/${user}`,
        params: {
          diffForHumans: true,
        },
      })
        .catch(() => {
          this.$router.push({
            name: 404,
          });
        });
    },
  },
};
</script>
