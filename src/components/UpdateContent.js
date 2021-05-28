import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    }
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }

  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});
  }

    render(){
      // console.log('UpdateContent render');
      // console.log(this.props.data);
      return(
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
           onSubmit={function(e){
            e.preventDefault();
            // onSubmit이 일어날 때 기본적인 동작인 페이지 바뀜 동작을 막음
           this.props.onSubmit(
             this.state.id,
             this.state.title,
             this.state.desc
           );
           // 화면에 표시될 App.js에 title,desc의 value값을 매개변수로 넘겨줌 
           }.bind(this)}
          >
            <input type="hidden" name="id" value={this.state.id}></input>
            <p>
              <input 
                type="text" 
                name="title" 
                placeholder="title"
                value={this.state.title}
                onChange={this.inputFormHandler}
              >
              </input>
            </p>
            <textarea 
              name="desc" 
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
            <p>
              <input type="submit" value="submit"></input>
            </p>
          </form>
      </article>
      );
    }
  }

  export default UpdateContent;