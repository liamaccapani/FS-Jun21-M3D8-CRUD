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