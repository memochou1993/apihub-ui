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
        <component
          :is="tab"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserProjects from '@/components/User/UserProjects.vue';

export default {
  components: {
    UserProjects,
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
      return this.tabs.includes(tab) ? `User${tab.charAt(0).toUpperCase()}${tab.slice(1)}` : 'UserProjects';
    },
  },
};
</script>
