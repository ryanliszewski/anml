//Valid email aaaaaa@something.com
export function validEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// capital letter and number
export function validPassword(password){
  const re = /^[A-Za-z\d]{8,}$/;
  return re.test(password);
}

//a-z, 0-9, underscore, hyphen, 5-15 characters
export function validUsername(username){
  const re = /^[a-zA-Z0-9-_\!\@\#\$\%\^&\*]{5,15}$/;
  return re.test(username)
}

export const VALID_PASSWORD = "A password must have 8 or more characters. "
export const VALID_EMAIL = "Enter a valid email"
export const VALID_USERNAME = "A username must have 5-15 characters"

