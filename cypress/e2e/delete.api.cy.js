

describe('Deletar dispositivos', () => {

    it('deletar dispositivo especifico', () => {

        cy.request({ 
            method: 'DELETE',
            url: 'https://api.restful-api.dev/objects/6', 
            failOnStatusCode: false,
        }).as('deleteDeviceResult')   

        cy.get('@deleteDeviceResult').then((response) => {
            expect(response.status).to.equal(405);
            expect(response.body.message).to.equal('Object with id = ff808181932badb60196a8049e4e473c has been deleted.')
        })
    })

});