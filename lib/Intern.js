
import {Employee} from "./Employee"

class Intern {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
        this.position = "Intern";
    }

    getSchool() {
        return this.school; 
    }
}
