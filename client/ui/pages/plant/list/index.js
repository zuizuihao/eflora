import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
        <div className='page__hd'>
          <h1 className='page__title'>List</h1>
          <p className='page__desc'>
            列表
          </p>
        </div>
        <div className='page__bd'>
          <div className='weui-cells'>
            <a className='weui-cell weui-cell_access' href='javascript:;'>
              <div className='weui-cell__bd'>
                <p> cell standard </p>
              </div>
              <div className='weui-cell__ft'> </div>
            </a>
            <a className='weui-cell weui-cell_access' href='javascript:;'>
              <div className='weui-cell__bd'>
                <p> cell standard </p>
              </div>
              <div className='weui-cell__ft'> </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
})
