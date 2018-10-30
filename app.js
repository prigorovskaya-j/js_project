var express=require ("express")
var app=new express()
var b.Parser=require("body_parser")
app.use(b.Parser.json())
app.use(b.Parser.urlencoded({extended:true}))
app.get("/",function(req, res){
   var form=' <!DOCTYPE html>\
    <html lang="rus">\
    <head>\
      <meta charset="UTF-8">\
      <title>Форма</title>\
    </head>\
    <body>\
      <form class="" action="page_test" method="post">\
        <input type="text" name="" value="Введите свое имя">\
    <button type="button" name="button">Нажми на  меня</button>\
      </form>\
    </body>\
    </html>'
    res.send(form)
})

app.listen("3002",function(){
  console.log("Сервер работает и слушает порт 3002");
})
app.post("/page_test",function(req,res){
  res.send("Привет от сервера экпресс")
})
