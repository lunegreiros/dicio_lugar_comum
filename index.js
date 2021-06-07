const express = require('express')
const app = express()
const mysql = require('mysql2')
const fs = require('fs')
require('dotenv').config()

const port = process.env.PORT || 3000
const connection = mysql.createConnection(process.env.JAWSDB_URL)


connection.connect(err => {
  if (!err) {
    console.log('connected to db.')
  }
  connection.query(`show tables like 'palavras'`, (err, rows) => {
    if (rows.length === 0) {
      const sql = String(fs.readFileSync('./db.sql'))
      connection.query(sql, (err) => {
        if (!err) {
          console.log('database created.')
        }
      })
    }
  })
})

app.get('/', (req, res) => {
  res.send('Dicionário de Lugar Comum')
})
app.get('/palavras', (req, res) => {
  connection.query('select * from palavras', (err, rows) => {
    if (err) {
      res.send({
        error: 'error connecting to db'
      })
    } else {
      res.send(rows)
    }
  })
})
app.listen(port, err => {
  if (!err) {
    console.log('server listening on port', port)
  } else {
    console.log(err)
  }
})
