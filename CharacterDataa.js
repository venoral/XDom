//为了不和引擎中原生接口名冲突，命名采取相似仅为演示理解就好
//组合继承
function Objectt(){
  //...
}

function EventTargett(){
  //...
}

//Node
function Nodee(mydata){
  if(this instanceof Textt){
    CharacterDataa.prototype.data=mydata;
    EventTargett.call(this,mydata);
    //...需要给text添加属性的话
  }
  else{
    Object.defineProperties(this,{
      data:{
        configurable:true,
        enumerable:true,
        set:function(protodata){
          mydata=protodata;
        },
        get:function(){
          return mydata;
        }
      },
      length:{
        configurable:true,
        enumerable:true,
        set:undefined,
        get:function(){}
      },
      previousElementSibling:{
        configurable:true,
        enumerable:true,
        set:undefined,
        get:function(){}
      },
      nextElementSibling:{
        configurable:true,
        enumerable:true,
        set:undefined,
        get:function(){}
      }
    });
    /*this.substringData=substringData;
    this.appendData=appendData;
    this.insertData=insertData;
    this.deleteData=deleteData;
    this.replaceData=replaceData;
    this.remove=remove;*/
  }
}
Nodee.prototype=new EventTargett();
Nodee.prototype.constructor=Nodee;
Nodee.prototype.__proto__=EventTargett.prototype;


//CharacterData
function CharacterDataa(mydata){
  //给文本节点自身添加属性
  if(this instanceof Textt){
    Nodee.call(this,mydata);
    //...需要给text添加属性的话
  }
  //原型上的属性
  else{
    Object.defineProperties(this,{
    wholeText:{
      configurable:true,
      enumerable:true,
      set:undefined,
      get:function(){}
    }
  });
  /*this.splitText=splitText;
  this.getDestinationInsertionPoints=getDestinationInsertionPoints;*/
  }
}
CharacterDataa.prototype=new Nodee();
CharacterDataa.prototype.constructor=CharacterDataa;
CharacterDataa.prototype.__proto__=Nodee.prototype;

//Text
function Textt(mydata){
  CharacterDataa.call(this,mydata);
  //...如果需要给文本节点text自身添加属性的话
}
Textt.prototype=new CharacterDataa();
Textt.prototype.constructor=Textt;
Textt.prototype.__proto__=CharacterDataa.prototype;


//export接口
Document.prototype.createTextNode=function(mydata){
  if(arguments.length==0){
    return 'error';
  }
  return new Textt(arguments[0].toString());
}


//使用
var text1=document.createTextNode('hello');
text1.data;// "hello"
text1.hasOwnProperty('data');// false;
CharacterDataa.prototype.hasOwnProperty('data');// true


