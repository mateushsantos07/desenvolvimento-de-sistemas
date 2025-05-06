import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { taskService } from "../service/TaskService";

export async function taskController(app: FastifyInstance) {
    app.post("/task", (request, reply) => {
    const body = request.body as { text: string };

    try {
        taskService.create(body.text);
        return reply.code(201).send();
    } catch (error: any) {
        return reply.code(409).send({ erro: error.message });
    }
});

    app.get("/task", (_, reply) => {
        const list = taskService.getAll();
        return reply.code(200).send(list);
    });

    app.get("/task/:id", (request: FastifyRequest, reply: FastifyReply) => {
        const { id } = request.params as { id: string };
        const task = taskService.getById(id);
        return task;
    });

    app.patch("/task/:id", (request, reply) =>  {
        // CAPTURA INFORMAÇÃO
        const { id } = request.body as { id: string }
        const { completed } = request.body as { completed:boolean }
        
        // REPASSA INFO RECEBIDA E RECEBE INFORMAÇÃO PROCESSADA
        const task = taskService.updateCompleted(id, completed);

        // RETORNA UMA RESPONSE PARA QUEM CHAMOU A ROTA
        return reply.code(200).send(task);
    })
}
