<template>
  <div class="columns">
    <div class="column">
      <h1 class="title" v-on:click="getHome"><a class="has-text-dark">Tasker</a></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    getHome() {
      this.$router.push('/');
    },
  },
};
</script>
