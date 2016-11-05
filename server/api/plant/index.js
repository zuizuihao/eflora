export default {
  list(data) {
    let {query, filter, limit} = data
    let regex = new RegExp('.*' + filter + '.*', 'i')
    query.$or = query.$or || []
    query.$or.push({ 'name': { $regex: regex } })
    query.$or.push({ 'scientificName': { $regex: regex } })
    const list = Plants.find(query, { sort: { createdAt: -1 }, limit: limit }).fetch()
    return list
  },
  one(data) {
    const {_id} = data
    const item = Plants.findOne({_id: _id})
    return item
  }
}
