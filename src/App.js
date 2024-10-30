import React from 'react'
import Propsinfo from './components/Propsinfo';
import Arraymap from './components/Arraymap';

function App() {

    return(
        <div className="container">
            <Propsinfo name="Mrs.Prop" num={8} bool={true}/>
            <Arraymap />
        </div>
    )
}

export default App;