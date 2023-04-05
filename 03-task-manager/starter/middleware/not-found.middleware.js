const notFound = (req, res) =>
  res.status(404).send(
    `
        <head>
            <style>
                body{
                    text-align: center;
                    background-color: #FCFCFC;
                    color: #042A2B;
                    padding: 20%; 
                }
                h1{
                    font-size: 4em;
                }
            </style>
        </head>
        <h1> 
        
        404: ROUTE NOT FOUND
        
        </h1>`
  );


module.exports = notFound