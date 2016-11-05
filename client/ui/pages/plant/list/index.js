import React from 'react'
import { browserHistory } from 'react-router'
import { If, Then, Else } from 'react-if'

const limit = 20

export default React.createClass({
  getInitialState() {
    return {
      list: [],
      query: {},
      count: limit,
      filter: ''
    }
  },
  getData() {
    let self = this
    const {query, filter, count} = this.state
    Meteor.call('plant.list', {query: query, limit: count, filter: filter}, function (error, list) {
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
  onFilterChange(e) {
    this.setState({filter: e.target.value}, this.getData)
  },
  loadMore() {
    let {count} = this.state
    count += limit
    this.setState({ count: count }, this.getData)
  },
  render() {
    const {list, count, filter} = this.state

    return (
      <div className='page__bd'>
        <div className='weui-cells'>
          <div className='weui-cell'>
            <div className='weui-cell__bd'>
              <input
                className='weui-input'
                value={filter}
                onChange={this.onFilterChange}
                type='text'
                placeholder='请输入名称或者学名' />
            </div>
          </div>
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
        <If condition={list.length <= 0}>
          <Then>
            <div className='weui-loadmore weui-loadmore_line'>
              <span className='weui-loadmore__tips'>暂无数据</span>
            </div>
          </Then>
          <Else>
            <div className='load-more'>
              <a onClick={this.loadMore} className='weui-btn weui-btn_plain-primary'>加载更多</a>
            </div>
          </Else>
        </If>
      </div>
    )
  }
})
