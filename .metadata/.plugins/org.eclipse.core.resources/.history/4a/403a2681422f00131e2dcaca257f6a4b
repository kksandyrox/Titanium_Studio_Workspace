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
	backgroundColor: 'blue',
	color:'black',
    text: ' ',
    top: 130,
    left: 190,
    width: 40, 
    height: 40
});

var turn = 0;
// //new variables-----------------------------------
// var sqr1T = 0;
// var sqr2T = 0;
// var sqr3T = 0;
// var sqr4T = 0;
// var sqr5T = 0;
// var sqr6T = 0;
// var sqr7T = 0;
// var sqr8T = 0;
// var sqr9T = 0;
// //---------------variable ends here----------------
// 
// function vari(){
	// label1.text=label1.text;
	// label2.text=label2.text;
	// label3.text=label3.text;
	// label4.text=label4.text;
	// label5.text=label5.text;
	// label6.text=label6.text;
	// label7.text=label7.text;
	// label8.text=label8.text;
	// label9.text=label9.text;
// }

function check(){
	if(label1.text =='X' && label2.text == 'X' && label3.text == 'X'){
		alert('You Win');
	}
	else if(label4.text =='X' && label5.text == 'X' && label6.text == 'X'){
		alert('You Win');
	}
	else if(label7.text =='X' && label8.text == 'X' && label9.text == 'X'){
		alert('You Win');
	}
	else if(label1.text =='X' && label4.text == 'X' && label7.text == 'X'){
		alert('You Win');
	}
	else if(label2.text =='X' && label5.text == 'X' && label8.text == 'X'){
		alert('You Win');
	}
	else if(label3.text =='X' && label6.text == 'X' && label9.text == 'X'){
		alert('You Win');
	}
	else if(label1.text =='X' && label5.text == 'X' && label9.text == 'X'){
		alert('You Win');
	}
	else if(label3.text =='X' && label5.text == 'X' && label7.text == 'X'){
		alert('You Win');
	}
	else{		 
    	winCheck();
    	check2();
    	drawCheck() ; 
	}
}

function check2(){
	//vari();
	drawCheck();
	if(label1.text =='O' && label2.text == 'O' && label3.text == 'O'){
		alert('You Lose');
	}
	else if(label4.text =='O' && label5.text == 'O' && label6.text == 'O'){
		alert('You Lose');
	}
	else if(label7.text =='O' && label8.text == 'O' && label9.text == 'O'){
		alert('You Lose');
	}
	else if(label1.text =='O' && label4.text == 'O' && label7.text == 'O'){
		alert('You Lose');
	}
	else if(label2.text =='O' && label5.text == 'O' && label8.text == 'O'){
		alert('You Lose');
	}
	else if(label3.text =='O' && label6.text == 'O' && label9.text == 'O'){
		alert('You Lose');
	}
	else if(label1.text =='O' && label5.text == 'O' && label9.text == 'O'){
		alert('You Lose');
	}
	else if(label3.text =='O' && label5.text == 'O' && label7.text == 'O'){
		alert('You Lose');
	}
}

function drawCheck(){
	//vari();
	if((label1.text !==' ') && (label2.text !==' ') && (label3.text !==' ') && (label4.text !==' ') && (label5.text !==' ') && (label6.text !==' ') && (label7.text !==' ') && (label8.text !==' ') && (label9.text !==' ')){
		alert("Draw");
	}
}

