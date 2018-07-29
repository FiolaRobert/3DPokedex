
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

$(function(){
	hide((document.getElementsByClassName('loader'))[0]);
	//openJSON();
	//log(allPokemon);
	displayTable(allPokemon);
})



function openJSON(){
	pokemon=pokemonList;
	pokemon.push(new Pokemon(001, 001, 'Bulbasaur', 'https://cdn.bulbagarden.net/upload/e/ec/001MS.png', '','Grass', 'Poison'));
	return pokemon;
}
function displayTable(list=pokemonList){
	log(document);
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
		current.firstElementChild.setAttribute('src',allPokemon[i].Sprite);
	
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
	
	log(list);
	firstRow.parentElement.removeChild(firstRow);
	
	//clone
	//change values
	//get images (sprites)
	//change color of boxes
	//if only 1 type - colspan="2" document.getElementById("myTd").colSpan = "2";
	

}
function selectPokemon(id){
	log(id);
	var title=document.getElementById('name');
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
	var arr=matchPokemon(input);
	var list=document.createElement('datalist');;
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