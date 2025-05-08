describe('Deletar dispositivos', () => {

    it('deletar dispositivo especifico', () => {
        const body = {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2019,
                "price": 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: body
        }).then((postResponse) => {
            expect(postResponse.status).to.equal(200);

            const deviceId = postResponse.body.id;

            cy.request({
                method: 'DELETE',
                url: `/objects/${deviceId}`,
                failOnStatusCode: false,
            }).then((deleteResponse) => {
                expect(deleteResponse.status).to.equal(200);
                expect(deleteResponse.body.message).to.equal(`Object with id = ${deviceId} has been deleted.`);
            });
        });
    });

    it('deletar dispositivo que não existe', () => {

        const id_inexistente = 5555; 
        
        cy.request({
            method: 'DELETE',
            url: `/objects/${id_inexistente}`,
            failOnStatusCode: false,
        }).then((deleteResponse) => {
            expect(deleteResponse.status).to.equal(404);
            expect(deleteResponse.body.error).to.equal(`Object with id = ${id_inexistente} doesn't exist.`);
        });
    });

});
