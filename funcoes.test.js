const minhasFuncoes = require('./funcoes')

//Validar MinimoDe Caracteres
test('o minimo é 5 e passei 3, tem que retornar false', ()=>{
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(5, 'bob')).toBe(false);
})

test('o minimo é 3 e passei 5, tem que retornar true', ()=>{
    expect(minhasFuncoes.fnValidarMinimoDeCaracteres(3, 'Karem')).toBe(true);
})

//Validar Campo Obrigatorio
test('o campo é obrigatorio e preenchi, tem que retonar thue', ()=>{
    expect(minhasFuncoes.fnValidarCampoObrigatorio('Capivara')).toBe(true);
})

test('o campo é obrigatorio e deixei vazil, tem que retonar false', ()=>{
    expect(minhasFuncoes.fnValidarCampoObrigatorio('')).toBe(false);
})

//Validar Email
test('Validar email correto', ()=>{
    expect(minhasFuncoes.fnValidarEmail('test@valido.com')).toBe(true);
    expect(minhasFuncoes.fnValidarEmail('test.valido@valido.com')).toBe(true);
    expect(minhasFuncoes.fnValidarEmail('test.valido@test.edu.br')).toBe(true);
})

test('Validar email incorreto', ()=>{
    expect(minhasFuncoes.fnValidarEmail('teste.invalido')).toBe(false);
    expect(minhasFuncoes.fnValidarEmail('teste@invalido')).toBe(false);
    expect(minhasFuncoes.fnValidarEmail('invalido@.com')).toBe(false);
    expect(minhasFuncoes.fnValidarEmail('invalido@teste.')).toBe(false);
})

//Validar Senha Maiuscula
test('validar sem letra maiuscula, tem que retornar falso ', ()=>{
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('capivara')).toBe(false);
})

test('validar com letra maiuscula, tem que retornar true ', ()=>{
    expect(minhasFuncoes.fnValidarSenhaMaiuscula('Capivara')).toBe(true);
})

//Validar Senha Caracter Especial
test('validar sem caracter especial, tem que retornar false', ()=>{
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('Capivara')).toBe(false);
})

test('validar com caracter especial, tem que retornar true', ()=>{
    expect(minhasFuncoes.fnValidarSenhaCaracterEspecial('Capivara?')).toBe(true);
})

//Validar Senha Igual
test('validar senhas desiguais, tem que retornar false', ()=>{
    expect(minhasFuncoes.fnValidarSenhaIgual('Capivara123', 'capivara321')).toBe(false);
})

test('validar senhas iguais, tem que retornar true', ()=>{
    expect(minhasFuncoes.fnValidarSenhaIgual('Capivara123', 'Capivara123')).toBe(true);
})
