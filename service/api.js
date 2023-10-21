import requestApi from './requestApi'
export function getListTopStories() {
    return requestApi.get('/topstories.json?print=pretty')
}
export function getListNewStories() {
    return requestApi.get('/newstories.json?print=pretty')
}
export function getDetailItem(id) {
    return requestApi.get(`/item/${id}.json?print=pretty`)
}
