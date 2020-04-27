var array_values = [],array_values1=[];
for(var i=0; i<81; i++){
  array_values[i] = 0;
  array_values1[i] = 0;
}
var count1 = 0;
let arr=[1,2,3,4,5,6,7,8,9]
var hide=2;
[00,01]
arr[i][j]
//let index=Math.random(10)

array_values = [[3,0,6,5,0,8,4,0,0],[5,2,0,0,0,0,0,0,0],[0,8,7,0,0,0,0,3,1],[0,0,3,0,1,0,0,8,0],[9,0,0,8,6,3,0,0,5],[0,5,0,0,9,0,6,0,0],[1,3,0,0,0,0,2,5,0],[0,0,0,0,0,0,0,7,4],[0,0,5,2,0,6,3,0,0]];
array_values1 = [[0,0,9,0,0,8,7,5,0],[0,0,6,3,0,0,0,0,0],[0,0,3,0,1,0,0,0,9],[0,0,4,5,0,0,2,0,0],[0,9,0,0,3,0,0,4,0],[0,0,1,0,0,4,6,0,0],[7,0,0,0,4,0,9,0,0],[0,0,0,0,0,3,8,0,0],[0,1,5,2,0,0,3,0,0]];
var array_main = [array_values,array_values1];
var btn_click = document.getElementById("btn_click");
btn_click.addEventListener('click',display);
var board = document.getElementById("board");
function display(){
  var count = 0;
  
  board.innerHTML = "";
  var btn = document.createElement('button');
  btn.innerText = "Answer";
  btn.setAttribute('id',count1);
  btn.addEventListener('click', function(){
      var n = event.target.id;
    ans(n);
  })
  var answer = document.getElementById("answer");
  answer.innerHTML = "";
  answer.appendChild(btn);
  for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){
      var div = document.createElement("input");
      div.setAttribute('id',count);
      div.setAttribute('type','text');
      div.setAttribute('maxlength','1');
      count++;
      if(count1==array_main.length){
        count1 =0;
      }
        if(array_main[count1][i][j]!=0){
        div.value = array_main[count1][i][j];
        div.setAttribute('readonly','readonly');
        div.setAttribute('style','background-color:green; color:black;')
      }
      
      div.addEventListener('input',function(e){
        console.log(e.data,event.target.id);
        check_correct(e.data,event.target.id);
      });
  
      board.appendChild(div);
      
    }
  }
  
  count1++;  
} 


var flag1 = true;
function check_correct(e,n){

    event.target.style.color = "black";
  
  //console.log("hi");
  //console.log(e);
  var a = Math.floor(Number(n)/9);
  var b = Number(n)%9;
  //console.log(typeof(a));
  
 small_box1(a,b,e);
  
  if(flag1==false){
    event.target.style.color = "red";
  }
  array_values[a][b]=Number(e);
  console.log(array_values);
}


function small_box1(a,b,e){
  flag1 = true;
  var input_v = document.querySelectorAll('input');
  for(var i=0; i<input_v.length; i++){

        input_v[i].style.color = "black";
  }
  //checking row 
  for(var k=0; k<9; k++){
    //console.log(array_values[a][k]);
    if(array_values[a][k]==Number(e)){
      for(var l=0; l<input_v.length; l++){
                if(input_v[l].id == (a*9)+k){
                  input_v[l].style.color = "red";
                }
              }
      flag1 = false;
      break;
    }
  }

  //checking column
  for(var k=0; k<9; k++){
    if(array_values[k][b]==Number(e)){
      console.log(array_values[a][k]);
      for(var l=0; l<input_v.length; l++){
                if(input_v[l].id == (k*9)+b){
                  input_v[l].style.color = "red";
                }
              }
      flag1 = false;
      break;
    }
  }

  //checking small box - 3x3
    if(a<3){
            for(var i=0; i<3; i++){
            if(b<3){
                for(var j=0; j<3; j++){
                    if(array_values[i][j]==Number(e)){
                    for(var l=0; l<input_v.length; l++){
                        if(input_v[l].id == (i*9)+j){
                        input_v[l].style.color = "red";
                        }
                    }
                    flag1=false;
                    break;
                    }
                }
            }
            if(2<b && b<6){
                for(var j=3; j<6; j++){
                    if(array_values[i][j]==Number(e)){
                    for(var l=0; l<input_v.length; l++){
                        if(input_v[l].id == (i*9)+j){
                        input_v[l].style.color = "red";
                        }
                    }
                    flag1=false;
                    break;
                    }
                }

            }
            if(5<b && b<9){
                for(var j=6; j<9; j++){
                    if(array_values[i][j]==Number(e)){
                    for(var l=0; l<input_v.length; l++){
                        if(input_v[l].id == (i*9)+j){
                        input_v[l].style.color = "red";
                        }
                    }
                    flag1=false;
                    break;
                    }
                }

            }
            }
    }
  
  if(2<a && a<6){
            for(var i=3; i<6; i++){
            if(b<3){
                for(var j=0; j<3; j++){
                    if(array_values[i][j]==Number(e)){
                    for(var l=0; l<input_v.length; l++){
                        if(input_v[l].id == (i*9)+j){
                        input_v[l].style.color = "red";
                        }
                    }
                    flag1=false;
                    break;
                    }
                }
            }
            if(2<b && b<6){
                for(var j=3; j<6; j++){
                    if(array_values1[i][j]==Number(e)){
                    for(var l=0; l<input_v.length; l++){
                        if(input_v[l].id == (i*9)+j){
                        input_v[l].style.color = "red";
                        }
                    }
                    flag1=false;
                    break;
                    }
                }

            }
            if(5<b && b<9){
                for(var j=6; j<9; j++){
                    if(array_values[i][j]==Number(e)){
                    for(var l=0; l<input_v.length; l++){
                        if(input_v[l].id == (i*9)+j){
                        input_v[l].style.color = "red";
                        }
                    }
                    flag1=false;
                    break;
                    }
                }

            }
            }
    }
  
  
  
    if(5<a && a<9){
      //console.log(a);
        for(var i=6; i < 9; i++){
          if(b<3){
            for(var j=0; j<3; j++){
                if(array_values[i][j]==Number(e)){
                  for(var l=0; l<input_v.length; l++){
                if(input_v[l].id == (i*9)+j){
                  input_v[l].style.color = "red";
                }
              }
                  flag1=false;
                  break;
                }
            }
        }
        if(2<b && b<6){
            for(var j=3; j<6; j++){
              if(array_values[i][j]==Number(e)){
                for(var l=0; l<input_v.length; l++){
                if(input_v[l].id == (i*9)+j){
                  input_v[l].style.color = "red";
                }
              }
                flag1=false;
                break;
                
              }
          }

        }
        if(5<b && b<9){
            for(var j=6; j<9; j++){
              if(array_values[i][j]==Number(e)){
                for(var l=0; l<input_v.length; l++){
                if(input_v[l].id == (i*9)+j){
                  input_v[l].style.color = "red";
                }
              }
                
                flag1=false;
                break;
              }
          }

        }
      }
    }
  
  return flag1;
  }

  function ans(n){
    console.log(n);
  }
  


