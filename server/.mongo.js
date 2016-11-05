//mongorestore --host 127.0.0.1 --port 9001 --dir=/Volumes/G/Github/eflora/.data/tujians/plants.bson --db=meteor --collection=plants

db.plants.find({}).forEach(
  function (elem) {
    elem.name = elem.chineseName
    elem.scientificName = elem.englishName
    elem.gallery = [
      elem.imageUrl
    ]
    delete elem.chineseName
    delete elem.englishName
    delete elem.imageUrl
    db.plants.save(elem)
  }
)

db.plants.find({}).forEach(
  function (elem) {
    elem._id = elem._id + ''
    db.plants.save(elem)
  }
)

db.getCollection('plants').remove({_id: {$type:16}})