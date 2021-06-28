export function getFullYear () { 
    const d = new Date();
    return d.getFullYear();
}

export function getFooterCopy(isIndex) {
    if (isIndex) {
      return "Holberton School";
    }
    return "Holberton School main dashboard";
}