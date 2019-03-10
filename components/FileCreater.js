import React, { Component } from 'react';

class FileSender extends Component{

    transfer(accountID){
        let https = require('https');

        let options = {
            'method': 'POST',
            'hostname': 'api.todaqfinance.net',
            'path': '/files',
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
                var body = Buffer.concat(chunks);
                console.log(body.toString());
            });

            res.on("error", function (error) {
                console.error(error);
            });
        });

        const postData =  "{\n    \"data\": {\n    \t\"type\":\"file\",\n    \t\"attributes\":{\n    \t\t\"payload\":{ \n\t\t\t\t \"type\": \"loyalty-token\",\n\t\t\t\t \"member-type\": \"gold\"\n    \t\t}\n    \t},\n    \t\"relationships\":{\n    \t\t\"initial-account\":{\n    \t\t\t\"data\":{\n\t    \t\t\t\"type\":\"account\",\n    \t\t\t\t\"id\":\""+accountID+"\"\n    \t\t\t}\n    \t\t},\n    \t\t\"file-type\": {\n    \t\t\t\"data\": {\n    \t\t\t\t\"id\": \"prescription\"\n    \t\t\t}\n    \t\t}\n    \t}\n    }\n}";

        req.write(postData);

        req.end();
    }
    render(){
        return  (
            <div className="container">
                <button
                    onClick={()=>this.transfer(this.props.accountID)}
                >Create a file</button>
            </div>
        );
    }

}
export default FileSender;