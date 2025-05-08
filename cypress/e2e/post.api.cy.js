describe('Buscar dispositivos', () => {

    it('Deve criar e buscar um dispositivo específico com sucesso', () => {
        const requestBody = {
            name: "Apple MacBook Pro 16",
            data: {
                year: 2019,
                price: 1849.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "1 TB"
            }
        };

        cy.request({
            method: 'POST',
            url: '/objects',
            failOnStatusCode: false,
            body: requestBody
        }).then((response) => {
            
            expect(response.status).to.equal(200);
            const { id, name, data, createdAt } = response.body;

            
            expect(id, 'ID retornado').to.be.a('string').and.not.be.empty;
            expect(createdAt, 'Data de criação').to.be.a('string').and.not.be.empty;
            expect(name).to.equal(requestBody.name);
            expect(data.year).to.equal(requestBody.data.year);
            expect(data.price).to.equal(requestBody.data.price);
            expect(data['CPU model']).to.equal(requestBody.data['CPU model']);
            expect(data['Hard disk size']).to.equal(requestBody.data['Hard disk size']);
        });
    });

});
