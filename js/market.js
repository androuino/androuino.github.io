const products = [
  {id: 1, name: 'Rare Kits', product: [
    {id: 1, title: 'Item 1', price: 450.00, qty: 1, image: '/assets/mini4wd/rarekits/evangelionPurple.jpg'},
    {id: 2, title: 'Item 2', price: 50.00, qty: 1, image: '/assets/mini4wd/rarekits/evangelionBlue.jpg'},
    {id: 3, title: 'Item 3', price: 150.00, qty: 1, image: '/assets/mini4wd/rarekits/evangelionYellow.jpg'},
    {id: 4, title: 'Item 4', price: 250.00, qty: 1, image: '/assets/mini4wd/rarekits/avanteGoldMetallic.jpg'},
    {id: 5, title: 'Item 5', price: 450.00, qty: 1, image: '/assets/mini4wd/rarekits/evangelionPurple.jpg'},
    {id: 6, title: 'Item 6', price: 50.00, qty: 1, image: '/assets/mini4wd/rarekits/evangelionBlue.jpg'},
    {id: 7, title: 'Item 7', price: 150.00, qty: 1, image: '/assets/mini4wd/rarekits/evangelionYellow.jpg'},
    {id: 8, title: 'Item 8', price: 250.00, qty: 1, image: '/assets/mini4wd/rarekits/avanteGoldMetallic.jpg'}
  ]},
  {id: 2, name: 'HG Plate Sets', product: [
    {id: 1, title: 'Item 1', price: 450.00, qty: 1, image: '/assets/mini4wd/hgplatesets/'},
    {id: 2, title: 'Item 2', price: 50.00, qty: 1, image: '/assets/mini4wd/hgplatesets/'},
    {id: 3, title: 'Item 3', price: 150.00, qty: 1, image: '/assets/mini4wd/hgplatesets/'},
    {id: 4, title: 'Item 4', price: 250.00, qty: 1, image: '/assets/mini4wd/hgplatesets/'}
  ]},
  {id: 3, name: 'FRP Plate Sets', product: [
    {id: 1, title: 'Item 1', price: 450.00, qty: 1, image: '/assets/mini4wd/frpplatesets/'},
    {id: 2, title: 'Item 2', price: 50.00, qty: 1, image: '/assets/mini4wd/frpplatesets/'},
    {id: 3, title: 'Item 3', price: 150.00, qty: 1, image: '/assets/mini4wd/frpplatesets/'},
    {id: 4, title: 'Item 4', price: 250.00, qty: 1, image: '/assets/mini4wd/frpplatesets/'}
  ]},
  {id: 4, name: 'Carbon Tires', product: [
    {id: 1, title: 'Item 1', price: 450.00, qty: 1, image: '/assets/mini4wd/carbontires/'},
    {id: 2, title: 'Item 2', price: 50.00, qty: 1, image: '/assets/mini4wd/carbontires/'},
    {id: 3, title: 'Item 3', price: 150.00, qty: 1, image: '/assets/mini4wd/carbontires/'},
    {id: 4, title: 'Item 4', price: 250.00, qty: 1, image: '/assets/mini4wd/carbontires/'}
  ]},
  {id: 5, name: 'Reinforced Tires', product: [
    {id: 1, title: 'Item 1', price: 450.00, qty: 1, image: '/assets/mini4wd/reinforcedtires/'},
    {id: 2, title: 'Item 2', price: 50.00, qty: 1, image: '/assets/mini4wd/reinforcedtires/'},
    {id: 3, title: 'Item 3', price: 150.00, qty: 1, image: '/assets/mini4wd/reinforcedtires/'},
    {id: 4, title: 'Item 4', price: 250.00, qty: 1, image: '/assets/mini4wd/reinforcedtires/'}
  ]},
  {id: 6, name: 'Assorted Carbons', product: [
    {id: 1, title: 'Item 1', price: 450.00, qty: 1, image: '/assets/mini4wd/assortedcarbons/'},
    {id: 2, title: 'Item 2', price: 50.00, qty: 1, image: '/assets/mini4wd/assortedcarbons/'},
    {id: 3, title: 'Item 3', price: 150.00, qty: 1, image: '/assets/mini4wd/assortedcarbons/'},
    {id: 4, title: 'Item 4', price: 250.00, qty: 1, image: '/assets/mini4wd/assortedcarbons/'}
  ]},
];

function formatNumber(n, c, d, t) {
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d === undefined ? '.' : d,
      t = t === undefined ? ',' : t,
      s = n < 0 ? '-' : '',
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
}

Vue.filter('formatCurrency', function(value) {
  return formatNumber(value, 2, '.', ',');
});

Vue.component('shopping-cart', {
  props: ['items'],

  computed: {
    Total: function() {
      var total = 0;
      this.items.forEach(item => {
        /*total += (item.price * item.qty);*/
        total += (item.price * item.qty);
      });
      return total;
    }
  },

  methods: {
    removeItem(index) {
      /*this.items.splice(index, 1)*/
      this.items.product.splice(index, 1);
    }
  }
});

const vm = new Vue({
  el: '#app',

  data: {
    cartItems: [],
    items : products
  },

  methods: {
    addToCart(itemToAdd) {
      var found = false;

      // check if the item was already added to cartItems
      // then add it to the total quantity
      this.cartItems.forEach(item => {
        /*if (items.id === itemToAdd.id) {
          found = true;
          items.qty += itemToAdd.qty;
        }*/
        if (item.id === itemToAdd.id) {
          found = true;
          item.qty += eval(itemToAdd.qty);
        }
      });

      if (found === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      }

      itemToAdd.qty = 1;
    }
  }
});




$("#products > article").on("click", function(){
  $("#products > article").removeClass("active");
  $(this).addClass("active");
  animate();
});

function getActiveArticle(){
  var x = 0;
  $("#products > article").each(function(e){
    if($("#products > article").eq(e).hasClass("active")){
      x = e;
      return false;
    }
  });
  return x;
}

function gofwd(){
  var activeIndex = getActiveArticle();
  var minArticles = 0;
  var maxArticles = $("#products > article").length - 1;
  if(activeIndex >= maxArticles){
    activeIndex = minArticles-1;
  }

  $("#products > article").removeClass("active");
  $("#products > article").eq(activeIndex+1).addClass("active");

  animate();
}

function gobwd(){
  var activeIndex = getActiveArticle();
  var minArticles = 1;
  var maxArticles = $("#products > article").length;

  $("#products > article").removeClass("active");
  $("#products > article").eq(activeIndex-1).addClass("active");

  animate();
}

$(document).ready(function(){
  animate();
});

function animate(){

  var articleIndex = getActiveArticle();
  var totalMargin = 25 * (articleIndex+1) - (25*(articleIndex));

  var articlePosition = Math.floor($("#products > article").eq(articleIndex).offset().left - $("#products").offset().left) - totalMargin;
  var productsHalfWidth = $("#products").width()/2;
  if(articleIndex == 0){
    var halfWidth = 150;
  }else{
    var halfWidth = 100;
  }
  var finalPosition = productsHalfWidth - articlePosition - halfWidth;
  $("#products").animate({
    "left": finalPosition,
  }, {
    duration: 500,
    easing: 'easeOutBack',
  });

}

$(window).on("resize", function(){
  animate();
});

var autoPlay = setInterval(function(){
  gofwd();
}, 3500);

$("#slider").on("mouseenter", function(){
  clearInterval(autoPlay);
});
$("#slider").on("mouseleave", function(){
  autoPlay = setInterval(function(){
    gofwd();
  }, 3500);
});
