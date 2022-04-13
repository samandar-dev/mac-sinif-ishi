// let ram8 = document.querySelector('#ram8');
// let ram16 = document.querySelector('#ram16');
// let xotira256 = document.querySelector('#xotira256');
// let xotira512 = document.querySelector('#xotira512');
// let xotira1024 = document.querySelector('#xotira1024');
let price1 = document.querySelector('#price1');
let price2 = document.querySelector('#price2');
// let title = document.querySelector('#title');

let countINput = document.querySelector('#countINput');
let remCount = document.querySelector('#remCount');
let addCount = document.querySelector('#addCount');

let titram = document.querySelector('#titram');
let titxot = document.querySelector('#titxot');
let titCol = document.querySelector('#titCol');

titram.textContent = '/8';
titxot.textContent = '/256';
titCol.textContent = 'Gold';

remCount.addEventListener('click', remCountFun);
addCount.addEventListener('click', addCountFun);

function addCountFun() {
  let i = countINput.value
  let inat = eval(i) + eval(1)
  countINput.value = inat

  let p1 = price1.innerHTML;
  let p1add = p1
  // let p2 = price2.innerHTML;
  let pnat1 = eval(p1) + eval(price1.innerHTML)
  price1.innerHTML = `${pnat1} so'm`
  // price2.innerHTML = `${r8.skidca} so'm`
}

function remCountFun() {
  let i = countINput.value
  let inat = eval(i) - eval(1)
  if (inat >= 1) {
    countINput.value = inat

    let p1 = price1.innerHTML;
    let p1add = p1
    // let p2 = price2.innerHTML;
    let pnat1 = eval(p1) + eval(price1.innerHTML)
    price1.innerHTML = `${pnat1} so'm`
    // price2.innerHTML = `${r8.skidca} so'm`
  }
}

// ram8.addEventListener('click', ram8Fun);
// ram16.addEventListener('click', ram16Fun);
countINput.value = 1

// xotira256.addEventListener('click', () => {
//   xotira256.classList.add('pamet-btn-act');
//   xotira512.classList.remove('pamet-btn-act');
//   xotira1024.classList.remove('pamet-btn-act');
//   titxot.textContent = '/256';

//   macObject[0].med.forEach((r8) => {
//     console.log(r8);
//     if (256 == r8.xotira) {
//       price1.innerHTML = `${r8.price} so'm`
//       price2.innerHTML = `${r8.skidca} so'm`
//     }
//   })
// })

// xotira512.addEventListener('click', () => {
//   xotira512.classList.add('pamet-btn-act');
//   xotira256.classList.remove('pamet-btn-act');
//   xotira1024.classList.remove('pamet-btn-act');
//   titxot.textContent = '/512';

//   macObject[0].med.forEach((r8) => {
//     if (512 == r8.xotira) {
//       price1.innerHTML = `${r8.price} so'm`
//       price2.innerHTML = `${r8.skidca} so'm`
//     }
//   })
// })

// xotira1024.addEventListener('click', () => {
//   xotira512.classList.remove('pamet-btn-act');
//   xotira256.classList.remove('pamet-btn-act');
//   xotira1024.classList.add('pamet-btn-act');
//   titxot.textContent = '/1tb';

//   macObject[0].med.forEach((r8) => {
//     if (512 == r8.xotira) {
//       price1.innerHTML = `${r8.price} so'm`
//       price2.innerHTML = `${r8.skidca} so'm`
//     }
//   })
// })

// function ram8Fun() {
//   ram8.classList.add('ram-btn-act');
//   ram16.classList.remove('ram-btn-act');
//   xotira1024.classList.remove('d-block');
//   titram.textContent = '/8';

