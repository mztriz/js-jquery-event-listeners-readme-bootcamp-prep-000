function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
    return
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty')
    return
  })
}

function pressIt(){
  $(document).on('keydown', function(key){
    if (key.which == 71){
      alert('g was pressed')
      return
    }
  })
}

$(document).ready(function(){
});
