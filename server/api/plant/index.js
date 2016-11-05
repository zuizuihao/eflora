export default {
  list(data) {
    const {query, limit} = data
    const list = Plants.find(query, { sort: { createdAt: -1 }, limit: limit }).fetch()
    return list
  },
  one(data) {
    const {_id} = data
    const item = Plants.findOne({_id: _id})
    return item
  }
}
