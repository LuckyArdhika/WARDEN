export const validateEmail = (email: string) => {
  // Email validation logic
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? '' : 'Invalid email';
};

export const validatePassword = (password: string) => {
  // Password validation logic
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z\d\s]).{8,}$/;
  return passwordRegex.test(password) ? '' : 'Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a digit, and a special character.';
};