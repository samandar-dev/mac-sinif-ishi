let price1 = document.querySelector('#price1');
let price2 = document.querySelector('#price2');

let countINput = document.querySelector('#countINput');
let remCount = document.querySelector('#remCount');
let addCount = document.querySelector('#addCount');

let titram = document.querySelector('#titram');
let titxot = document.querySelector('#titxot');
let titCol = document.querySelector('#titCol');

titram.textContent = '/8';
titxot.textContent = '/256';
titCol.textContent = 'Gold';

let p1, w, p2, ww;
p1 = price1.innerHTML.split(' ')
p2 = price2.innerHTML.split(' ')
w = p1[0]
ww = p2[0]

remCount.addEventListener('click', remCountFun);
addCount.addEventListener('click', addCountFun);
countINput.value = 1


//// COLORS BTN PARTS =============

let goldBtn = document.querySelector('#goldBtn')
let silverBtn = document.querySelector('#silverBtn')
let spaceGrayBtn = document.querySelector('#spaceGray')

let sliderList = document.querySelector('.lslid__list');
let slidImgList = document.querySelector('.left__list');
let modalLIst1 = document.querySelector('.modal__top_list');
let modalLIst2 = document.querySelector('.modal__bottom_list');
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
  let modLi = document.createElement('li');
  let modLi2 = document.createElement('li');
  li1.className = "left__item";
  li2.className = "lslid__item";
  modLi.className = "left__item";
  modLi2.className = "lslid__item";

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

  modLi.innerHTML = `
      <div class="modal__img-box">
        <img class="left__mac-img" src="${urls}"
          alt="img">
      </div>`;

  modLi2.innerHTML = `
      <div class="lslid__img" onclick="slidFun(${sCou})">
      <img class="slider--imgs" src="${urls}"
      alt="img">
      </div>`;

  slidImgList.appendChild(li1)
  sliderList.appendChild(li2)
  modalLIst1.appendChild(modLi)
  modalLIst2.appendChild(modLi2)
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
        let modLi = document.createElement('li');
        let modLi2 = document.createElement('li');
        li1.className = "left__item";
        li2.className = "lslid__item";
        modLi.className = "left__item";
        modLi2.className = "lslid__item";

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

        modLi.innerHTML = `
            <div class="modal__img-box">
              <img class="left__mac-img" src="${gol}"
                alt="img">
            </div>`;

        modLi2.innerHTML = `
            <div class="lslid__img" onclick="slidFun(${sCou1})">
            <img class="slider--imgs" src="${gol}"
            alt="img">
            </div>`;

        slidImgList.appendChild(li1)
        sliderList.appendChild(li2)
        modalLIst1.appendChild(modLi)
        modalLIst2.appendChild(modLi2)
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
        let modLi = document.createElement('li');
        let modLi2 = document.createElement('li');
        li1.className = "left__item";
        li2.className = "lslid__item";
        modLi.className = "left__item";
        modLi2.className = "lslid__item";

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

        modLi.innerHTML = `
        <div class="modal__img-box">
          <img class="left__mac-img" src="${sil}"
            alt="img">
        </div>`;

        modLi2.innerHTML = `
        <div class="lslid__img" onclick="slidFun(${sCou2})">
        <img class="slider--imgs" src="${sil}"
        alt="img">
        </div>`;

        slidImgList.appendChild(li1)
        sliderList.appendChild(li2)
        modalLIst1.appendChild(modLi)
        modalLIst2.appendChild(modLi)
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
        sCou3++
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');
        let modLi = document.createElement('li');
        let modLi2 = document.createElement('li');
        li1.className = "left__item";
        li2.className = "left__item";
        modLi.className = "left__item";
        modLi2.className = "lslid__item";

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

        modLi.innerHTML = `
          <div class="modal__img-box">
            <img class="left__mac-img" src="${coll}"
             alt="img">
          </div>`;

        modLi2.innerHTML = `
            <div class="lslid__img" onclick="slidFun(${sCou3})">
            <img class="slider--imgs" src="${coll}"
            alt="img">
            </div>`;

        slidImgList.appendChild(li1)
        sliderList.appendChild(li2)
        modalLIst1.appendChild(modLi)
        modalLIst2.appendChild(modLi)
      })
    }
  })
}


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
      modalLIst1.style.transform = `translateX(-${95 * id - 95}vw)`
    }
    else {
      items.classList.remove('slid-act');
    }
  })
}


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
            titxot.textContent = `/256`;
            price1.textContent = `${obj.med[0].price} so'm`;
            price2.textContent = `${obj.med[0].skidca} so'm`;

            let xotirabtn = document.createElement('button');
            xotirabtn.className = "right__pamet-btn";
            xotirabtn.textContent = `${xbtn.xotira} GB`
            xotiraBox.appendChild(xotirabtn)
            countINput.value = 1
          })

          let xotiraBtnAct = document.querySelectorAll('.right__pamet-btn');
          xotiraBtnAct[0].classList.add('pamet-btn-act');
          xotiraBtnAct.forEach((xotAct) => {
            xotAct.addEventListener('click', () => {
              let a;
              a = xotAct.textContent.split(' ');
              titxot.textContent = `/${a[0]}`;
            })
          })

          xotiraBtnAct.forEach((memory) => {
            memory.addEventListener('click', () => {
              obj.med.forEach((elem) => {
                if (memory.textContent == '256 GB') {
                  price1.textContent = `${obj.med[0].price} so'm`;
                  price2.textContent = `${obj.med[0].skidca} so'm`;
                }
                if (memory.textContent == '512 GB') {
                  price1.textContent = `${obj.med[1].price} so'm`;
                  price2.textContent = `${obj.med[1].skidca} so'm`;
                }
                if (memory.textContent == '1024 GB') {
                  price1.textContent = `${obj.med[2].price} so'm`;
                  price2.textContent = `${obj.med[2].skidca} so'm`;
                }
              })
              p1 = price1.innerHTML.split(' ')
              w = p1[0]
              p2 = price2.innerHTML.split(' ')
              ww = p2[0]
              countINput.value = 1
            })
          })
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

    xotiraBtns.forEach((xotAct) => {
      xotAct.addEventListener('click', () => {
        let a;
        a = xotAct.textContent.split(' ');
        titxot.textContent = `/${a[0]}`;
      })
    })

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

