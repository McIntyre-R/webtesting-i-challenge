const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!



describe('enhancer.js', () => {
    it ('should run all tests without error', ()=> {
        expect(true).toBeTruthy();
    });
    const sword = {
        name: 'Excalibur',
        durability: 20,
        enhancement: 3
    };
    describe('repair', () => {
        it('Repair item to 100', () => {
            repair(sword);
            expect(sword.durability).toBe(100);
        });
    });
    describe('succeed', () => {
        it('Enhance item to 4, 5, and 6', () => {
            succeed(sword);
            expect(sword.enhancement).toBe(4);
            succeed(sword);
            expect(sword.enhancement).toBe(5);
            succeed(sword);
            expect(sword.enhancement).toBe(6);
        });
        it('Keep Enhancement at 20', () => {
            sword.enhancement = 20;
            succeed(sword);
            expect(sword.enhancement).toBe(20);
        });
    });
    describe('fail', () => {
        it('Lower durability by 5 when below 15 enhance, and 10 when above 15', () => {
            sword.enhancement = 10;
            fail(sword);
            expect(sword.durability).toBe(95);
            sword.enhancement = 15
            fail(sword);
            expect(sword.durability).toBe(85);
        });
        it('Lower Enhancement when above 16', () => {
            sword.enhancement = 17;
            fail(sword);
            expect(sword.enhancement).toBe(16);
            expect(sword.durability).toBe(75)
        })
    });
    describe('get', () => {
        it('Appends Enhancement to Item Name', () => {
            get(sword)
            expect(sword.name).toBe('Excalibur [+16]')
        })
    })
});