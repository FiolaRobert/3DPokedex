$(function(){
	hide((document.getElementsByClassName('loader'))[0]);
	
	displayGrid(allPokemon);
	
	var searchbars=document.getElementsByClassName('search');
	
	for(var i=0;i<searchbars.length;i++){
		searchbars[i].addEventListener('keypress',function(e){
			var keyCode = e.keyCode;
			console.log(e);
    if(keyCode == 13){	
				var str=e.value;
			console.log(str);
				selectPokemon(findPokemon(str));
		}
			else{
				document.body.removeChild(document.getElementById('pokelist'));
				document.body.append(options(e.value));
			}
		});
	}
});

function displayGrid(list){
	
	//console.log(list);
	var grid=document.getElementById('pokemon-list');
	//grab first item id=0
	var firstRow=document.getElementById('0');
	
	var current=firstRow;
	
	for(var i=0;i<list.length;i++){
		current=firstRow.cloneNode(true);
		grid.appendChild(current);
		current.id=i;
		var image=current.firstElementChild.firstElementChild;
		image.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png');
		image.nextElementSibling.firstElementChild.firstElementChild.textContent=list[i].Name;
		
	}
}
function selectPokemon(id){
	
}
//>>filter

function hide(e){
	e.classList.add('Hide');
}