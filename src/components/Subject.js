import React, { Component } from 'react';

class Subject extends Component {
    render(){
      return( 
        <header>
          <h1><a href="/" onClick={function(e){
            // a태그는 클릭 시 href 속성이 가리키는 링크로 이동(리로드)한다는 기본적인 동작이 실행 됨
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;