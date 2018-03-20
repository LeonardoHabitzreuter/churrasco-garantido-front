import CNPJValidator from '../../src/utils/cnpjValidator'

describe('CNPJ validator', () => {
  test('should return false when the cnpj is null', () => {
    expect(CNPJValidator(null)).toBeFalsy()
  })

  test('should return false when the cnpj is nothing but mask', () => {
    expect(CNPJValidator('./-')).toBeFalsy()
  })

  test('should return false when the cnpj length is above 14 characters', () => {
    expect(CNPJValidator('123456789123456')).toBeFalsy()
  })

  test('should return false when the cnpj length is under 14 characters', () => {
    expect(CNPJValidator('1234567891234')).toBeFalsy()
  })

  test('should return false when the cnpj characters are all equals', () => {
    expect(CNPJValidator('11111111111111')).toBeFalsy()
  })

  test('should return false when the cnpj is invalid', () => {
    expect(CNPJValidator('28112671191748')).toBeFalsy()
  })

  test('should return true when the cnpj is valid', () => {
    expect(CNPJValidator('36912109000142')).toBeTruthy()
  })

  test('should return true when the cnpj contains a mask but is valid', () => {
    expect(CNPJValidator('36.912.109/0001-42')).toBeTruthy()
  })
})
