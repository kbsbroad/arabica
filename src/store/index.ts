import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 빈저장소를 생성한다.
// 컴포넌트별 저장소는 동적 등록방법을 이용한다.
export default new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  mutations: {}
})
