describe('TODO api testing', () => {
    let todoItem;
    it('fetches Todo items - GET', () => {
        cy.request({ 
            method: 'GET', 
            url: 'http://localhost:3000'
         })
         .should((response) => {
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        });
    })
 })



 it ('check the endpoint posts delete a record created then get status code 200',() =>{
    cy.request ({
        method: 'DELETE',
        url: "http://localhost:3000" + `/posts/${101}`
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})