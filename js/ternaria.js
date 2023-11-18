let is_driving = true;
console.log(is_driving)

// const crash = () => {is_driving = !is_driving}
const crash = is_driving ? false : true // ✔️ Ternaria
is_driving = crash

console.log(is_driving)