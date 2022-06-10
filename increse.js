function increaseValue() {
    value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 :value;
    value ++ ;
    document.getElementById('number').value = value;
}

function decreaseValue(){
    value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 :value;
    value -- ;
    document.getElementById('number').value = value;
}
