function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

 switch (price) { // Change this line
    case type === "starter": // Change this line
      price = 0; // Change this line
      break;

    case type === "professional": // Change this line
      price = 20

    case type === "organization": // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}