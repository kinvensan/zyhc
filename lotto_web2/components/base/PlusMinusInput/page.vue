<template>
<div class="input-group plus-minus-input">
  <div class="input-group-button">
    <button type="button" class="button hollow circle" @click="minusClick" data-quantity="minus" data-field="quantity">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>
  </div>
  <input class="input-group-field" type="number" name="quantity" v-model="amount">
  <div class="input-group-button">
    <button type="button" class="button hollow circle" @click="plusClick" data-quantity="plus" data-field="quantity">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</div>
</template>
<script>
export default {
  props: {
    start: {
      type: Number,
      default: 0.0
    },
    step: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
       amout: this.start
    }
  },
  methods: {
    minusClick(){
      this.amout -= this.step
    },
    plusClick() {
      this.amout += this.step
    }
  }
}
</script>
<style lang="sass" scoped>
.plus-minus-input {
  align-items: center;

  .input-group-field {
    text-align: center;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    padding: 1rem;

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      appearance: none;
    }
  }

  .input-group-button {
    .circle {
      border-radius: 50%;
      padding: 0.25em 0.8em;
    }
  }
}
</style>


