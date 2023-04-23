import {createStore}  from 'vuex'

const store = createStore({
    state() {
        return {
            conceal: localStorage.getItem('conceal') == 'true'?true:false
        }
    },
    mutations: {
        updateConceal(state, value) {
            state.conceal = value
        }
    },
    actions:{
        init(context){
            const conceal = localStorage.getItem('conceal') == 'true'?true:false
            if(conceal.toString()){
                context.commit('updateConceal',conceal)
            }

        }
    }
})
export default store;