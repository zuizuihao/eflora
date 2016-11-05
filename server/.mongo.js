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