fetch("http://192.168.1.150:5000/carwashdecider?lat=28.672&long=-81.4645248")
    .then(response => {
    return response.json();
    })
    .then(result => {
        console.log(result);
    });