//   macObject[0].med.forEach((r8) => {
//     if (xotira256.classList.contains('pamet-btn-act') && 256 == r8.xotira) {
//       price1.innerHTML = `${r8.price} so'm`
//       price2.innerHTML = `${r8.skidca} so'm`
//     }
//     if (xotira512.classList.contains('pamet-btn-act') && 512 == r8.xotira) {
//       price1.innerHTML = `${r8.price} so'm`
//       price2.innerHTML = `${r8.skidca} so'm`
//     }

//     xotira256.addEventListener('click', () => {
//       if (256 == r8.xotira) {
//         price1.innerHTML = `${r8.price} so'm`
//         price2.innerHTML = `${r8.skidca} so'm`
//       }
//     })
//     xotira512.addEventListener('click', () => {
//       if (512 == r8.xotira) {
//         price1.innerHTML = `${r8.price} so'm`
//         price2.innerHTML = `${r8.skidca} so'm`
//       }
//     })
//   })
// }

// function ram16Fun() {
//   ram8.classList.remove('ram-btn-act');
//   ram16.classList.add('ram-btn-act');
//   xotira1024.classList.add('d-block');
//   titram.textContent = '/16';

//   macObject[1].med.forEach((r16) => {
//     if (xotira256.classList.contains('pamet-btn-act') && 256 == r16.xotira) {
//       price1.innerHTML = `${r16.price} so'm`
//       price2.innerHTML = `${r16.skidca} so'm`
//     }
//     if (xotira512.classList.contains('pamet-btn-act') && 512 == r16.xotira) {
//       price1.innerHTML = `${r16.price} so'm`
//       price2.innerHTML = `${r16.skidca} so'm`
//     }

//     xotira256.addEventListener('click', () => {
//       if (256 == r16.xotira) {
//         price1.innerHTML = `${r16.price} so'm`
//         price2.innerHTML = `${r16.skidca} so'm`
//       }
//     })
//     xotira512.addEventListener('click', () => {
//       if (512 == r16.xotira) {
//         price1.innerHTML = `${r16.price} so'm`
//         price2.innerHTML = `${r16.skidca} so'm`
//       }
//     })
//     xotira1024.addEventListener('click', () => {
//       if (1024 == r16.xotira) {
//         price1.innerHTML = `${r16.price} so'm`
//         price2.innerHTML = `${r16.skidca} so'm`
//       }
//     })
//   })
// }


//// COLORS BTN PARTS =============

let goldBtn = document.querySelector('#goldBtn')
let silverBtn = document.querySelector('#silverBtn')
let spaceGrayBtn = document.querySelector('#spaceGray')

let sliderList = document.querySelector('.lslid__list');
let slidImgList = document.querySelector('.left__list');
let sCou = 0
let sCou1 = 0
let sCou2 = 0
let sCou3 = 0

goldBtn.addEventListener('click', colorGold);
silverBtn.addEventListener('click', colorSilver);
spaceGrayBtn.addEventListener('click', colorspaceGray);

sliderList.innerHTML = ""
slidImgList.innerHTML = ""

colorsObject[0].gold.forEach((urls) => {
  sCou++
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  li1.className = "left__item";
  li2.className = "lslid__item";
  li1.innerHTML = `
      <div class="left__img-box">
        <img class="left__mac-img" src="${urls}"
          alt="img">
      </div>`;
  li2.innerHTML = `
      <div class="lslid__img" onclick="slidFun(${sCou})">
      <img class="slider--imgs" src="${urls}"
      alt="img">
      </div>`;
  slidImgList.appendChild(li1)
  sliderList.appendChild(li2)
})

