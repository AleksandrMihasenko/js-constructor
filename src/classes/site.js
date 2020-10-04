export class Site {
    constructor(selector) {
        // $ - DOM element
        this.$el = document.querySelector(selector)
    }
    
    render(model) {
        this.$el.innerHTML = '';
        
        model.forEach(block => {
            this.$el.insertAdjacentHTML('beforeend', block.toHTML());
        })
    }
}
