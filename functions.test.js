const { sum, greeting, reverseWord, getAname } = require('./functions');

test('object assignment', () => {
    const data = { one : 1};
    data['two'] = 2;
    data['three'] = 3;
    expect(data).toEqual({ one : 1, two : 2, three : 3});
})

test("adding positive number is not zero", () => {
    for (let a = 1; a < 10; a++){
        for(let b = 1; b < 10; b++){
           expect(a + b).not.toBe(0 || 1);
        }
    }
})

test('check undefined', () => {
    expect(sum()).toBeNaN();
})

test('is greeting message defined', () => {
    expect(greeting()).not.toBeUndefined();
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
    'bread'
  ];
  
test('the shopping list has bread on it', () => {
    expect(shoppingList).toContain('bread');
    expect(new Set(shoppingList)).toContain('bread');
});

test('reverse a word of string type', () => {
    const param = "Hello";
    expect(reverseWord(param)).toBe(param.split("").reverse().join(""));
});

test('check name in a promise', () => {
    const name = 123;
    getAname(name)
        .then(msg => {
            expect(msg).toBe(name);
        })
        .catch(err => {
            expect(err).not.toBeUndefined();
        })
})
