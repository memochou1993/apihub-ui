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
          class="elevation-1"
        >
          <template
            v-slot:items="props"
          >
            <td
              class="text-xs-right"
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
              {{ props.item.description }}
            </td>
            <td
              class="text-xs-left"
            >
              {{ props.item.private }}
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
              class="text-xs-left"
            >
              <v-menu
                offset-x
                transition="scale-transition"
              >
                <template
                  v-slot:activator="{ on }"
                >
                  <v-btn
                    icon
                    color="info lighten-2"
                    v-on="on"
                  >
                    <v-icon>more_horiz</v-icon>
                  </v-btn>
                </template>
                <v-list
                  dense
                >
                  <v-list-tile
                    @click="viewProject(props.item.id)"
                  >
                    <v-list-tile-title>View</v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile
                    @click="editProject(props.item.id)"
                  >
                    <v-list-tile-title>Edit</v-list-tile-title>
                  </v-list-tile>
                </v-list>
              </v-menu>
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
      projects: [],
      headers: [
        {
          text: 'ID', value: 'id', align: 'right', sortable: false,
        },
        {
          text: 'Name', value: 'name', sortable: false,
        },
        {
          text: 'Description', value: 'description', sortable: false,
        },
        {
          text: 'Private', value: 'private', sortable: false,
        },
        {
          text: 'Created at', value: 'created_at', sortable: false,
        },
        {
          text: 'Updated at', value: 'updated_at', sortable: false,
        },
        {
          text: '', value: '', sortable: false,
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
      this.axios({
        method: 'GET',
        url: '/users/me/projects',
        params: {
          paginate: this.paginate,
          page: this.page,
          diffForHumans: true,
        },
      })
        .then(({ data }) => {
          this.projects = data.data;
          this.pages = data.meta.last_page;
        })
        .catch((error) => {
          this.noData = true;
          console.debug(error);
        })
        .then(() => {
          setTimeout(() => {
            this.loading = false;
          }, 1000);
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
      //
    },
  },
};
</script>
