import React from 'react'
import BotonLike from './BotonLike'


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: '',
            direccion : '',
            phone : ''
        };

        this.state = this.initialState
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job, direccion, phone } = this.state;

        return (
            <div className="container">
                <h3 className="">Ingresa tus Datos</h3>
                <form className="col-lg-6 col-md-10 col-sm-10 my-3" onSubmit = {this.onFormSubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input className="form-control" placeholder="Nombre"
                        type="text"
                        name="name"
                        value={name}
                        required
                        onChange={this.handleChange} />

                </div>
                <div className="form-group">
                <label for="">Trabajo</label>
                    <input className="form-control"  placeholder="Trabajo"
                        type="text"
                        name="job"
                        value={job}
                        required
                        onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label >Direccion</label>
                    <input className="form-control" placeholder="Direccion"
                        type="text"
                        name="direccion"
                        value={direccion}
                        required
                        onChange={this.handleChange} />

                </div>
                <div className="form-group">
                <label for="">Telefono</label>
                    <input className="form-control"  placeholder="Phone"
                        type="number"
                        name="phone"
                        value={phone}
                        required
                        onChange={this.handleChange} />
                </div>
                
                
                <button className="btn btn-primary" type="submit">Guardar</button>
                {/* <input className="btn btn-primary" type="button" value="Submit" onClick={this.submitForm} /> */}
               
            </form>
            <BotonLike />
            </div>
            
        );
    }

}

export default Form;