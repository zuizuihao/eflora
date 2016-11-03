import BaseSchema from '../common/base_schema.js'

const SchemaPlant = new SimpleSchema([BaseSchema, {
  kingdom: {
    type: String,
    label: '界',
    optional: false
  },
  division: {
    type: String,
    label: '门',
    optional: false
  },
  class: {
    type: String,
    label: '纲',
    optional: false
  },
  order: {
    type: String,
    label: '目',
    optional: false
  },
  family: {
    type: String,
    label: '科',
    optional: false
  },
  genus: {
    type: String,
    label: '属',
    optional: false
  },
  subgenus: {
    type: String,
    label: '子属',
    optional: false
  },
  species: {
    type: String,
    label: '种',
    optional: false
  },
  name: {
    type: String,
    label: '名称',
    optional: false
  },
  scientificName: {
    type: String,
    label: '学名',
    optional: false
  },
  description: {
    type: String,
    label: '一般特征',
    optional: false
  },
  morphology: {
    type: String,
    label: '形态特征',
    optional: false
  },
  uses: {
    type: String,
    label: '功能用途',
    optional: false
  },
  distribution: {
    type: String,
    label: '产地分布',
    optional: false
  },
  gallery: {
    type: String,
    label: '图库',
    optional: false
  }
}])

Plants = new Mongo.Collection('plants')
Plants.attachSchema(SchemaPlant)