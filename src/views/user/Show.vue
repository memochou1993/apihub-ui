<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        md2
      >
        User Show
      </v-flex>

      <v-flex
        md10
      >
        <UserTab />
        <component
          :is="tab"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserTab from '@/components/User/UserTab.vue';
import TabProjects from '@/components/User/TabProjects.vue';

export default {
  components: {
    UserTab,
    TabProjects,
  },
  data() {
    return {
      tabs: [
        'projects',
      ],
    };
  },
  computed: {
    tab() {
      const { tab } = this.$route.query;
      return this.tabs.includes(tab) ? `Tab${tab.charAt(0).toUpperCase()}${tab.slice(1)}` : 'TabProjects';
    },
  },
};
</script>
