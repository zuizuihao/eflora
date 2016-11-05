import Plant from './index.js'

Meteor.methods({
  'plant.list': function (data) {
    check(data, {
      query: Object,
      limit: Number
    })

    return Plant.list(data)
  },
  'plant.one': function (data) {
    check(data, {
      _id: String
    })
    
    return Plant.one(data)
  }
})
