<template lang="pug">
  div(:class="{ completed: todo.done }")
    input(type="checkbox" :checked="todo.done" @change="onCompleteTask(todo)" class="custom-check" id="type-check" :value="todo.done")
    label(for="type-check")
    h4(class="card-list__text card-list__text--border")
      span {{ todo.text }}
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
      transition: all 0.3s ease-in-out;
    }
    .card-list__text--border::before {
      transform: translateY(-12px);
    }
  }
  .card-list__text {
    font-size: 1.4em;
    font-weight: 100;
    margin-left: 0.5em;
    flex: 1 1 auto;
    color: $shadow-default;
    padding-bottom: 0.2em;
    &.card-list__text--border {
      position: relative;
      transition: all 0.4s ease-in-out;
      &::before {
        content: '';
        transition: all 0.3s ease-in-out;
        position: absolute;
        bottom: 0;
        background-color: lighten($shadow-default, 65%);
        left: 0;
        width: 100%;
        height: 1px;
      }
    }
  }
  .custom-check {
    display: none;
    &:checked {
      & + label {
        border-color: none;
      }
      & + label::before,
      & + label::after {
        opacity: 1;
      }
    }
    & + label {
      cursor: pointer;
      position: relative;
      border-radius: 100%;
      width: 30px;
      height: 30px;
      box-shadow: 0 0 0 1px #ccc;
      &::before,
      &::after {
        content: '';
        position: absolute;
        opacity: 0;
        transition: all 0.3s ease;
        left: 50%;
        top: 50%;
        background-color: #333;
      }
      &::before {
        width: 6px;
        height: 2px;
        transform: translate(-114%, -50%) rotate(47deg);
      }
      &::after {
        width: 12px;
        height: 2px;
        transform: translate(-29%, -100%) rotate(135deg);
      }
    }
  }
</style>
