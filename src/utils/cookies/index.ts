export function setCookie(key: string, value: string, age?: number){
  document.cookie = `${key}=${value}; max-age=${age ?? 31536000}`; // 1 year
}

export function getCookie(key: string) {
  const cookieValue = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : null;
}

export function deleteCookie(key: string) {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}