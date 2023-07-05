
let input = document.getElementById("search_input")
input.addEventListener("keypress",(event) => {
    if(event.keyCode===13){
        event.preventDefault()
        search()
    }
})

function search(){
    
    let value = document.getElementById('search_input').value
    if(value.includes("http://")||value.includes("https://")){
        window.open(value)
        
    }
    else{
    window.location.href = "https://www.google.com/search?q="+value
    }
}
