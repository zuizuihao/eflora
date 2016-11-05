export default {
  list(data) {
    const {query, limit} = data
    const list = Plants.find(query, { sort: { createdAt: -1 }, limit: limit }).fetch()
    return list
  }
}
