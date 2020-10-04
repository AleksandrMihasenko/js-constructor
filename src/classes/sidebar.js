import { block } from "../utils";
import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;
        this.init();
    }
    
    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template);
        this.$el.addEventListener('submit', this.add.bind(this));
    }
    
    get template() {
        return block('text');
    }
    
    add(event) {
        event.preventDefault();
        
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        
        const newBlock = type === 'text'
            ? new TextBlock(value, {styles})
            : new TitleBlock(value, {styles});
        
        this.update(newBlock);
    
        event.target.value.value = '';
        event.target.styles.value = '';
    }
}
