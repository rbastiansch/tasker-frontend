<template>
  <div>
    <div class="columns">
      <div class="column is-one-quarter">
        <p class="has-text-left has-text-weight-semibold">Name</p>
      </div>
      <div class="column">
        <p class="has-text-left has-text-weight-semibold">Description</p>
      </div>
      <div class="column is-one-quarter">
        <button class="button is-link is-outlined" type="button"
                v-on:click="newProject">New Project
        </button>
      </div>
    </div>
    <div v-for="(project, index) in projects" :key="index" class="box">
      <ListProjectItem v-bind:project="project" v-on:listProjects="listProjects" />
    </div>
  </div>
</template>

<script>
import { projects } from '@/services/projects';
import ListProjectItem from './ListProjectItem';

export default {
  name: 'ListProject',
  components: {
    ListProjectItem,
  },
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  mounted() {
    this.listProjects();
  },
  methods: {
    listProjects() {
      const token = this.token;
      projects(token)
        .then((response) => {
          this.projects = response.data.projects;
        });
    },
    newProject() {
      this.$router.push('/project/new');
    },
  },
};
</script>
