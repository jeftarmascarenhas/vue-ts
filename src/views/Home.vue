<template lang="pug">
  section.home
    .card.card--center.card--radius
      header.card__header
        h2.card__header__title TodoList
        button.btn.btn-plus +
      .card_content
        h3.task_count {{ todos.length }} task
        ul.card__list
          todo(v-for='(todo) in todos', class="card__list__item" :key='todo.id', :todo='todo', @onCompleteTask='completeTask')
    dialog
      form(@submit.stop.prevent="submitTask")
        input(type='text', v-model='text')
        button(type='submit') Add
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';

import Todo from '@/components/Todo.vue';
import Dialog from '@/components/Dialog.vue';

@Component({
  data () {
    return {
      text: ''
    }
  },
  components: {
    Todo,
    'dialog': Dialog
  },
  computed: {
    ...mapGetters({
      todos: 'todos'
    })
  },
  methods: {
    completeTask(task) {
      this.$store.dispatch({ type: 'completeTask', task });
    },
    submitTask() {
      const text = this.text;
      this.$store.dispatch({ type: 'addTask', text });
      this.text = '';
    }
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
  .card {
    background-color: $bg-card;
    max-width: 800px;
    box-shadow: 0px 2px 4px rgba($shadow-default, 0.3);
    &.card--center {
      margin-left: auto;
      margin-right: auto;
    }
    &.card--radius {
      border-radius: 1.3em;
    }
    .card__header {
      display: flex;
      padding: 2em;
      justify-content: space-between;
      .card__header__title {
        font-size: 2.3em;
      }
    }
    .card_content {
      padding: 2em;
    }
    .card__list {
      .card__list__item {
        display: flex;
        align-items: center;
      }
    }
  }
  .task_count {
    color: $text-secound;
    font-weight: 600;
    font-size: 1.3em;
  }
</style>

