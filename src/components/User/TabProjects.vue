<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex>
        <AppProgress />
        <v-data-table
          hide-actions
          :items="projects"
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
                id="private"
                v-if="props.item.private"
                color="primary lighten-1"
              >
                lock
              </v-icon>
              <v-icon
                v-else
                color="primary lighten-1"
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
                  color="primary lighten-1"
                >
                  dashboard
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
import AppProgress from '@/components/AppProgress.vue';
import AppNoData from '@/components/AppNoData.vue';

export default {
  components: {
    AppProgress,
    AppNoData,
  },
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
      paginate: 15,
      page: 1,
      pages: 1,
    };
  },
  computed: {
    params() {
      return this.$route.params;
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
      const { auth } = { auth: { check: true } }; // Temp
      const user = auth.check ? 'me' : this.params.user;
      this.$store.dispatch('fetchProjects', {
        url: `/users/${user}/projects`,
        params: {
          paginate: this.paginate,
          page: this.page,
          diffForHumans: true,
        },
      });
    },
    viewProject(id) {
      this.$router.push({
        name: 'projects.show',
        params: {
          user: this.params.user,
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

<style lang="stylus" scoped>
#private
  cursor default
</style>
