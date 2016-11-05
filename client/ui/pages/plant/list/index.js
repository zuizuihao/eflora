import React from 'react'
import { browserHistory } from 'react-router'

export default React.createClass({
  getInitialState() {
    return {
      list: [],
      query: {},
      limit: 10
    }
  },
  getData() {
    let self = this
    const {query, limit} = this.state
    Meteor.call('plant.list', {query, limit}, function (error, list) {
      if (error) {
        console.log('error', error)
        return
      }
      self.setState({list: list})
    })
  },
  componentDidMount() {
    this.getData()
  },
  viewItem(_id) {
    browserHistory.push('/plant/' + _id)
  },
  render() {
    const {list} = this.state

    return (
      <div className='page__bd'>
        <div className='weui-cells'>
          {list.map((element, i) => {
             const {_id, name} = element
             return (
               <a key={i} className='weui-cell weui-cell_access' onClick={this.viewItem.bind(this, _id)}>
                 <div className='weui-cell__bd'>
                   <p>
                     {name} </p>
                 </div>
                 <div className='weui-cell__ft'> </div>
               </a>
             )
           })}
        </div>
      </div>
    )
  }
})
