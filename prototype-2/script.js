(function(){
    'use strict';
    console.log('reading js');
    let answers = [];
    let counter = 0;
    let answerString = '';
    let nextQuestion = '';
    const start = document.querySelector('#start');
    const initialText = document.querySelector('#initial');

    window.addEventListener('load', function(){
        start.addEventListener('click', function() {
            initialText.className = 'off';
            changeDisplay("-1");
        });  
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
        
        

        // result.innerHTML += `<img src="images/img${answerString}.jpg" class="resultImg">`;
        // result.innerHTML += '<button id="reset">Give me another anime</button>';
        result.innerHTML += `<div class="side"><img src="images/img${answerString}.jpg" class="resultImg"> <button id="reset">Give me another anime</button></div>`

        setTimeout(function(){
            result.className = 'resultOn';

            document.querySelector('#reset').addEventListener('click', function(){
                location.reload();
            });
        }, 500);

        // this would show result once the image is loaded, which would be better than timeout, except internet might be bad at picnic day so who knows how long it would take to load an image.
        // document.querySelector('.resultImg').addEventListener('load', function(){
        //     result.className = 'resultOn';

        //     document.querySelector('#reset').addEventListener('click', function(){
        //         location.reload();
        //     });
        // })
        
        
    }
}());