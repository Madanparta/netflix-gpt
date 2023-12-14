

export const emailValidation = (email) => {
  const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.current.value);
  if(!emailValidation) return "Please enter a valid email address or phone number.";
  return null;
}

export const passwordValidation = (password)=> {
  const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(password.current.value);
  if(!passwordValidation) return "Your password must contain between 4 and 60 characters.";
  if((password.current.value > 4 && password.current.value < 60)) return "Your password must contain between 4 and 60 characters."
  return null;
}

export const nameValidation = (name)=> {
  if(name.current.value === "" ) return "Please enter your Name"
  if((name.current.value.length < 4 && name.current.value.length < 60)) return "Your Name must contain between 4 and 60 characters."
  return null;
}