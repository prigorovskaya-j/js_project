var express=require("express")
var app=new express()
var bParser=require('body-parser')
app.use(bParser.json())
app.use(bParser.urlencoded({extended:true}))
app.get("/", function(req,res){
var form='<!DOCTYPE html>\
<html lang="rus">\
<head>\
  <meta charset="UTF-8">\
  <title>�����</title>\
</head>\
<body>\
  <form class="" action="test_page" method="post">\
    <input type="text" name="text" value="������� ���� ���">\
<button type="button" name="button">����� ��  ����</button>\
  </form>\
</body>\
</html>\'
  res.send(form)
})
app.listen("3004",function() {
  console.log("������ �������� �� ����� 3004")
})
 app.post('/page_test,function(req,res){
   console.log(req.body);
   res.send("������ �� ������� express")
 })