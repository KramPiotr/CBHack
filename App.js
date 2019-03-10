import React, { Component } from 'react';
import FileSender from './components/FileSender';
import FileCreater from './components/FileCreater';

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
                <h1>Transfer files</h1>

                <div><input
                    type="text"
                    value={this.state.sender}
                    onChange={evt => this.setState({ sender: evt.target.value })}
                /></div>
                <div><input
                    type="text"
                    value={this.state.recipient}
                    onChange={evt => this.setState({ recipient: evt.target.value })}
                /></div>
                <div><input
                    type="text"
                    className="form-control"
                    value={this.state.file}
                    onChange={evt => this.setState({ file: evt.target.value })}
                /></div>
                <div>Sender: {this.state.sender}</div>
                <div>Recipient: {this.state.recipient}</div>
                <div>File: {this.state.file}</div>

                <FileSender
                    file={this.state.file}
                    sender={this.state.sender}
                    recipient={this.state.recipient}
                />

                <FileCreater
                    accountID = {this.state.sender}
                />
            </div>
        );
    }
}

export default App;