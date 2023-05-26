document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button');
    var type = document.getElementById('type');
    var task = document.getElementById('task');
  
    button.addEventListener('click', function() {
      var taskText = type.value;
      if (taskText.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = taskText;
        task.appendChild(li);
        type.value = '';
      }
    });
  
    task.addEventListener('click', function(event) {
      var target = event.target;
      if (target.tagName === 'LI') {
        target.classList.toggle('completed');
      }
    });
  });
  