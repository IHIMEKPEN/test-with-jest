const { add, app } = require("../index")
const supertest  = require("supertest")


test('toBe'//what the test is for
    , () => {
        expect(add(1, 2)).toBe(3)

    }//callback function
)

test('toEqual '//what the test is for
    , () => {
        expect(add(1, 2)).toEqual(3)

    }//callback function
)

test('tobeDefined '//what the test is for
    , () => {
        expect(add(1, 2)).toBeDefined()

    }//callback function
)

test('tobeNull '//what the test is for
    , () => {
        expect(add(1, 2)).not. toBeNull()

    }//callback function
)

test('test get users api'//what the test is for
    , async () => {
        await supertest(app)
        .get("/users")
        .expect(200)
        .then(result=>{
            expect(result && result.body && typeof result.body ==='object')
        })

    }//callback function
)
