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
        <v-data-table
          hide-actions
          :items="endpoints"
          :headers="headers"
          class="elevation-3"
        >
          <template
            v-slot:items="props"
          >
            <td
              class="text-xs-center"
            >
              {{ props.item.id }}
            </td>
            <td
              class="text-xs-right"
            >
              <v-chip
                dark
                small
                :color="colorize(props.item.method)"
              >
                {{ props.item.method }}
              </v-chip>
            </td>
            <td
              class="text-xs-right"
            >
              {{ props.item.name }}
            </td>
            <td
              class="text-xs-right"
            >
              {{ props.item.created_at }}
            </td>
            <td
              class="text-xs-right"
            >
              {{ props.item.updated_at }}
            </td>
            <td
              class="text-xs-center"
            >
              <v-btn
                icon
                @click="editEndpoint(props.item.id)"
              >
                <v-icon
                  color="primary lighten-1"
                >
                  visibility
                </v-icon>
              </v-btn>
            </td>
          </template>
          <template
            v-slot:no-data
          >
            <AppNoData />
          </template>
        </v-data-table>
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
  data() {
    return {
      headers: [
        {
          text: 'ID', value: 'id', align: 'center', sortable: false,
        },
        {
          text: 'Method', value: 'method', align: 'right', sortable: false,
        },
        {
          text: 'Name', value: 'name', align: 'right', sortable: false,
        },
        {
          text: 'Created at', value: 'created_at', align: 'right', sortable: false,
        },
        {
          text: 'Updated at', value: 'updated_at', align: 'right', sortable: false,
        },
        {
          text: 'Detail', value: '', align: 'center', sortable: false,
        },
      ],
      paginate: 15,
      page: 1,
      pages: 1,
    };
  },
  computed: {
    ...mapGetters([
      'me',
    ]),
    params() {
      return this.$route.params;
    },
    endpoints() {
      return this.$store.state.endpoint.endpoints; 
    },
    isMe() {
      return this.params.user === this.me;
    },
  },
  created() {
    this.fetchEndpoints();
  },
  methods: {
    colorize(method) {
      switch (method) {
        case 'GET':
          return 'blue lighten-2';
        case 'POST':
          return 'green lighten-2';
        case 'PUT':
          return 'orange lighten-2';
        case 'PATCH':
          return 'amber lighten-2';
        case 'DELETE':
          return 'red lighten-2';
      }
    },
    fetchEndpoints() {
      const user = this.isMe ? 'me' : this.params.user;
      this.$store.dispatch('fetchEndpoints', {
        url: `/users/${user}/projects/${this.params.project}/endpoints`,
        params: {
          paginate: this.paginate,
          page: this.page,
          diffForHumans: true,
        },
      })
        .catch(() => {
          this.$router.push({
            name: 404,
          });
        });
    },
    editEndpoint(id) {
      this.$router.push({
        name: 'endpoints.show',
        params: {
          user: this.params.user,
          project: this.params.project,
          endpoint: id,
        },
      });
    },
  },
};
</script>
