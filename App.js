import React, { Component } from 'react';
import FileSender from './components/FileSender';
import FileCreater from './components/FileCreater';
import './shared/styles/App.css';

class App extends Component {
    state = {
        file: 'e124eb86ff56fd6c2693bc0cbc529ddb88216d60130d8f305eb87f44fd9b66c0',
        recipient: 'f7437823-2d26-47f8-a018-168e7cf10d7c',
        sender: 'a2102dce-dcf2-43e1-aa8e-9b8eb07121ff'
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

                <div>Name: <input type="text"></input></div>
                <div>Height: <input type="text"></input></div>
                <div>Weight: <input type="text"></input></div>
                <div>Perscriptions: <input type="text"></input></div>
                <div>Notes: <input type="text"></input></div>
                <div>Initial Account: <input type="text"></input></div>

                <FileCreater
                    accountID = {this.state.sender}
                />
            </div>
        );
    }
}

export default App;
