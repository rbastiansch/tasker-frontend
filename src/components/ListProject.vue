<template>
  <div>
    <div v-for="(project, index) in projects" :key="index" class="columns">
      <div class="column box has-background-light">
        <div class="columns">
          <div class="column is-one-quarter">
            <p class="has-text-left has-text-weight-semibold">Name:</p>
          </div>
          <div class="column has-text-left">
            <p>{{project.title}}</p>
          </div>
          <div class="column is-one-quarter">
            <button class="button" type="button">Delete</button>
          </div>
        </div>
        <div class="columns">
          <div class="column is-one-quarter has-text-left">
            <p class="has-text-left has-text-weight-semibold">Description:</p>
          </div>
          <div class="column has-text-left ">
            <p>{{project.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { projects } from '@/services/projects';

export default {
  name: 'ListProject',
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
  },
};
</script>