function colorGold() {
  sCou1 = 0
  goldBtn.classList.add('color-btn-act');
  silverBtn.classList.remove('color-btn-act');
  spaceGrayBtn.classList.remove('color-btn-act');
  titCol.textContent = 'Gold';

  sliderList.innerHTML = ""
  slidImgList.innerHTML = ""

  colorsObject.forEach((urls) => {
    if (urls.name == "Gold") {
      urls.gold.forEach((gol) => {
        sCou1++
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.className = "left__item";
        li2.className = "lslid__item";

        li1.innerHTML = `
            <div class="left__img-box">
              <img class="left__mac-img" src="${gol}"
                alt="img">
            </div>`;

        li2.innerHTML = `
            <div class="lslid__img" onclick="slidFun(${sCou1})">
            <img class="slider--imgs" src="${gol}"
            alt="img">
            </div>`;

        slidImgList.appendChild(li1)
        sliderList.appendChild(li2)
      })
    }
  })
}
function colorSilver() {
  sCou2 = 0
  goldBtn.classList.remove('color-btn-act');
  silverBtn.classList.add('color-btn-act');
  spaceGrayBtn.classList.remove('color-btn-act');
  titCol.textContent = 'Silver';

  sliderList.innerHTML = ""
  slidImgList.innerHTML = ""

  colorsObject.forEach((urls) => {
    if (urls.name == "Silver") {
      urls.silver.forEach((sil) => {
        sCou2++
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.className = "left__item";
        li2.className = "lslid__item";

        li1.innerHTML = `
        <div class="left__img-box">
          <img class="left__mac-img" src="${sil}"
            alt="img">
        </div>`;

        li2.innerHTML = `
        <div class="lslid__img" onclick="slidFun(${sCou2})">
        <img class="slider--imgs" src="${sil}"
        alt="img">
        </div>`;

        slidImgList.appendChild(li1)
        sliderList.appendChild(li2)
      })
    }
  })
}
function colorspaceGray() {
  sCou3 = 0
  goldBtn.classList.remove('color-btn-act');
  silverBtn.classList.remove('color-btn-act');
  spaceGrayBtn.classList.add('color-btn-act');
  titCol.textContent = 'Space Gray';

  sliderList.innerHTML = ""
  slidImgList.innerHTML = ""

  colorsObject.forEach((col) => {
    console.log(col);

    if (col.name == "Space Gray") {
      col.SpaceGray.forEach((coll) => {
        // let pr = price1.textContent;
        // let nat = eval(pr) + eval(coll.price);
        // price1.textContent = 11
        // console.log(pr);
        sCou3++
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        li1.className = "left__item";
        li2.className = "lslid__item";

        li1.innerHTML = `
              <div class="left__img-box">
                <img class="left__mac-img" src="${coll}"
                  alt="img">
              </div>`;

        li2.innerHTML = `
            <div class="lslid__img" onclick="slidFun(${sCou3})">
            <img class="slider--imgs" src="${coll}"
            alt="img">
            </div>`;

        slidImgList.appendChild(li1)
        sliderList.appendChild(li2)
      })
    }
  })
}

///// ============================


//// SLIDER PART =================

let slidItmes = document.querySelectorAll('.lslid__img');

function slidFun(id) {
  slidItmes.forEach((items, inx) => {
    if (id == 1) {
      items.classList.add('slid-act');
      slidImgList.style.transform = `translateX(0px)`
    }
    if (id == inx + 1) {
      items.classList.add('slid-act');
      slidImgList.style.transform = `translateX(-${530 * id - 530}px)`
    }
    else {
      items.classList.remove('slid-act');
    }
  })
}

///// ============================


// let ram8btn = document.createElement('button')
// let ram16btn = document.createElement('button')

// let xotira256btn = document.createElement('button')
// let xotira512btn = document.createElement('button')
// let xotira1TBbtn = document.createElement('button')

// let colorGoldbtn = document.createElement('button')
// let colorSilverbtn = document.createElement('button')
// let colorSpaceGraybtn = document.createElement('button')

// ram8btn.className = "right__ram-btn";
// ram16btn.className = "right__ram-btn";

// xotira256btn.className = "right__pamet-btn";
// xotira512btn.className = "right__pamet-btn";
// xotira1TBbtn.className = "right__pamet-btn";

// colorGoldbtn.className = "right__color-btn";
// colorSilverbtn.className = "right__color-btn";
// colorSpaceGraybtn.className = "right__color-btn";



