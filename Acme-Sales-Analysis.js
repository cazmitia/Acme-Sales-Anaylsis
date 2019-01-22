const products = [
  {
    id: 1,
    name: 'foo',
    price: 7
  },
  {
    id: 2,
    name: 'bar',
    price: 2
  },
  {
    id: 5,
    name: 'bazz',
    price: 1
  },
];

const users = [
  {
     id: 1,
     name: 'moe'
  },
  {
     id: 2,
     name: 'larry'
  },
  {
     id: 3,
     name: 'curly'
  }
];

// productId matches up with product in products
// userId matches up with user in users
const orders = [
  {
    id: 1,
    productId: 1,
    quantity: 3,
    userId: 1
  },
  {
    id: 2,
    productId: 1,
    quantity: 7,
    userId: 1
  },
  {
    id: 3,
    productId: 5,
    quantity: 70,
    userId: 3
  },
  {
    id: 3,
    productId: 5,
    quantity: 1,
    userId: 3
  }
];

console.log(productsPurchased(orders, products)); // logs foo and bar products

console.log(topSellingProductByQuantity(orders, products));//logs bazz product

console.log(usersWithOrders(users, orders));//logs info on moe and curly



function productsPurchased(ordered, productList) {
    const purchased = ordered.map(val => val.productId);
    return productList.filter(val => purchased.includes(val.id));
}

function topSellingProductByQuantity(ordered, productList) {
  return productList.reduce((acc, val) => {
    val.totalQuantity = 0;
    for (let i = 0; i < ordered.length; ++i) {
      if (val.id === ordered[i].productId) val.totalQuantity += ordered[i].quantity;
    }
    return (val.totalQuantity > acc.totalQuantity ? val : acc);
  }, {totalQuantity: 0})
}

function usersWithOrders(userList, ordered) {
  const userIdsWithOrders = ordered.map(val => val.userId);
  return userList.filter(val => userIdsWithOrders.includes(val.id));
}
