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
      :is="tab"
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
      let options = [];
      this.tabs.forEach(tab => {
        options.push(tab.title);
      });
      return options;
    },
    tab() {
      let tab = this.$route.query.tab;
      if (tab) {
        tab = this.capitalize(tab);
        if (this.options.includes(tab)) {
          return `Tab${tab}`;
        }
      }
      this.active = 0;
      return `Tab${this.options[0]}`;
    },
  },
  methods: {
    capitalize(word) {
      return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    },
    onTabChange(tab) {
      this.$router.push(tab.to);
    },
  },
};
</script>
