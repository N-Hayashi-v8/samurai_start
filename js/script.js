$(function(){
  const $body = $('body');
  const $btnOpen = $('.hamburger');
  const $btnClose = $('.sp-menu__close');
  const $overlay = $('.sp-menu-overlay');
  const $menu = $('.sp-menu')
  const $header = $('.header');

  function setHeaderHeight(){
    const h = $header.outerHeight();
    document.documentElement.style.setProperty('--header-h', h + 'px');
  }

  setHeaderHeight();
  $(window).on('resize', setHeaderHeight);

  function openMenu(){
    $body.addClass('is-menu-open');
    $btnOpen.attr('aria-expanded', 'true');
    $menu.attr('aria-hidden', 'false');
    $overlay.attr('aria-hidden', 'false');
  }

  function closeMenu(){
    $body.removeClass('is-menu-open');
    $btnOpen.attr('aria-expanded', 'false');
    $menu.attr('aria-hidden', 'true');
    $overlay.attr('aria-hidden','true');
  }

  
  // トグル
  $btnOpen.on('click', function(){
    if($body.hasClass('is-menu-open')){
      closeMenu();
    }else{
      openMenu();
    }
  });


  // 閉じる
  $btnClose.on('click', function(){
    closeMenu();
  });

  $overlay.on('click', function(){
    closeMenu();
  });

  $(document).on('keydown', function(e){
    if(e.key === 'Escape' && $body.hasClass('is-menu-open')){
      closeMenu();
    }
  });

  $('.sp-menu__link').on('click', function(){
    closeMenu();
  });

});