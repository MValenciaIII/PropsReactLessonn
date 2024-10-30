import React from "react";

function Propsinfo({name, num, bool}){
    //? Console.logs(OBJECT DATATYPE)
    // console.log(props);
    // console.log(props.name)
    

    console.log(name);
    function addTwoNums(a,b) {
        return console.log( 1 + 2 > a + b)
    }

    // addTwoNums(props.num, props.num)

    let date = new Date()
    let hours = date.getHours();
    let timeofDay;

    if(hours < 12) {
        timeofDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeofDay = 'afternoon'
    } else {
        timeofDay = "night"
    }

    return(
        <div className="row">
            <div className="col-12">
                <h1>Props Info Header!</h1>
            </div>
            <div className="col-12">
                {/* <p>{props.name}</p> */}
                <p>{name}</p>
                <a href=""></a>
                <img src="" alt="" />
                <input type="text" />
            </div>
            <div className="col-12">
                <h2>Good {timeofDay}!</h2>
            </div>
        </div>
        
    )
}

export default Propsinfo;