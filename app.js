// Init Github class
const github = new Github;
const ui = new UI;

document.getElementById('searchInput').addEventListener('keyup', searchUser);


// Search User event
function searchUser(e) {
const text = e.target.value;
console.log(text);
if (text !== '') {
    github.getUsers(text).then (data => {
        if (data.profile.message === 'Not Found'){
            // Show Alert
            ui.showAlert('Oops! This user was not found', 'alert');
            ui.clearProfile();
        } 
        else {
            // Show Profile
           ui.load();
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
        //    console.log(data.repos)
        }
    })
}
else {
    // Clear Profile
  ui.clearProfile();
} 
};
