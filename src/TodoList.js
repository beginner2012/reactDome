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

    handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }

    handleDelete(index){
        console.log(index)
        const list = [...this.state.list];
        list.splice(index,1)
        this.setState({
            list : list
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
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button> 
                </div>
               <ul>
                   {
                       this.state.list.map((item,index) => {  //map方法循环List,接收回调两个参数，一个item具体每一项的内容，index下标
                           return <li key={index}  onClick={this.handleDelete.bind(this,index)}>{item}</li>  //返回每一项的内容
                       })
                   }
               </ul>
           </Fragment>
        )
    }      
}
export default TodoList