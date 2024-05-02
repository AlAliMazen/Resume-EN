function sendEmail() {
    console.log("listening")
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("emailaddress").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("projectsummary").value;

    console.log(name,"  ",email," ",subject," ",message)

    var mailtoLink = "mailto:" + "al.ali.mazen@outlook.com" +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent("Name: " + name + "\n\n"+"Email: "+email+"\n\n"+"Subject: "+subject+"\n\n"+"Message: " + message);

    // Open default email client with pre-populated email
    window.location.href = mailtoLink;
}
