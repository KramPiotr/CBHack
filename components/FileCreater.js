import React, { Component } from 'react';
import FileSender from './components/FileSender';

class FileSender extends Component{

    // fromAccountID(accountID) {
    //     const getTransactionsByAccount = id =>
    //         require('axios')
    //             .get(`https://api.todaqfinance.net/accounts/${id}/transactions?page=1&limit=1`, {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'x-api-key': '74be46bd-1135-429b-aeff-39204fa93310',
    //                 },
    //             })
    //             .then(res => {
    //                 console.log(res);
    //                 localStorage.setItem("file", JSON.parse(JSON.stringify(res.data.included[2])));
    //             })
    //             .catch(error => console.log(error));
    //
    //
    //     FileSender.transfer(accountID, '5fff2bda-9611-42fd-b63b-b35a82debce3', )
    //
    //     getTransactionsByAccount(accountID);
    //
    //
    //     let index1 = localStorage.file.toString().indexOf("id")+5;
    //     let index2 = localStorage.file.toString().indexOf("\"", index1);
    //     return(localStorage.file.toString().substring(index1, index2));
    // }


    create(name, height, weight, prescription, notes, initialaccount) {
        var transaction = {
            "data": {
                "type":"file",
                "attributes":{
                    "payload":{
                        'name': name,
                        'height': height,
                        'weight': weight,
                        'prescription': prescription,
                        'notes': notes
                    }
                },
                "relationships":{
                    "initial-account":{
                        "data":{
                            "type":"account",
                            "id": initialaccount,
                        }
                    },
                    "file-type": {
                        "data": {
                            "id": "prescription"
                        }
                    }
                }
            }};

        var https = require('https');

        var options = {
            'method': 'POST',
            'hostname': 'api.todaqfinance.net',
            'path': '/files',
            'headers': {
                'Content-Type': 'application/json',
                'x-api-key': '74be46bd-1135-429b-aeff-39204fa93310'
            }
        };


        var req = https.request(options, function (res) {
            var chunks = [];

            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function (chunk) {
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function (error) {
                console.error(error);
            });
        });

        var postData =  JSON.stringify(transaction);

        req.write(postData);

        req.end();
    }

    render(){
        return  (
            <div className="container">
                <button
                    onClick={()=>this.create(this.props.name, this.props.height, this.props.weight, this.props.prescription, this.props.notes, this.props.initialaccount)}
                >Create a file</button>
            </div>
        );
    }

}

export default FileSender;