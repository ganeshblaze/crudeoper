import React , { Component} from 'react'
import Axios from 'axios';

const apiUrl = 'http://localhost:3000';


class Create  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : 0,
            name : '',
            fee : 0,
            duration : ''
        };
        this.createCourse = this.createCourse.bind(this);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeFee = this.onChangeFee.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
    }

    createCourse(e){
        e.preventDefault();
     const body = {
         id : this.state.id,
         name : this.state.name,
         fee : this.state.fee,
         duration : this.state.duration
     };
      
     console.log(body);
     Axios.post(apiUrl + '/course', body)
     .then(res => alert ( " Successfully created new course"))
     .catch(err => console.log(err));
     window.location = 'http://localhost:3001';

    }

    onChangeId (e) {
        this.setState({
            id : e.target.value
        });
    }

    onChangeName (e) {
        this.setState({
            name : e.target.value
        });
    }

    onChangeFee (e) {
        this.setState({
            fee : e.target.value
        });
    }

    onChangeDuration (e) {
        this.setState({
            duration : e.target.value
        });
    }







    render(){
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron text-center">
                        <h1> Create Course</h1>
                    </div>
                </div>
                <div className="col-md-offset-3 col-md-6 well">
                    <form onSubmit = {this.createCourse}>
                        <div className="form-group">
                            <label> ID  </label>
                            <input type="number" 
                            name="id"
                             id="id"
                              className="form-control"
                               value={this.state.id}
                               onChange={this.onChangeId}>

                               </input>
                        </div>
                        
                        <div className="form-group">
                            <label> Name </label>
                            <input type="text"
                             name="name" 
                             id="name"
                              className="form-control"
                              value={this.state.name}
                              onChange ={this.onChangeName}>

                              </input>
                        </div>

                        <div className="form-group">
                            <label> FEE  </label>
                            <input type="number" 
                            name="fee"
                             id="fee"
                              className="form-control" 
                              value={this.state.fee}
                              onChange = {this.onChangeFee}
                              ></input>
                        </div>

                        <div className="form-group">
                            <label> Duration </label>
                            <input type="text"
                             name="duration"
                              id="duration"
                               className="form-control"
                                value={this.state.duration}
                                onChange = {this.onChangeDuration}
                                ></input>
                        </div>
                        <div className="form-group">
                            <button type="Submit" className="btn btn-success">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
            </div>

        )
    }
}

export default Create;