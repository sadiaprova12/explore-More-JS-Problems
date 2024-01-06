/**
 //(Advanced) Multi-Layer Discount Price Calculation
 1. if ticket number is less than 100, per ticket price: 100
 2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100 ticket price rest tickets will be 90 taka per price
 3. if you purchase more than 200 tickets
    first 100 ---> 100 tk
    101-200 ----> 90tk
    200+ ----> 70tk
 */

    function ticketPrice(number){
        const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if(number <= 100){
        const price = number * first100Rate;
        return price;
    }
    else if(number <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = number - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = number - 200;
        const restTicketPrice = number * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

const price = ticketPrice(120);
console.log('Price: ',  price);
    