import React from 'react';
// import Lists  from './List_Keys';
import Calculator  from './LiftingState';


const App = () => {
    const count = 1;
    return(
        <div>
            <Calculator/>
        </div>
    )
}



    

export default App;

// const App = () => {
//     const onSubmit =(e) =>{
//         console.log("reached of submit button")
//         // e.preventDefault();
//     }

//     const onbuttonSubmit = () =>{
//         console.log("reached of button")
//     }

//     return(
//         <div>
//             <form onSubmit={onSubmit}>
//             <input type="text" className="inputFiled" value ="" />
//             <button onClick={onbuttonSubmit}>SUbmit</button>
//             </form>
            
//         </div>

//     )
// }



// const App = (props) => {
//     console.log("reached to the app component")
//     const element = (
//         <div>
//             <h2>Hello, World!</h2>
//             <h2>It is {props.Date.toLocaleTimeString()}</h2>
//         </div>
//     )
//     return element;
//   }

// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             date : new Date()
//         }
//     }
//     componentDidMount() {
//         this.timerId = setInterval(() => (
//                 this.setState({
//                     date : new Date
//                 })
//             )
//         ,1000)
//     }

//     // componentWillUnmount() {
//     //     clearInterval(this.timerId)
//     // }
    
    

//     render(){
//         return(
//             <div>
//                 <h2>Hello,World!</h2>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }





// const formatName =(user) => {
//     return user.firstName + " " + user.lastName
    
// }

// const user = {
//     firstName : "Santhosh",
//     lastName : "Pemmaka"
// }

// const App = () => {
//     console.log(user.firstName)
//     return(
//         <h2>Hello, {formatName(user)}</h2>
//     )
// }

// class App extends React.Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             isToogle : true
//         }
//     }
//     onSubmit= (name)=> {
//         console.log(name)
//         this.setState( prevState => ({
//             isToogle : !prevState.isToogle
//         }))
        
//     }


//     render(){
//         return(
//             <button onClick={() => this.onSubmit("name")}>
//                 {this.state.isToogle ? 'OnSwitch' : 'OffSwitch'}
//             </button>

//         )
//     }
// }