function winCheck(){
	check2();
	if(label1.text == 'O' && label2.text == 'O' && label3.text == ' ' && turn == 1){
    label3.text = 'O';
    sqr3T = 1;
    turn = 0;
  }
  else if(label2.text == 'O' && label3.text == 'O' && label1.text == ' ' && turn == 1)
  {
    label1.text = 'O';
    sqr1T = 1;
    turn = 0;
  }
  else if(label4.text == 'O' && label5.text == 'O' && label6.text == ' ' && turn == 1)
  {
    label6.text = 'O';
    sqr6T = 1;
    turn = 0;
  }
  else if(label5.text == 'O' && label6.text == 'O' && label4.text == ' ' && turn == 1)
  {
    label4.text = 'O';
    sqr4T = 1;
    turn = 0;
  }
  else if(label7.text == 'O' && label8.text == 'O' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label8.text == 'O' && label9.text == 'O' && label7.text == ' ' && turn == 1)
  {
    label7.text = 'O';
    sqr7T = 1;
    turn = 0;
  }
  else if(label1.text == 'O' && label5.text == 'O' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label5.text == 'O' && label9.text == 'O' && label1.text == ' ' && turn == 1)
  {
   label1.text = 'O';
    sqr1T = 1;
    turn = 0;
  }
  else if(label3.text == 'O' && label5.text == 'O' && label7.text == ' ' && turn == 1)
  {
    label7.text = 'O';
    sqr7T = 1;
    turn = 0;
  }
  else if(label7.text == 'O' && label5.text == 'O' && label3.text == ' ' && turn == 1)
  {
    label3.text = 'O';
    sqr3T = 1;
    turn = 0;
  }
  else if(label1.text == 'O' && label3.text == 'O' && label2.text == ' ' && turn == 1)
  {
    label2.text = 'O';
    sqr2T = 1;
    turn = 0;
  }
  else if(label4.text == 'O' && label6.text == 'O' && label5.text == ' ' && turn == 1)
  {
    label5.text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else if(label7.text== 'O' && label9.text == 'O' && label8.text == ' ' && turn == 1)
  {
    label8.text = 'O';
    sqr8T = 1;
    turn = 0;
  }
  else if(label1.text == 'O' && label7.text == 'O' && label4.text == ' ' && turn == 1)
  {
    label4.text = 'O';
    sqr4T = 1;
    turn = 0;
  }
  else if(label2.text == 'O' && label8.text == 'O' && label5.text == ' ' && turn == 1)
  {
    label5,text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else if(label3.text == 'O' && label9.text == 'O' && label6.text == ' ' && turn == 1)
  {
    label6.text = 'O';
    sqr6T = 1;
    turn = 0;
  }
  else if(label1.text == 'O' && label5.text == 'O' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label4.text == 'O' && label7.text == 'O' && label1.text == ' ' && turn == 1)
  {
    label1.text = 'O';
    sqr1T = 1;
    turn = 0;
  }
  else if(label5.text == 'O' && label8.text == 'O' && label2.text == ' ' && turn == 1)
  {
    label2.text = 'O';
    sqr2T = 1;
    turn = 0;
  }
  else if(label6.text == 'O' && label9.text == 'O' && label3.text == ' ' && turn == 1)
  {
    label3.text = 'O';
    sqr3T = 1;
    turn = 0;
  }
  else if(label1.text =='O' && label4.text == 'O' && label7.text == ' ' && turn == 1)
  {
    label7.text = 'O';
    sqr7T = 1;
    turn = 0;
  }
  else if(label2.text == 'O' && label5.text == 'O' && label8.text == ' ' && turn == 1)
  {
    label8.text = " O ";
    sqr8T = 1;
    turn = 0;
  }
  else if(label3.text == 'O' && label6.text == 'O' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label1.text == 'O' && label9.text == 'O' && label5.text == ' ' && turn == 1)
  {
    label5.text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else if(label3.text == 'O' && label7.text == 'O' && label5.text == ' ' && turn == 1)
  {
    label5.text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else{
  	computer();
  }
  check2();
}

function computer(){
	check2();
	if(label1.text == 'X' && label2.text == 'X' && label3.text == ' ' && turn == 1){
    label3.text = 'O';
    sqr3T = 1;
    turn = 0;
  }
  else if(label2.text == 'X' && label3.text == 'X' && label1.text == ' ' && turn == 1)
  {
    label1.text = 'O';
    sqr1T = 1;
    turn = 0;
  }
  else if(label4.text == 'X' && label5.text == 'X' && label6.text == ' ' && turn == 1)
  {
    label6.text = 'O';
    sqr6T = 1;
    turn = 0;
  }
  else if(label5.text == 'X' && label6.text == 'X' && label4.text == ' ' && turn == 1)
  {
    label4.text = 'O';
    sqr4T = 1;
    turn = 0;
  }
  else if(label7.text == 'X' && label8.text == 'X' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label8.text == 'X'&& label9.text == 'X' && label7.text == ' ' && turn == 1)
  {
    label7.text = 'O';
    sqr7T = 1;
    turn = 0;
  }
  else if(label1.text == 'X' && label5.text == 'X' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label5.text == 'X' && label9.text == 'X' && label1.text == ' ' && turn == 1)
  {
   label1.text = 'O';
    sqr1T = 1;
    turn = 0;
  }
  else if(label3.text == 'X' && label5.text == 'X' && label7.text == ' ' && turn == 1)
  {
    label7.text = 'O';
    sqr7T = 1;
    turn = 0;
  }
  else if(label7.text == 'X' && label5.text == 'X' && label3.text == ' ' && turn == 1)
  {
    label3.text = 'O';
    sqr3T = 1;
    turn = 0;
  }
  else if(label1.text == 'X' && label3.text == 'X' && label2.text == ' ' && turn == 1)
  {
    label2.text = 'O';
    sqr2T = 1;
    turn = 0;
  }
  else if(label4.text == 'X' && label6.text == 'X' && label5.text == ' ' && turn == 1)
  {
    label5.text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else if(label7.text== 'X' && label9.text == 'X' && label8.text == ' ' && turn == 1)
  {
    label8.text = 'O';
    sqr8T = 1;
    turn = 0;
  }
  else if(label1.text == 'X' && label7.text == 'X' && label4.text == ' ' && turn == 1)
  {
    label4.text = 'O';
    sqr4T = 1;
    turn = 0;
  }
  else if(label2.text == 'X' && label8.text == 'X' && label5.text == ' ' && turn == 1)
  {
    label5,text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else if(label3.text == 'X' && label9.text == 'X' && label6.text == ' ' && turn == 1)
  {
    label6.text = 'O';
    sqr6T = 1;
    turn = 0;
  }
  else if(label1.text == 'X' && label5.text == 'X' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label4.text == 'X' && label7.text == 'X' && label1.text == ' ' && turn == 1)
  {
    label1.text = 'O';
    sqr1T = 1;
    turn = 0;
  }
  else if(label5.text == 'X' && label8.text == 'X' && label2.text == ' ' && turn == 1)
  {
    label2.text = 'O';
    sqr2T = 1;
    turn = 0;
  }
  else if(label6.text == 'X' && label9.text == 'X' && label3.text == ' ' && turn == 1)
  {
    label3.text = 'O';
    sqr3T = 1;
    turn = 0;
  }
  else if(label1.text == 'X' && label4.text == 'X' && label7.text == ' ' && turn == 1)
  {
    label7.text = 'O';
    sqr7T = 1;
    turn = 0;
  }
  else if(label2.text == 'X' && label5.text == 'X' && label8.text == ' ' && turn == 1)
  {
    label8.text = 'O';
    sqr8T = 1;
    turn = 0;
  }
  else if(label3.text == 'X' && label6.text == 'X' && label9.text == ' ' && turn == 1)
  {
    label9.text = 'O';
    sqr9T = 1;
    turn = 0;
  }
  else if(label1.text == 'X' && label9.text == 'X' && label5.text == ' ' && turn == 1)
  {
    label5.text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else if(label3.text == 'X' && label7.text == 'X' && label5.text == ' ' && turn == 1)
  {
    label5.text = 'O';
    sqr5T = 1;
    turn = 0;
  }
  else{
  	AI();
  }
  check2();
}

function AI(){
	//vari();
	if(label1.text==' ' && turn == 1){
		label1.text='O';
		turn=0;
	}
	else if(label2.text==' ' && turn == 1){
		label2.text='O';
		turn=0;
	}
	else if(label3.text==' ' && turn == 1){
		label3.text='O';
		turn=0;
	}
	else if(label4.text==' ' && turn == 1){
		label4.text='O';
		turn=0;
	}
	else if(label5.text==' ' && turn == 1){
		label5.text='O';
		turn=0;
	}
	else if(label6.text==' ' && turn == 1){
		label6.text='O';
		turn=0;
	}
	else if(label7.text==' ' && turn == 1){
		label7.text='O';
		turn=0;
	}
	else if(label8.text==' ' && turn == 1){
		label8.text='O';
		turn=0;
	}
	else if(label9.text==' ' && turn == 1){
		label9.text='O';
		turn=0;
	}
	check2();
}

// function reset(){
	// label1.text=' ';
	// label2.text=' ';
	// label3.text=' ';
	// label4.text=' ';
	// label5.text=' ';
	// label6.text=' ';
	// label7.text=' ';
	// label8.text=' ';
	// label9.text=' ';
// }

label1.addEventListener('click',function(e){
	if(label1.text == ' ' && turn==0){
		label1.text = 'X';
		turn=1;
		check();
	}
});

label2.addEventListener('click',function(e){
	if(label2.text == ' ' && turn==0){
		label2.text = 'X';
		turn=1;
		check();
	}
});


label3.addEventListener('click',function(e){
	if(label3.text == ' ' && turn==0){
		label3.text = 'X';
		turn=1;
		check();
	}
});


label4.addEventListener('click',function(e){
	if(label4.text == ' ' && turn==0){
		label4.text = 'X';
		turn=1;
		check();
	}
});


label5.addEventListener('click',function(e){
	if(label5.text == ' ' && turn==0){
		label5.text = 'X';
		turn=1;
		check();
	}
});


label6.addEventListener('click',function(e){
	if(label6.text == ' ' && turn==0){
		label6.text = 'X';
		turn=1;
		check();
	}
});


label7.addEventListener('click',function(e){
	if(label7.text == ' ' && turn==0){
		label7.text = 'X';
		turn=1;
		check();
	}
});


label8.addEventListener('click',function(e){
	if(label8.text == ' ' && turn==0){
		label8.text = 'X';
		turn=1;
		check();
	}
});


label9.addEventListener('click',function(e){
	if(label9.text == ' ' && turn==0){
		label9.text = 'X';
		turn=1;
		check();
	}
});




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


