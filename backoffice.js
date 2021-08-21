//Global Variables
// const name = document.getElementById('name').value
// const brand = document.getElementById('brand').value
// const description = document.getElementById('description').value
// const imageUrl = document.getElementById('imageUrl').value
// const price = document.getElementById('price').value



//Function 1) to read values of input(create object to collect properties and values required) and 2) post (fetch -> async await!!)
const formHandler = async (ev) => {
    ev.preventDefault()

    const objectToPost = {
        name: document.getElementById('name').value, //why name is deprecated?? X name: name, or name, 
        brand: document.getElementById('brand').value,
        description: description = document.getElementById('description').value,
        imageUrl: imageUrl = document.getElementById('imageUrl').value,
        price: price = document.getElementById('price').value
    }

    try {
        //this fx takes an event as param, I cannot declare a global variable with the url like in the homepage
        const url = 'https://striveschool-api.herokuapp.com/api/product/'
        const response = await fetch(url, {
            method: 'POST',
            //payload
            body: JSON.stringify(objectToPost),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
            }
        })
        if(response.ok){
            const dataJson = await response.json()
            cosnsole.log(dataJson)
        }
        else {
            if(response.status >= 400 && response.status < 500) {
                console.log('User generated error')
            } else if (response.status >= 500 && response.status < 600){
                console.log('Server generated error')
            }
        }
        
    } catch (error) {
        console.log(error)
        
    } finally {
        console.log('Ayy carramba again chico')
    }
    console.log('You see me if you use try catch')
}
