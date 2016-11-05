import React from 'react'
import Plant from '/lib/entity/plant.js'

export default React.createClass({
  getInitialState() {
    return {
      item: {
        name: '',
        description: '',
        scientificName: '',
        gallery: []
      }
    }
  },
  getData() {
    let self = this
    const {_id} = this.props.params
    Meteor.call('plant.one', {_id}, function (error, item) {
      if (error) {
        console.log('error', error)
        return
      }
      self.setState({item: new Plant(item)})
    })
  },
  componentDidMount() {
    this.getData()
  },
  render() {
    const {item} = this.state
    const {name, description, scientificName, gallery} = item

    return (
      <article className='weui-article'>
        <h1>{name}</h1>
        <section>
          <h2 className='title'>{scientificName}</h2>
          <section>
            <h3>一般特征</h3>
            <p>
              {description}
            </p>
            <p>
              {gallery.map((element, i) => {
                 return (
                   <img key={i} src={element} alt='' />
                 )
               })}
            </p>
          </section>
        </section>
      </article>
    )
  }
})
