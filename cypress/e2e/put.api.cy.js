describe('Alterar dispositivos', () => {

    const payload_device = require('../fixtures/device.json'); //.. e para voltar uma pasta

    it('Atualizar dispositivo especifico', () => {

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: payload_device
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
                url: `/objects/${deviceId}`,
                failOnStatusCode: false,
                body: updatedBody
            }).then((putResponse) => {
                expect(putResponse.status).to.equal(200);

                // Exibe no painel do Cypress (como string JSON formatada)
                cy.log("Resposta PUT:");
                cy.log(JSON.stringify(putResponse.body, null, 2));
            });
        });

    });

});
