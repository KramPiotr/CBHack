import React, { Component } from 'react';
import App from "../App";

class FileSender extends Component{

    transfer(senderData, recipientData, fileData){
        let https = require('https');

        let options = {
            'method': 'POST',
            'hostname': 'api.todaqfinance.net',
            'path': '/transactions',
            'headers': {
                'Content-Type': 'application/json',
                'x-api-key': '74be46bd-1135-429b-aeff-39204fa93310'
            }
        };
        let req = https.request(options, function (res) {
            let chunks = [];
            res.on("data", function (chunk) {
                chunks.push(chunk);
            });

            res.on("end", function (chunk) {
                const body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function (error) {
                console.error(error);
            });
        });
        const postData =  "{\n\t\"data\": {\n    \t\"relationships\":{\n    \t\t\"sender\":{\n    \t\t\t\"data\": {\n\t    \t\t\t\"type\":\"account\",\n    \t\t\t\t\"id\":\""+senderData+"\"\n    \t\t\t}\n    \t\t},\n    \t\t\"recipient\":{\n    \t\t\t\"data\": {\n\t    \t\t\t\"type\":\"account\",\n    \t\t\t\t\"id\":\""+recipientData+"\"\n    \t\t\t}\n    \t\t},\n    \t\t\"files\":{\n    \t\t\t\"data\":[\n    \t\t\t\t{\n    \t\t\t\t\t\"type\":\"file\",\n\t\t    \t\t\t\"id\":\""+fileData+"\"\n    \t\t\t\t}\n\t\t\t\t]\n    \t\t}\n    \t}\n    }\n}";

        req.write(postData);

        req.end();
    }
    render(){
        return  (
            <div className="container">
                <button
                    onClick={()=>this.transfer(this.props.sender, this.props.recipient, this.props.file)}
                >Transfer</button>
            </div>
        );
    }

}
export default FileSender;