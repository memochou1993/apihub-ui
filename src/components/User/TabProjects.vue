<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex>
        <v-data-table
          hide-actions
          :items="projects"
          :headers="headers"
          :loading="loading"
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
              class="text-xs-left"
            >
              {{ props.item.name }}
            </td>
            <td
              class="text-xs-left"
            >
              {{ props.item.created_at }}
            </td>
            <td
              class="text-xs-left"
            >
              {{ props.item.updated_at }}
            </td>
            <td
              class="text-xs-center"
            >
              <v-icon
                v-if="props.item.private"
                color="warning"
              >
                lock
              </v-icon>
              <v-icon
                v-else
                color="warning"
              >
                lock_open
              </v-icon>
            </td>
            <td
              class="text-xs-center"
            >
              <v-btn
                icon
                @click="viewProject(props.item.id)"
              >
                <v-icon
                  color="success"
                >
                  dashboard
                </v-icon>
              </v-btn>
            </td>
          </template>
          <template
            v-slot:no-data
          >
            <div
              v-if="noData"
              class="text-xs-center ma-5"
            >
              No records found
            </div>
          </template>
        </v-data-table>
        <div
          class="text-xs-center ma-3"
        >
          <v-pagination
            v-if="pages > 1"
            v-model="page"
            :length="pages"
            @input="onPageChange"
          />
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'ID', value: 'id', align: 'center', sortable: false,
        },
        {
          text: 'Name', value: 'name', align: 'left', sortable: false,
        },
        {
          text: 'Created at', value: 'created_at', align: 'left', sortable: false,
        },
        {
          text: 'Updated at', value: 'updated_at', align: 'left', sortable: false,
        },
        {
          text: 'Private', value: 'private', align: 'center', sortable: false,
        },
        {
          text: 'Dashboard', value: '', align: 'center', sortable: false,
        },
      ],
      loading: true,
      noData: false,
      paginate: 15,
      page: 1,
      pages: 1,
    };
  },
  computed: {
    user() {
      return this.$route.params.user;
    },
    projects() {
      return this.$store.state.projects;
    },
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    onPageChange() {
      this.fetchProjects();
    },
    fetchProjects() {
      this.loading = true;
      this.$store.dispatch('fetchProjects', {
        url: '/users/me/projects',
        params: {
          paginate: this.paginate,
          page: this.page,
          diffForHumans: true,
        },
      })
        .catch(() => {
          this.noData = true;
        })
        .then(() => {
          setTimeout(() => {
            this.loading = false;
          }, 750);
        });
    },
    viewProject(id) {
      this.$router.push({
        name: 'projects.show',
        params: {
          user: this.user,
          project: id,
        },
      });
    },
    editProject(id) {
      console.log(id);
    },
  },
};
</script>
