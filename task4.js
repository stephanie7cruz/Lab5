export class FriendAge {
    constructor(name, year, month, day) {
        this.name = name;
        this.birthDate = new Date(year, month - 1, day); // Recuerda que el mes es 0-indexado.
    }

    returnAge() {
        const today = new Date();
        let ageYears = today.getFullYear() - this.birthDate.getFullYear(); // Cambié birthDate por this.birthDate.

        let ageMonths = today.getMonth();
        let ageDays = today.getDate();

        if (ageMonths < this.birthDate.getMonth() || (ageMonths === this.birthDate.getMonth() && ageDays < this.birthDate.getDate())) {
            ageYears -= 1;
        }

        return `${this.name} is ${ageYears} today!`; // Asegúrate de usar ageYears aquí.
    }
}
