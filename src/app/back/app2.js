import React from 'react'
export default class Hello extends React.Component {
    render(){
        return (
            <div>Hello</div>
        )
    }
}
//warning:这一句必须加上,因为在require.ensure中使用了require引入模块
module.exports = Hello;