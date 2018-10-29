import Vuex from 'vuex'
import moduleA from './moduleA'
import moduleB from './moduleB'
export default () => {
    return new Vuex.Store({
      // state: {
      //   count: 0
      // },
      // mutations: {
      //   increment (state) {
      //     state.count++
      //   }
      // }
      modules:{
        a: moduleA,
        b: moduleB
      }
    })
  }