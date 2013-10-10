var window = Ti.UI.createWindow();
var view3 = Titanium.UI.createView({});



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
	backgroundColor:'21DCEE',
	objName:'view1',
	rowID: i,
	height:'50%'
	});
	
	var view2 = Titanium.UI.createView({
		backgroundColor:'green',
		objName:'view2',
		rowID : i,
		touchEnabled: false,
		width: 200,
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
	//nameLabel.add(leftSwipe);
	
}
table.setData(tableData);

table.addEventListener('swipe', function(e){
	if(e.source && e.source.objName !== 'tableView' && e.direction == 'left'){
		Ti.API.info(e.source.rowID);
		word = response.words[e.source.rowID];
		Ti.API.info(word.meaning);
		
		var meaningView = Ti.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		backgroundColor: 'red'
		});
		
		var m = Ti.UI.createLabel({
			text:word.meaning,
			color: 'green'
		});
		window.add(meaningView);
		meaningView.show();
		meaningView.add(m);
		// alert(word.meaning);
		// table.animate(Titanium.UI.createAnimation({
    	// opacity: 100,
    	// duration: 2500,
    	// transform: Titanium.UI.create2DMatrix({
        // scale: 1.5,
        // rotate :90 
    	// })
	// }));
	}
});

var add = Titanium.UI.createButton({
	title: 'Add',
	top: 1,
	height:30,
	width: '98%'
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
	window2.add(view3);
	view3.add(textName);
	view3.add(textMeaning);
	view3.add(submit);
});
window.open();
window.add(table);
window.add(add);




// var window = Ti.UI.createWindow();
// 
// var view1 = Titanium.UI.createView({
	// backgroundcolor:'21DCEE'
// });
// var view2 = Titanium.UI.createView({});
// 
// var textName = Titanium.UI.createTextField({
	// top:100,
	// left:50,
	// height:50,
	// width:150,
	// borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	// hintText:'Enter the word'
// });
// 
// var textMeaning = Titanium.UI.createTextField({
	// top: 200,
	// left:50,
	// width:150,
	// height:50,
	// borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	// hintText:'Enter its meaning'
// });
// 
// var submit = Titanium.UI.createButton({
	// top:300,
	// left:100,
	// title:'Submit'
// });
// 
// var tableView = Ti.UI.createTableView();
// var tableData = [];
// var fileName = 'test.json';
// var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName); 
// var preParseData = file.read().text;
// var response = JSON.parse(preParseData);
// 
// Ti.API.info(response.words.length);
// 
// for(var i = 0; i < response.words.length ; i++){
	// word = response.words[i];
// 	
	// Ti.API.info(word.meaning);
	// row = Ti.UI.createTableViewRow({
		// height : '60dp'
	// });
	// var nameLabel = Ti.UI.createLabel({
		// text: word.name,
		// font: { fontSize:'24dp', fontWeight:'bold'},
		// height:'auto',
		// left:'10dp',
		// color:'black',
		// touchEnabled: false
	// });
	// row.add(nameLabel);
	// tableData.push(row);
	// tableView.setData(tableData);
// }
// 
// tableView.addEventListener('click', function(e){
	// word = response.words[i];
	// alert("HI");
// });
// 
// var add = Titanium.UI.createButton({
	// title: 'Add',
	// top: 150,
	// left: 50
// });
// 
// add.addEventListener('click',function(e){
	// window2 = Titanium.UI.createWindow({
		// backgroundColor:'8FD2ED'
	// });
// 
	// submit.addEventListener('click', function(e){
		// var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'wordsAndMeanings.json');
		// response.words.push({"name" : textName.value, "meaning" : textMeaning.value}); 		
		// var json = JSON.stringify(response);
		// file.write(json, true);
		// //Ti.API.info(file.read().text);
// 		
		// if(file.exists()){
			// file.deleteFile();
		// }
// 		
		// var filename = 'test.json'; 
		// var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,filename);
		// f.write(json);
		// Ti.API.info(f.read().text);
		// });
// 	
// 	
	// window2.open();
	// window2.add(view2);
	// view2.add(textName);
	// view2.add(textMeaning);
	// view2.add(submit);
// });
// window.open();
// window.add(view1);
// view1.add(tableView);
// view1.add(add);
// 
// 
