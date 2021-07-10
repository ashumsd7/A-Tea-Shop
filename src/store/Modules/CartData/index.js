// import shopData from "../../data/alldata";
export default {
  namespaced: true,
  state() {
    return {
      cartData: [],
    };
  },
  mutations: {
    addToCartMuatation(state, payload) {
      state.cartData.push(payload);
    },
    clearCartMutation(state) {
      state.cartData = [];
    },
  },

  actions: {
    addToCartAction(context, payload) {
      context.commit("addToCartMuatation", payload);
    },
    clearCartAction(context) {
       context.commit("clearCartMutation");
    },
  },
  getters: {
    getCartData(state) {
      return state.cartData;
    },
  },
};
