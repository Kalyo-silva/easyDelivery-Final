const app = require('../api.js')
const request = require("supertest");

test("Validando código de retorno para a rota /entregas", async () => {
    const resposta = await request(app).get("/entregas");

    expect(resposta.statusCode).toBe(200);
});

test("validando a estrutura do JSON retornado da rota /entregas", async () => {
    const resposta = await request(app).get('/entregas');

    // verifica os campos de todos os registros retornados. 
    resposta.body.forEach(entrega => {
        expect(entrega).toHaveProperty("id_entrega")
        expect(entrega).toHaveProperty("status")
        expect(entrega).toHaveProperty("destino")
        expect(entrega).toHaveProperty("prazo")
    });
})


test("Validando código de retorno para a registro não existente em /entregas/{id}", async () => {
    const resposta = await request(app).get("/entregas/-1");

    expect(resposta.statusCode).toBe(404);
});

test("validando os valores do campo status no JSON retornado da rota /entregas", async () => {
    const resposta = await request(app).get('/entregas');

    // Define os valores permitidos para o campo status
    const valores_permitidos = ['EM SEPARAÇÃO', 'EM TRANSPORTE', 'ROTA DE ENTREGA', 'ENTREGUE']

    // verifica os campos de todos os registros retornados. 
    resposta.body.forEach(entrega => {
        // valida se o status da entrega esta no array de valores permitidos
        expect(valores_permitidos).toContain(entrega.status) 
    });
})
