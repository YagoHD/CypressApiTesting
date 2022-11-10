it('given comments when get request triggered then status code 200 and a pagination of 3 and 5 elements obtained', () => {
    cy.request('GET', 'comments?_page=3&_limit=5').then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(5)
        
        for(var i=0; i<response.body.length; i++){
            const texto = JSON.stringify(response.body[i])
            expect(response.body[i]).to.have.property('postId', 3)
        }
    })
})