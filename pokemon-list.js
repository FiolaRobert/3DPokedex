var pokemonList=[];
var Pokemon(id1="000", id2="000", name="", imageURL="", type1="", type2=""){
    this.Kdex="#"+id1;
    this.Ndex="#"+id2;
    this.Name=name;
    this.MS=imageURL;
   this.Type1=type1;
    this.Type2=type2;
  };
loadPokemon();

function loadPokemon(){
	openJSON();
	displayTable(pokemonList);
	displayPokemon(pokemonList[0]);
}
function openJSON(){
	pokemon=pokemonList;
	pokemon.push(new Pokemon(001, 001, 'Bulbasaur', '', 'Grass', 'Poison'))
	return pokemon;
}
function displayTable(list=pokemonList){
	var table=document.getElementById('pokemon-list');
	//grab first item id=0
	
	var current=document.getElementById(0);
	
	
	for(var i=0;i<list.length;i++){
		log(list[i]);
		table.appendChild(current);
		current=current.clone(true);
	}
	
	
	//clone
	//change values
	//get images (sprites)
	//change color of boxes
	//if only 1 type - colspan="2" document.getElementById("myTd").colSpan = "2";
	
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
function displayPokemon(pokemon){
	//change title
	//(Three.js)open 3d viewer
	//change description
	//(AudioPlayer)play growl
	//(AudioPlayer)play text to speech of description
	
}