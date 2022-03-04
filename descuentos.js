function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

const coupons = ["25OFF", "15OFF", "30OFF"];

function onClickCouponApply() {
  const InputPrice = document.getElementById("InputPrice");
  const priceValue = InputPrice.value;
  const InputCoupon = document.getElementById("InputCoupon");
  const couponValue = InputCoupon.value;
  let discountValue;

  switch (couponValue) {
    case "25OFF":
      discountValue = 25;
      break;
    case "15OFF":
      discountValue = 15;
      break;
    case "30OFF":
      discountValue = 30;
      break;
    default:
      discountValue = 0;
  }

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const ResultP = document.getElementById("ResultP");
  if (priceValue != precioConDescuento) {
    ResultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
  } else {
    ResultP.innerText = `El cupon de descuento no es valido, el precio es: $${precioConDescuento}`;
  }
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
