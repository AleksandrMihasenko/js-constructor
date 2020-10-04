const model = [
    { type: 'title', value: 'Hello from js' },
    { type: 'text', value: 'some text' },
    { type: 'columns', value: [
        'text 1',
        'text 2',
        'text 3'
    ]}
];

// $ - DOM element
const $site = document.querySelector('#site');

model.forEach(block => {
    let html = '';
    
    if (block.type === 'title') {
        html = `
            <div class="row">
                <div class="col-sm">
                    <h1>${block.value}</h1>
                </div>
            </div>
        `
    } else if (block.type === 'text') {
        html = `
            <div class="row">
                <div class="col-sm">
                    <p>${block.value}</p>
                </div>
            </div>
        `
    }  else if (block.type === 'columns') {
    
    }
    
    
    
    $site.insertAdjacentHTML('beforeend', html);
});
