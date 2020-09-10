
document.addEventListener('DOMContentLoaded', function(){

    var arr = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    var button = document.getElementById('generate')
    var dataForEatch = true
    
    button.addEventListener('click', function () {
        var stringWord = '';
        var arrWord = []
        arrWord.length = 40; 
    
        var step = document.getElementById('slider').value;
        var word = document.getElementById('valueInputText').value
        var resultWord = []
        resultWord.length = 40; 
    
        var output = document.getElementById('output')
        for (let i = 0; i < word.length; i++) {
            var letter = word[i].toLowerCase()
            arrWord.push(letter)
        }
        arrWord.forEach((currentItem) => {
            if (dataForEatch) {
                if ((document.getElementById('uppercase').checked == true) && (document.getElementById('lowercase').checked == true)) {
                    alert('Выберите одну опцию в настройках')
                    dataForEatch = false
                } else {
                    for (let i = 0; i < arr.length; i++) {
                        if ((currentItem == ' ') || (currentItem == '?') || (currentItem == '!') || (currentItem == '.')|| (currentItem == ',') ) {
                            resultWord.push(currentItem)
                        }else{
                            if (arr[i] == currentItem) {
                                let indexArr = arr.map(el => el).indexOf(currentItem);
                                if (document.getElementById('uppercase').checked == true) {
                                    CezarUP(indexArr, i)
                                } else if (document.getElementById('lowercase').checked == true) {
                                    CezarDOWN(indexArr, i)
                                }
                            }
                        }
                    }
                }
            }
        })
        dataForEatch = true
        function CezarUP(indexArr, i) {
            let numArr = indexArr + parseInt(step)
            if (numArr >= 32) {
                console.log(2)
                resultWord.push(arr[numArr - arr.length ])
            } else {
                resultWord.push(arr[numArr])
            }
        }
    
    
        function CezarDOWN(indexArr, i) {
            let numArr = indexArr - parseInt(step)
            if(numArr < 0){
                resultWord.push(arr[numArr + arr.length ] )
            }else
                if (numArr >= 32) {
                    resultWord.push(arr[numArr - arr.length - 1])
                } else {
                    resultWord.push(arr[numArr])
                }
            }
        resultWord.forEach((currentItem) => {
            stringWord = stringWord + currentItem
        })
        output.innerText = stringWord;
    })
    

    
    
    
})




function rangeInput() {
    document.getElementById('stepBlock').innerText = document.getElementById('slider').value;
}