describe('Buscar dispositivos', () => {

    it('Buscar dispositivo especifico', () => {

        cy.request({ 
            method: 'POST',
            url: 'https://api.restful-api.dev/objects', 
            failOnStatusCode: false,
            body:{
                "name": "Apple MacBook Pro 16",
                "data": {
                   "year": 2019,
                   "price": 1849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                }
             }
        }).as('postDeviceResult')

        cy.get('@postDeviceResult').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).not.empty;
            expect(response.body.createdAt).not.empty;
            expect(response.body.name).to.equal('Apple MacBook Pro 16');
            expect(response.body.data.year).to.equal(2019);
            expect(response.body.data.price).to.equal(1849.99);
            expect(response.body.data['CPU model']).to.exist.and.to.not.be.empty;
            expect(response.body.data['Hard disk size']).to.exist.and.to.not.be.empty;
            expect(response.body.data['Hard disk size']).to.equal('1 TB');
            });
        
        });
    
    });