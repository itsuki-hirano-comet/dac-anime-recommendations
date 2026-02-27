(function(){
    'use strict';
    console.log('reading js');
    let answers = [];
    let counter = 0;
    let answerString = '';
    let nextQuestion = '';

    window.addEventListener('load', function(){
        changeDisplay("-1");
    });

    function changeDisplay(questionID) {
        const question = document.querySelector(`#q${questionID}`);
        const options = document.querySelectorAll(`#q${questionID} .options div`)

        question.className = 'on';

        for (const eachOption of options) {
            eachOption.addEventListener('click', function(){
                question.className = 'off';
                // console.log('option 1 chosen');
                const answerID = this.id;
                const answerClass = this.className;

                // console.log(this.className);

                answers[counter] = answerID;
                counter++;
                answerString = `${answerString}-${answerID}`;

                console.log(answerString);
                // console.log(answerID)
                if (answerClass === 'answerFinal') {  
                    showResult(answerString);
                } else {
                    questionSelector(answerID);  
                    // console.log(nextQuestion); 
                    changeDisplay(nextQuestion);
                }
            });
        }     
    }

    function questionSelector(answerID) {
        if (counter === 1) {
            nextQuestion = '-2';
        } else if (answerID === 'action') {
            nextQuestion = '-complete';
        } else {
            nextQuestion = answerString;
        }
    }

    function showResult(answerString) {
        const result = document.querySelector(`#r${answerString}`);
        
        result.className = 'resultOn';

        setTimeout(function(){
            result.innerHTML += '<button class="reset">Give me another anime</button>';

            document.querySelector('.reset').addEventListener('click', function(){
            location.reload();
        });
        }, 1500);
        
        
    }
}());