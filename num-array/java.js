function armazenarNum () {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let num3 = document.getElementById("input3").value;
    let num4 = document.getElementById("input4").value;
    var array = [num1,num2,num3,num4];
    console.log(array);
    return array;
}
function inverso () {
    let array = armazenarNum();
    array1 = array[0];
    array2 = array[1];
    array3 = array[2];
    array4 = array[3];
    document.getElementById("inverso").innerHTML = "[" + array4 + ", " + array3 + ", " + array2 + ", " + array1 + "]";
}
function crescente () {
    let array = armazenarNum();
    array.sort ();
    array1 = array[0];
    array2 = array[1];
    array3 = array[2];
    array4 = array[3];
    document.getElementById("crescente").innerHTML = "[" + array1 + ", " + array2 + ", " + array3 + ", " + array4 + "]";
}
