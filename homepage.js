//Function to fetch data

//Function to display events (dom manip)

//Window onload to call both functions


//Global variables
const url = 'https://striveschool-api.herokuapp.com/api/product/'
const showcase = document.getElementById('showcase')

//Function to fetch data from a given url
const getData = async (urlParameter) => {
    //If error in try, we fall in catch block, and other lines can continue (otherwise everything freezes and exits)
    try {
        const response = await fetch(urlParameter, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmJmMDJkNTI2MjAwMTViNmRjYWEiLCJpYXQiOjE2MjkyODk0NTcsImV4cCI6MTYzMDQ5OTA1N30.c4LkfNB6rjrjb8CftjHXtIuN8dTOeKShcvX7e6WrfL4'
            }
        })        
        if(response.ok){
            const dataJson = await response.json()
            return dataJson
        }

    } catch (error) {
        console.log(error)
    }
    finally {console.log('Ay carrramba')}
}

//Function to display events (dom manip) -> no need for async here, because I'm not dealing with fetched data (see window.onload)
const displayProducts = (array) => {
    const spinner = document.querySelector('.spinner-border')
    spinner.classList.add('d-none')
    array.forEach(element => {
        showcase.innerHTML += `
        <div class="row">
          <div class="card">
            <div class="card-body d-flex justify-content-between">
              <img src=${element.imageUrl} alt=${element.name}/>
              <div class="d-flex flex-columns justify-content-center align-items-center">
                <p>${element.name}</p>
                <p>${element.brand}</p>
                <p>${element.description}</p>
              </div>
              <div class="price">${element.price}</div>
              <a id="edit--btn" class="btn edit--btn" href="backoffice.html?id=${element._id}">EDIT</a>
            </div>
          </div> 
        </div>`
    });
}


window.onload = async () => {
    //no await Array(12)
    //await 12 [{...}, {...}...]
    const products = await getData(url)
    displayProducts(products)
}
