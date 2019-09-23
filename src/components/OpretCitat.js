//rce 
import React, { Component } from 'react'

export class OpretCitat extends Component {

    state = {
        titel: null,
        citattxt: null,
        forfatter: null
    }

    //Håndter titel-input så det bliver puttet i state
    handleTitel = (e) => {
        console.log(e.target.value)
        this.setState({

            titel: e.target.value

        });
    }

    //Håndter titel-input så det bliver puttet i state
    handleCitatet = (e) => {
        console.log(e.target.value)
        this.setState({

            citattxt: e.target.value

        });
    }

    //Håndter titel-input så det bliver puttet i state
    handleForfatter = (e) => {
        console.log(e.target.value)
        this.setState({

            forfatter: e.target.value

        });
    }


    handleGemCitat = (e) => {
        //snup state (indeholder nyt citat og "send det" til opret-metoden i app.js)
        e.preventDefault();
        this.props.opretCitatProp(this.state);
    }
    


    render() {
        return (
            <form onSubmit={this.handleGemCitat}>

                <input type="text" placeholder="Titel her" id="citattitel" onChange={this.handleTitel} />
                <br />

                <input type="text" placeholder="Citat her" id="citattekst" onChange={this.handleCitatet} />
                <br />

                <input type="text" placeholder="Forfatter her" id="forfatternavn" onChange={this.handleForfatter} />
                <br />

                <button class="btn waves-effect waves-light" type="submit" name="action"><i class="material-icons right">GEM citatet</i></button>



            </form>
        )
    }
}

export default OpretCitat
