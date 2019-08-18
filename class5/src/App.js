import React,{Component } from 'react';
import { BrowserRouter as Router ,Switch , Route , Link } from 'react-router-dom';
import Course from './component/Course';
import Create from './component/Create';
import Edit from './component/Edit';



class App extends Component {
  render(){
    return(
      <Router>
        <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to='/'>
                    Course CRUD
                  </Link>
                  <button className="navbar-toggle"
                          data-toggle="collapse"
                          data-target="#menu"
                          >
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                    <span className="icon-bar"/>
                  </button>
                </div>
                <div className="navbar-collapse collapse" id="menu">
                  <ul className="nav navbar-nav">
                      <li>
                      <Link to="/course">Course</Link>
                      </li>
                      <li>
                        <Link to="/create">Create New</Link>
                      </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="container">
          <Switch>
            <Route exact path="/" component={ Course }/>
             <Route  exact path="/course" component = { Course } />
             <Route exact path="/create"  component = { Create } />
             <Route exact path="/edit/:id" component = { Edit } />
          </Switch>
          
          </div>
         </Router>
    )
  }
}

export default App;