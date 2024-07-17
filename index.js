let arrSoN = [];
document.getElementById("themSo").onclick = function () {
  let nhapSo = document.getElementById("nhapSo").value * 1;
  if (!isNaN(nhapSo)) {
    arrSoN.push(nhapSo);
    document.getElementById("btn01").innerHTML = arrSoN.join(", ");
  }
};

document.getElementById("tinhTong").onclick = function () {
  let tinhTong = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      tinhTong += arrSoN[i];
    }
  }
  document.getElementById("btn02").innerHTML = tinhTong;
};

function timSoNhoNhat(arrSoN) {
  let min = arrSoN[0];
  for (i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] < min) {
      min = arrSoN[i];
    }
  }
  return min;
}

document.getElementById("timSoNhoNhat").onclick = function () {
  document.getElementById("btn03").innerHTML = timSoNhoNhat(arrSoN);
};

function timSoDuongNhoNhat(arrSoN) {
  let min = arrSoN[0];
  for (i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] < min && arrSoN[i] >= 0) {
      min = arrSoN[i];
    }
  }
  return min;
}

document.getElementById("timSoDuongNhoNhat").onclick = function () {
  document.getElementById("btn04").innerHTML = timSoDuongNhoNhat(arrSoN);
};

function timSoChanCuoiCung(arrSoN) {
  let even = -1;
  for (i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] % 2 == 0) {
      even = arrSoN[i];
    }
  }
  return even;
}

document.getElementById("timSoChanCuoiCung").onclick = function () {
  document.getElementById("btn05").innerHTML = timSoChanCuoiCung(arrSoN);
};

function doiViTri(arrSoN) {
  let viTri1 = document.getElementById("viTriSo1").value * 1;
  let viTri2 = document.getElementById("viTriSo2").value * 1;
  let tcmp = arrSoN[viTri1];

  arrSoN[viTri1] = arrSoN[viTri2];
  arrSoN[viTri2] = tcmp;

  return arrSoN;
}

document.getElementById("doiViTri").onclick = function () {
  document.getElementById("btn06").innerHTML = doiViTri(arrSoN);
};

function sapXep(arrSoN) {
  arrSoN.sort((a, b) => a - b);

  return arrSoN;
}

document.getElementById("sapXep").onclick = function () {
  document.getElementById("btn07").innerHTML = sapXep(arrSoN);
};

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function findFirstPrime(arrSoN) {
  for (let i = 0; i < arrSoN.length; i++) {
    if (isPrime(arrSoN[i])) {
      return arrSoN[i];
    }
  }
  return -1;
}

document.getElementById("soNguyenTo").onclick = function () {
  const result = findFirstPrime(arrSoN);
  document.getElementById("btn08").innerHTML =
    result !== -1 ? `First prime number is ${result}` : "No prime number found";
};
let arrSoN2  = [] ;
document.getElementById("themSo2").onclick = function () {
  let nhapSo2 = document.getElementById("nhapSo2").value * 1;
  if (!isNaN(nhapSo2)) {
    arrSoN2.push(nhapSo2);
    document.getElementById("btn09").innerHTML = arrSoN2.join(", ");
  }
};

function checkIntegerNumber(arrSoN2) {
  let count = 0;
  for (let i = 0; i < arrSoN.length; i++) {
    if (Number.isInteger(arrSoN2[i])) {
      count++;
    }
  }

  return count;
}

document.getElementById("demSoNguyen").onclick = function () {
  document.getElementById("btn010").innerHTML =
    "Số Lượng Số Nguyên Là: " + checkIntegerNumber(arrSoN2);
};

function soSanhSoAmVaDuong(arrSoN) {
  let countAm = 0;
  let countDuong = 0;

  for (let i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] < 0) {
      countAm++;
    } else if (arrSoN[i] > 0) {
      countDuong++;
    }
  }
  if (countAm > countDuong) {
    return "Số Âm > Số Dương";
  } else if (countAm < countDuong) {
    return "Số Dương > Số Âm";
  } else {
    return "Số Dương = Số Âm";
  }
}

document.getElementById("soSanh").onclick = function () {
  document.getElementById("btn011").innerHTML = soSanhSoAmVaDuong(arrSoN);
};
