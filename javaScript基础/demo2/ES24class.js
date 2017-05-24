/**
 * Created by kylinhuang on 06/03/2017.
 */


class Chef {

    constructor(food){
        this.food = food;
        this.dish = [];
    }

    cook(){
        console.log(this.food);
    }

    static cook(food ){
        console.log(food);
    }


    get menu(){
        return this.dish;
    }

    set menu(dish){
        this.dish.push(dish);
    }


}

Chef.cook('ddd');


let m1 = new Chef('hh');
m1.cook();
m1.menu = 'ddddd';