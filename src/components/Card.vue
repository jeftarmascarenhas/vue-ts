<template lang="pug">
  div(class="card card--center card--radius")
      slot(name="card_header")
      div(class="card_content")
        slot(name="card_content")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {}
</script>

<style scoped lang="scss">
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
</style>
