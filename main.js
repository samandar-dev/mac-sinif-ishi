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

let p1, w;
p1 = price1.innerHTML.split(' ')
w = p1[0]

remCount.addEventListener('click', remCountFun);
addCount.addEventListener('click', addCountFun);
countINput.value = 1


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

let mTopList = document.querySelector('.modal__top_list');


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
  // mTopList.appendChild(li1)
})

console.log(mTopList);

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
      countINput.value = 1
    })
  })
})

function addCountFun() {
  let i = countINput.value
  let inat = eval(i) + eval(1)
  countINput.value = inat

  let p1, pri1, nat1;

  p1 = price1.innerHTML.split(' ')
  pri1 = p1[0]
  nat1 = eval(pri1) + eval(w) + ` so'm`;
  price1.innerHTML = nat1
  console.log(nat1);
}

function remCountFun() {
  let i = countINput.value
  let inat = eval(i) - eval(1)

  let p1, pri1, nat1;
  if (inat >= 1) {
    countINput.value = inat
    p1 = price1.innerHTML.split(' ')
    pri1 = p1[0]
    nat1 = eval(pri1) - eval(w) + ` so'm`;
    price1.innerHTML = nat1
  }
}