import { Site } from "./site";
import { Sidebar } from "./sidebar";

export class App {
    constructor(model) {
        this.model = model;
        
        this.init();
    }
    
    init() {
        // $ - DOM element
        const site = new Site('#site');
        const update = newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        };
    
        site.render(this.model);
    
        new Sidebar('#panel', update);
    }
    
}
