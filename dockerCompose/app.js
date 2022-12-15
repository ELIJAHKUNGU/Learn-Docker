const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors())



app.get('/', (req, res) => {
    res.json([
      {
        "id":"1",
        "title":"Book Review: The Bear & The Nightingale ABCSSSS"
      },
      {
        "id":"2",
        "title":"GameSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS Review: Pokemon Brillian Diamond"
      },
      {
        "id":"3",
        "title":"Show Review: Alice in Borderland"
      }
    ])
  })

const PORT = 4000
const HOST =  '0.0.0.0';

app.listen(PORT, HOST) 
console.log(`Hello running ................... on http://${HOST}:${PORT}`);