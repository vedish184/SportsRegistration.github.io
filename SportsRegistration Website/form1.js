const firebaseConfig = {
    apiKey: "AIzaSyCo6T5WCfTfRg42-fFQ6ZFO3th8dhjISUo",
    authDomain: "form-c5af6.firebaseapp.com",
    databaseURL: "https://form-c5af6-default-rtdb.firebaseio.com",
    projectId: "form-c5af6",
    storageBucket: "form-c5af6.appspot.com",
    messagingSenderId: "610470319011",
    appId: "1:610470319011:web:5b7a63246d18140c2c0016"
};

// for initialize firebase
firebase.initializeApp(firebaseConfig);

// creating reference for database
const contactFormDB=firebase.database().ref('contactform')

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name=getElementByVal('name');
    var emailid=getElementByVal('emailid');
    var msgContent=getElementByVal('msgContent');
    // console.log(name,emailid,msgContent);

    saveMessages(name,emailid,msgContent);

    //enable the alert message
    document.querySelector(".alert").style.display='block';
    
    //remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display='none';
        
    }, 3000);

    //reset the form
    document.getElementById('contactForm').reset();

}

const saveMessages=(name,emailid,msgContent)=>{
    var newContactForm=contactFormDB.push();
    newContactForm.set({
        name:name,
        emailid:emailid,
        msgContent:msgContent
    });
};

const getElementByVal=(id)=>{
    return document.getElementById(id).value;
};

