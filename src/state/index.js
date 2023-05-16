import {createStore}  from 'vuex'

const store = createStore({
    state() {
        return {
            conceal: localStorage.getItem('conceal') === 'true',
            userItem:JSON.parse(localStorage.getItem('userItem')),
            loginStatus:localStorage.getItem('loginStatus') === 'true',
            userItemOne:JSON.parse(localStorage.getItem('userItemOne')),
            articleList:JSON.parse(localStorage.getItem('articleList')),
            categorizedItems:JSON.parse(localStorage.getItem('categorizedItems')),
            classification:JSON.parse(localStorage.getItem('classification')),
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
        },
        updateUserItemOne(state,value){
            state.userItemOne = value
        },
        updateArticleList(state,value){
            state.articleList = value
        },
        updateCategorizedItems(state,value){
            state.categorizedItems = value
        },
        updateClassification(state,value){
            state.classification = value
        },
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
        },
        initUserItemOne(context){
            const userItemOne = JSON.parse(localStorage.getItem('userItemOne'))
            if(userItemOne){
                context.commit('updateUserItemOne',userItemOne)
            }
        },
        initArticleList(context){
            const articleList = JSON.parse(localStorage.getItem('articleList'))
            if(articleList){
                context.commit('updateArticleList',articleList)
            }
        },
        initCategorizedItems(context){
            const categorizedItems = JSON.parse(localStorage.getItem('categorizedItems'))
            if(categorizedItems){
                context.commit('updateCategorizedItems',categorizedItems)
            }
        },
        initClassification(context){
            const classification = JSON.parse(localStorage.getItem('classification'))
            if(classification){
                context.commit('updateClassification',classification)
            }
        },
    }
})
export default store;