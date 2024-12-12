
const URL="https://jsonplaceholder.typicode.com/todos/3"
const vignesh= async()=>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
}
vignesh()
