const formatMoney = (value) => {
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(value);
}

const calculateTotalPay=(qty, time) =>{
    let total;

    // the higher the quantity, the lower the interest rate
    if(qty < 5000){
        total = qty * 1.5;
    }else if(qty >= 5000 && qty < 10000){
        total = qty * 1.4;
    }else if(qty >= 10000 && qty < 15000){
        total = qty * 1.3;
    }else{
        total = qty * 1.2;
    }
    //time - more time, more interest rate
    if(time === 6){
        total*= 1.1;
    }else if(time === 12){
        total*= 1.2;
    }else{
        total*= 1.3;
    }

    return total;
}

export {
     formatMoney,
     calculateTotalPay
}