export const getters = {
    title: state => state.title,
    description: state => state.description,
    articleLists: state => state.articleLists,
    leftBar: state => state.leftBar,
    nowColumn: state => state.nowColumn,
    articleObject: state => state.articleObject,
    showNextPage: state => state.showNextPage,
    pageSize: state => state.pageSize,
    nowCategory: state => state.nowCategory,
    categoryLists: state => state.categoryLists,
    showSearchFrame: state => state.showSearchFrame,
    searchWord: state => state.searchWord,
    articleLoading: state => state.articleLoading,
    queryString: state => state.queryString,
    paramsString: state => state.paramsString,
    uri: state => state.uri
}