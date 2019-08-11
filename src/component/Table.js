import React from 'react'
import ReactDOM from 'react-dom';


const TableHead = () => {
    return (
        <thead className=" table bg-dark text-white table-bordered text-center">
            <tr>
                <td>Nombre</td>
                <td>Trabajo</td>
                <td>Direccion</td>
                <td>Telefono</td>
                <td>Action</td>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
            return (
                <tr key={index} className=" ">
                    <td className=" text-center">{row.name}</td>
                    <td className=" text-center">{row.job}</td>
                    <td className=" text-center">{row.direccion}</td>
                    <td className=" text-center">{row.phone}</td>
                    <td className="text-center">
                        <button className="btn btn-danger" onClick = {() => props.removeCharacter(index)} >Delete</button>
                    </td>
                </tr>
            )
    })
    return (
        <tbody className="table table-bordered">{rows}</tbody>
            
    );
}


class Table extends React.Component {
    render() {
        const {characterData, removeCharacter} = this.props;
        return (
            <div className="container my-3">
                <h1 className="text-center">React.js,  Node.js & Bootstrap</h1>
                <h2 className="text-center mb-5">Tabla Fron-End</h2>
                <div className="table-responsive">
                    <table className="table table-hover table table-sm" >
                        <TableHead />
                        <TableBody characterData={characterData} removeCharacter = {removeCharacter} />
                    </table>
                </div>
               

            </div>

        );
    }
}

export default Table