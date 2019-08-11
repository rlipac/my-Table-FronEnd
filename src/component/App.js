import React from 'react';
import Table from './Table'
import Form from './Form'
import Footer from './Footer';


class App extends React.Component {

    state = {
        characters: [],
    }
    removeCharacter = index => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            })
        });
    }
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { characters } = this.state

        return (
            <div className="container-fluid" >
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />             
                <Footer />
            </div>
        )
    }

}

export default App
