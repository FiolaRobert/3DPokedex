
var pokemonList=[];
function Pokemon(id1="000", id2="000", name="", sprite="", imageURL="", type1="", type2=""){
    this.Kdex="#"+id1;
    this.Ndex="#"+id2;
    this.Name=name;
	this.Sprite=sprite;
    this.MS=imageURL;
   this.Type1=type1;
    this.Type2=type2;
  };
var args;
$(function(){
	args=document.location.search.replace('?','').split('=');
	
		
	hide((document.getElementsByClassName('loader'))[0]);
	//openJSON();
	//log(allPokemon);
	displayTable(allPokemon);
	
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
		if(args[0]!="")
		selectPokemon(args[args.indexOf('id')+1]-1);
	}
});



function openJSON(){
	pokemon=pokemonList;
	//pokemon.push(new Pokemon(001, 001, 'Bulbasaur', 'https://cdn.bulbagarden.net/upload/e/ec/001MS.png', '','Grass', 'Poison'));
	return pokemon;
}
function displayTable(list=pokemonList){
	
	var table=document.getElementById('pokemon-list');
	//grab first item id=0
	var template=document.getElementById('template');
	
	var current;
	
	
	for(var i=0;i<list.length;i++){
		var row=template.content.cloneNode(true);
		current=row.firstElementChild;
		table.appendChild(row);
		
		current.id=i;
		//ID
		current=current.firstElementChild;
		current.innerHTML=list[i].Ndex;
		//Sprite
		current=current.nextElementSibling;
		try{
			current.firstElementChild.setAttribute('src',sprite(i+1));
		}catch(err){
			
		}
		//Name
		current=current.nextElementSibling;
		current.innerHTML=list[i].Name;
		
		/*//Type 1
		current=current.nextElementSibling;
		current.innerHTML=list[i].Type1;
		current.classList.add(list[i].Type1);
		
		//Type 2
		current=current.nextElementSibling;
		if(list[i].Type2){
			current.innerHTML=list[i].Type2;
			current.classList.add(list[i].Type2);
		}
		else{
			current.previousElementSibling.setAttribute('colspan','2');
		}*/
		
		
	}
	
	
	//clone
	//change values
	//get images (sprites)
	//change color of boxes
	//if only 1 type - colspan="2" document.getElementById("myTd").colSpan = "2";
	

}
//change display of document to new pokemon with passed 'id'
function selectPokemon(id){
	jQuery.get( "http://pokeapi.co/api/v2/pokemon/"+id+"/", function( data ) {
  alert( "Data Loaded: " + data );
});
	//name & id
	console.log(id);
	
	document.getElementById('sprite').setAttribute('src',sprite(id+1));
	document.getElementById('name').innerHTML=allPokemon[id].Name;
	document.getElementById('number').innerHTML=allPokemon[id].Ndex;
	
	//types
	var type1=document.getElementById('type1');
	var type=allPokemon[id].Type1;
	type1.innerHTML=type;
	type1.classList.add(type);
	
	var type2=document.getElementById('type2');
	
	if(allPokemon[id].Type2!=""){
		type2.classList.remove("Hide");
		type=allPokemon[id].Type2;
		type2.innerHTML=type;
		type2.classList.add(type);}
	else { //ony 1 type
		type2.classList.add("Hide");
	}
	//weaknesses
	
	//img
	var num=Number.parseInt(id);
	num++;
	
	
	//pokemon genus
	var genus="";
	document.getElementById('classification').textContent=genus;
	
	//description
	
	//stats
	
	//evolutions
	
	//previous & next pokemons
	
	//audio
	
	//3d
	
	//highlight pokemon in table
}
function sprite(id){
	return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(id)+'.png';
}
function optionList(){
	var dataList=document.getElementById('pokelist');
    dataList.innerHTML="";
	
    for(var i=0;i<pokemonList.length;i++)
   { 
       var option = document.createElement('option');
        option.value = pokemonList[i].name;
       dataList.appendChild(option);
   }
}
function displayPokemon(id=0){
	var main=document.getElementsByTagName('main')[0];
	console.log(main);
	//change title
	//(Three.js)open 3d viewer
	//change description
	//(AudioPlayer)play growl
	//(AudioPlayer)play text to speech of description
	
}
function options(input){
	var arr=matchPokemon(input);
	var list=document.createElement('datalist');
	list.id='pokelist';
	for(var i=0;i<arr.length;i++){
		var opt=document.createElement('option');
		var str="";
		str+=allPokemon[arr[i]].Ndex+"-";
		str+=allPokemon[arr[i]].Name;
		opt.textContent(str);
		list.append(opt);
	}
	return list;
}
//return single index of first found match
function findPokemon(str){
	for(var i=0;i<allPokemon.length;i++){
		if(allPokemon[i].Name.includes(str)){
			return i;
		}
	}
	
	return -1;
}
//return array of indexes for matching Pokemon
function matchPokemon(str){
	var arr=[];
	for(var i=0;i<allPokemon.length;i++){
		if(allPokemon[i].Name.includes(str) || allPokemon[i].Ndex.includes(str) || allPokemon[i].Kdex.includes(str)){
			arr.push(i);
		}
	}
	return arr;
}