import {createStore}  from 'vuex'

const store = createStore({
    state() {
        return {
            conceal: localStorage.getItem('conceal') === 'true',
            userItem:JSON.parse(localStorage.getItem('userItem')),
            loginStatus:localStorage.getItem('loginStatus') === 'true'
        }
    },
    mutations: {
        updateConceal(state, value) {
            state.conceal = value
        },
        updateUserItem(state,value){
            state.userItem = value
        },
        updateLoginStatus(state,value){
            state.loginStatus = value
        }
    },
    actions:{
        //更新属性
        initConceal(context){
            const conceal = localStorage.getItem('conceal') === 'true'
            if(conceal.toString()){
                context.commit('updateConceal',conceal)
            }
        },

        initUserItem(context){
            const userItem = JSON.parse(localStorage.getItem('userItem'))
            if(userItem){
                context.commit('updateUserItem',userItem)
            }
        },

        initLoginStatus(context){
            const loginStatus = localStorage.getItem('loginStatus') === 'true'
            if(loginStatus.toString()){
                context.commit('updateLoginStatus',loginStatus)
            }
        }
    }
})
export default store;