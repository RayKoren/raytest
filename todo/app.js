var item = document.querySelector('#item');
  var  form = document.querySelector('form');
  var  list = document.querySelector('#list');
function todo() {
    form.addEventListener('submit', function(event) {
      list.innerHTML += '<li>' + item.value + '</li>';
        event.preventDefault();
    }, false);}
    // list.addEventListener('click', function(event) {
    //         var target = event.target,
    //             classList = target.classList;
    //         if (classList.contains('done') && classList.contains('checked')) {
    //             target.parentNode.removeChild(target);
    //         } else {
    //             if (classList.contains('checked')) {
    //                 classList.add('done');
    //             } else {
    //                 classList.add('checked');
    //             }
    //         }
    //         event.preventDefault();
    //
    //     }, false);}
