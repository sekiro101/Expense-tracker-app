//This selects the 1st text input
const names = document.querySelector('.text');

//This selects the date input
const date = document.querySelector('.date');

//This selects the 2nd text input(amount)
const amount = document.querySelector('.amount');   

//This selects the "<tbody> </tbody>" tag
const tbody = document.querySelector('tbody');

//This selects the submit button
const submit = document.querySelector('#submit');//This

//this selects row class in the "<tbody> </tbody>" tag
const cr = document.querySelector('.row');

//this event will take action when the submit is clicked on
function addExpense(event){
    event.preventDefault();

//A row in the "<tbody> </tbody>" tag is created when and the values typed in the input are stored in it
    const rows = document.createElement('tr');    
    rows.innerHTML =`<td>${names.value}</td>
                    <td>${date.value}</td>
                    <td>${amount.value}</td>`

//Conditions are set to determine wheather inputs in the form are filled or not
    if(!names.value && !date.value && !amount.value){
        alert(`Please fill out the form`);
    }
    else if(!names.value && !date.value){
        alert(`The purchased item and date was not specified!`);
    }
    else if(!date.value && !amount.value){
        alert(`The date and amount spent wasn't given`);
    }
    else if(!names.value && !amount.value){
        alert(`The purchased item and amount spent wasn't given!`);
    }
        else if(!amount.value){
        alert(`The amount spent wasn't given!`);
    }
    else if(!names.value){
        alert(`The purchased item wasn't given!`);
    }
    else if(!date.value){
        alert(`The date was not specified!`);
    }
    else{
        tbody.appendChild(rows);//Stores the values in the form in the table on the screen
        cr.remove();//Removes message "No expenses added yet when form is filled out"
    }

//Deletes or removes expenses from the table on the screen
    const remove = document.createElement('span');
    remove.innerHTML = '<button class="remove">X</button>'

    rows.appendChild(remove);

    remove.addEventListener('click', function(){
        rows.remove();
    })

//This does not work    
    if(!rows){
        const cr =document.querySelector('tr')
        cr.textContent = 'No epxenses added yet';
        tbody.appendChild(cr);
    }
    console.log(rows.textContent);
    
}

//This causes the event when the submit button is clicked on
submit.addEventListener('click', addExpense);
