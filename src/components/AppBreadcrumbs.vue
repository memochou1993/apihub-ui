<template>
  <div>
    <v-breadcrumbs
      :items="breadcrumbs"
    >
      <template
        v-slot:item="props"
      >
        <a
          @click="goTo(props.item.location)"
          :class="[props.item.disabled && 'disabled']"
        >
          {{ props.item.text }}
        </a>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: String,
      required: true,
    },
  },
  computed: {
    params() {
      return this.$route.params;
    },
    breadcrumbs() {
      return [
        {
          text: this.params.user,
          disabled: false,
          location: {
            name: 'users.show',
            params: {
              user: this.params.user,
            },
          },
        },
        {
          text: this.params.project,
          disabled: false,
          location: {
            name: 'projects.show',
            params: {
              user: this.params.user,
              project: this.params.project,
            },
          },
        },
        {
          text: this.current,
          disabled: true,
        }
      ];
    },
  },
  methods: {
    goTo(location) {
      this.$router.push(location);
    },
  },
};
</script>

<style lang="stylus" scoped>
  .disabled
    color: grey
    pointer-events: none
</style>
