<template>
  <div>
    <v-tabs
      v-model="active"
      color="secondary lighten-5"
      slider-color="primary lighten-2"
      align-with-title
      class="elevation-1 mb-3"
    >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        @click="onTabChange(tab)"
      >
        {{ tab.title }}
      </v-tab>
    </v-tabs>
    <component
      :is="component"
    />
  </div>
</template>

<script>
import TabOverview from '@/components/User/TabOverview.vue';
import TabProjects from '@/components/User/TabProjects.vue';

export default {
  components: {
    TabOverview,
    TabProjects,
  },
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    params() {
      return this.$route.params;
    },
    tabs() {
      return [
        {
          title: 'Overview',
          to: {
            name: 'users.show',
            params: {
              user: this.params.user,
            },
          },
        },
        {
          title: 'Projects',
          to: {
            name: 'users.show',
            params: {
              user: this.params.user,
            },
            query: {
              tab: 'projects',
            },
          },
        },
      ];
    },
    options() {
      const options = [];
      this.tabs.forEach((tab) => {
        options.push(tab.title);
      });
      return options;
    },
    option() {
      const tab = this.$route.query.tab || '';
      return `${tab.charAt(0).toUpperCase()}${tab.slice(1)}`;
    },
    component() {
      const tab = this.options.includes(this.option) ? this.option : this.options[0];
      return `Tab${tab}`;
    },
  },
  watch: {
    $route() {
      this.setActive();
    },
  },
  created() {
    this.setActive();
  },
  methods: {
    setActive() {
      const index = this.options.indexOf(this.option);
      this.active = index === -1 ? 0 : index;
    },
    onTabChange(tab) {
      this.$router.push(tab.to);
    },
  },
};
</script>
