import { createStore } from 'vuex'
import AllData from './Modules/Alldata/index'
import CartData from "./Modules/CartData/index";
const store = createStore({
  modules: {
    all: AllData,
    cart: CartData,
  },
  state() {
    return {
      myName: "Ashu Ji",
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getName(state) {
      return state.myName;
    },
  },
});

export default store;
