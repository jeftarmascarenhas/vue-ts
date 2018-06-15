<template lang="pug">
  section.home
    div(class="card card--center card--radius")
      header.card__header
        h2.card__header__title TodoList
        button(@click="showModal = true" class="btn btn-plus") +
      .card_content
        h3(v-if="todosList" class="task_count") {{ todosList.length }}
        ul.card__list
          todo(v-for="(todo) in todosList", class="card__list__item" :key="todo.id", :todo="todo", @onCompleteTask="completeTask")
    modal(v-if="showModal" @close="showModal = false")
      h1(slot="header") Add todo
      form(@submit.stop.prevent="submitTask" slot="content")
        .form-groups
          input(type="text" v-model="text" class="form-input" placeholder="Add task")
          button(type="submit" class="btn btn-primary") Add
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getter } from 'vuex-class';

import { todos } from '@/store/todos/getters.map';
import { addTask } from '@/store/todos/actions.map';

import Todo from '@/components/Todo.vue';
import Modal from '@/components/Modal.vue';

@Component({
  components: {
    Todo,
    Modal
  },
  computed: {
    ...mapGetters({
      todosList: 'todosList'
    })
  }
})

export default class Home extends Vue {
  public showModal: boolean = false;
  public text: string = '';

  
  private completeTask(task: string) {
    this.$store.dispatch({ type: 'completeTask', task });
  }

  submitTask() {
    this.$store.dispatch(addTask({
      text: this.text,
      done: false
    }));
    this.text = '';
  }
  created() {
    // console.log(this.todos);
  }
}
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

