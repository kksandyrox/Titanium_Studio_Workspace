var window = Ti.UI.createWindow();

var view1 = Titanium.UI.createView({
	backgroundcolor:'21DCEE'
});
var view2 = Titanium.UI.createView({});

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

var tableView = Ti.UI.createTableView();
var tableData = [];
var fileName = 'wordsAndMeanings.json';
var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, fileName); 
var preParseData = file.read().text;
var response = JSON.parse(preParseData);
Ti.API.info(response.words.length);
for(var i = 0; i < response.words.length ; i++){
	word = response.words[i];
	row = Ti.UI.createTableViewRow({
		height : '60dp'
	});
	nameLabel = Ti.UI.createLabel({
		text: word.name,
		font: { fontSize:'24dp', fontWeight:'bold'},
		height:'auto',
		left:'10dp',
		color:'#000',
		touchEnabled : false
	});
	row.add(nameLabel);
	tableData.push(row);
	tableView.setData(tableData);
}

var add = Titanium.UI.createButton({
	title: 'Add',
	top: 150,
	left: 50
});

add.addEventListener('click',function(e){
	window2 = Titanium.UI.createWindow({
		backgroundColor:'8FD2ED'
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



//file.write(JSON.stringify(data));
 
// var content = file.read();
// Ti.API.info(content);

// Ti.UI.backgroundColor = '#dddddd';
//  
// var url = "https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt";
// var win = Ti.UI.createWindow();
// var table = Ti.UI.createTableView();
// var tableData = [];
// var json, fighters, fighter, i, row, nameLabel, nickLabel;
//  
// var xhr = Ti.Network.createHTTPClient({
    // onload: function() {
	 // Ti.API.info(this.responseText);
// 		
	// json = JSON.parse(this.responseText);
	// Ti.API.info(json);
	// for (i = 0; i < json.fighters.length; i++) {
	    // fighter = json.fighters[i];
	    // row = Ti.UI.createTableViewRow({
	        // height:'60dp'
	    // });
	    // nameLabel = Ti.UI.createLabel({
	        // text:fighter.name,
	        // font:{
	            // fontSize:'24dp',
		    // fontWeight:'bold'
		// },
		// height:'auto',
		// left:'10dp',
		// top:'5dp',
		// color:'#000',
		// touchEnabled:false
	    // });
	    // nickLabel = Ti.UI.createLabel({
		// text:'"' + fighter.nickname + '"',
		// font:{
		    // fontSize:'16dp'
		// },
		// height:'auto',
		// left:'15dp',
		// bottom:'5dp',
		// color:'#000',
		// touchEnabled:false
	    // });
//  
	    // row.add(nameLabel);
	    // row.add(nickLabel);
	    // tableData.push(row);
        // }
// 		
	// table.setData(tableData);
    // },
    // onerror: function(e) {
	// Ti.API.debug("STATUS: " + this.status);
	// Ti.API.debug("TEXT:   " + this.responseText);
	// Ti.API.debug("ERROR:  " + e.error);
	// alert('There was an error retrieving the remote data. Try again.');
    // },
    // timeout:5000
// });
//  
// xhr.open("GET", url);
// xhr.send();
//  
// win.add(table);
// win.open();