(function () {

    let user = {
        gender: null,
        weight: null,
        height: null,
        age: null,
        activityLevel: null
    };
    let selectTags = document.getElementsByTagName('select');
    let conclusionOutputTags = document.querySelectorAll('.personal-cal .conclusion .cal, .personal-daily-section .conclusion .cal');
    let errorMessageTags = document.querySelectorAll('.personal-cal .message, .personal-daily-section .message');

    // assuming user object with weight (in lbs), height (in inches), age, activityLevel (sedentary, light, moderate, very, extreme), gender
    function calculateCalories(user) {

        // Formula
        // See Mifflin - St Jeor Formula at http://www.freedieting.com/calorie_needs.html
        // Female: ((10 x weight (kg)) + (6.25 x height (cm)) - (5 x age (y)) - 161) X activityFactor;
        // Male: ((10 x weight (kg)) + (6.25 x height (cm)) - (5 x age (y)) + 5) X activityFactor;

        if (!user || !user.gender) return 2000; // return default cals if no gender info

        // set defaults
        let weight = 70.760352; // 156 pounds in kg
        let height = 167.64; // 5 6' in centimeters
        let age = 37;
        let activityFactor = 1.55; // Moderate activity

        //set params
        weight = user.weight;
        height = user.height;
        age = user.age;
        activityFactor = user.activityLevel;

        // set specific to the user
        // if (user.weight) weight = parseInt(user.weight) * 0.453592; // converts lbs to kgs for formula
        // if (user.height) height = parseInt(user.height) * 2.54; // converts inches to cm for formula
        if (user.age) age = user.age;

        if (user.activityLevel) {
            // sedentary, light, moderate, very, extreme
            switch (user.activityLevel) {
                case "sedentary":
                    activityFactor = 1.2;
                    break;
                case "light":
                    activityFactor = 1.375;
                    break;
                case "moderate":
                    activityFactor = 1.55;
                    break;
                case "very":
                    activityFactor = 1.725;
                    break;
                case "extreme":
                    activityFactor = 1.9;
                    break;
                default:
                    activityFactor = 1.55;
            }
        }

        if (user.gender == 'female') return parseInt(((10 * weight) + (6.25 * height) - (5 * age) - 161) * activityFactor);
        else if (user.gender == 'male') return parseInt(((10 * weight) + (6.25 * height) - (5 * age) + 5) * activityFactor);

        // else, return default
        else return 2000;
    }

    for (let i = 0; i < selectTags.length; i++){
        let selectTag = selectTags[i];

        function formulaValues (event) {
            if(selectTag.getAttribute('name') == 'selectAge'){
                user.age = selectTag.value;
                this.parentNode.querySelector('.jcf-select-text span').innerHTML = event.target.value + ' yrs';
            }
            if(selectTag.getAttribute('name') == 'selectWeight') user.weight = selectTag.value;
            if(selectTag.getAttribute('name') == 'selectHeight') user.height = selectTag.value;
            if(selectTag.getAttribute('name') == 'selectGender') user.gender = selectTag.value;
            if(selectTag.getAttribute('name') == 'selectActivity') user.activityLevel = selectTag.value;
            conclusion();
        }
        selectTag.addEventListener('change', formulaValues);
    }

    function errorMessagesShow() {
        for(let i = 0; i < errorMessageTags.length; i++ ){
            errorMessageTags[i].style.display = 'block';
        }
    }

    function errorMessagesHide() {
        for(let i = 0; i < errorMessageTags.length; i++ ){
            errorMessageTags[i].style.display = 'none';
        }
    }

    function conclusion() {
        for (let i = 0; i < conclusionOutputTags.length; i++){
            let element = conclusionOutputTags[i];
            if(user.age == null || user.age == '' || user.weight == null || user.weight == '' || user.height == null || user.height == '' || user.gender == null || user.gender == '' || user.activityLevel == null || user.activityLevel == ''){
                element.innerHTML = 2000 + 'cal';
                errorMessagesShow();
            }else {
                element.innerHTML = calculateCalories(user) + 'cal';
                errorMessagesHide();
            }
        }
    }

}());