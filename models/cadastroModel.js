module.exports = class CadastroModel {
    vehicles = [];

    constructor(name){
        this.name = name;
    }

    signIn(name) {
        let vehicle = new CadastroModel(name);
        this.vehicles.push(vehicle);
    }

    ListAll() {
        return this.vehicles;
    }

    Delete(name) {
        const index = this.vehicles.findIndex((x) => x.name == name);
        this.vehicles.splice(index, 1);
    }
    
}