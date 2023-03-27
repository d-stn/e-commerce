const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);

const Product = require('../models/product');

// Tests won't work since I removed the option to add new products. I plan to make addition 
// of new products possible later, through an admin dashboard

// beforeEach(async () => {
//     await Product.deleteMany({})    // clear everything in products collection
//     const productObjects = helper.initialProducts
//         .map(p => new Product({ ...p }))    // map every initialProducts obj as a DB entry
// 
//     const promiseArray = productObjects
//         .map(p => p.save());
// 
//     await Promise.all(promiseArray);
// 
//     // This is to make sure the DB is in the same condition before each test is ran
// 
// })
// 
// describe("addition of a new product", () => {
//     test("succeeds with valid data ", async () => {
//         const newProduct = {
//             title: "willremovethissoon",
//             image: "foo",
//             categories: ["foo"],
//             stock: 1,
//             price: 199
//         }
// 
//         await api
//             .post("/api/products")
//             .send(newProduct)
//             .expect(201)
//             .expect("Content-Type", /application\/json/)
// 
//         const productsAtEnd = await helper.getProductsInDb();
//         expect(productsAtEnd).toHaveLength(helper.initialProducts.length + 1)
// 
//         // newProduct doesn't have id. So in order to do an exact comparison, we save the id
//         // of the last element in the database (which should be newProduct), and add it as
//         // the "id" field of the locally declared newProduct variable in the comparison
// 
//         const lastProductId = productsAtEnd[productsAtEnd.length - 1].id;
// 
//         // categories are sizes are not required, so if not provided will be empty arrays
//         const lastProduct = { ...newProduct, id: lastProductId, desc: "", tags: [], specs: {} }
// 
//         expect(productsAtEnd).toContainEqual(lastProduct)
//     });
// })
// 
// test("fetching by category returns the correct products", async () => {
//     const db = await helper
//         .getProductsInDb()
// 
//     const mouse = db
//         .filter(p => p.categories.includes("mouse"))
// 
//     const response = await api
//         .get("/api/products/mouse")
//         .expect(200)
//         .expect("Content-Type", /application\/json/)
// 
//     // sorting the arrays to ensure that test doesn't fail because elements are in different order
//     expect(mouse.sort()).toEqual(response.body.sort())
// })

afterAll(() => {
    mongoose.connection.close()
})