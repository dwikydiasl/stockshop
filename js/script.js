function openNav() {
  document.getElementById("myNav").style.width = "70%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// Header scroll

$(function() {
  var header = $(".header");

  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } 
    else {
      header.removeClass("scrolled");
    }
  });
  
});

//tab gallery
function clickThumbnail(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

//button plus and minus
$(function() {
  $("div.quantity").append('<a class="inc qty-button">+</a><a class="dec qty-button">-</a>');

  $(".qty-button").on("click", function() {

    console.log('clicked');

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
       if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find("input").val(newVal);

  });

});


  //tooltips

  function deliverTo() {
    var x = document.getElementById("tooldeliverTo");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  // toggle password
function showPass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
$('.showPass').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fa-eye-slash fa-eye");
});


// toggle password
function showPass2() {
  var x = document.getElementById("password2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
$('.showPass2').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fa-eye-slash fa-eye");
});

// toggle password
function showPass3() {
  var x = document.getElementById("password3");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
$('.showPass2').click(function() {
    $('#display_advance').toggle('1000');
    $("i", this).toggleClass("fa-eye-slash fa-eye");
});