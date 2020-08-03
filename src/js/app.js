// slider
$(document).ready(function(){
    $('.carusel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        nextArrow: '<button type="button" class="slick-next"><img src="icon/right-solid.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="icon/left-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows: false
                }
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.catalog').find('div.catalog__cards').removeClass('catalog__cards_active').eq($(this).index()).addClass('catalog__cards_active');
      });
      $('[data-modal="consultantwind"]').on('click', function(){
          $('.overinfo, #consultantwind').fadeIn('slow');
      });
      $('.modalwind__close').on('click', function(){
          $('.overinfo, #consultantwind, #orderwind, #thankswind').fadeOut('slow');
      });
    //   $('.btn-middle').on('click', function(){
    //     $('.overinfo, #orderwind').fadeIn('slow');
    //   });
      $('.btn-middle').each(function(i){
          $(this).on('click', function(){
              $('#orderwind .modalwind__discr').text($('.catalog-item_subtext').eq(i).text());
              $('.overinfo, #orderwind').fadeIn('slow');
            })
      });

// validation form click
      function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                  required: true,
                  minlength: 2
                },
                phone: "required",
                email: {
                  required: true,
                  email: true
                }
            },
            messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!") // #consult-form form, #orderwind form, #consultantwind form
              },
              phone: "Пожалуйста, введите свой телефон",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
            }
        });
      }
      validateForms('#consult-form form');
      validateForms('#orderwind form');
      validateForms('#consultantwind form');
      $('input[name=phone]').mask("+7 (999) 999-99-99");
      // smooth scroll and pageup
      $(window).scroll(function(){
          if ($(this).scrollTop() > 1600){
              $('.upicon').fadeIn();
          } else {
            $('.upicon').fadeOut();
          }
      });
      $("a[href^='#']").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});
});

//catalog

let elemLink = document.querySelectorAll('.catalog-item_link');
let elemBack = document.querySelectorAll('.catalog-item_back');
let itemContents = document.querySelectorAll('.catalog-item__contents');
let itemList = document.querySelectorAll('.catalog-item__list');
let itemWrapper = document.querySelectorAll('.catalog-item__wrapper');

for(let i = 0; i<itemWrapper.length; i++){
    itemWrapper[i].addEventListener('click', ({target}) =>{
        if(target.className == 'catalog-item_link'){
            getToggle(itemContents, itemList, i);
        }
        else if(target.className == 'catalog-item_back'){
            getToggle(itemContents, itemList, i);
        }
    });
}

function getToggle(contents, list, index){
    for(let i = 0; i<contents.length; i++){
        if(index === i){
            contents[i].classList.toggle('catalog-item__contents_active');
        }
    }
    for(let i = 0; i<list.length; i++){
        if(index === i){
            list[i].classList.toggle('catalog-item__list_active');
        }
    }
}


