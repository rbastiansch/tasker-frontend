<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <label class="label">Task Name</label>
        <div class="control">
          <input class="input" type="text" v-model="title" />
        </div>
      </div>
      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <input class="input" type="text" v-model="description" v-on:keyup.enter="addTask" />
        </div>
      </div>
      <div class="field">
        <button class="button is-link" type="button" v-on:click="addTask">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
import { updateProject } from '@/services/projects';

export default {
  name: 'TaskProject',
  props: ['project'],
  data() {
    return {
      title: '',
      description: '',
    };
  },
  computed: {
    token() {
      return this.$store.state.token;
    },
  },
  methods: {
    addTask() {
      const { token, project } = this;
      const { _id } = this.project;
      if (!this.title || !this.description) {
        return;
      }
      const { title, description } = this;
      const task = { title, description };
      project.tasks.push(task);
      updateProject(token, _id, project)
        .then(() => {
          this.title = '';
          this.description = '';
        });
    },
  },
};
</script>
