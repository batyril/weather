import {UI_ELEMETS, UI_ELEMETS_DETAIL} from "../js/view.js";
import {GetCity} from "../js/now.js";

let massage = undefined;
let arrayCity = [];

UI_ELEMETS.FORM.addEventListener('submit', function(){
    event.preventDefault();
    massage = UI_ELEMETS.FORM_TEXT.value;
    UI_ELEMETS.FORM_TEXT.value =''
    GetCity(massage);
})

UI_ELEMETS.FAVOURITES_CITY.addEventListener('click', () => {
    const addCityFavorite = UI_ELEMETS.NOW_CITY.textContent;
    addCitys(addCityFavorite);
}  )
export function addCitys(addCity){
    if(arrayCity.includes(addCity)){
        return
    }
    else{
        arrayCity.push(addCity);
        localStorage.setItem('favoriteCities', JSON.stringify(arrayCity));
        let div = document.createElement('div');
        div.className = `${addCity}`;
        div.innerHTML =  `<span>${addCity}</span><img class="close_img" src="icon/close-icon.svg" alt="">`;
        UI_ELEMETS.ADDED_LOCATIONS.prepend(div);

    }

};






UI_ELEMETS.ADDED_LOCATIONS.addEventListener('click',deleteCity)
function deleteCity(){
    if(event.target.className === 'close_img'){
        arrayCity.filter(function (item, index){
            const ifCheckCity = (event.target.parentNode.textContent === item)
            if(ifCheckCity){
                arrayCity.splice(index,1);
                localStorage.setItem('favoriteCities', JSON.stringify(arrayCity));
            }
        });
        event.target.parentNode.remove();
    };
}



UI_ELEMETS.ADDED_LOCATIONS.addEventListener('click', added_city_tab)
function added_city_tab(){
    if(event.target.nodeName === 'SPAN'){
        const spanCity = event.target.textContent;
        GetCity(spanCity);
    };
}


