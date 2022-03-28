class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class= "container mx-auto my-3 bg-light" >
        <div class ="d-flex flex-column ">
        <div class ="col-md-12">
            <img src = ${user.avatar_url} class = "img-fluid mb-4 mb-5" style="max-width: 300px; width: 100%" alt = "avi">
            <a href=${user.html_url} target = "_blank" style=" width: 80%;" class= " btn btn-primary btn-block mb-4 mx-auto"> View Profile </a>
            </div>
        <div class="col-md-12">
            <span class=" badge badge-secondary p-2 mt-3"> Public repos: ${user.public_repos}</span>
            <span class=" badge badge-primary p-2 mt-3"> Public gists: ${user.public_gists}</span>
            <span class=" badge badge-info p-2 mt-3"> Followers: ${user.followers}</span>
            <span class=" badge badge-success p-2 mt-3"> Following: ${user.following}</span>
            <br><br>
        </div> 
        </div>
        </div>
        `
    };

    showRepos(repos) {
        let output = '';

        repos.forEach(repo => {
            output += `
              <div class=" text-light p-4 text-center" style= display: inline-block;">
              <div>
            <div class="text-light text-capitalize text-bold mb-3"> 
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div>
            <span class="badge badge-primary p-2 mb-3">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary p-2 mb-3">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success p-2 mb-3">Forks: ${repo.forks_count}</span>
            </div>
          </div>
              </div>
            `
        })
        document.getElementById('repos').innerHTML= output;
        }

        clearProfile(){
            this.profile.innerHTML = ''
            document.getElementById('repos').innerHTML = ''
        }

        showAlert(message, className){
         this.clearAlert();
         const alertMessage = document.createElement('div');
         alertMessage.className = className;
         alertMessage.classList.add('text-danger')
         document.getElementById('inputSection').insertBefore(alertMessage,document.getElementById('inputSection').lastChild);
         alertMessage.appendChild(document.createTextNode(message));

         setTimeout(() => {
            this.clearAlert();
         }, 2000)
        } 

        clearAlert(){
            const currentAlert = document.querySelector('.alert');
            // console.log(currentAlert)
            if(currentAlert){
                currentAlert.remove();
                // console.log('there is an alert')
            }
        }

        load(){
            const loader = document.getElementById('loaderSection')
            loader.classList.remove('d-none');

            setTimeout(() => {
                this.clearLoad();
            },1000)
        }

        clearLoad(){
            const loader = document.getElementById('loaderSection')
            loader.classList.add('d-none')
        }
    }
