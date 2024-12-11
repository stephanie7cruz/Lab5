export function costCalculator(amount) {

    amount = Number(amount);

    if (isNaN(amount)|| amount<=0){
        throw new Error ("El valor de entrada debe ser un número");
    }

    //declaramos la tarija fija de $3
    const fee = 3;

    //declaramos la tarifa de interes %1 multiplicamos por el monto
    const interest = 0.01;

    //calculamos el total sumando la tarifa fija y el interes aplicado

    const total = amount + fee + (amount * interest);

    //retornamos el total calculado

    return total.toFixed(2);

}