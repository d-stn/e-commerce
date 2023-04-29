# Full-stack E-commerce App
### Work Under Progress
### [Live demo](https://e-commerce-d-stn.vercel.app/)
The payment process is running in test mode, which means that the app does not support real purchases and only stripe's test cards work. Since this is not a real store but a personal project, it will remain in test mode.

## Technologies and frameworks used
[React](https://react.dev/)\
[Redux](https://redux.js.org/)\
[Cloudinary](https://cloudinary.com/)\
[Stripe.js](https://stripe.com/)\
[Node.js](https://nodejs.org/en)\
[Express](https://expressjs.com/)\
[MongoDB](https://www.mongodb.com/)

## Ideas to implement
- Responsive design
- User authentication
- Admin dashboard
- Product filters
- Search bar
- User reviews

## Run Locally
### 1. Install server dependencies
From project root:
```
cd server
npm install
```

### 2. Add environment variables

Create an `.env` file and add the following variables. (You will need a Stripe.js and MongoDB Atlas account)

```
// SAMPLE CONFIG .env, you should put your own details

PORT=3003
MONGODB_URI=mongodb+srv://username:password@cluster0.pfgywsw.mongodb.net/App?
TEST_MONGODB_URI=mongodb+srv://username:password@cluster0.pfgywsw.mongodb.net/App_test?
STRIPE_SECRET_KEY=sk_test_z6Wgj3W5n3eYSLEKPRJ4OrE900vpjOnFhP
``` 

### 3. Run development server
```
npm run dev
```

### 4. Install client dependencies
From project root:
```
cd client
npm install
```

### 5. Change requests url
Change the constant variable `baseUrl` in `client/src/services/order.js` and `client/src/services/products.js` to the local url your server is running on.

### 6. Run client
```
npm start
```

Note: If the products are not loading, then the server (which is hosted on railway) is not live. This is because I am using railway's free tier and I have ran out of credits. The server will be up when the next month starts.

## Previews
![Preiew1](https://user-images.githubusercontent.com/94789169/228053855-d8c2a96b-ad5f-4b0e-87ff-b8fae787b0f6.gif)
![Preiew2](https://user-images.githubusercontent.com/94789169/228053946-b5b96530-807f-47dc-afc1-80f3ceed529b.gif)

