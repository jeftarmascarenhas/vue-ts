<template lang="pug">
  div.dialog
    slots
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';


@Component({
  name: 'dialog',
})
export default class Todo extends Vue {
  @Prop() dialog!: string;
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
  .dialog {
    position: fixed;
    background-color: $shadow-default;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
  }
</style>
