console.log('mounted')
const counters = document.querySelectorAll('.counter');
counters.forEach(c => {
    const add = () => {

        var max = +c.getAttribute('data-max');
        var box = +c.innerText;
        var inc = Math.ceil(max / 50) ;
       
        if (max > box) {
            c.innerText = box + inc;
            setTimeout(add,100);
        }else box = max;

    }
    add();

})