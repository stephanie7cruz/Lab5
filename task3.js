export function ageCalculator(year, month, day) {
    //obtenemos la fecha actual
    const today = new Date();

    // creamos fecha de nacimeinto
    const birthDate = new Date(year, month -1, day);

    //calculamos la edad restando los años actuales y la fecha de nacimiento

    let ageYears = today.getFullYear() - birthDate.getFullYear();

    let ageMonths = today.getMonth()

    let ageDays = today.getDate() 

    if (ageMonths< birthDate.getMonth() || (ageMonths=== birthDate.getMonth() && ageDays< birthDate.getDate())){
        ageYears -=1

    }
    return ageYears;






l
}