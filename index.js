import express from 'express';
const app = express();
const PORT = process.env.PORT_SRV || 9001;
let state;

import fs from 'fs';
const templateHtml = fs.readFileSync('./src/index.html', 'utf-8');
app.use(express.static('./src'));

function main() {
    app.listen(PORT, () => {
        console.log(`Server online at port ${PORT}`)
    })
}

app.get('/asseco', (req, res) => {
    let view = templateHtml
    res.send(view)
})


main()