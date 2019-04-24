const leapyear = require('./leapyear')
describe("test",()=>{
    test('return true',()=>{
        expect(leapyear(2000)).toBe(true)});   
    test('return true',()=>{
        expect(leapyear(2003)).toBe(false)});   
    test('return true',()=>{
        expect(leapyear(1900)).toBe(false)});  
    test('return true',()=>{
        expect(leapyear(1902)).toBe(false)});

    test('Checking for error using try-catch',()=>{
            try{
                expect(leapyear('123'))
            }
            catch(e){
                expect(e).toBe('Input is not number')
            }
        })
    
    test('Checking for error using toThrow',()=>{
        expect(()=>{leapyear('82782')}).toThrow();
    })
    test('Checking error for multiple arguments',()=>{
        expect(()=>{leapyear(1990,2005)}).toThrow();
    })   
}
)
