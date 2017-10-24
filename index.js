$(document).ready(function () {
    $('#submitButton').click(function () {
        var array = [];
        for(var i = 0; i < 10; i++) {
            for(var j = 0; j <= 3; j++){
                if($(`input:radio[name="question${i+1}"]`)[`${j}`].checked){
                    array.push(`${i+1}-${j+1}`);
                }
            }
        }
        if(array.length < 10){
            alert('Вы не ответили на все вопросы!');
        } else if(!$('#vkId')[0].value || isNaN(+$('#vkId')[0].value)){
            alert('id Вконтакте должно быть заполнено и состоять только из цифр!');
        }
        console.log(array, + $('#vkId')[0].value)
    });
});