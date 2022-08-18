class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getID(){ //will get the ID of Employee and return it. 
        
    }

    getName(){// will get Name of Employee and return it. 

    }

    getRole(position) { //will return classification of employee and return it. 
        this.position = position;
    }   
}

export { Employee };