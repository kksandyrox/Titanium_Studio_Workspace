var window = Ti.UI.createWindow();




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

var table = Ti.UI.createTableView({ objName: 'table'});
var tableData = [];
var fileName = 'test.json';
var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName); 
var preParseData = file.read().text;
var response = JSON.parse(preParseData);

Ti.API.info(response.words.length);

for(var i = 0; i < response.words.length ; i++){
	word = response.words[i];
	
	Ti.API.info(word.meaning);
	row = Ti.UI.createTableViewRow({
		height : '100',
		className: 'row',
		touchEnabled:true,
		objName: 'row'
	});
	
	var view1 = Titanium.UI.createView({
	backgroundcolor:'21DCEE',
	objName:'view1',
	rowID: i,
	height:100
	});
	
	var view2 = Titanium.UI.createView({
		backgroundcolor:'green',
		objName:'view2',
		touchEnabled: false,
		width: 300,
		height: '80%'
	});
	
	view1.add(view2);
	
	
	var nameLabel = Ti.UI.createLabel({
		text: word.name,
		font: { fontSize:'24dp', fontWeight:'bold'},
		height:'auto',
		left:'10dp',
		color:'black',
		objName: 'nameLabel',
		touchEnabled: false
	});
	
	view2.add(nameLabel);
	row.add(view1);
	//row.add(nameLabel);
	tableData.push(row);
	
}
tableView.setData(tableData);

tableView.addEventListener('swipe', function(e){
	if(e.source && e.source.objName !== 'tableView'){
		Ti.API.info(e.source.rowID);
	}
});

var add = Titanium.UI.createButton({
	title: 'Add',
	top: 150,
	left: 50
});

add.addEventListener('click',function(e){
	window2 = Titanium.UI.createWindow({
		backgroundColor:'8FD2ED'
	});

	submit.addEventListener('click', function(e){
		var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'wordsAndMeanings.json');
		response.words.push({"name" : textName.value, "meaning" : textMeaning.value}); 		
		var json = JSON.stringify(response);
		file.write(json, true);
		//Ti.API.info(file.read().text);
		
		if(file.exists()){
			file.deleteFile();
		}
		
		var filename = 'test.json'; 
		var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,filename);
		f.write(json);
		Ti.API.info(f.read().text);
		});
	
	
	window2.open();
	window2.add(view2);
	view2.add(textName);
	view2.add(textMeaning);
	view2.add(submit);
});
window.open();
window.add(view1);
view1.add(tableView);
view1.add(add);


