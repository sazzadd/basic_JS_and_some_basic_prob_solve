let mobile = {
  brand: "apple",
  camera: "100meg",
  price: "350000",
  weight: "300g",
  color: "black",
};
for (prop in mobile) {
  console.log(prop);
  console.log(mobile[prop]);
}
