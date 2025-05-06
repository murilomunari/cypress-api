describe('Buscar dispositivos', () => {

    it('Buscar dispositivo especifico', () => {

        const deviceId = '7'; // ID do dispositivo que você deseja buscar

        cy.request({ 
            method: 'GET',
            url: `https://api.restful-api.dev/objects/${deviceId}`, 
            failOnStatusCode: false,
        }).as('getDeviceResult')

        // validações
        cy.get('@getDeviceResult').then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal(deviceId);
        });

        

    });
})