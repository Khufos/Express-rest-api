const  app = require('express')();


const  bodyParser = require('body-parser');
const { response } = require('express');
app.use(bodyParser.json());


// resquest é o objeto que vai trazer tudo quem  vem do nosso cliente ,formularios
// response tudo que o servidor responder vai no response, o response é resposta do servidor.
let clients = [
    {id:1 ,nome: 'khufos',  telefone:  '08415425'},
    {id:2 ,nome: 'bash',  telefone:  '89899933'},
    {id:3 ,nome: 'Frok',  telefone:  '110203244'},
    {id:4 ,nome: 'Cunha ', telefone:  '202030204'},
]

function log(request, response , next){
    const {url,method} =  request;
    console.log(`${method} - ${url} at ${new Date()}`)
    return next();
}
app.use(log)


app.get('/clients', function(request, response){
    response.json(clients);    
})
// req = resquest e res  = response

app.get('/clients/:id', function(request ,response) {
    const {id} =request.params;
    const client = clients.find(value => value.id == id);
    if(client == undefined){
        response.status(400).json({error:'Requisição invalida'});
    }else{
        response.status(200).json(clients)
    }
})

app.post('/clients',function(request ,response) {
    const  client = request.body;
    clients.push(client)
    response.status(201).json(client)

})
// metodo push serve para atualizar registros.

app.put('/clients/:id', (request, response) => {
    const id = request.params.id;
    const nome = request.body.nome;
    let client = clients.find(value => value.id == id)
    if(client == undefined){
        response.status(400).send();
    }else{ 
        client.nome = nome;
        response.status(200).json(client)  
    }
   
    

    
  

})

app.delete('/clients/:id',(request, response) =>{
    const {id} = request.params;
    const index = clients.findIndex(value  => value.id == id)
    if(index == -1){
        response.status(400).send();
    }else{
        clients.splice(index,1);
        response.status(204).send();
    }

})

app.listen(3000);