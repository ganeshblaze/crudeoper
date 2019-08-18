import React , { Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const apiUrl = "http://localhost:3000";


class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courseList : []
        };
    }

    componentDidMount (){
            axios
            .get(`${apiUrl}/course`)
            .then(response => {
                console.log(response);
                if(response.statusText === 'OK'){
                    this.setState({
                        courseList : response.data
                    });
                }else {
                    window.alert('Data not loaded');
                }
            })
            .catch(err => console.log(err));
    }

    delete(id){
        console.log(id);
        const status = window.confirm ( ' Are you sure, you want to delete id ' + id);
        if(status) {
            Axios   
            .delete(`${apiUrl}/course/` + id)
            .then('Successfully deleted the item..')
            .catch(err => console.log(err));
            window.location = "http://localhost:3001";
        }else{
            return null;
        }     
        
    }
    render(){
        return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron text-center">
                        <h1>Course details</h1>
                    </div>
                </div>
            </div>

        
        
            <div className="row">
                {
                    this.state.courseList.map (x => (
                    <div className="col-md-4" key={x.id}>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <div className="panel-title"> NAME : {x.name}
                                </div>
                                 </div>
                        </div>
                        <div className="panel-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Fee : <span className="pull-right">{x.fee} </span>
                                    </li>
                                    <li className="list-group-item">
                                        Duration : <span className="pull-right">{x.duration} </span>
                                    </li>
                                    </ul>  
                                    </div> 
                                    <div className="panel-footer">
                                        <Link className="btn btn-success" to={"/edit/" + x.id }>Edit</Link>
                                        <button onClick={this.delete.bind(this, x.id)}
                                        
                                         className="btn btn-warning">Delete</button>
                                    </div>
                        </div>
                ))}
            
            </div>
        </div>
        )
    }
}

export default Course;