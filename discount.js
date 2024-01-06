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

}

const price = ticketPrice(1);
console.log('Price: ',  price);
    