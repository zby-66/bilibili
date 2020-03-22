import { rankApi } from '@/api'
import * as TYPE from '../actionType/rankType'
import _ from 'lodash' // 代码包 函数工具

const state = {
	ranklist0: [],
	ranklist1: [],
	ranklist2: []
}

const getters = {
	ranklist0: state => state.ranklist0,
	ranklist1: state => state.ranklist1,
	ranklist2: state => state.ranklist2

}

const actions = {
	ranklist0({commit, state, rootState}) { //state代码库 commit调用方法
		rootState.requesting = true //如果为真 调用方法TYPE.RANK_LIST_REQUEST0
		commit(TYPE.RANK_LIST_REQUEST0)
		rankApi.ranking0().then((response) => {
			rootState.requesting = false //如果为假 调用方法TYPE.RANK_LIST_SUCCESS0
			commit(TYPE.RANK_LIST_SUCCESS0, response)
		}, (error) => {
			rootState.requesting = false // 如果出错 就调用失败方法
			commit(TYPE.RANK_LIST_FAILURE0)
		})
	},
	ranklist1({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.RANK_LIST_REQUEST1)
		rankApi.ranking1().then((response) => {
			rootState.requesting = false
			commit(TYPE.RANK_LIST_SUCCESS1, response)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.RANK_LIST_FAILURE1)
		})
	},
	ranklist2({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.RANK_LIST_REQUEST2)
		rankApi.randking2().then((response) => {
			rootState.requesting = false
			commit(TYPE.RANK_LIST_SUCCESS2, response)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.RANK_LIST_FAILURE2)
		})
	}
}

const mutations = {
	[TYPE.RANK_LIST_REQUEST0] (state) {

	},
	[TYPE.RANK_LIST_SUCCESS0] (state, response) {
		state.ranklist0 = _.values(response.hot.list)//这一行代码不一样
	},
	[TYPE.RANK_LIST_FAILURE0] (state) {

	},
	[TYPE.RANK_LIST_REQUEST1] (state) {

	},
	[TYPE.RANK_LIST_SUCCESS1] (state, response) {
		state.ranklist1 = _.values(response.hot.list)//这一行代码不一样
	},
	[TYPE.RANK_LIST_FAILURE1] (state) {

	},
	[TYPE.RANK_LIST_REQUEST2] (state) {

	},
	[TYPE.RANK_LIST_SUCCESS2] (state, response) {
		state.ranklist2 = _.values(response.hot.list)//这一行代码不一样
	},
	[TYPE.RANK_LIST_FAILURE2] (state) {

	}
}

export default {
	state,
	getters,
	actions,
	mutations
}
