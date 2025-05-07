describe('Alterar dispositivos', () => {

    it('Atualizar dispositivo especifico', () => {

        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        }

        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            failOnStatusCode: false,
            body: body
        }).then((postResponse) => {
            expect(postResponse.status).to.equal(200);

            const deviceId = postResponse.body.id;

            const updatedBody = {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
                }
            };

            cy.request({
                method: "PUT",
                url: `https://api.restful-api.dev/objects/${deviceId}`,
                failOnStatusCode: false,
                body: updatedBody
            }).then((putResponse) => {
                expect(putResponse.status).to.equal(200);

                // Exibe a resposta no console do navegador (F12)
                console.log("Resposta do PUT:", putResponse.body);

                // Exibe no painel do Cypress (como string JSON formatada)
                cy.log("Resposta PUT:");
                cy.log(JSON.stringify(putResponse.body, null, 2));
            });
        });

    });

});
