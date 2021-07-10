import shopData from "../../data/alldata";
export default {
  namespaced: true,
  state() {
    return {
      shopData: shopData,
    };
  },
  mutations: {
    
  },

  actions: {},
  getters: {
    getAllData(state) {
      return state.shopData;
    },
  },
};
