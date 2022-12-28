export const state = () => ({
  products: [],
  product: {},
  load: false,
})

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },

  setProduct(state, payload) {
    state.product = payload
  },

  setLoading(state, payload) {
    state.load = payload
  },
}

export const getters = {
  products(state) {
    return state.products
  },

  product(state) {
    return state.product
  },

  loading(state) {
   return state.load
  }
}

export const actions = {
  async getProducts({ commit }, category = 'all') {
    const urls = {
      all: 'https://fakestoreapi.com/products',
      men: "https://fakestoreapi.com/products/category/men's%20clothing",
      women: "https://fakestoreapi.com/products/category/women's%20clothing",
    }
    commit('setLoading', true)
    try {
      const products = await this.$axios.$get(urls[category])
      if (products) {
        commit('setProducts', products)
      }
      commit('setLoading', false)
    } catch (err) {
      throw new Error(err)
    }
  },

  async getProduct({ commit }, id) {
    commit('setLoading', true)
    try {
      const product = await this.$axios.$get(
        `https://fakestoreapi.com/products/${id}`
      )
      commit('setProduct', product)
      commit('setLoading', false)
    } catch (err) {
      throw new Error(err)
    }
  },
}
