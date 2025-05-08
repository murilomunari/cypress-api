describe('Buscar dispositivos', () => {

    it('Buscar dispositivo especifico', () => {

        const deviceId = '7'; // ID do dispositivo que você deseja buscar

        cy.request({ 
            method: 'GET',
            url: `/objects/${deviceId}`, 
            failOnStatusCode: false,
        }).as('getDeviceResult')

        // validações
        cy.get('@getDeviceResult').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(deviceId);
            expect(response.body.name).to.equal('Apple MacBook Pro 16');


            expect(response.body).not.to.be.empty;
            expect(response.body.data).to.exist.and.to.not.be.empty;

            expect(response.body.data.year).not.string;
            expect(response.body.data.year).to.equal(2019);


            expect(response.body.data.price).not.string;
            expect(response.body.data.price).to.equal(1849.99);

            expect(response.body.data['CPU model']).to.exist.and.to.not.be.empty;
        });

        

    });
})