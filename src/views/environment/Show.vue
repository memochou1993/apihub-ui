<template>
  <div>
    <v-layout
      row
      wrap
    >
      <v-flex
        md3
        xs12
      >
        Environment Show
      </v-flex>
      <v-flex
        md9
        xs12
      >
        <router-view />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script>
