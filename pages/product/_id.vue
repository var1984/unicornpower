<template lang="pug">
div
  div(v-if="!loading")
    ProductCard(:product="product")
  div(v-else) Loading....
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductId',

  validate({route}){
    if(route.path === `/product/${route?.params?.id}`){
      return true
    }
  },

  async fetch() {
    const id = this.$route?.params?.id
    await this.$store.dispatch('getProduct', id)
  },

  computed: {
    ...mapGetters({ product: 'product', loading: 'loading' }),
  },
}
</script>
