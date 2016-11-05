export default function (source) {
  source = source || {}
  this._id = source._id
  this.description = source.description || ''
  this.family = source.family || ''
  this.name = source.name
  this.scientificName = source.scientificName
  this.gallery = source.gallery || []
}