<template>
  <div class="columns">
    <div class="column">
      <div class="columns">
        <div class="column is-one-quarter has-text-left">
          <p>{{project.title}}</p>
        </div>
        <div class="column has-text-left ">
          <p>{{project.description}}</p>
        </div>
        <div class="column is-one-quarter">
          <button class="button is-danger is-outlined" type="button" v-on:click="deleteProject">
            Delete
          </button>
          <button class="button is-danger is-outlined" type="button" v-on:click="editProject">
            Edit
          </button>
        </div>
      </div>
      <div class="columns">
        <span class="custom-icon has-text-info" title="Show/hide tasks"
              v-on:click="toggleTasks"
        >{{showIcon}}</span>
      </div>
      <p v-if="project.tasks.length && showTasks" class="has-text-weight-semibold">Tasks</p>
      <div v-if="showTasks" class="columns" v-for="(task, index) in project.tasks" :key="index">
        <TaskProjectItem v-bind:task="task" v-bind:project="project" />
      </div>
      <TaskProject v-if="showTasks" v-bind:project="project" />
    </div>
  </div>
</template>

<script>
import { deleteProject } from '@/services/projects';
import TaskProjectItem from './TaskProjectItem';
import TaskProject from './TaskProject';

export default {
  name: 'ListProjectItem',
  props: ['project'],
  data() {
    return {
      showTasks: false,
      showIcon: '+',
    };
  },
  components: {
    TaskProjectItem,
    TaskProject,
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    deleteProject() {
      const { token } = this;
      const { _id } = this.project;
      deleteProject(token, _id);
      this.$emit('listProjects');
    },
    editProject() {
      const { _id } = this.project;
      this.$router.push(`/project/${_id}`);
    },
    toggleTasks() {
      this.showTasks = !this.showTasks;
      if (!this.showTasks) {
        this.showIcon = '+';
      } else {
        this.showIcon = '-';
      }
    },
  },
};
</script>
