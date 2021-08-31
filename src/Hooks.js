import React, {useState, useEffect} from 'react';

const Example = () => {
    const [count,setCount] = useState(0);

    // useEffect(() => {
    //     document.title = `you clicked ${count} times`;
    // });
    console.log(useAddition)
    console.log(useAddition(2,4))
    const total = 0;
    const result = useAddition(2,3);
    console.log(result)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Click Me
            </button>
            {result}
        </div>
    )
}

const useAddition = (arg1,arg2) => {
    return arg1+arg2;
}

export default Example;




// import React, {useEffect, useState} from 'react';

// const Example = () => {
//     const [count,setCount] = useState(0);

//     const onClikCounter = () =>{
//         setCount(count+1)
//     }
//     return(
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={onClikCounter}>
//                 Click Me
//             </button>
//         </div>
//     )
// }

// export default Example;


// const useFriendStatus = (freindId) => {
//     const [isOnline,setOnline] = useState(null)

//     const handleStatusChange = (status) => {
//         setOnline(status.isOnline)
        
//     }

//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
//     return () => {
//       ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//     };

//     })
//     return isOnline;
// }