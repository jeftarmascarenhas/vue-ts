<template lang="pug">
  div(:class="{ completed: todo.done }")
    input(type="checkbox" :checked="todo.done" @change="onCompleteTask(todo)" :value="todo.done")
    h4.card-list__text.card-list__text--border  {{ todo.text }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { ITodoItem } from '@/store/todos/state-interface';

@Component
export default class TodoList extends Vue {
  @Prop()
  private todo!: ITodoItem;

  private onCompleteTask(todo: ITodoItem) {
    this.$emit('onCompleteTask', { todo });
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
  .completed {
    .card-list__text {
      color: lighten($shadow-default, 65%);
      transition: all 0.4s ease-in-out;
    }
    .card-list__text--border::before {
      top: 50%;
    }
  }
  .card-list__text {
    font-size: 1.6em;
    margin-left: 0.5em;
    flex: 1 1 auto;
    color: $shadow-default;
    padding-bottom: 0.2em;
    &.card-list__text--border {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        background-color: lighten($shadow-default, 65%);
        left: 0;
        width: 100%;
        height: 1px;
      }
    }
  }
</style>
