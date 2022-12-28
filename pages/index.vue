<template lang="pug">
div
  div
    div(class="radio")
      label(class="radio-inline")
        input(type="radio" name="opinion" checked @click="chooseCategory('all')")
        i
        span All

      label(class="radio-inline")
        input(type="radio" name="opinion" @click="chooseCategory('women')")
        i
        span Women

      label(class="radio-inline")
        input(type="radio" name="opinion"  @click="chooseCategory('men')")
        i
        span Men
  div(class="card-wrap" v-if="!loading")
    ProductCard(v-for="product of products" :key="product.id" :product="product")
  div(v-else) Loading....
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'IndexPage',
  
  async fetch({ store }) {
    await store.dispatch('getProducts')
  },

  computed: {
    ...mapGetters({ products: 'products', loading: 'loading' }),
  },

  methods: {
    chooseCategory(category) {
      this.$store.dispatch('getProducts', category)
    },
  },
})
</script>

<style lang="scss">
label {
  display: block;
  margin-bottom: 1.5em;

  > input {
    display: none;
  }

  > i {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    vertical-align: middle;
    border: 2px solid blue;
    transition: 0.25s;
  }

  > span {
    display: inline-block;
    padding-bottom: 3px;
    border-bottom: 2px dotted #fff;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 0.9em;
  }

  > input:checked + i {
    box-shadow: inset 0 0 0 5px blue;
  }

  &:hover {
    cursor: pointer;
  }
}

.radio {
  display: flex;
  justify-content: center;

  &-inline {
    margin-right: 40px;
  }
}
.card-wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px 0px;
}
</style>
