// Generate ID

const gen = document.querySelector('.sub button');
// const showID = document.querySelector('.ID p');

gen.addEventListener('click', () => {
    let id = Math.random() * Math.pow(10,8);
    id = parseInt(id, 10);
    localStorage.setItem('ID', id);
    // showID.innerHTML = `${id}`;
});


// Finding nearest PO

const search = document.querySelector('.sub button');
// const res = document.querySelector('.post p');

search.addEventListener('click', function(e) {
    e.preventDefault();

    const PINCODE = document.querySelector('.pin input').value;

    if(PINCODE === 0)
        return;
    const url = `https://api.postalpincode.in/pincode/${PINCODE}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data[0].Status === 'Error') {
                alert("Invalid Pin Code");
                return;
            }

            localStorage.setItem('PO', `${data[0].PostOffice[0].Name}`);
            window.location.href = "Order-placed.html";
            // res.innerHTML = `${data[0].PostOffice[0].Name}`;
        });
});