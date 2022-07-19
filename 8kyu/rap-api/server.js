const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
const http = require('http')

app.use(cors())

let rappers = {
    '21 Savage':{
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 27,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unkown': {        
        'age': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'}
}



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/savage', (request, response)=>{
    response.json(savage)
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})