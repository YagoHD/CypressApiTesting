

/// <reference types="cypress"/>
it ('Prueba de GET request en mi servidor http se comprueba que el primer usuario es el deseado', () =>{
    cy.request({
        url:`/users/${1}`,
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).has.property('name', "Leanne Graham")
    })
})

it ('given posts when get request triggered then status code 200 and 100 results obtained', () =>{
    cy.request({
        url:`/posts`
    }).as('posts').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(100)
    })
})

it ('given comments when get request triggered then status code 200 and 500 results obtained', () =>{
    cy.request('/comments').as('comments')

    cy.get('@comments').should((response) =>{
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(500)
    })
})

it ('given posts when get request triggered then status code 200 and a post is modified',() =>{
    cy.request('PATCH', `http://localhost:3000/posts/${99}`,
     {userId: 10,id: 100, title: 'Yago Modificado cypress', body: 'Hello World Modificado cypress'}).then((response) => {
        expect(response.body).to.have.property('userId', 10)
        expect(response.body).to.have.property('id', 99)
        expect(response.body).to.have.property('title', 'Yago Modificado cypress')
        expect(response.body).to.have.property('body', 'Hello World Modificado cypress')
     })
})

it('given posts when get request triggered then status code 200 and sorting by id and filtering by aliases obtained', () => {
    cy.request('GET', 'posts?_sort=id&_order=asc&q=alias').then((response)=> {
        expect(response.status).to.eq(200)
        // (expect(response.body).to.have.property('body', 'alias') || expect(response.body).to.have.property('title','alias'))
    })
})

it('given comments when get request triggered then status code 200 and a pagination of 3 and 5 elements obtained', () => {
    cy.request('GET', 'comments?_page=3&_limit=5').then((response)=>{
        expect(response.status).to.eq(200)
    })
})

// it ('given posts when get request triggered then status code 201 and a new post is created',() =>{
//     cy.request('POST', 'http://localhost:3000/posts',
//      {userId: 10,id: 101, title: 'Yago creado cypress', body: 'Hello World desde cypress'}).then((response) => {
//         expect(response.body).to.have.property('userId', 10)
//         expect(response.body).to.have.property('id', 101)
//         expect(response.body).to.have.property('title', 'Yago creado cypress')
//         expect(response.body).to.have.property('body', 'Hello World desde cypress')
//      })
// })

// it ('check the endpoint posts delete a record created then get status code 200',() =>{
//     cy.request('DELETE', 'http://localhost:3000/posts/101')
// })