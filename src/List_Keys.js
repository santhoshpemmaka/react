import React from 'react';


class FlavorForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : 'coconut'
        }
    }

    onSelect = (e) => {
        this.setState({
            value :e.target.value
        })
    }
    onSubmitform = (e) => {

        alert('Your favorite color'+ this.state.value)
        e.preventDefault();

    }

    render(){
        return(
            <div>
                <input type='text' value='' placeholder="value" />
                <form onSubmit={this.onSubmitform}>
                    <h1>Pick your favorite flavoe</h1>
                    <select value={this.state.value} onChange={this.onSelect}>
                        <option value='Grapefruit'>Grapefruit</option>
                        <option value='Lime'>Lime</option>
                        <option value='Mango'>Mango</option>
                        <option value='Apple'>Apple</option>
                    </select>
                    <button type='submit'>Submit</button>
                </form>
                <input type='file' placeholder="All Pdf"/>
            </div>
        )
    }
}

  export default FlavorForm;

// import React from 'react';

// const Lists = () => {
//     const numbers =  [
//         {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//         {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//       ];
//     console.log(numbers)
//     numbers.map((num) => {
//         console.log(num)
//     })

//     return(
//         <div>
//             {
//                 numbers&& numbers.map((num) => {
//                     return(
//                         <li key= {num.id}>{num.title}</li>
//                     )
                    
//                 })
//             }
//         </div>
//     )

// }

// export default Lists;
