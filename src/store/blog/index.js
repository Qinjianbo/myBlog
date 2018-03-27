import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'

const state = {
    title: 'starzmisgod',
    showSearchFrame: false,
    description: '',
    nowCategory: '0',
    queryString: {},
    paramsString:{},
    uri:'',
    categoryLists: {
        '0': {
            cn: '全部文章',
            id: 0
        },
        '3': {
            cn: '技术分享',
            id: 3
        },
        '1': {
            cn: '不可描述',
            id: 1
        },
        '2': {
            cn: '心情感悟',
            id: 2
        },
    },
    pageSize: 12,
    showNextPage: false, // 是否显示下一页
    articleObject: {}, //文章的对象
    articleLists: [], //文章列表
    leftBar: 0, //左边的菜单栏是否开启 0 关闭 1 开启
    nowColumn: 'home', //home， article，category，tag, comment
    articleLoading: false,
    searchWord:''
}

export default {
    state,
    getters,
    actions,
    mutations
}