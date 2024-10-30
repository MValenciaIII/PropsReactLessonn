import React from "react";

const fakeData = [
    {
        fname: "Scott",
        lname: "Syverson",
        transportation: "car",
        age: 50,
        old: false
    },
    {
        fname: "Nicole",
        lname: "Torres",
        transportation: "car",
        age: 32,
        old: false
    },
    {
        fname: "Caleb",
        lname: "Straily",
        transportation: "home",
        age: 24,
        old: false
    },
    {
        fname: "Caleb",
        lname: "Straily",
        transportation: "home",
        age: 24,
        old: false
    }
]

function Arraymap() {

    const nums = [1,2,3,4,5]

    nums.map(
        function square(x) {
            return console.log(x * x);
        }
    )

    let square = nums.map(
        (x) => x * x
    )


    const names = ['alice','bob','charlie','danielle'];

    const capitalize = names.map(
        (name) => {
            return name.charAt(0).toUpperCase() + name.substring(1)
        }
    )

    console.log(capitalize);

    const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];

    const pokemonPTags = pokemon.map(
        (jimbo) => {
            return <p>{jimbo}</p>
        }
    )
    // const pokemonPTags = [<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>];

    //!!!!! Mapping out Components
    const listComponents = fakeData.map(
        (currentItem) => {
            return <TempItem 
            firstName={currentItem.fname} lastname={currentItem.lname}
            transpo={currentItem.transportation}
            ageNum={currentItem.age}
            bool={currentItem.old} />
        }
    )

    return (
        <div className="row">
            <div className="col-12">
                <h1>Array Mapping Section!</h1>
            </div>
            <div className="col-12">
                {capitalize};
            </div>
            <div className="col-12">
                {pokemonPTags}
            </div>
            {listComponents}
        </div>
    )
}


function TempItem(props) {
    console.log(props)

    return (
        <div className="col-3">
            <p>First Name: {props.firstName} Last Name: {props.lastname}</p>
            <p>Transportation: {props.transpo}</p>
            <h1>AGE: {props.ageNum}</h1>
            <h3></h3>
        </div>
    )
}


export default Arraymap;