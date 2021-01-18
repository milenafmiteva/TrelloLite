export class Init{
    load(){
        if(localStorage.getItem('todo') === null || localStorage.getItem('todo') == undefined){
            console.log('No ToDo Found...Creating...');
            var todo = [
                {
                    text: 'Pickup kids'
                },
                {
                    text: 'Dinner with wife'
                }
            ];

            localStorage.setItem('todo', JSON.stringify(todo));
            return
        } else {
            console.log('Found ToDo...');
        }
    }
}