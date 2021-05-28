import React, { Component } from 'react';

class CreateContent extends Component {
    render(){
      console.log('CreateContent render');
      return(
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
           onSubmit={function(e){
            e.preventDefault();
            // onSubmit이 일어날 때 기본적인 동작인 페이지 바뀜 동작을 막음
           this.props.onSubmit(
             e.target.title.value,
             e.target.desc.value
           );
           // 화면에 표시될 App.js에 title,desc의 value값을 매개변수로 넘겨줌 
           }.bind(this)}
          >
            <p>
              <input type="text" name="title" placeholder="title"></input>
            </p>
            <textarea name="desc" placeholder="description"></textarea>
            <p>
              <input type="submit" value="submit"></input>
            </p>
          </form>
      </article>
      );
    }
  }

  export default CreateContent;