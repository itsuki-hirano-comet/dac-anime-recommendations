(function(){
    'use strict';
    console.log('reading js');
    let answers = [];
    let counter = 0;
    let answerString = '';
    let nextQuestion = '';
    let next = true;
    const start = document.querySelector('#start');
    const initialText = document.querySelector('#initial');
    

    window.addEventListener('load', function(){
        start.addEventListener('click', function() {
            initialText.className = 'off';
            changeDisplay("-type");
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

                // add true/false variable for final or continue
                // true if answerFinal
                // else question selector (can turn turn var to true)
                // after if var is true display result, if false nextQuestion
                if (answerClass === 'answerFinal') {  
                    // show result
                    // showResult(answerID);
                    console.log(`result is ${answerID}`)
                } else {
                    questionSelector(answerID);  

                    if (next === true) {
                        changeDisplay(nextQuestion);
                    } else {
                        console.log(`result is ${answerString}`);
                        //showResult(answerString);
                    }                    
                }
            });
        }     
    }

    // split question selector by genre
    function questionSelector(answerID) {
        // if (counter === 1) {
        //     nextQuestion = '-2';
        // } else if (answerID === 'action') {
        //     nextQuestion = '-complete';
        // } else {
        //     nextQuestion = answerString;
        // }

        if (counter === 1) {
            nextQuestion = `-${answerID}`;
        } else {
            switch(answers[1]) {
                case 'action': questionAction(); break;
                case 'fantasy': questionFantasy(); break;
                case 'sciFi': questionFantasy(); break;
                case 'romance': questionRomance(); break;
                case 'horror': questionsHorror(); break;
                case 'sports': questionSports(); break;
                case 'drama': questionDrama(); break;
                case 'mystery': questionMystery(); break;
            }
        }
    }

    function questionMystery() {
        if (counter === 3) {
            nextQuestion = '-popular';
        } else if (answers[2] === 'mysteryFantasy') {
            if (counter === 4) {
                nextQuestion = '-length';
            } else if (counter === 5) {
                if ((answers[3] === 'niche' && answers[4] === 'short') || (answers[3] === 'pop' && answers[4] === 'long')) {
                    nextQuestion = '-mysteryType';
                } else {
                    nextQuestion = answerString;
                }
            } else {
                next = false;
            }
            
        } else {
            if (counter === 2) {
                nextQuestion = answerString;
            } else if (counter === 4) {
                if (answers[3] === 'niche') {
                    nextQuestion = answerString;
                } else {
                    next = false;
                }
            } else {    
                next = false;
            }
        }
    }

    function questionDrama() {
        if (counter === 2) {
            nextQuestion = '-emotion';
        } else if(counter === 3) {
            nextQuestion = '-world';
        } else {
            if (answers[2] === 'emotional') {
                next = false;
            } else {
                if (answers[4] === 'dramaSlow') {
                    if (counter === 5) {
                        nextQuestion = '-length';
                    } else {
                        next = false;
                    }
                } else {
                    nextQuestion = answerString;
                }
            }
        }
    }

    function questionSports() {
        if (counter === 2) {
            nextQuestion = '-popular';
        } else {
            nextQuestion = answerString;
        }
    }

    function questionsHorror() {
        if (counter === 2) {
            nextQuestion = '-horror';
        } else {
            nextQuestion = answerString;
        }
    }

    function questionRomance() {
        if (counter === 2) {
            nextQuestion = '-romance';
        } else if (answers[2] === 'normal') {
            if (counter === 3) {
                nextQuestion = '-popular';
            } else if (counter === 4) {
                nextQuestion = '-complete';
            } else if (counter === 5) {
                nextQuestion = '-harem';
            } else if (counter < 8) {
                if (answers[4] === 'completed' && answers[5] === 'notHarem') {
                    if (counter === 6) {
                        nextQuestion = '-emotion';
                    } else {
                        next = false;
                    }             
                } else if (answers[4] === 'continued') {
                    if (counter === 6) {
                        nextQuestion = '-romSpeed';
                    } else if (answers[3] === 'pop' && answers[6] === 'romSlow' && answers[5] === 'notHarem') {
                        nextQuestion = '-couples';
                    } else if (answers[3] === 'niche' && answers[6] === 'romFast' && answers[5] === 'notHarem') {
                        nextQuestion = '-couples';
                    } else if (answers[3] === 'niche' && answers[6] === 'romSlow' && answers[5] === 'notHarem') {
                        nextQuestion = '-ageGap';
                    } else {
                        next = false;
                    }
                } else {
                    next = false;
                }
            } else {
                next = false;
            }
        } else {
            if (counter === 3) {
                nextQuestion = '-romGenre';
            } else if (answers[2] === 'yuri') {
                if (answers[3] === 'pureRom') {
                    if (counter === 4) {
                        nextQuestion = '-serious';
                    } else if (counter === 5) {
                        nextQuestion = '-harem';
                    } else {
                        next = false;
                    }
                } else {
                    // if fused genre
                    nextQuestion = answerString;
                }
            } else {
                // if yaoi
                if (answers[3] === 'pureRom') {
                    if (counter === 4) {
                        nextQuestion = '-ageGap';
                    } else {
                        next = false;
                    }
                } else {
                    nextQuestion = answerString;
                }
            }
            
        } 
    }

    function questionSciFi() {
        if (counter === 2) {
            nextQuestion = '-sciFi';
        } else {
            nextQuestion = answerString;
        }
    }

    function questionFantasy() {
        if (counter === 2) {
            nextQuestion = '-fantasy';
        } else if (counter === 3) {
            nextQuestion = '-popular';
        } else if (counter === 4) {
            if (answers[2] === 'adventure') {
                nextQuestion = '-adventure';
            } if (answers[2] === 'isekai') {
                nextQuestion = '-serious'
            }
        } else if (counter === 5) {
            if (answers[4] === 'adventureSlow') {
                next = false;
            } else if (answers[2] === 'isekai' && answers[3] === 'pop' && answers[4] === 'comedic') {
                next = false;
            } else if (answers[4] === 'adventureAction' && answers[3] === 'niche') {
                nextQuestion = '-complete';
            } else if (answers[2] === 'isekai' && answers[3] === 'pop' && answers[4] === 'serious') {
                nextQuestion = '-isekaiMC'
            } else if (answers[2] === 'isekai' && answers[3] === 'niche') {
                nextQuestion = '-isekaiType'
            } else {
                nextQuestion = '-serious'
            }
        } else if (counter === 6) {
            next = false;
        }
    }

    function questionAction() {
        if (counter === 2) {
            nextQuestion = '-popular';
        } else if (counter === 3) {
            nextQuestion = '-complete';
        } else if (counter === 4) {
            nextQuestion = '-serious';
        } else if (counter >= 5) {
            if (counter === 5 && answers[2] === 'pop' && answers[3] === 'continued' && answers[4] === 'serious') {
                nextQuestion = '-plot';
            } else if (counter === 5 && answers[2] === 'niche' && answers[3] === 'completed' && answers[4] === 'comedic') {
                nextQuestion = '-plot';
            } else if (counter === 5 && answers[2] === 'pop' && answers[3] === 'completed') {
                nextQuestion = '-mc';
            } else if (counter === 6 && answers[2] === 'pop' && answers[3] === 'completed'){
                next = false;
            }else if (counter === 5 && answers[2] === 'niche' && answers[3] === 'completed' && answers[4] === 'serious') {
                next = false;
            } else {
                nextQuestion = answerString;
            }
        }
    }

    function showResult(answer) {
        const result = document.querySelector(`#result`);
        
        

        // result.innerHTML += `<img src="images/img${answerString}.jpg" class="resultImg">`;
        // result.innerHTML += '<button id="reset">Give me another anime</button>';

        //add h3 anime title

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