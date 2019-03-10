import React, { Component } from 'react';
import FileSender from './components/FileSender';
import FileCreater from './components/FileCreater';
import './shared/styles/PatientApp.css';

class App extends Component {
    state = {
        file: 'e124eb86ff56fd6c2693bc0cbc529ddb88216d60130d8f305eb87f44fd9b66c0',
        recipient: 'f7437823-2d26-47f8-a018-168e7cf10d7c',
        sender: 'a2102dce-dcf2-43e1-aa8e-9b8eb07121ff',

        name: 'Alice',
        height: '180',
        weight: '75',
        prescription: 'malaria pills (x10)',
        notes: 'none',
        initialaccount: 'f7437823-2d26-47f8-a018-168e7cf10d7c',
    };

    render() {
        const { sender, recipient, file } = this.state;

        return (
            <div>
                <h1>Transfer files</h1><br></br>

                <div>Sender: <input
                    type="text"
                    value={this.state.sender}
                    onChange={evt => this.setState({ sender: evt.target.value })}
                /></div>
                <div>Recipient: <input
                    type="text"
                    value={this.state.recipient}
                    onChange={evt => this.setState({ recipient: evt.target.value })}
                /></div>
                <div id = "file"> File ID: <input
                    type="text"
                    // className="form-control"
                    value={this.state.file}
                    onChange={evt => this.setState({ file: evt.target.value })}
                /></div>
                {/* <div>Sender: {this.state.sender}</div>
                <div>Recipient: {this.state.recipient}</div>
                <div>File: {this.state.file}</div> */}

                <FileSender
                    file={this.state.file}
                    sender={this.state.sender}
                    recipient={this.state.recipient}
                /><br></br>

                <h1> Create Patient Record </h1><br></br>


                <div>Name: <input
                    type="text"
                    value={this.state.name}
                    onChange={evt => this.setState({ name: evt.target.value })}
                /></div>
                <div>Height: <input
                    type="text"
                    value={this.state.height}
                    onChange={evt => this.setState({ height: evt.target.value })}
                /></div>
                <div>Weight: <input
                    type="text"
                    value={this.state.weight}
                    onChange={evt => this.setState({ weight: evt.target.value })}
                /></div>
                <div>Prescription: <input
                    type="text"
                    value={this.state.prescription}
                    onChange={evt => this.setState({ prescription: evt.target.value })}
                /></div>
                <div>Notes: <input
                    type="text"
                    value={this.state.notes}
                    onChange={evt => this.setState({ notes: evt.target.value })}
                /></div>
                <div>Initial Account: <input
                    type="text"
                    value={this.state.initialaccount}
                    onChange={evt => this.setState({ ititialaccount: evt.target.value })}
                /></div>

                <FileCreater
                    name = {this.state.name}
                    height = {this.state.height}
                    weight = {this.state.weight}
                    prescription = {this.state.prescription}
                    notes = {this.state.notes}
                    initialaccount = {this.state.initialaccount}
                />
            </div>
        );
    }
}

export default App;
