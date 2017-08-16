import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user:{
        Info:{
        input1:'',
        input2:''
        },
        imageSrc:''
    }
}
const mutations = {
    ShareInfo(state,user){
     state.user.input1=user.input1
     state.user.imageSrc=user.imageSrc
    } 
}
export default new Vuex.Store({
 state,
 mutations
})