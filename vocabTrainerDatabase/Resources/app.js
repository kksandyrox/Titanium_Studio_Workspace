var window = Ti.UI.createWindow({
	backgroundColor: 'white'
});
// var view2 = Ti.UI.createView({
				// backgroundColor:'yellow'
// });
var textName = Titanium.UI.createTextField({
	top:100,
	left:50,
	height:50,
	width:150,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText:'Enter the word'
});

var textMeaning = Titanium.UI.createTextField({
	top: 200,
	left:50,
	width:150,
	height:50,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText:'Enter its meaning'
});

var submit = Titanium.UI.createButton({
	top:300,
	left:100,
	title:'Submit'
});

var cancel = Ti.UI.createButton({
	top:2,
	width:'98%',
	title:'Cancel'
});
window2 = Titanium.UI.createWindow({
		backgroundColor:'8FD2ED'
	});
window2.add(textName);
window2.add(textMeaning);
window2.add(submit);
window2.add(cancel);


var table = Titanium.UI.createTableView({});
var name = [];
var name2 = [];
var meaning = [];
var name1 = [];
var name3 = [];
var meaning1 = [];
var db = Titanium.Database.install('namedb.db', 'namedb');
var sql = db.execute('SELECT * FROM nameAndMeaning ORDER BY name');
while(sql.isValidRow()){
	
	var i = 0;	
	var fieldName = sql.fieldByName('name');
	var fieldMeaning = sql.fieldByName('meaning');
	name.push(fieldName);
	meaning.push(fieldMeaning);
	sql.next();
}
Ti.API.info(name);

for(var i =0; i< name.length; i++){
	row = Ti.UI.createTableViewRow({
		height:60,
		hasChild:true
	});
	var view1 = Ti.UI.createView({
		rowID:i,
		height:'90%',
		backgroundColor:'white'
	});
	var nameLabel =Ti.UI.createLabel({
		text:name[i],
		textAlign:'center',
		color:'green',
		font:{ fontSize: 20, fontWeight: 'bold'}
	});
	view1.add(nameLabel);
	row.add(view1);
	name2.push(row);
	
	
	
}
table.setData(name2);
var meaningView = Titanium.UI.createView({backgroundColor:'white',});
var meaningLabel = Ti.UI.createLabel({hasChild: true});
var backButton = Ti.UI.createButton({title:'Back', top:5});
var add = Titanium.UI.createButton({title: 'Add',top: 1,height:30,width: '98%'});
add.addEventListener('click', function(e){
	window2.open();
	//view2.show();
});
	


table.addEventListener('swipe', function(e){
	meaningLabel.text=  meaning[e.source.rowID];
	window.add(meaningView);
	meaningView.show();
	meaningView.add(meaningLabel);
	meaningView.add(backButton);
	backButton.addEventListener('click', function(e){
		meaningView.hide();
		table.show();
	});
	//alert(meaning[e.source.rowID]);
});

submit.addEventListener('click', function(e){
	db.execute('INSERT INTO nameAndMeaning (name, meaning) VALUES(?,?)', textName.value, textMeaning.value);
	var sql = db.execute('SELECT * FROM nameAndMeaning');
	while(sql.isValidRow()){	
	var i1 = 0;	
	var fieldName1 = sql.fieldByName('name');
	var fieldMeaning1 = sql.fieldByName('meaning');
	name1.push(fieldName1);
	meaning1.push(fieldMeaning1);
	sql.next();
	Ti.API.info(fieldMeaning1);
}

for(var i =0; i< name.length; i++){
	row = Ti.UI.createTableViewRow({
		height:60,
		hasChild:true
	});
	var view1 = Ti.UI.createView({
		rowID:i,
		height:'90%',
		backgroundColor:'white'
	});
	var nameLabel =Ti.UI.createLabel({
		text:name1[i],
		textAlign:'center',
		color:'green',
		font:{ fontSize: 20, fontWeight: 'bold'}
	});
	
view1.add(nameLabel);
row.add(view1);
name3.push(row);
}
var rd = [];
table.setData(rd);
name3.sort(func);
function func(a,b){
	return b.name3 - a.name3;
}
table.setData(name3);
window2.close();
window.open();
	
//	name2.push(textName.value);
//	meaning.push(textMeaning.value);
	Ti.API.info(meaning);
});

cancel.addEventListener('click', function(e){
	window2.close();
	window.open();
	});
window.add(table);
window.add(add);

window.open();
