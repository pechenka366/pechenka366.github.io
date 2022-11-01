$(document).ready(function(){
    
    let optipns = {threshold: [0.1]};
    let observer = new IntersetionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i, el) => {
        observer.observe(el);
    });
});

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            
            change.target.src = change.target.dataset.src;
        }
    })
}
