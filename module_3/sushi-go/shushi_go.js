let aantalRondes = 10
const aantalProductenPerBestelling = 12

let amount_hamburger = parseInt(quantity_hamburger.value);
let amount_cheese_burger = parseInt(quantity_cheeseburger.value);
let amount_bacon_burger = parseInt(quantity_baconburger.value);
let amount_veggie_burger = parseInt(quantity_veggieburger.value);
let amount_double_cheese_burger = parseInt(quantity_doublecheeseburger.value);
let amount_spicy_chicken_burger = parseInt(quantity_spicychickenburger.value);
let amount_fish_burger = parseInt(quantity_fishburger.value);
let amount_bbq_burger = parseInt(quantity_bbqburger.value);
let amount_mushrooms_wiss_burger = parseInt(quantity_mushroomswissburger.value)
let amount_turkey_burger = parseInt(quantity_turkeyburger.value)
let amount_guacamole_burger = parseInt(quantity_guacamoleburger.value)


let amount_burgers = amount_hamburger + amount_cheese_burger + amount_bacon_burger + amount_veggie_burger + amount_double_cheese_burger + amount_spicy_chicken_burger + amount_fish_burger + amount_bbq_burger + amount_mushrooms_wiss_burger + amount_turkey_burger + amount_guacamole_burger

function chek_total_burger(){
    if(amount_burgers <= 12){
        aantalRondes -= 1
    }
}


function bonnetje(){
    pass
}


