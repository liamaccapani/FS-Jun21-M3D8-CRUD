const getData = async (url) => {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4',
        },
      });
      const events = await response.json()
      console.log(events)
      return events
      
  
    } catch (err) {
      console.log(err);
    } finally {
      console.log('This code will be executed anyway')
    }
  };
  
  const displayEvents = (events) => {
    
  };
  
  window.onload = async () => {
    const url = "https://striveschool-api.herokuapp.com/api/product/";
    const events = await getData(url);
    displayEvents(events);
  }



  
  const getData = async (url) => {
    try {

      const dataFetch = await fetch(url, {
         method: 'GET',
         headers: {
          'Content-Type': 'application/json',
           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
         }
       })

         //  console.log(dataFetch)
          const dataJson = await dataFetch.json()
          console.log(dataJson)
          return dataJson
      
    } catch (error) {
      console.log(error)
    }
  }

   const displayData = (data) => {
     data.forEach(element => {
       showcase.innerHTML += `
       <img src="${data.imageUrl}" alt=""/>
       <p class=${data.name}></p>
       <p class=${data.brand}></p>
       <p class=${data.description}></p>
       <p class=${data.price}></p>`
       
     });
   }

   window.onload = async () => {
     const products = await getData(url)
     displayData(products)  
   }

   //Backoffice 
   const btn = document.getElementById("submit-btn")

        const formHandler = async (event) => {

            event.preventDefault()

            const objectToPost = {

                name: document.getElementById('name').value,
                brand: document.getElementById('brand').value,
                description: document.getElementById('description').value,
                imageUrl: document.getElementById('imageUrl').value,
                price: document.getElementById('price').value

            }

            const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
                method: 'POST',
                body: JSON.stringify(objectToPost),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
                }
            })

            if (response.ok) {
                const resJson = await response.json()
                console.log(resJson)

                
                alert('YEEEEE')
            } else {
                console.log('nope')
            }
        }

//Homepage
const url = 'https://striveschool-api.herokuapp.com/api/product/'
     const showcase = document.getElementById('showcase')
     let products = []

     fetch(url, {
       method: 'GET',
       headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
       }
     })
     .then(response => response.json())
     .then(jsonResponse => {
      //  products = jsonResponse
        console.log('The products are: ', products)
        displayData(jsonResponse)
      // return products
     })

     const displayData = (data) => {
        console.log('Products from displayData: ', data)
      data.forEach(element => {
       showcase.innerHTML += `
       <div class="col-12 col-md-3">
          <div class="card">
            <img src=${element.imageUrl} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Product: ${element.name}</h5>
              <p class="card-text">Description: ${element.brand}</p>
              <p class="card-text">Description: ${element.description}</p>
              <p class="card-text">Price: ${element.price}</p>
              <a href="#" class="btn btn-primary">Button</a>
            </div>
          </div>
        </div>` 
     });
   }
    

     window.onload = () => {
      // displayData(products)
     }