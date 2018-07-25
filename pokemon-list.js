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
loadPokemon();


function loadPokemon(){
	openJSON();
	displayTable(allPokemon);
	//displayPokemon();
}
function openJSON(){
	pokemon=pokemonList;
	pokemon.push(new Pokemon(001, 001, 'Bulbasaur', 'https://cdn.bulbagarden.net/upload/e/ec/001MS.png', '','Grass', 'Poison'));
	return pokemon;
}
function displayTable(list=pokemonList){
	var table=document.getElementById('pokemon-list');
	//grab first item id=0
	var firstRow=document.getElementById('0');
	var current=firstRow;
	
	
	for(var i=0;i<list.length;i++){
		
		current=firstRow.cloneNode(true);
		table.appendChild(current);
		
		current.id=i;
		//ID
		current=current.firstElementChild;
		current.innerHTML=list[i].Ndex;
		//Sprite
		current=current.nextElementSibling;
		current.firstElementChild.setAttribute('src',list[i].sprite);
	
		//Name
		current=current.nextElementSibling;
		current.innerHTML=list[i].Name;
		
		//Type 1
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
		}
		
		
	}
	
	log(list);
	table.firstElementChild.removeChild(firstRow);
	
	//clone
	//change values
	//get images (sprites)
	//change color of boxes
	//if only 1 type - colspan="2" document.getElementById("myTd").colSpan = "2";
	

}
function selectPokemon(id){
	log(id);
	var title=document.getElementById('title');
	title.innerHTML=allPokemon[id].Ndex+' - '+allPokemon[id].Name;
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
	log(main);
	//change title
	//(Three.js)open 3d viewer
	//change description
	//(AudioPlayer)play growl
	//(AudioPlayer)play text to speech of description
	
}
function options(input){
	
}