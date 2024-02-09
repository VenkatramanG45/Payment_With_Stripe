//console.log("Sanity check!");
// Get Stripe publishable key
fetch("/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);
  //const stripe = Stripe("pk_test_51OhOI1SEOiCnT6Vcr36Wo7cBn4cVkIv1WUYF2hYry8A0MqEmShU29WY71zjB3ps6P1xTFGpGw7gQjr8M3Pc48XPp00NldJ1QfS");
  // Event handler
  document.querySelector("#submitBtn").addEventListener("click", () => {
    // Get Checkout Session ID
    fetch("/create-checkout-session/")
    .then((result) => { return result.json(); })
    .then((data) => {
      console.log(data);
      // Redirect to Stripe Checkout
      return stripe.redirectToCheckout({sessionId: data.sessionId})
    })
    .then((res) => {
      console.log(res);
    });
  });
}); 

/*console.log("Sanity check!");

// Get Stripe publishable key
fetch("/config/")
.then((result) => { return result.json(); })
.then((data) => {
  // Initialize Stripe.js
  const stripe = Stripe(data.publicKey);

  // Event handler
  document.querySelector("#submitBtn").addEventListener("click", () => {
    // Get customer information from your form
    const name = document.getElementById('name').value;
    const addressLine1 = document.getElementById('addressLine1').value;
    //const addressLine2 = document.getElementById('addressLine2').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postalCode').value;
    const country = document.getElementById('country').value;

    // Create a Payment Method with the collected address information
    stripe.createPaymentMethod({
      type: 'card',
      card: card, // Assuming you have initialized 'card' with Elements
      billing_details: {
        name: name,
        address: {
          line1: addressLine1,
          line2: addressLine2,
          city: city,
          state: state,
          postal_code: postalCode,
          country: country
        }
      }
    }).then((result) => {
      if (result.error) {
        // Show error to your customer
        console.error(result.error.message);
      } else {
        // Get Checkout Session ID
        fetch("/create-checkout-session/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            paymentMethodId: result.paymentMethod.id,
          }),
        })
        .then((result) => { return result.json(); })
        .then((data) => {
          console.log(data);
          // Redirect to Stripe Checkout
          return stripe.redirectToCheckout({sessionId: data.sessionId});
        })
        .then((res) => {
          console.log(res);
        });
      }
    });
  });
});*/

/*console.log("Sanity check!");

// Get Stripe publishable key
fetch("/config/")
  .then((result) => result.json())
  .then((data) => {
    // Initialize Stripe.js
    const stripe = Stripe(data.publicKey);

    // Event handler
    document.querySelector("#submitBtn").addEventListener("click", () => {
      // Get customer information from your form
      const name = document.getElementById('name').value;
      const addressLine1 = document.getElementById('addressLine1').value;
      const addressLine2 = document.getElementById('addressLine2').value;
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;
      const postalCode = document.getElementById('postalCode').value;
      const country = document.getElementById('country').value;

      // Determine whether the transaction is non-INR
      const isNonINRTransaction = 1;

      // Create a Payment Method with the collected address information
      stripe.createPaymentMethod({
        type: 'card',
        card: card, // Assuming you have initialized 'card' with Elements
        billing_details: {
          name: name,
          address: {
            line1: addressLine1,
            line2: addressLine2,
            city: city,
            state: state,
            postal_code: postalCode,
            country: isNonINRTransaction ? 'US' : 'IN', // Specify the country based on the transaction type
          },
        },
      }).then((result) => {
        if (result.error) {
          // Show error to your customer
          console.error(result.error.message);
        } else {
          // Get Checkout Session ID
          fetch("/create-checkout-session/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              paymentMethodId: result.paymentMethod.id,
            }),
          })
          .then((result) => result.json())
          .then((data) => {
            console.log(data);
            // Redirect to Stripe Checkout
            return stripe.redirectToCheckout({ sessionId: data.sessionId });
          })
          .then((res) => {
            console.log(res);
          });
        }
      });
    });
  });
*/


