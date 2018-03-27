export const mutations = {
    TITLE(state, title) {
        state.title = title
    },
    DESCRIPTION(state, description) {
        state.description = description
    },
    ARTICLEPAGEINDEX(state, articlePageIndex) {
        state.articlePageIndex = articlePageIndex
    },
    ARTICLELISTS(state, articleLists) {
        state.articleLists = articleLists
    },
    LEFTBAR(state, leftBar) {
        state.leftBar = leftBar
    },
    NOWCOLUMN(state, nowColumn) {
        state.nowColumn = nowColumn
    },
    ARTICLEOBJECT(state, articleObject) {
        state.articleObject = articleObject
    },
    SHOWNEXTPAGE(state, show) {
        state.showNextPage = show
    },
    PAGESIZE(state, pageSize) {
        state.pageSize = pageSize
    },
    NOWCATEGORY(state, nowCategory) {
        state.nowCategory = nowCategory
    },
    CATEGORYLISTS(state, categoryLists) {
        state.categoryLists = categoryLists
    },
    SHOWSEARCHFRAME(state, empty) {
        if (state.showSearchFrame && state.searchWord == '') {
            state.showSearchFrame = false
        } else {
            state.showSearchFrame = true
        }
    },
    SEARCHWORD(state, keyword) {
        state.searchWord = keyword
    },
    CHANNEL(state, now) {
        state.channel = now
    },
    ARTICLELOADING(state, loading) {
        state.articleLoading = loading
    },
    QUERYSTRING(state, query) {
        state.queryString = query
    },
    PARAMSSTRING(state, params) {
        state.paramsString = params
    },
    URI(state, uri) {
        state.uri = uri
    }
}