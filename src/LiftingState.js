import React from 'react';


function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

function Dialog(props) {
    return (
    <div>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
      <button onClick={() =>props.handleSignUp()}>
      Sign Me Up!
    </button>
    </div>
    );
  }
  
  class SignUpDialog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: ''};
    }
    handleChange (e){
        console.log("reached handle change")
        this.setState({login: e.target.value});
      }
    
      handleSignUp = () => {
        alert(`Welcome aboard, ${this.state.login}!`);
      }
  
    render() {
        console.log(this.state.login)
      return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?"
                handleSignUp={() =>this.handleSignUp()}>
          <input value={this.state.login}
                 onChange={(e) => this.handleChange(e)} />
          
        </Dialog>
      );
    }
  
    
  }

  export default SignUpDialog

// const Contacts = () => (
//     <h1>Contacs</h1>
// )


// const Chat = () => (
//     <h1>Chat</h1>
// )



// function SplitPane(props) {
//     return (
//       <div className="SplitPane">
//         <div className="SplitPane-left">
//           {props.left}
//         </div>
//         <div className="SplitPane-right">
//           {props.right}
//         </div>
//       </div>
//     );
//   }
  
//   function App() {
//     return (
//       <SplitPane
//         left={
//           <Contacts />
//         }
//         right={
//           <Chat />
//         } />
//     );
//   }

//   export default App;