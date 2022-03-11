console.log('mounted')


const counters = document.querySelectorAll('.counter');
counters.forEach(c => {
    const add = () => {

        var max = +c.getAttribute('data-max');
        var box = +c.innerText;
        var inc = Math.ceil(max / 50);

        if (max > box) {
            c.innerText = box + inc;
            setTimeout(add, 100);
        } else box = max;

    }
    add();

})

// Get the modal
var modal = document.getElementById("form");
function open_form() {
    document.getElementById('form').style.display = 'block'
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var api = "https://script.google.com/macros/s/AKfycbzpbdvWqW4JD73tQxLeF7y5USl4uQSgnylTrSWur0lw1Kx3Jx6Mi5g44PSZ4EU3gvD9Uw/exec"
function apply_now() {
    document.querySelector('.spinner').style.display = 'block'
    var data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        university: document.getElementById('university').value,
    }
    fetch(api, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data),

    }).then(res => res.json()).then(res => {

        document.querySelector('.spinner').style.display = 'none';
        if (res == '200') alert('meshe l7al')
        if (res == '209') alert('Try later')
        
        modal.style.display = "none";
    }).catch(err => {

        document.querySelector('.spinner').style.display = 'none'
        console.log(err)
        alert('network err')
        
        modal.style.display = "none";
    })


}