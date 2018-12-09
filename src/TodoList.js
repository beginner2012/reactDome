import React, { Component,Fragment} from 'react'

class TodoList extends Component{//TodoList组件继承了React里面的Component组件
    constructor(props) {  //接收props 参数
        super(props); //调用父类PROPS
        this.state = {  //组件状态 存储组件数据
            inputValue:'' , //input中的内容
            list: []   //数组中的每一项
        }
    }

    handleIputChange(e){
       this.setState({ //想要改变的数据项里面的内容不能直接用state要用setState去改变
        inputValue: e.target.value
       })
    }   

    render(){
        return(
            <Fragment>
                <div>
                    <input type="text" 
                     value={this.state.inputValue}   //jsx里面想使用js表过式记的要用花括号包裹
                     onChange={this.handleIputChange.bind(this)}  //事件绑定的时候记的用bind(this)对作用域发生改变
                    />
                    <button>提交</button> 
                </div>
               <ul>
                   <li>学习学习</li>
                   <li>加油加油</li>
               </ul>
           </Fragment>
        )
    }      
}
export default TodoList