macObject.forEach((el) => {
  xotiraBtns.forEach((memory) => {
    memory.addEventListener('click', () => {
      el.med.forEach((elem) => {
        if (memory.textContent == '256 GB') {
          price1.textContent = `12497000 so'm`;
          price2.textContent = `14621000 so'm`;
        }
        if (memory.textContent == '512 GB') {
          price1.textContent = `15066000 so'm`;
          price2.textContent = `17627500 so'm`;
        }
      })
      p1 = price1.innerHTML.split(' ')
      w = p1[0]
      p2 = price2.innerHTML.split(' ')
      ww = p2[0]
      countINput.value = 1
    })
  })
})

function addCountFun() {
  let i = countINput.value
  let inat = eval(i) + eval(1)
  countINput.value = inat

  let p1, p2, pri1, nat1, pri2, nat2;

  p1 = price1.innerHTML.split(' ')
  p2 = price2.innerHTML.split(' ')
  pri1 = p1[0]
  pri2 = p2[0]
  nat1 = eval(pri1) + eval(w) + ` so'm`;
  nat2 = eval(pri2) + eval(ww) + ` so'm`;
  price1.innerHTML = nat1
  price2.innerHTML = nat2
}

function remCountFun() {
  let i = countINput.value
  let inat = eval(i) - eval(1)

  let p1, p2, pri1, nat1, pri2, nat2;

  if (inat >= 1) {
    countINput.value = inat
    p1 = price1.innerHTML.split(' ')
    p2 = price2.innerHTML.split(' ')
    pri1 = p1[0]
    pri2 = p2[0]
    nat1 = eval(pri1) - eval(w) + ` so'm`;
    nat2 = eval(pri2) - eval(ww) + ` so'm`;
    price1.innerHTML = nat1
    price2.innerHTML = nat2
  }
}

let modalBtn = document.querySelector('.left__modalBtn');
let modalRemBTn = document.querySelector('.mdal__btn');
let modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
  modal.classList.add('d-block');
})
modalRemBTn.addEventListener('click', () => {
  modal.classList.remove('d-block');
})


let slidBtnLeft = document.querySelector('.slid__btn-left');
let slidBtnRight = document.querySelector('.slid__btn-right');
let sliList = document.querySelector('.slid__list');
let slidCount = 1


slidBtnRight.addEventListener('click', slidRight)
slidBtnLeft.addEventListener('click', slidLeft)

function slidRight() {
  slidCount++
  if (slidCount <= 8) {
    sliList.style.transform = `translateX(-${380 * slidCount - 380}px)`
    slidBtnLeft.classList.add('d-block')
  }
  if (slidCount == 8) {
    slidBtnRight.classList.add('d-none')
  }
}

function slidLeft() {
  slidCount--
  if (slidCount >= 1) {
    sliList.style.transform = `translateX(-${380 * slidCount - 380}px)`
    slidBtnRight.classList.remove('d-none')
  }
  if (slidCount == 1) {
    slidBtnLeft.classList.remove('d-block')
  }
}

let desLeftBtn = document.querySelector('.desc__left-btn');
let desRightBtn = document.querySelector('.desc__right-btn');
let descText1 = document.querySelector('#desc__text1');
let descText2 = document.querySelector('#desc__text2');
descText2.classList.add('d-none');

desRightBtn.addEventListener('click', () => {
  descText1.classList.add('d-none');
  descText2.classList.remove('d-none');
  desRightBtn.classList.add('text-act');
  desLeftBtn.classList.remove('text-act');
})

desLeftBtn.addEventListener('click', () => {
  descText1.classList.remove('d-none');
  descText2.classList.add('d-none');
  desLeftBtn.classList.add('text-act');
  desRightBtn.classList.remove('text-act');
})