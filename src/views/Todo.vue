<template lang="pug">
  section
    card
      header(class="card__header" slot="card_header")
        h2(class="card__header__title") TodoList
        button(@click="showModal = true" class="btn btn-plus") +
      div(slot="card_content")
        h3(class="task_count") {{ getTodos.length }} tasks
        div(class="card__list")
          todo-list(v-for="(todo) in getTodos" class="card__list__item card__list__item--margin-bottom" :key="todo.id" :todo="todo" @onCompleteTask="completeTask")
    modal(v-if="showModal" @close="showModal = false")
      h1(slot="header") Add todo
      form(@submit.stop.prevent="submitTask" slot="content")
        div(class="form-groups")
          input(type="text" v-model="text" class="form-input" placeholder="Add task")
          button(type="submit" class="btn btn-primary") Add
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { Getter } from 'vuex-class';

import { getTodos } from '@/store/todos/getters.map';
import { addTask, completeTask } from '@/store/todos/actions.map';
import { ITodoItem } from '@/store/todos/state-interface';

import TodoList from '@/components/TodoList.vue';
import Modal from '@/components/Modal.vue';
import Card from '@/components/Card.vue';

let todoID: number = 0;

@Component({
  components: {
    TodoList,
    Modal,
    Card,
  }
})
export default class Home extends Vue {
  public showModal: boolean = false;
  public text: string = '';

  @Getter(getTodos) getTodos!: string;

  private completeTask(task: ITodoItem) {
    this.$store.dispatch(completeTask(task));
  }

  submitTask() {
    this.$store.dispatch(addTask({
      id: todoID++,
      text: this.text,
      done: false
    }));
    this.text = '';
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
  .task_count {
    color: $text-secound;
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 1em;
  }
</style>

