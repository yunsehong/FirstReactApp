import React, { Component } from 'react';

class TOC extends Component {
    // render() 호출 전 실행 됨 
    // 새롭게 바뀐 값과 이전 값에 접근할 수 있다
    // TOC라고 하는 데이터의 props가 바뀌었을 때 render를 호출하고
    // 바뀌지 않았을 때 render가 호출되지 않도록 하자
    shouldComponentUpdate(newProps, newState){
      if(this.props.data === newProps.data){
        // 현재 props와 들어온 props가 같다면(변함 없다면)
        return false;
        // return 값이 false이면 render() 호출X
      }
      return true;
    }
    // push 는 원본을 바꾸기 때문에 이전 값 === 바꾼 값 이 되므로
    // 불필요한 렌더링을 계속 하게 됨 (비교할 수 없기 때문에)
    // => 이래서 concat 권장 


    render(){
      var list = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        // 자동으로 생성되는 리스트의 경우 검사창 콘솔창에 key 에러가 뜸
        list.push(
        <li key={data[i].id}>
          <a 
            href={"/content/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
        );
        // react가 내부적으로 필요해서 요청하는 데이터이기 때문에
        // 그러려니 하고 그냥 key={data[i].id} key값을 넣어준다 
        i = i + 1;
      } 
      return(
        <nav>
            <ul>
                {list}
            </ul>
        </nav> 
      ); 
    } 
  }

  export default TOC;