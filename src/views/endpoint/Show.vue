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
        <AppProgressLinear />
        <v-card
          class="pa-3"
        >
          <div
            v-if="!endpoint"
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
              {{ endpoint.name }}
            </v-card-title>
            <v-card-text
              class="subheading"
            >
              {{ endpoint.description }}
            </v-card-text>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppProgressLinear from '@/components/AppProgressLinear.vue';
import AppNoData from '@/components/AppNoData.vue';
import AppBreadcrumbs from '@/components/AppBreadcrumbs.vue';

export default {
  components: {
    AppProgressLinear,
    AppNoData,
    AppBreadcrumbs,
  },
  computed: {
    ...mapGetters([
      'me',
    ]),
    params() {
      return this.$route.params;
    },
    endpoint() {
      return this.$store.state.endpoint.endpoint;
    },
    isMe() {
      return this.params.user === this.me;
    },
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.fetchEndpoint();
  },
  created() {
    this.fetchEndpoint();
  },
  methods: {
    goTo(location) {
      this.$router.push(location);
    },
    fetchEndpoint() {
      const user = this.isMe ? 'me' : this.params.user;
      this.$store.dispatch('fetchEndpoint', {
        url: `/users/${user}/projects/${this.params.project}/endpoints/${this.params.endpoint}`,
        params: {
          diffForHumans: true,
        },
      })
        .catch(() => {
          // this.$router.replace({
          //   name: 404,
          // });
        });
    },
  },
};
</script>
