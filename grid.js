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
	var template=document.getElementById('template');
	
	var current;
	
	for(var i=0;i<list.length;i++){
		var row=template.content.cloneNode(true);
		
		current=row.firstElementChild;
		current.id=i;
		grid.appendChild(row);
		
		var image=current.firstElementChild.firstElementChild;
		image.setAttribute('src','https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png');
		image.nextElementSibling.firstElementChild.firstElementChild.textContent=list[i].Name;
		
	}
}
function selectPokemon(id){
	window.open('dashboard.html?id='+(Number.parseInt(id)+1),'_self');
}
//>>filter

function hide(e){
	e.classList.add('Hide');
}