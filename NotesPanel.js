import React, {Component} from 'react';
import {updateInfo} from '../lib/helpers/accounts/updateInfo'
import {patientRecord} from "../lib/data";

class NotesPanel extends Component {
    state = {
        account: this.props.account,
        axios: require('axios'),
        patientRecord,        
    };
    
    updateInfo = (data) => axios
        .patch(`${process.env.API_URL}/accounts/${id}`, data, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.API_KEY,
            },
        })
        .then(res => res.data.data)
        .catch(error => console.log(error));
    
    onLoad = (evt) => {
        evt.preventDefault();

        const {onLoad} = this.props;
        const {account} = this.state.account;
        const {file} = this.state.patientRecord;

        if (onLoad) {
            onLoad(account);
        }
    };

    render() {
        const account = this.state.account;
        return (
            <div>
                <form>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={}/>
                    </label>
                </form>
                <button type="button" className="btn btn-primary mb-2" onClick={this.onLoad}>
                    Load
                </button>
            </div>
        );
    }
}

export default NotesPanel;
