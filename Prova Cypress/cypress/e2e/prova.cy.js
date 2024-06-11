describe('Testes de Soma, Multiplicação e Divisão por Zero (Caminho Negativo)', () => {
  it('Teste de operação predefinida (Soma)', () => {
    let infos = access()

    cy.get('#calculateButton').click()

    cy.get('#clearButton').click()
  })

  it('Teste de mudança de operação (para Multiplicação)', () => {
    let infos = access()

    cy.get('#selectOperationDropdown').select(2)
    cy.get('#calculateButton').click()
    cy.get('#clearButton').click()
  })

  it('Teste de divisão por 0 (Caminho Negativo)', () => {
    cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
    cy.get('#number1Field').type(1337)
    cy.get('#number2Field').type(0)
    cy.get('#selectOperationDropdown').select(3)
    cy.get('#calculateButton').click()
    cy.get('#errorMsgField').should("contain.text", "Divide by zero error!")
  })

  function access()
  {
    let data = new Date()
    let minuto = data.getMinutes().toString()
    let seg = data.getSeconds().toString()
    let Num1 = minuto + seg
    let Num2 = seg - minuto
    let infos = [Num1, Num2]

    cy.visit('https://testsheepnz.github.io/BasicCalculator.html')
    cy.get('#number1Field').type(infos[0])
    cy.get('#number2Field').type(infos[1])

    return infos  
  }
})