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
  res.send('Dicionário de Lugar Comum - /api/:<_palavra_> ou /api/todas_palavras')
})

app.get('/api/:palavra', (req, res) => {
  const palavra = req.params.palavra;
  const sql = `SELECT id FROM palavras WHERE palavra = '${palavra}'`;
    connection.query(sql, (erro, resultado) => {

      if(erro){
        res.status(400).json(erro)
      }else if(resultado.length === 0){
        res.status(200).json({"mensagem": "Palavra não existe"});
      }else{
        const id = resultado[0].id;
        const sql = `SELECT * FROM expressoes WHERE id_palavra = ${id}`
        connection.query(sql, (erro, result) => {
          if(erro){
            res.status(400).json(erro)
          }else{
            var expressaoArray = [];
            result.forEach(function(item){
              expressaoArray.push(item.expressao)
            });
            res.status(200).json({"palavra": palavra , "expressoes":expressaoArray})
          }
        });
      }

    });
})

app.get('/api/todas_palavras', (req, res) => {
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
