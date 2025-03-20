// const Razorpay = require("razorpay");
// require('dotenv').config({ path: '../.env' });





// Import the Razorpay library
const Razorpay = require("razorpay");

// Ensure that environment variables are loaded
require('dotenv').config({ path: '../.env' });
const RAZORPAY_KEY = "rzp_test_9DMlXIjbiXKZQa"
const RAZORPAY_SECRET = "6vCslhB2pzSdxeYeFF7zfrze"

// Destructure the necessary keys from process.env
// const { RAZORPAY_KEY, RAZORPAY_SECRET } = process.env;

// Check if the environment variables are present
if (!RAZORPAY_KEY || !RAZORPAY_SECRET) {
  console.error("Error: Razorpay key_id and key_secret are required.");
  process.exit(1);  // Exit the application if credentials are missing
}

exports.instance = new Razorpay({
    key_id: RAZORPAY_KEY,
    key_secret: RAZORPAY_SECRET,
});
