// FLIP INTERACTION
function flip(e) { e.currentTarget.classList.toggle('flipped'); };


// LABEL INTERACTION
const input = document.getElementsByTagName('input');

function movePlaceholder(element, direction) {
  let label = element.parentElement.previousElementSibling;

  if (direction == "forwards") {
    element.placeholder = "";
    label.classList.add("test");
  }

  if (direction == "backwards") {
    element.placeholder = label.innerHTML;
    label.classList.remove("test");
  }
}

for (let i = 0; i < input.length; i++) {
  input[i].onfocus = function(e) {
    movePlaceholder(e.currentTarget, "forwards");
  };

  input[i].onblur = function(e) {
    movePlaceholder(e.currentTarget, "backwards");
  }
}


//BOOKMARK INTERACTION
const icons = document.getElementsByClassName('icon');
const notification = document.getElementsByClassName('notification')[0];
var timer = 3; // seconds


function toggleNotification() {
  notification.classList.add('active');

  setTimeout(function() {
    notification.classList.remove('active');
  }, timer*1000);
}

for (let i = 0; i < icons.length; i++) {
  let icon = icons[i];

  icon.onclick = function(e) {
    e.stopPropagation();
    if (icon.classList.contains('fa-bookmark-o')) {
      icon.className = 'fa fa-bookmark fa-2x';
      toggleNotification();
    } else if (icon.classList.contains('fa-bookmark')) {
      icon.className = 'fa fa-bookmark-o fa-2x';
    }
  };
}


