<template lang="pug">
div(class="product-card")
    div(class="product-card__image") 
        img(:src="product.image")
    div(class="product-card__info")
        div(class="product-card__title") {{product.title}}
        details(class="product-card__description") 
          summary Description
          p {{product.description}}
        div(class="product-card__price") Price ${{product.price}}
    nuxt-link(v-if="$route.path === '/'" :to="'/product/' + product.id") Go to product card >>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({ productItem: 'product' }),
  },
}
</script>

<style lang="scss">
.product-card {
  max-width: 500px;
  height: 100%;
  margin: 10px 0;
  padding: 25px;
  display: grid;
  border-radius: 10px;
  box-shadow: 10px 5px 5px rgb(83, 82, 82);
  grid-template-columns: 1fr 2fr;

  &__image {
    max-width: 150px;
    display: flex;
    align-items: center;

    img {
      max-width: 150px;
    }
  }

  &__info {
    padding: 20px;
    max-width: 100%;
    min-height: 100%;
    // display: flex;
    // flex-direction: column;
  }

  &__title {
    font-size: 24px;
    color: #555;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 16px;
    margin-bottom: 25px;
    // flex: 1 1 auto;
  }

  &__price {
    font-size: 24px;
  }

  details {
    cursor: pointer;
  }
}
</style>
