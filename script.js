function wordcount(){
    var word = document.getElementById('txtarea').value;
    var count = word.split(/[^\s]+/).length - 1;
    document.getElementById("text").innerHTML=count;
    var num=document.getElementById("get").value
    document.getElementById("left").innerHTML=num-count;
}
