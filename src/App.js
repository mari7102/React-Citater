import React, { Component } from 'react';
import CitatListe from './components/CitatListe';
import OpretCitat from './components/OpretCitat';

export class App extends Component {
  
  state = {
    citater: [
      { titel: "Intet ved", citattxt: "Alt, hvad jeg ved, er, at jeg intet ved.", forfatter: "Sokrates", id: 1 },
      { titel: "Det klarer jeg", citattxt: "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.", forfatter: "Pippi Langstrømpe", id: 2 },
      { titel: "Løsninger", citattxt: "Find ikke fejl, find en løsning.", forfatter: "Henry Ford", id: 3 },
      { titel: "Sig selv", citattxt: "Vær dig selv, alle andre er alligevel optaget.", forfatter: "Oscar Wilde", id: 4 },
      { titel: "Syng!", citattxt: "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge.", forfatter: "Samuel Beckett", id: 5 }
    ]
  }

//slet citat - modtager id så vi kan slette det rigtige citat
  sletCitat = (id) => {

    //Filtere uønsket citat fra listen af citater og gem den nye liste i en variabel (citaterfilteret)

    let citatfiltreret = this.state.citater.filter( c => {

      return c.id !== id; //retunerer (gem) c/citater HVIS dets id er forskellig fra id-som-sendes-med-fra-button

    });


    //overskrive state med den nye filterede liste med citater

    this.setState({
      citater: citatfiltreret
    });

  }

  opretCitat = (nytcitat) => {
    nytcitat.id = Math.random(); //giv citat en id
    let allecitater =  [...this.state.citater, nytcitat]; //alle citater fra state en for en (...) + det nye ciatet

    //gem alt det nye state

    this.setState ({
      citater: allecitater
    });


  }



  render() {

    return (

      <div>
        
        <h1>Citater</h1>

        <OpretCitat opretCitatProp ={this.opretCitat} />

        <CitatListe allecitaterProp= {this.state.citater} sletCitatProp={this.sletCitat}/>
        


      </div>
    )
  }
}

export default App
