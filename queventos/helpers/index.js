

const emailValidator = (email)=>{
    const regex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    
    return regex.test(email)
}

const lengthValidator = (string, requiredLength)=>{
    return string.length >= requiredLength
}


export default {
    emailValidator,
    lengthValidator,
};