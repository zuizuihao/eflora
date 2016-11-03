import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory, IndexRoute, Route } from 'react-router'
import PlantList from '/client/ui/pages/plant/list/index.js'
import PlantView from '/client/ui/pages/plant/view/index.js'

const App = React.createClass({
  componentDidMount() {
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 16 + 'px';
  },
  render() {
    const {children} = this.props
    return (
      <div className="container">
        {children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PlantList} />
      <Route path="/plants" component={PlantList} />
      <Route path="/plant/:_id" component={PlantView} />
    </Route>
  </Router>
), document.getElementById('container'))