const progress = getProgressElements('progress');
const prev = getProgressElements('prev');
const next = getProgressElements('next');
const circles = getProgressElements('.circle');


let currentActive = 1;

function getProgressElements( ele ){
        if ( ele == '.circle' || ele == '.active'){
                return document.querySelectorAll( ele );
            } else {
                    return document.getElementById( ele );
                }
}
            
            next.addEventListener('click', () => {
                currentActive++;
                
                if (currentActive > circles.length) {
                    currentActive = circles.length;
                }
                
                update();
            });
            
            prev.addEventListener('click', () => {
                currentActive--
                
                if (currentActive < 1 ) {
                    currentActive = 1;
                }
                
                update();
            });
            
function update(){
                circles.forEach((circle, index) => {
                    if( index < currentActive ){
                        circle.classList.add('active');
                    }else {
                        circle.classList.remove('active');
        }
    })

    const actives = getProgressElements('.active');

    progress.style.width = (((actives.length-1)/(circles.length-1))*100)+"%";

    if (currentActive===1){
        prev.disabled = true;
    } else if(currentActive===circles.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}


