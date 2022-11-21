let burgerslist = document.querySelector('.burgers');
let orders = document.querySelector('.orderdburgers');
let total = document.getElementById('total');
let subtotal = document.getElementById('subtotal');
let taxtotal = document.getElementById('tax');
let itemnumber = document.getElementById('itemnumber');
let burgers = [{
    name: "ข้าวขาหมู",
    image: "https://www.easycookingmenu.com/media/k2/items/cache/51bfc9a1b080d1f314d0d70e4d86c1a1_XL.jpg",
    price: 70
},
{
    name: "ข้าวหมูแดง",
    image: "http://s2.thousandreason.com/thimgs/202108/04/12/1628052488991.jpg",
    price: 70
},
{
    name: "ข้าวหมูกรอบ",
    image: "https://sls-prod.api-onscene.com/partner_files/trueidintrend/4567/111396344.jpg",
    price: 70
},
{
    name: "ข้าวหน้าเป็ด",
    image: "https://ungsriwong.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/05/03114443/TanPedYang_04.jpg",
    price: 70
},
{
    name: "None",
    image: "",
    price: 0
},
{
    name: "None",
    image: "",
    price: 0
},
{
    name: "None",
    image: "",
    price: 0
},
{
    name: "None",
    image: "",
    price: 0
}
]
burgers.forEach((element, index) => {
    let newelement = ``;
    newelement = `
                <div class="burger">
                    <div class="image"><img
                            src="${element.image}"
                            alt="">
                    </div>
                    <div class="title">${element.name}</div>
                    <div class="bottom">
                        <div class="price">$${element.price}</div>
                        <div class="cart"><i class="fa-solid fa-cart-plus" id="${index}" onclick="ordernow(this.id)"></i></div>
                    </div>
                </div>
    `
    burgerslist.innerHTML += newelement;
})
let orderedburger = [];
function ordernow(index) {
    orderedburger.push(burgers[index]);
    orders.innerHTML = "";
    orderedburger.forEach((element, index) => {
        let neworder = ``;
        neworder = `
        <div class="burger">
        <div class="icon"><img
                src="${orderedburger[index].image}"
                alt=""></div>
        <div class="title">
            <h1>${orderedburger[index].name}</h1>
            <p>$${orderedburger[index].price}</p>
        </div>
        <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
    </div>
                    `
    orders.innerHTML+=neworder;
    })
    cashcalc();
}
function removeitem(index){
    orderedburger.splice(index,1);
    orders.innerHTML = "";
    orderedburger.forEach((element, index) => {
        let neworder = ``;
        neworder = `
        <div class="burger">
        <div class="icon"><img
                src="${orderedburger[index].image}"
                alt=""></div>
        <div class="title">
            <h1>${orderedburger[index].name}</h1>
            <p>$${orderedburger[index].price}</p>
        </div>
        <div class="delete"><i class="fa-regular fa-circle-xmark" id="${index}" onclick="removeitem(this.id)"></i></div>
    </div>
                    `
    orders.innerHTML+=neworder;
    })
    cashcalc();
}
function cashcalc(){
    let totalcash =0;
    orderedburger.forEach(element=>{
        totalcash = totalcash + element.price;
    });
    subtotal.innerHTML = `$`+totalcash;
    taxtotal.innerHTML = `$`+(totalcash*10/100);
    total.innerHTML =`$` + (totalcash+(totalcash*10/100));
    itemnumber.innerHTML = orderedburger.length;
}
