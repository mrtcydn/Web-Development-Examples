
class UI{
    constructor(){
        this.profileContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }

    showProfile(profile){
        // Generate random number for profile photo
        let number = Math.floor((Math.random() * 100) + 1);

        this.profileContainer.innerHTML=`
        <div class="card card-body">
                <div class="row">
                    <div class="col-md-3">
                    <img src="https://randomuser.me/api/portraits/men/${number}.jpg" class="img-thumbnail"/>
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                             <li class="list-group-item">
                                Name : ${profile.name}
                             </li>
                             <li class="list-group-item">
                                Username : ${profile.username}
                             </li>
                             <li class="list-group-item">
                                E-mail : ${profile.email}
                             </li>

                             <li class="list-group-item">
                               Address : ${profile.address.street}
                               ${profile.address.city}
                               ${profile.address.zipcode}
                               ${profile.address.suite}
                             </li>
                             <li class="list-group-item">
                             Phone : ${profile.phone}
                              </li>
                              <li class="list-group-item">
                                Website : ${profile.website}
                             </li>
                             <li class="list-group-item">
                             Company : ${profile.company.name}
                            </li>
                        </ul>
                        <h4 class="mt-4"> ToDo List </h4>
                        <ul id="todo" class="list-group">
                        </ul>
                    </div>
                </div>

            </div>
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`;
    }

    showToDo(todo){
        let html ="";

        todo.forEach(element => {
            if(element.completed){
                html += `<li class="list-group-item bg-success">
                        ${element.title}
                    </li>`
            }else {
                html += `<li class="list-group-item bg-secondary">
                        ${element.title}
                    </li>`
            }
        });
        
        this.profileContainer.querySelector('#todo').innerHTML = html;
    }

    
    clear() {
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
}