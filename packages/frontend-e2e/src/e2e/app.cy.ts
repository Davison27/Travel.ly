import 'cypress-localstorage-commands'

import * as cypress from 'cypress'

describe('First access', () => {
  it('Visits the signIn page', () => {
    cy.visit('http://localhost:4200/')
  })
})

describe('List travels', () => {
  it('Should login and list travels', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.saveLocalStorage()
    cy.visit('http://localhost:4200/travels')
  })
})

describe('Go to user page', () => {
  it('should go to user page', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/user')
  })
})

describe('View travel', () => {
  it('should enter into one travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Ver').click()
  })
})

describe('Create travel', () => {
  it('should create a new travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/new-travel')
    cy.get('input[name="name"]').type('Barcelona')
    cy.get('input[name="description"]').type('Viaje a Barcelona')
    cy.get('input[name="startDate"]').type('2017-06-01T08:30')
    cy.get('input[name="endDate"]').type('2017-06-01T08:31')
    cy.get('input[name="travelers"]').type('10')
    cy.get('input[name="budget"]').type('1000')
    cy.contains('Guardar viaje').click()
  })
})

describe('Edit travel', () => {
  it('should edit a travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Modificar').click()
    cy.get('input[name="name"]').type('Prueba de viaje')
    cy.get('input[name="startDate"]').type('2017-06-01T08:30')
    cy.get('input[name="endDate"]').type('2017-06-01T08:31')
    cy.contains('Guardar viaje').click()
  })
})

describe('Delete travel', () => {
  it('should delete a travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Borrar').click()
    cy.contains('Borrar').click({ force: true })
  })
})

describe('Create activity', () => {
  it('should create an activity inside a travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Ver').click()
    cy.contains('🧭').click()
    cy.contains('Ocio').click()
    cy.get('input[name="name"]').type('Prueba actividad')
    cy.get('input[name="description"]').type('Prueba de actividad')
    cy.get('input[name="startDate"]').type('2017-06-01T08:30')
    cy.get('input[name="endDate"]').type('2017-06-01T08:31')
    cy.get('input[name="price"]').type('1000')
    cy.contains('Guardar').click()
    cy.contains('Cancelar').click()
    cy.visit('http://localhost:4200/travels')
    cy.contains('Ver').click()
  })
})

describe('Delete activity', () => {
  it('should delete an activity inside a travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Ver').click()
    cy.get('button[class*="css-1cgr9ws"]').first().click()
    cy.contains('Borrar').click({ force: true })
  })
})

describe('View activity', () => {
  it('should enter into one activity inside a travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Ver').click()
    cy.get('button[class*="css-10dk087"]').first().click()
    cy.contains('Cancelar').click()
  })
})

describe('Edit activity', () => {
  it('should edit an activity inside a travel', () => {
    cy.setLocalStorage('token', JSON.stringify('token'))
    cy.visit('http://localhost:4200/travels')
    cy.contains('Ver').click()
    cy.get('button[class*="css-jji50e"]').first().click()
    cy.contains('Ocio').click()
    cy.get('input[name="name"]').type('Prueba actividad')
    cy.get('input[name="description"]').type('Prueba de actividad')
    cy.get('input[name="startDate"]').type('2017-06-01T08:30')
    cy.get('input[name="endDate"]').type('2017-06-01T08:31')
    cy.get('input[name="price"]').type('1000')
    cy.contains('Guardar').click()
  })
})
