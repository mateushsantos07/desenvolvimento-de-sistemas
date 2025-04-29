import fastify from "fastify";

const app = fastify();

//usado para abrir uma porta no servidor 
app.get("/hello", (request, response) => {
    console.log(request.method);
    console.log(request.url);
    
    return "helo world"
})

//usado para deixar o backend sempre "ouvindo"
app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333")
})