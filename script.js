function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    })
    .then(array => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const evenNumbers = array.filter(num => num % 2 === 0);
                document.getElementById('output').textContent = evenNumbers.join(', ');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then(evenNumbers => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const doubledNumbers = evenNumbers.map(num => num * 2);
                document.getElementById('output').textContent = doubledNumbers.join(', ');
                resolve(doubledNumbers);
            }, 2000);
        });
    })
    .then(finalResult => {
        document.getElementById('output').textContent = finalResult.join(', ');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}

// Call the function to initiate the process
processData();
