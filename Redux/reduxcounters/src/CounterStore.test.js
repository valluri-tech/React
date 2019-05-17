const obj = require('./CounterStore');
const deepFreeze = require('deep-freeze')

test('Testing Add Counter', () => {
    const listBefore  = []
    const listAfter = [0];
    deepFreeze(listBefore);
    //expect(obj.AddCounter(listBefore)).toBe(listAfter);
    expect(obj.AddCounter(listBefore)).toStrictEqual(listAfter);
});

test('Testing Remove Counter',()=>{
    const listBefore = [1,2,3]
    const listAfter = [1,2]
    deepFreeze(listBefore);
    expect(obj.RemoveCounter(listBefore,2)).toStrictEqual(listAfter);
});

