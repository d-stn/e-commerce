const mongoose = require('mongoose');
const supertest = require('supertest');
const helper = require("./test_helper");
const app = require("../app");
const api = supertest(app);

const Product = require('../models/product');


////
///////
//////////
/////////////
////////////////
// only used for filling db
const lorem50 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus dolor sapien, id rutrum ante elementum in. Ut aliquet, eros id lobortis bibendum, nulla augue sodales enim, et tristique lorem tortor ac enim. Proin magna felis, lobortis a ante at, hendrerit hendrerit sapien. Nulla tincidunt ipsum non felis dapibus, eu."
const products = [
    {
        title: "Logitech G435",
        desc: lorem50,
        image: "Logitech_g435_awivfc",
        categories: ["logitech", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 24,
        price: 6999
    },
    {
        title: "Logitech G332",
        desc: lorem50,
        image: "Logitech_g332_ayaho6",
        categories: ["logitech", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 35,
        price: 5999
    },
    {
        title: "Logitech G335",
        desc: lorem50,
        image: "Logitech_G335_wok9kg",
        categories: ["logitech", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 6499
    },
    {
        title: "Logitech G432",
        desc: lorem50,
        image: "logitech_g432_fbk4ws",
        categories: ["logitech", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 8999
    },
    {
        title: "Logitech G535",
        desc: lorem50,
        image: "Logitech_G535jpg_hhlfa1",
        categories: ["logitech", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12999
    },
    {
        title: "Logitech G635",
        desc: lorem50,
        image: "Logitech_G635_lf2zw0",
        categories: ["logitech", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 14999
    },
    {
        title: "Logitech G733 Wireless",
        desc: lorem50,
        image: "Logitech_G733_vdsy6d",
        categories: ["logitech", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12999
    },
    {
        title: "Razer Kraken V3 X",
        desc: lorem50,
        image: "Razer_Kraken__V3_X_gkopmh",
        categories: ["razer", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 5999
    },
    {
        title: "Razer BlackShark V2 Pro",
        desc: lorem50,
        image: "Razer_BlackShark__V2_Pro_dunght",
        categories: ["razer", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 19999
    },
    {
        title: "Razer Barracuda X",
        desc: lorem50,
        image: "Razer_Barracuda_X_qn8pin",
        categories: ["razer", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 6999
    },
    {
        title: "Razer Barracuda",
        desc: lorem50,
        image: "Razer_Barracuda_oxswbd",
        categories: ["razer", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12999
    },
    {
        title: "Razer Kaira for Xbox",
        desc: lorem50,
        image: "RazkerKaira_qbb0cg",
        categories: ["razer", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12999
    },
    {
        title: "Razer Hammerhead",
        desc: lorem50,
        image: "Razer_Hammerhead_rfpx5p",
        categories: ["razer", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12999
    },
    {
        title: "Audio-Technica ATH-S220BT",
        desc: lorem50,
        image: "Audio-Technica_ATH-S220BT_xgnw6o",
        categories: ["audio-technica", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12499
    },
    {
        title: "Audio-Technica ATH-M30x",
        desc: lorem50,
        image: "Audio-Technica_ATH-M30x_lzbfrb",
        categories: ["audio-technica", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 9999
    },
    {
        title: "Audio-Technica ATH-M20XBT",
        desc: lorem50,
        image: "Audio-Technica_ATH-M20xBT_fubpdn",
        categories: ["audio-technica", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 8999
    },
    {
        title: "Audio-Technica ATH-M40X",
        desc: lorem50,
        image: "Audio-Technica_ATH-M40x_jmehda",
        categories: ["audio-technica", "headphones"],
        tags: ["wired"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 12999
    },
    {
        title: "Audio-Technica ATH-M50XBT",
        desc: lorem50,
        image: "Audio-Technica_ATHM50XBT2_qnrkfk",
        categories: ["audio-technica", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 19999
    },
    {
        title: "Razer Opus X",
        desc: lorem50,
        image: "Razer_Opus_X_rdlltx",
        categories: ["razer", "headphones"],
        tags: ["wireless"],
        specs: {
            "lorem ipsum": "Lorem ipsum dolor sit amet, consectetur",
            "lorem": "Lorem ipsum dolor",
            "lorem ipsum dolor": "Lorem ipsum",
            "Integer cursus dolor sapien": "id rutrum ante elementum in",
            "consectetur": "adipiscing elit",
            "ipsum lorem": "Lorem ipsum dolor sit amet, consectetur",
            "dolor lorem": "Lorem ipsum dolor", 
            "ipsum lorem dolor": "Lorem ipsum",
            "dolor sapien integer cursus": "id rutrum ante elementum in",
            "consectetur elit": "adipiscing elit",
        },
        stock: 40,
        price: 9999
    },
]
////////////////
/////////////
//////////
///////
////


beforeEach(async () => {
    // this is the normal configuration
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


    // DELETE THIS IN PRODUCTION
    // THIS IS TEST VERSION TO FILL DB WITH OBJECTS
    await Product.deleteMany({})
    const productObjects = products
        .map(p => new Product({ ...p }))

    const promiseArray = productObjects
        .map(p => p.save());

    await Promise.all(promiseArray);
})

test.only("fill db", async () => {

})

describe("addition of a new product", () => {
    test("succeeds with valid data ", async () => {
        const newProduct = {
            title: "willremovethissoon",
            image: "foo",
            color: ["foo"],
            stock: 1,
            price: 1.99
        }

        await api
            .post("/api/products")
            .send(newProduct)
            .expect(201)
            .expect("Content-Type", /application\/json/)

        const productsAtEnd = await helper.getProductsInDb();
        expect(productsAtEnd).toHaveLength(helper.initialProducts.length + 1)

        // newProduct doesn't have id. So in order to do an exact comparison, we save the id 
        // of the last element in the database (which should be newProduct), and add it as 
        // the "id" field of the locally declared newProduct variable in the comparison

        const lastProductId = productsAtEnd[productsAtEnd.length - 1].id;

        // categories are sizes are not required, so if not provided will be empty arrays
        const lastProduct = { ...newProduct, id: lastProductId, categories: [], sizes: [] }

        expect(productsAtEnd).toContainEqual(lastProduct)
    });
})

test("fetching by category returns the correct products", async () => {
    const db = await helper
        .getProductsInDb()

    const hoodie = db
        .filter(p => p.categories.includes("Hoodies"))

    const response = await api
        .get("/api/products/Hoodies")
        .expect(200)
        .expect("Content-Type", /application\/json/)

    // sorting the arrays to ensure that test doesn't fail because elements are in different order
    expect(hoodie.sort()).toEqual(response.body.sort())
})

test("the stock of a product can be edited", async () => {
    const updatedProduct = {
        stock: 1000000
    }

    const products = await helper.getProductsInDb()
    const firstProduct = products[0]
    await api
        .put(`/api/products/${firstProduct.id}`)
        .send(updatedProduct)
        .expect(200)

    const productsAtEnd = await helper.getProductsInDb()
    expect(productsAtEnd[0].stock).toBe(updatedProduct.stock)
})

afterAll(() => {
    mongoose.connection.close()
})