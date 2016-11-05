import React from 'react'
import { browserHistory } from 'react-router'
import { If, Then, Else } from 'react-if'

const limit = 10

export default React.createClass({
  getInitialState() {
    return {
      list: [],
      query: {},
      count: limit
    }
  },
  getData(count) {
    let self = this
    const {query} = this.state
    Meteor.call('plant.list', {query, limit: count}, function (error, list) {
      if (error) {
        console.log('error', error)
        return
      }
      self.setState({list: list})
    })
  },
  componentDidMount() {
    this.getData(limit)
  },
  viewItem(_id) {
    browserHistory.push('/plant/' + _id)
  },
  loadMore() {
    let {count} = this.state
    count += limit
    this.setState({ count: count })
    this.getData(count)
  },
  render() {
    const {list, count} = this.state

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
        <If condition={count < 1000}>
          <div className='load-more'>
            <a onClick={this.loadMore}>加载更多</a>
          </div>
        </If>
      </div>
    )
  }
})
