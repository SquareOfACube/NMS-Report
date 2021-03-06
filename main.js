function init(){
  'use strict';
  var arr = document.querySelectorAll('.inputContainer');
  for (var i = 0; i < arr.length; i++)
    addAddButton(arr[i]);
  arr = document.querySelectorAll('.detailContainer');
  for (var i = 0; i < arr.length; i++)
    addAddButton(arr[i]);
  var button = document.getElementById('genMD');
  button.addEventListener('click', function(){showModal(generateMarkdown());});
  button = document.getElementById('genJSON');
  button.addEventListener('click', function(){showModal(generateJSON());});
  button = document.getElementById('importJSON');
  button.addEventListener('click', function(){importJSON();});
}
function addInput(parent){
  'use strict';
  var newEl = document.createElement('p');
  newEl.classList.add('input');
  newEl.innerHTML = '<input type="text">';
  addRemoveButton(newEl);
  parent.appendChild(newEl);
}
function addDetail(parent){
  'use strict';
  var newEl = document.createElement('p');
  newEl.innerHTML = 'Name: <input type="text" class="name"><br>Image URL <em>(Optional)</em>: <input type="text" class="image"><br>Bullets: ';
  newEl.classList.add('detail');
  newEl.classList.add('inputContainer');
  addAddButton(newEl);
  addRemoveButton(newEl);
  addInput(newEl);
  parent.appendChild(newEl);
}
function removeInput(element){
  element.parentNode.removeChild(element);
}
function addAddButton(parent){
  var button = document.createElement('button')
  button.type = 'button';
  button.innerHTML = '<img src="ic_add_black_24px.svg" alt="ADD">';
  button.classList.add('add');
  if (parent.classList.contains('inputContainer'))
    button.addEventListener('click', function(){addInput(this.parentNode);});
  else
    button.addEventListener('click', function(){addDetail(this.parentNode);});

  parent.appendChild(button);
}
function addRemoveButton(parent){
  var button = document.createElement('button')
  button.type = 'button';
  button.innerHTML = '<img src="ic_delete_black_24px.svg" alt="REMOVE">';
  button.classList.add('remove');
  button.addEventListener('click', function(){removeInput(this.parentNode);});
  parent.appendChild(button);
}
function generateJSON(){
  var obj = {};
  obj._v = '1.0'; // JSON Version, in case structure changes later
  obj.beacon = document.getElementById('beacon').value;
  obj.planet = document.getElementById('planetName').value;
  obj.star = document.getElementById('starName').value;
  obj.region = document.getElementById('region').value;
  obj.discoverer = document.getElementById('discoverer').value;
  obj.atmosphere = [];
  arr = document.querySelectorAll('#atmosphere input');
  for (var i = 0; i < arr.length; i++)
    obj.atmosphere[i] = arr[i].value;
  obj.general = {};
  obj.general.space = [];
  var arr = document.querySelectorAll('#spaceFeatures input');
  for (var i = 0; i < arr.length; i++)
    obj.general.space[i] = arr[i].value;
  obj.general.ground = [];
  arr = document.querySelectorAll('#ground input');
  for (var i = 0; i < arr.length; i++)
    obj.general.ground[i] = arr[i].value;
  obj.general.aquatic = [];
  arr = document.querySelectorAll('#water input');
  for (var i = 0; i < arr.length; i++)
    obj.general.aquatic[i] = arr[i].value;
  obj.plants = {};
  obj.plants.ground = [];
  var arr = document.querySelectorAll('#groundPlants .detail');
  for (var i = 0; i < arr.length; i++){
    obj.plants.ground[i] = {};
    obj.plants.ground[i].name = arr[i].querySelector('.name').value;
    obj.plants.ground[i].image = arr[i].querySelector('.image').value;
    obj.plants.ground[i].general = [];
    var bullets = arr[i].querySelectorAll('.input input');
    for (var j = 0; j < bullets.length; j++)
      obj.plants.ground[i].general[j] = bullets[j].value;
  }
  obj.plants.tree = [];
  var arr = document.querySelectorAll('#trees .detail');
  for (var i = 0; i < arr.length; i++){
    obj.plants.tree[i] = {};
    obj.plants.tree[i].name = arr[i].querySelector('.name').value;
    obj.plants.tree[i].image = arr[i].querySelector('.image').value;
    obj.plants.tree[i].general = [];
    var bullets = arr[i].querySelectorAll('.input input');
    for (var j = 0; j < bullets.length; j++)
      obj.plants.tree[i].general[j] = bullets[j].value;
  }
  obj.plants.aquatic = [];
  var arr = document.querySelectorAll('#waterPlants .detail');
  for (var i = 0; i < arr.length; i++){
    obj.plants.aquatic[i] = {};
    obj.plants.aquatic[i].name = arr[i].querySelector('.name').value;
    obj.plants.aquatic[i].image = arr[i].querySelector('.image').value;
    obj.plants.aquatic[i].general = [];
    var bullets = arr[i].querySelectorAll('.input input');
    for (var j = 0; j < bullets.length; j++)
      obj.plants.aquatic[i].general[j] = bullets[j].value;
  }
  obj.animals = {};
  obj.animals.ground = [];
  var arr = document.querySelectorAll('#groundAnimals .detail');
  for (var i = 0; i < arr.length; i++){
    obj.animals.ground[i] = {};
    obj.animals.ground[i].name = arr[i].querySelector('.name').value;
    obj.animals.ground[i].image = arr[i].querySelector('.image').value;
    obj.animals.ground[i].general = [];
    var bullets = arr[i].querySelectorAll('.input input');
    for (var j = 0; j < bullets.length; j++)
      obj.animals.ground[i].general[j] = bullets[j].value;
  }
  obj.animals.aquatic = [];
  var arr = document.querySelectorAll('#waterAnimals .detail');
  for (var i = 0; i < arr.length; i++){
    obj.animals.aquatic[i] = {};
    obj.animals.aquatic[i].name = arr[i].querySelector('.name').value;
    obj.animals.aquatic[i].image = arr[i].querySelector('.image').value;
    obj.animals.aquatic[i].general = [];
    var bullets = arr[i].querySelectorAll('.input input');
    for (var j = 0; j < bullets.length; j++)
      obj.animals.aquatic[i].general[j] = bullets[j].value;
  }
  return JSON.stringify(obj);
}
function generateMarkdown(){
  var md = "";
  if (document.getElementById('beacon').value !== ""){
    md += '#Beacon Number: ' + document.getElementById('beacon').value + '<br>';
  }
  if (document.getElementById('planetName').value !== ""){
    md += '#Planet Name: ' + document.getElementById('planetName').value + '<br>';
  }
  if (document.getElementById('starName').value !== ""){
    md += '#Star Name: ' + document.getElementById('starName').value + '<br>';
  }
  if (document.getElementById('region').value !== ""){
    md += '#Region: ' + document.getElementById('region').value + '<br>';
  }
  if (document.getElementById('discoverer').value !== ""){
    md += '#Discoverer: ' + document.getElementById('discoverer').value + '<br>';
  }
  if (md !== ""){
    md += '<br><br>';
  }
  var arr = document.querySelectorAll('#spaceFeatures input');
  if (arr.length !== 0){
    md += '##Space Features: <br><br>';
    for (var i = 0; i < arr.length; i++){
      md += '* '+ arr[i].value +'<br>';
    }
    md += '<br><br>';
  }
  //if any of the subsections of "planet features" have data, then add the features heading
  if (document.querySelector('#atmosphere input') ||
      document.querySelector('#ground input') ||
      document.querySelector('#groundPlants .detail') ||
      document.querySelector('#trees .detail') ||
      document.querySelector('#groundAnimals .detail') ||
      document.querySelector('#water input') ||
      document.querySelector('#waterPlants .detail') ||
      document.querySelector('#fish .detail')){
    md += '##Planet Features: <br><br>'
  }
  var arr = document.querySelectorAll('#atmosphere input');
  if (arr.length !== 0){
    md += '###Atmosphere: <br><br>';
    for (var i = 0; i < arr.length; i++){
      md += '* '+ arr[i].value +'<br>';
    }
    md += '<br>'
  }
  if (document.querySelector('#ground input') ||
      document.querySelector('#groundPlants .detail') ||
      document.querySelector('#trees .detail') ||
      document.querySelector('#groundAnimals .detail')){
    md += '###Ground:';
  }
  var arr = document.querySelectorAll('#ground input');
  if (arr.length !== 0){
    md += '<br>###General Description: <br><br>'
    for (var i = 0; i < arr.length; i++){
      md += '* '+ arr[i].value +'<br>';
    }
  }
  var arr = document.querySelectorAll('#groundPlants .detail');
  if(arr.length !== 0){
    md += '<br>####Plants: <br><br>';
    for (var i = 0; i < arr.length; i++){
      if (arr[i].querySelector('.image').value)
        md += '**[' + arr[i].querySelector('.name').value + '](' + arr[i].querySelector('.image').value + ')**';
      else
        md += '**' + arr[i].querySelector('.name').value + '**';
      md += '<br><br>';
      var bullets = arr[i].querySelectorAll('.input input');
      for (var j = 0; j < bullets.length; j++){
        md += '* '+ bullets[j].value +'<br><br>';
      }
    }
  }
  var arr = document.querySelectorAll('#trees .detail');
  if (arr.length !== 0){
    md += '<br>####Trees: <br><br>';
    for (var i = 0; i < arr.length; i++){
      if (arr[i].querySelector('.image').value)
        md += '**[' + arr[i].querySelector('.name').value + '](' + arr[i].querySelector('.image').value + ')**';
      else
        md += '**' + arr[i].querySelector('.name').value + '**';
      md += '<br><br>';
      var bullets = arr[i].querySelectorAll('.input input');
      for (var j = 0; j < bullets.length; j++){
        md += '* '+ bullets[j].value +'<br><br>';
      }
    }
  }
  var arr = document.querySelectorAll('#groundAnimals .detail');
  if (arr.length !== 0){
    md += '<br>####Ground Creatures: <br><br>';
    for (var i = 0; i < arr.length; i++){
      if (arr[i].querySelector('.image').value)
        md += '**[' + arr[i].querySelector('.name').value + '](' + arr[i].querySelector('.image').value + ')**';
      else
          md += '**' + arr[i].querySelector('.name').value + '**';
      md += '<br><br>';
      var bullets = arr[i].querySelectorAll('.input input');
      for (var j = 0; j < bullets.length; j++){
        md += '* '+ bullets[j].value +'<br><br>';
      }
    }
  }
  if (document.querySelector('#ground input') ||
      document.querySelector('#groundPlants .detail') ||
      document.querySelector('#trees .detail') ||
      document.querySelector('#groundAnimals .detail')){
    md += '<br>';
  }
  if (document.querySelector('#water input') ||
      document.querySelector('#waterPlants .detail') ||
      document.querySelector('#fish .detail')){
    md += '###Water:';
  }
  var arr = document.querySelectorAll('#water input');
  if (arr.length !== 0){
    md += '<br>####General Information: <br><br>';
    for (var i = 0; i < arr.length; i++){
      md += '* '+ arr[i].value +'<br>';
    }
  }
  var arr = document.querySelectorAll('#waterPlants .detail');
  if (arr.length !== 0){
    md += '<br>####Plants: <br><br>';
    for (var i = 0; i < arr.length; i++){
      if (arr[i].querySelector('.image').value)
        md += '**[' + arr[i].querySelector('.name').value + '](' + arr[i].querySelector('.image').value + ')**';
      else
        md += '**' + arr[i].querySelector('.name').value + '**';
      md += '<br><br>';
      var bullets = arr[i].querySelectorAll('.input input');
      for (var j = 0; j < bullets.length; j++){
        md += '* '+ bullets[j].value +'<br><br>';
      }
    }
  }
  var arr = document.querySelectorAll('#fish .detail');
  if (arr.length !== 0){
    md += '<br>####Fish: <br><br>';
    for (var i = 0; i < arr.length; i++){
      if (arr[i].querySelector('.image').value)
        md += '**[' + arr[i].querySelector('.name').value + '](' + arr[i].querySelector('.image').value + ')**';
      else
        md += '**' + arr[i].querySelector('.name').value + '**';
      md += '<br><br>';
      var bullets = arr[i].querySelectorAll('.input input');
      for (var j = 0; j < bullets.length; j++){
        md += '* '+ bullets[j].value +'<br><br>';
      }
    }
  }
  return md;
}
function hideModal(){
  'use strict';
  var oldDetail = document.querySelector('#modalContainer');
  if (oldDetail){
    oldDetail.parentNode.removeChild(oldDetail);
  }
}
function showModal(text){
  'use strict';
  hideModal();

  var close = document.createElement('button');
  close.innerHTML = 'Close';
  close.type = 'button';
  close.id = 'close';
  close.addEventListener('click', hideModal);
  var quote = document.createElement('blockquote');
  quote.innerHTML = text;
  var help = document.createElement('p');
  help.innerHTML = 'Something wrong? Submit an issue on <a href="https://github.com/SecretOnline/NMS-Report">GitHub</a>'
  var modal = document.createElement('div');
  modal.id = 'modal';
  modal.appendChild(close);
  modal.appendChild(help);
  modal.appendChild(quote);
  var modalContainer = document.createElement('div');
  modalContainer.id = 'modalContainer';
  modalContainer.appendChild(modal);
  document.querySelector('body').appendChild(modalContainer);
}

function importJSON(){
  showModal("Unfortunately, JSON importing is not yet available. It should be here Soon<sup>tm</sup>, just like No Man's Sky itself... :(");
}

window.addEventListener('load', init);
