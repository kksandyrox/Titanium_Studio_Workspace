 var data = {
	 'John':10,
	 'Matthew':20
 };

var window = Titanium.UI.createWindow({
	backgroundColor:'yellow'
});

// var emailLabel = Titanium.UI.createLabel({
	// backgroundColor:'white',
	// color:'orange',
	// font:{fontSize:22},
	// text:'Send an email',
	// borderRadius:10,
	// top:50,
	// left:50
// });
// 
// var emailButton = Titanium.UI.createButton({
	// color:'blue',
	// Title:'Click me to send an email',
	// width:200,
	// height:40,
	// top:150,
	// left:50
// });

var view1 = Ti.UI.createView({
	backgroundColor:'blue'
});

// var email = function(){
	// var emailDialog = Ti.UI.createEmailDialog();
	// emailDialog.subject = ' ';
	// emailDialog.toRecipients = ' ';
	// emailDialog.messageBody = ' ';
	// var file = Titanium.UI.getFile(Ti.Filesystem.resourcesDirectory, "textfile2.txt");
	// emailDialog.addAttachment(file);
	// emailDialog.open();
// 	
// };

// emailButton.addEventListener('click',function(){
	// email();
// });

var file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "textfile2.txt"); 
  if(!file.exists){
	 file.createFile();
 	}
 
file.write(JSON.stringify(data));
 
var content = file.read();
Ti.API.info(content);


window.open();
// window.add(emailLabel);
// window.add(emailButton);
