
1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生变化
5. 数据 + 模板 结合，生成真实的DOM，替换原始的

缺陷：
第二次生成完整的DOM 去替换第一次生成完整的DOM 十分消耗性能

改变（提升性能）：
1. state 数据
2. JSX 模板
3. 数据 + 模板 结合，生成真实的DOM，来显示
4. state 发生变化
5. 数据 + 模板 结合，生成真实的DOM，并不直接替换
6. 新的DOM 和原始的DOM 做比对，找差异
7. 找出 input框发生了变化
8. 只用新的DOM中的input元素，替换老的DOM中的input元素

缺陷：
性能的提升并不明显
1. state 数据
2. JSX 模板

3. 数据 + 模板 结合，生成虚拟DOM（虚拟DOM是一个JS对象，用来描述真实的DOM）
  ['div': {id:'abc'},['span',{},'hello world']]

4. 用虚拟DOM的结构，生成真实的DOM，来显示

5. state 发生变化
6. 数据 + 模板 结合，生成新的虚拟DOM（极大提升性能）
  ['div': {id:'abc'},['span',{},'bye bye']]
7. 比较 原始虚拟DOM和新的虚拟DOM的区别，找出区别
8. 直接操作DOM，改变span中的内容

注：JSX先转化为虚拟DOM在转为真实DOM
    JSX -> JS对象 -> 真实DOM

优点：
1. 新能提升
2. 它使得跨端应用得以实现，React Native



##Diff算法
1. 把多次setState结合成一次，减少虚拟DOM比对次数；
2. 同层比对；
3. key值保持稳定



##生命周期函数

#Initialization初始化
1. setup props and state

#Mounting
1. 在组件即将被挂载到页面之前执行
    componentWillMount()

    render

2. 组件被挂载到页面之后执行，只执行一次，ajax请求的地方
    componentDidMount()

#Updating
1. 当一个组件从父组件接收了参数，只要父组件的render函数被执行了，子组件的这个生命周期函数就会被执行，但是如果这个组件第一次存在于父组件中不会被执行
    componentWillReceiveProps()

2. 组件被更新之前 自动执行
    shouldComponentUpate() {return true}

3. 组件被更新之前，它会自动执行，但是他在shouldComponentUpate之后被执行，如果shouldComponentUpate返回ture继续执行，如果返回false则不执行
    componentWillUpdate()

    render

4. 执行
    componentDidUpdate()


#Unmounting
1. 这个子组件将要从父组件中移除的时候
    componentWillUnmount()


#redux

#UI组件 && 无状态组件
定义一个UI组件时候，只有页面渲染且一个render函数时，无过多复杂逻辑

#thunk
使用中间件实现异步请求，让返回的不仅是对象还可以是函数

#saga
比thunk功能丰富，丰富的API可以使用

#react-redux
1. Provider组件：连接的store，可以获取store的内容
    <Provider store={store}></Provider>
2. connect方法：让todo和store做链接
...
    // mapStateToProps为连接规则，把state里面的数据映射给组件，变成组件的props
    const mapStateToProps = (state) => {
        return {}
    }
    // action操作放在这里，
    const mapDispatchToProps = (dispatch) => {
        return {}
    }
    export default connect(mapStateToProps,mapDispatchToProps)(Todo)
...
