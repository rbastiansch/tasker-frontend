<template>
  <div class="column">
    <div class="columns">
      <div class="column has-text-left">
        <p> - {{task.title}}</p>
      </div>
      <div class="column has-text-left">
        <p> - {{task.description}}</p>
      </div>
      <div class="column is-one-quarter">
        <button class="button is-danger is-outlined" type="button" v-on:click="deleteTask">
          Delete Task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { updateProject } from '@/services/projects';

export default {
  name: 'TaskProjectItem',
  props: ['task', 'project'],
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    deleteTask() {
      const { token, task, project } = this;
      const { _id } = this.project;
      /* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
      const tasks = project.tasks.filter(item => item._id !== task._id);
      project.tasks = tasks;

      updateProject(token, _id, project);
    },
  },
};
</script>
