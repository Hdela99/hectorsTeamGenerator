
import {Employee} from "./Employee"

class Manager {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.position = "Manager";
    }

}
