
const profile = new Profile();
const ui = new UI();

const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener('keyup',(event) =>{

    // Clear all outputs if input text empty
    ui.clear();

    // input value
    let text = event.target.value;
    
    if(text !==''){
        profile.getProfile(text)
            .then(res => {
                if(res.profile.length === 0){
                    ui.showAlert(text);
                }else{
                    // profile[0] was used because the first index of returned 'response expression',produces the data.
                    ui.showProfile(res.profile[0]);
                    ui.showToDo(res.todo);
                }
            }).catch(err =>{
                ui.showAlert(text);
            })
    }
    
})