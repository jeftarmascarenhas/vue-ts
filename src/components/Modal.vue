<template lang="pug">
  transition(name="modal")
    .modal
      .modal__dialog
        div.modal__content.modal__content--radius
          .modal__content__header
            slot(name="header")
          .modal__content__body
            slot(name="content")
          .modal__content__footer
            button(type="button" @click="$emit('close')" class="btn btn-default") Close
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({})
export default class Todo extends Vue {
  @Prop() modal!: string;
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
  .modal {
    position: fixed;
    background-color: rgba($shadow-default, 0.6);
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 1080;
  }
  .modal__dialog {
    position: relative;
    width: auto;
    margin: .5rem;
  }
  .modal__content {
   margin-left: auto;
   margin-right: auto;
   display: flex;
   flex-direction: column;
   background-color: $bg-ligth;
   .modal__content__header,
   .modal__content__body,
   .modal__content__footer {
     padding:1rem;
   }
  }
  .modal__content--radius {
    border-radius: 0.2rem;
  }
  .modal__content__header {
    display: flex;
    border-bottom: 1px solid darken($bg-ligth, 10);
  }
  .modal__content__footer {
    display: flex;
    justify-content: flex-end;
    >:not(:last-child) {
      margin-right: 0.25rem;
    }
    border-top: 1px solid darken($bg-ligth, 10);
  }
  @media (min-width:768px) {
    .modal__dialog {
      max-width: 500px;
      margin: 1.7rem auto;
    }
  }
</style>
