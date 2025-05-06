describe('Buscar dispositivos', () => {

    it('Buscar dispositivo especifico', () => {

        cy.request({ 
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7',
            failOnStatusCode: false,
        });

    });
})