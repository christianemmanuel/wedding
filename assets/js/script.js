function autoHeight() {
  $winHeight = window.innerHeight;
  
  var autoHeight = document.querySelectorAll('.auto_height');

  if($winHeight > 520){
    // alert($winHeight)
    for (i = 0; i < autoHeight.length; i++) {
      autoHeight[i].style.minHeight = $winHeight - 1 + "px";
    }
  }
  else{
    for (i = 0; i < autoHeight.length; i++) {
      autoHeight[i].style.minHeight = "520px"
    }
  }
}
autoHeight();

// Window Resize
window.addEventListener('resize', function() {
  autoHeight;
}, true);