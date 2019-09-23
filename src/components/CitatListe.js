import React from 'react'

//Postkassen skal modtage pakken allecitaterprops og derfor skrives props
//Props består lige nu af to ting: allecitater og en deleteCitat
const CitatListe = (props) => {

//Vi map'er alle citaterne igennem og udskriver dem en af gangen
//Citatet der bliver "peget på" af map'eren hedder c

    const alleCitater = props.allecitaterProp.map(c => {

            return (

                <div key={c.id}>
                <h2>{c.titel}</h2>
                <p>{c.citattxt}</p>
                <p><i>{c.forfatter}</i></p>
                <button onClick={() => {props.sletCitatProp(c.id)}}>SLET</button>
                </div>
            )
        })


    return (
        <div>

            <h2>Citat!!!</h2>

            {alleCitater}

        </div>
    )

}

export default CitatListe


