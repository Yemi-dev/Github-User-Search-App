class Github {
    constructor() {
        this.client_id = '6f8246ea751e7aad32e8';
        this.client_secret = 'b6a447976456a68c80b732c421d71302a7151e11';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
 
     async getUsers(user) {
         const profileResponse = await fetch (`https://api.github.com/users/${user}`);
         const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

 
         const profile = await profileResponse.json();
         const repos = await repoResponse.json();
        //  console.log(repos)
 
         return {
             profile,
             repos
         }
    }
    
 }