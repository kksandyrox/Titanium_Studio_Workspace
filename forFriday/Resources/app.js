var window = Ti.UI.createWindow({
	backgroundColor:'white'
});

var view1 = Ti.UI.createView({
	backgroundColor:'yellow'
});

var label1 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',  
    top: 30,
    left:90,
    width: 40, 
    height: 40
});

var label2 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',
    top: 30,
    width: 40, 
    height: 40
});

var label3 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',
    top: 30,
    left: 190,
    width: 40, 
    height: 40
});

var label4 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',
    top: 80,
    width: 40, 
    height: 40
});

var label5 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',
    top: 80,
    left:90,
    width: 40, 
    height: 40
});

var label6 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',
    top: 80,
    left: 190,
    width: 40, 
    height: 40
});

var label7 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',  
    top: 130,
    left:90,
    width: 40, 
    height: 40
});

var label8 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: ' ',
    top: 130,
    width: 40, 
    height: 40
});

var label9 = Ti.UI.createLabel({
	backgroundColor: 'red',
	color:'black',
    text: '',
    top: 130,
    left: 190,
    width: 40, 
    height: 40
});

var moveCount=0;
var turn = 0;

function AI(){
	if(label1.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label2.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label3.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label4.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label5.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label6.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label7.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label8.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	if(label9.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
}

function computer(){
	if(label1.text == " X " && label2.text == " X " && label3.text == ' ' && turn == 1){
    label3.text = " O ";
    //sqr3T = 1;
    turn = 0;
  }
  else if(label2.text == " X " && label3.text == " X " && label1.text == ' ' && turn == 1)
  {
    label1.text = " O ";
    //sqr1T = 1;
    turn = 0;
  }
  else if(label4.text == " X " && label5.text == " X " && label6.text == ' ' && turn == 1)
  {
    label6.text = " O ";
    //sqr6T = 1;
    turn = 0;
  }
  else if(label5.text == " X " && label6.text == " X " && label4.text == ' ' && turn == 1)
  {
    label4.text = " O ";
    //sqr4T = 1;
    turn = 0;
  }
  else if(label7.text == " X " && label8.text == " X " && label9.text == ' ' && turn == 1)
  {
    label9.text = " O ";
   // sqr9T = 1;
    turn = 0;
  }
  else if(label8.text == " X " && label9.text == " X " && label7.text == ' ' && turn == 1)
  {
    label7.text = " O ";
    //sqr7T = 1;
    turn = 0;
  }
  else if(label1.text == " X " && label5.text == " X " && label9.text == ' ' && turn == 1)
  {
    label9.text = " O ";
    //sqr9T = 1;
    turn = 0;
  }
  else if(label5.text == " X " && label9.text == " X " && label1.text == ' ' && turn == 1)
  {
   label1.text = " O ";
    //sqr1T = 1;
    turn = 0;
  }
  else if(label3.text == " X " && label5.text == " X " && label7.text == ' ' && turn == 1)
  {
    label7.text = " O ";
    //sqr7T = 1;
    turn = 0;
  }
  else if(label7.text == " X " && label5.text == " X " && label3.text == ' ' && turn == 1)
  {
    label3.text = " O ";
    //sqr3T = 1;
    turn = 0;
  }
  else if(label1.text == " X " && label3.text == " X " && label2.text == ' ' && turn == 1)
  {
    label2.text = " O ";
    //sqr2T = 1;
    turn = 0;
  }
  else if(label4.text == " X " && label6.text == " X " && label5.text == ' ' && turn == 1)
  {
    label5.text = " O ";
    //sqr5T = 1;
    turn = 0;
  }
  else if(label7.text== " X " && label9.text == " X " && label8.text == ' ' && turn == 1)
  {
    label8.text = " O ";
    //sqr8T = 1;
    turn = 0;
  }
  else if(label1.text == " X " && label7.text == " X " && label4.text == ' ' && turn == 1)
  {
    label4.text = " O ";
    //sqr4T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1)
  {
    document.tic.sqr6.value = " O "
    sqr6T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O "
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1)
  {
    document.tic.sqr1.value = " O "
    sqr1T = 1;
    turn = 0;
  }
  else if(sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1)
  {
    document.tic.sqr2.value = " O "
    sqr2T = 1;
    turn = 0;
  }
  else if(sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1)
  {
    document.tic.sqr3.value = " O "
    sqr3T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1)
  {
    document.tic.sqr7.value = " O "
    sqr7T = 1;
    turn = 0;
  }
  else if(sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1)
  {
    document.tic.sqr8.value = " O "
    sqr8T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1)
  {
    document.tic.sqr9.value = " O "
    sqr9T = 1;
    turn = 0;
  }
  else if(sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
  else if(sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1)
  {
    document.tic.sqr5.value = " O "
    sqr5T = 1;
    turn = 0;
  }
}



window.open();
window.add(view1);
view1.add(label1);
view1.add(label2);
view1.add(label3);
view1.add(label4);
view1.add(label5);
view1.add(label6);
view1.add(label7);
view1.add(label8);
view1.add(label9);


