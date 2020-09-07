 // alert('hi') always, to make sure
document.getElementById('run').addEventListener('click', getFact)
let mainLanguage = document.getElementById('mainLanguage').value.toString()
function getFact(){
  fetch(`http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote`)
    .then(response => response.json())
    .then(data =>{
      // document.querySelector('#result').textContent=data.value
      document.getElementById('result').textContent = data.starWarsQuote
      console.log(data.starWarsQuote)
    })
    .catch(err => {
      console.log('error ${err}')
    })
}
