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
            alert('Вы не ответили на все вопросы!!!')
        } else if(!$('#vkId')[0].value || isNaN(+$('#vkId')[0].value)){
            alert('id Вконтакте должно быть заполнено и состоять только из цифр!');
        } else {
            fetch('https://immense-sierra-97794.herokuapp.com/',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    answers: array,
                    id: $('#vkId')[0].value
                })
            })
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                console.log(res);
            });
        }
    });
});