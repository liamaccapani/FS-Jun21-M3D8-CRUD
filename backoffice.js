//Global Variables
// const productName = document.getElementById('name').value
// const brand = document.getElementById('brand').value
// const description = document.getElementById('description').value
// const imageUrl = document.getElementById('imageUrl').value
// const price = document.getElementById('price').value

//we need to check if we have an id in the url => url search params
const productId = new URLSearchParams(window.location.search).get('id')

//when page refresh endpoint gets created -> save endpoint in a variable so that every fetch will manage to do something based on the value we store in this variable
const actualUrl = productId ? 'https://striveschool-api.herokuapp.com/api/product/'+productId : 'https://striveschool-api.herokuapp.com/api/product/'

const method = productId ? 'PUT' : 'POST'


//we need to check if I have id or not at loading + if there's the id I want to fetch the data from that product in oder to prefill the form
// if we have id -> method put && form prefilled && button edit + button delete if not -> post && form empty && button submit
window.onload = async () => {
    if(productId) {
        const response = await fetch(actualUrl, {
            method:'GET', 
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4' 
            }
        })
        const productData = await response.json()
        document.getElementById('name').value = productData.name
        document.getElementById('brand').value = productData.brand
        document.getElementById('description').value = productData.description
        document.getElementById('imageUrl').value = productData.imageUrl
        document.getElementById('price').value = productData.price
        
        //Why won't work this way?
        // brand = productData.brand
        // description = productData.description
        // price = productData.price

        const submitBtn = document.getElementById('submit--btn')
        submitBtn.innerText = 'Edit'
        const deleteBtn = document.getElementById('delete--btn')
        deleteBtn.classList.remove('d-none')
    }
}


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
        
        const response = await fetch(actualUrl, {
            method,
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

const handleDelete = async () => {
    try {
      const response = await fetch(actualUrl, {
          method: 'DELETE', 
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
          }
      }) 
      if(response.ok) {
          const deletedData = await response.json()
          console.log(`Bye bye ${deletedData.name} with the id of ${deletedData._id}`)
          setTimeout(() => {window.location.assign('homepage.html')}, 2000)
      }
      
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Ayy carramba again chico')
    }
    console.log('You see me if you use try catch')
}
