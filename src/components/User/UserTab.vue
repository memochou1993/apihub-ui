<template>
  <div>
    <v-tabs
      color="secondary lighten-5"
      slider-color="primary lighten-2"
      align-with-title
      class="elevation-1 mb-3"
    >
      <v-tab
        v-for="(tab, index) in tabs"
        :key="index"
        @click="onChangeTab(tab.to)"
      >
        {{ tab.title }}
      </v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  computed: {
    params() {
      return this.$route.params;
    },
    tabs() {
      return [
        {
          title: 'Projects',
          to: {
            name: 'users.show',
            params: {
              user: this.params.user,
            },
            query: {
              tab: 'test',
            },
          },
        },
      ];
    },
  },
  methods: {
    onChangeTab(to) {
      this.$router.push(to);
    },
  },
};
</script>
