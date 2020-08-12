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


// Brand
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btnBrand");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}