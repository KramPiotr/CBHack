import React, { Component } from 'react';

class FileSender extends Component{

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