export class AuthService{
    loggedIn:boolean=false

    login(){
        this.loggedIn=true
        alert("Login Successfull you can access Courses Details")
    }
    logout(){
        this.loggedIn=false
        alert("Logout Successfull you can not access Courses Details")

    }

    IsAuthenticated(){
        return this.loggedIn
    }
}