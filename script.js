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
    let resultID;
    let resultTitle;
    // let resultImage;

    const titles = {
        aot: 'Attack on Titan',
        fmab: 'Fullmetal Alchemist Brotherhood',
        mha: 'My Hero Academia',
        mob: 'Mob Psycho 100',
        fate: 'Fate/Stay Night: Unlimited Blade Works',
        fire: 'Fire Force',
        killLaKill: 'Kill la Kill',
        bbb: 'Blood Blockade Battlefront',
        nigewaka: 'The Elusive Samurai',
        lycoris: 'Lycoris Recoil',
        noragami: 'Noragami',
        tbhx: 'To Be Hero X',
        windBreaker: 'Wind Breaker',
        csm: 'Chainsaw Man',
        demonSlayer: 'Demon Slayer',
        jjk: 'Jujutsu Kaisen',
        onePunch: 'One Punch Man',
        dandadan: "Dandadan",
        hxh: 'Hunter x Hunter',
        jigokuraku: "Hell's Paradise",
        tabitabi: 'Wandering Witch',
        op: 'One Piece',
        jojo: "JoJo's Bizarre Adventure",
        frieren: "Frieren: Beyond Journey's End",
        mushoku: "Mushoku Tensei",
        reCreators: 'Re:Creators',
        partTimer: 'The Devil is a Part-Timer!',
        log: 'Log Horizon',
        slime: 'That Time I Got Reincarnated as a Slime',
        overlord: 'Overlord',
        reZero: 'Re: Zero - Starting Life in Another World',
        gridman: 'SSSS.Gridman',
        gurrenLagann: "Gurren Lagann",
        86: '86',
        vivy: "Vivy: Fluorite Eye's Song",
        guiltyCrown: 'Guilty Crown',
        mercury: "Mobile Suit Gundam: The Witch from Mercury",
        psychoPass: "Psycho-Pass",
        akudama: "Akudama Drive",
        horimiya: "Horimiya",
        bunny: "Rascal Does Not Dream of Bunny Girl Senpai",
        nisekoi: "Nisekoi",
        chuni: "Love, Chunibyo & Other Delusions!",
        kaguya: "Kaguya-sama: Love Is War",
        april: "Your Lie in April",
        oregairu: "My Teen Romantic Comedy SNAFU",
        plastic: "Plastic Memories",
        toradora: "Toradora!",
        fruits: "Fruits Basket",
        makeine: "Makeine: Too Many Losing Heroines!",
        yamada: "My Love Story with Yamada-kun at Lv999",
        fragrant: "The Fragrant Flower Blooms with Dignity",
        hundred: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You",
        tonikawa: "Tonikawa: Over the Moon For You",
        wotakoi: "Wotakoi: Love Is Hard for Otaku",
        yuruYuri: "YuruYuri",
        magiRev: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady",
        yuriOnIce: "Yuri on Ice",
        bananaFish: "Banana Fish",
        watanare: "There's No Freaking Way I'll be Your Lover! Unless...",
        adaShima: "Adachi and Shimamura",
        bloom: "Bloom Into You",
        watatabe: "This Monster Wants to Eat Me",
        sasaki: "Sasaki and Miyano",
        given: "Given"
    }

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
                    // console.log(`result is ${answerID}`);
                    showResult(answerID);
                } else {
                    questionSelector(answerID);  

                    if (next === true) {
                        changeDisplay(nextQuestion);
                    } else {
                        // console.log(`result is ${answerString}`);
                        showResult(answerString);
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
                case 'sciFi': questionSciFi(); break;
                case 'romance': questionRomance(); break;
                case 'horror': questionsHorror(); break;
                case 'sports': questionSports(); break;
                case 'drama': questionDrama(); break;
                case 'mystery': questionMystery(); break;
                case 'music1': questionMusic1(); break;
                case 'comedy': questionComedy(); break;
                case 'sliceOfLife': questionSlice(); break;
                case 'music2': questionsMusic2(); break;
            }
        }
    }

    function questionsMusic2() {
        if (counter === 2) {
            nextQuestion = '-popular';
        } else if (answers[2] === 'pop') {
            if (counter === 3) {
                nextQuestion = '-length'
            } else {
                next = false;
            }
        } else {
            nextQuestion = answerString;
        }
    }

    function questionSlice() {
        if (counter === 2) {
            nextQuestion = '-slice';
        } else if (answers[2] === 'sliceRelax') {
            if (counter === 3) {
                nextQuestion = '-world';
            } else if (answers[3] === 'fantasyWorld') {
                next = false;
            } else {
                nextQuestion = answerString;
            }
        } else {
            nextQuestion = answerString;
        }
    }

    function questionComedy() {
        if (counter === 2) {
            nextQuestion = '-popular';
        } else if (answers[2] === 'pop') {
            if (counter === 3) {
                nextQuestion = '-jokes';
            } else if (answers[3] === 'nsfw') {
                nextQuestion = answerString;
            } else {
                next = false;
            }
        } else {
            if (counter === 3) {
                nextQuestion = '-emotion';
            } else if (answers[3] === 'notEmotional' && answers[4] === 'subculture') {
                if (counter === 5) {
                    nextQuestion = '-jokes';
                } else {
                    next = false;
                }
            } else {
                nextQuestion = answerString;
            }
        }
    }

    function questionMusic1() {
        if (counter === 2) {
            nextQuestion = '-popular';
        } else if (answers[2] === 'niche') {
            nextQuestion = answerString;
        } else if (answers[2] === 'pop') {
            if (counter === 3) {
                nextQuestion = '-length';
            } else {
                next = false;
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
                if (answers[3] === 'pop' && answers[4] === 'completed') {
                    nextQuestion = '-emotion';
                } else {
                    nextQuestion = '-harem';
                }
                
            } else if (counter < 8) {
                if (answers[3] === 'pop' && answers[4] === 'completed' && counter === 6) {
                    next = false;
                } else if (answers[4] === 'completed' && answers[5] === 'notHarem') {
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
            } else if (counter === 6 && answers[2] === 'niche' && answers[3] === 'completed' && answers[4] === 'serious' && answers[5] === 'animation') {
                next = false;
            } else if( counter === 6 && answerString === '-type1-action-pop-continued-serious-plot') {
                next = false;
            } else {
                nextQuestion = answerString;
            }
        }
    }

    function showResult(answer) {
        const result = document.querySelector(`#result`);
        const titleDisplay = document.querySelector('#result h3'); 
        
        console.log(answer);

        resultSelection(answer);

        // console.log(`titles.${resultID}`);
        resultTitle = titles[resultID];
        // resultImage = images.resultID;
        console.log(resultTitle);
        // console.log(resultImage);

        // result.innerHTML += `<img src="images/img${answerString}.jpg" class="resultImg">`;
        // result.innerHTML += '<button id="reset">Give me another anime</button>';

        //add h3 anime title
        titleDisplay.innerHTML = `${resultTitle}`;


        result.innerHTML += `<div class="side"><img src="images/${resultID}.jpg" class="resultImg"> <button id="reset">Give me another anime</button></div>`

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

    function resultSelection(answer) {
        switch (answer) {
            case '-type1-action-pop-completed-serious-growPower':
                resultID = 'aot';

                // resultTitle = titles.aot;
                // resultImage = 'aot';
                break;
            case '-type1-action-pop-completed-serious-growMature':
                // resultTitle = titles.fmab;
                // resultImage = 'fmab';
                resultID = 'fmab';
                break;
            case '-type1-action-pop-completed-comedic-growPower':
                // resultTitle = titles.mha;
                resultID = 'mha';
                break;
            case '-type1-action-pop-completed-comedic-growMature': 
                // resultTitle = titles.mob;
                resultID = 'mob';
                break;
            case '-type1-action-niche-completed-serious':
                // resultTitle = titles.fate;
                resultID = 'fate';
                break;
            case '-type1-action-niche-completed-comedic-animation':
                // resultTitle = titles.fire;
                resultID = 'fire';
                break;
            case '-type1-action-pop-continued-serious-plot':
                resultID = 'csm';
                break;
            case '-type1-fantasy-adventure-niche-adventureAction-completed':
                resultID = 'hxh';
                break;
            case '-type1-fantasy-adventure-niche-adventureAction-continued':
                resultID = 'jigokuraku';
                break;
            case '-type1-fantasy-adventure-niche-adventureSlow':
                resultID = 'tabitabi';
                break;
            case '-type1-fantasy-adventure-pop-adventureAction-comedic':
                resultID = 'op';
                break;
            case '-type1-fantasy-adventure-pop-adventureAction-serious':
                resultID = 'jojo';
                break;
            case '-type1-fantasy-adventure-pop-adventureSlow':
                resultID = 'frieren';
                break;
            case '-type1-fantasy-isekai-niche-serious-standard':
                resultID = 'mushoku';
                break;
            case '-type1-fantasy-isekai-niche-serious-reverse':
                resultID = 'reCreators';
                break;
            case '-type1-fantasy-isekai-niche-comedic-reverse':
                resultID = 'partTimer';
                break;
            case '-type1-fantasy-isekai-niche-comedic-standard':
                resultID = 'log';
                break;
            case '-type1-fantasy-isekai-pop-comedic':
                resultID = 'slime';
                break;
            case '-type2-romance-normal-pop-continued-notHarem-romFast':
                resultID = 'horimiya';
                break;
            case '-type2-romance-normal-pop-continued-harem-romFast':
                resultID = 'bunny';
                break;
            case '-type2-romance-normal-pop-continued-harem-romSlow':
                resultID = 'nisekoi';
                break;
            case '-type2-romance-normal-pop-continued-notHarem-romSlow-single':
                resultID = 'chuni';
                break;
            case '-type2-romance-normal-pop-continued-notHarem-romSlow-multiple':
                resultID = 'kaguya';
                break;
            case '-type2-romance-normal-pop-completed-emotional':
                resultID = 'april';
                break;
            case '-type2-romance-normal-pop-completed-notEmotional':
                resultID = 'oregairu';
                break;
            case '-type2-romance-normal-niche-completed-notHarem-emotional':
                resultID = 'plastic';
                break;
            case '-type2-romance-normal-niche-completed-notHarem-notEmotional':
                resultID = 'toradora';
                break;
            case '-type2-romance-normal-niche-completed-harem':
                resultID = 'fruits';
                break;
            case '-type2-romance-normal-niche-continued-harem-romSlow':
                resultID = 'makeine';
                break;
            case '-type2-romance-normal-niche-continued-notHarem-romSlow-ageGap':
                resultID = 'yamada';
                break;
            case '-type2-romance-normal-niche-continued-notHarem-romSlow-noAgeGap':
                resultID = 'fragrant';
                break;
            case '-type2-romance-normal-niche-continued-harem-romFast':
                resultID = 'hundred';
                break;
            case '-type2-romance-normal-niche-continued-notHarem-romFast-single':
                resultID = 'tonikawa';
                break;
            case '-type2-romance-normal-niche-continued-notHarem-romFast-multiple':
                resultID = 'wotakoi';
                break;
            case '-type2-romance-yuri-pureRom-comedic-harem':
                resultID = 'watanare';
                break;
            case '-type2-romance-yuri-pureRom-comedic-notHarem':
                resultID = 'adaShima';
                break;
            case '-type2-romance-yuri-pureRom-serious-notHarem':
                resultID = 'bloom';
                break;
            case '-type2-romance-yuri-pureRom-serious-harem':
                resultID = 'watatabe';
                break;
            case '-type2-romance-yaoi-pureRom-ageGap':
                resultID = 'sasaki';
                break;
            case '-type2-romance-yaoi-pureRom-noAgeGap':
                resultID = 'given';
                break;
            default:
                resultID = answer;
        }
    }
}());