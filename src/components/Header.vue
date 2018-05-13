<template>
  <div class="columns">
    <div class="column">
      <h1 class="title" v-on:click="getHome">Tasker</h1>
    </div>
    <div class="column">
      <button class="button" type="button" v-on:click="newProject">New Project</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    newProject() {
      this.$router.push('/project/new');
    },
    getHome() {
      this.$router.push('/');
    },
  },
};
</script>