// RAM XOTIRA BTNS PART =====================

let ramBox = document.querySelector('.right__ram-box');
let xotiraBox = document.querySelector('.right__pamet-box');
let idCount = 0

macObject.forEach((obj) => {
  idCount++
  let rambtn = document.createElement('button');
  rambtn.className = "right__ram-btn";
  rambtn.id = `${idCount}`;
  rambtn.textContent = `${obj.ram}GB`
  ramBox.appendChild(rambtn)
})

let rambtns = document.querySelectorAll('.right__ram-btn');

rambtns.forEach((btns, inx) => {
  btns.addEventListener('click', () => {
    let xotiraTitle = document.createElement('h4');
    xotiraTitle.className = "btns__title";
    xotiraTitle.textContent = "Xotira Hajmi";

    if (btns.id == inx + 1) {
      xotiraBox.innerHTML = "";
      xotiraBox.appendChild(xotiraTitle);

      macObject.forEach((obj) => {
        if (obj.ram + "GB" == btns.innerHTML) {
          obj.med.forEach((xbtn) => {
            titram.textContent = `/${obj.ram}`;
            // titCol.textContent = `/${obj.name}`;

            let xotirabtn = document.createElement('button');
            xotirabtn.className = "right__pamet-btn";
            xotirabtn.textContent = `${xbtn.xotira} GB`
            xotiraBox.appendChild(xotirabtn)
          })
          let xotiraBtnAct = document.querySelectorAll('.right__pamet-btn');
          xotiraBtnAct[0].classList.add('pamet-btn-act');
          titxot.textContent = `/${obj.xotira}`;

        }
      })
    }

    rambtns.forEach((actBtn) => {
      actBtn.classList.remove('ram-btn-act');
      actBtn.classList.remove('actRam');
    })
    btns.classList.add('ram-btn-act');
    btns.classList.add('actRam');

    let xotiraBtns = document.querySelectorAll('.right__pamet-btn');

    xotiraBtns.forEach((xBtns) => {
      xBtns.addEventListener('click', () => {
        xotiraBtns.forEach((xBtn) => {
          xBtn.classList.remove('actXotira');
          xBtn.classList.remove('pamet-btn-act');
        })
        xBtns.classList.add('actXotira');
        xBtns.classList.add('pamet-btn-act');
      })
    })

    xotiraBtns.forEach((xBtns) => {
      if (xBtns.classList.contains('pamet-btn-act')) {
        console.log(xBtns);
        xBtns.classList.add('pamet-btn-act');
      }
    })

  })
})

rambtns.forEach((bb) => {
  rambtns.forEach((actBtn) => {
    actBtn.classList.remove('ram-btn-act');
  })
  rambtns[0].classList.add('ram-btn-act');
  rambtns[0].classList.add('actRam');
})

macObject.forEach((obj) => {
  if (obj.ram == 8) {
    obj.med.forEach((xbtn) => {
      let xotirabtn = document.createElement('button');
      xotirabtn.className = "right__pamet-btn";
      xotirabtn.textContent = `${xbtn.xotira} GB`
      xotiraBox.appendChild(xotirabtn)
    })
  }
})

let xotiraBtns = document.querySelectorAll('.right__pamet-btn');

xotiraBtns.forEach((xBtns) => {
  xBtns.addEventListener('click', () => {
    xotiraBtns.forEach((xBtn) => {
      xBtn.classList.remove('actXotira');
      xBtn.classList.remove('pamet-btn-act');
    })
    xBtns.classList.add('actXotira');
    xBtns.classList.add('pamet-btn-act');
  })
})

xotiraBtns.forEach((xBtns) => {
  xotiraBtns.forEach((xBtn) => {
    xBtn.classList.remove('pamet-btn-act');
  })
  xotiraBtns[0].classList.add('pamet-btn-act');
  xotiraBtns[0].classList.add('actXotira');
})

/// ======================================
