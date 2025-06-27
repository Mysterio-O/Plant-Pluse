const existingAccounts = () => {
    return JSON.parse(localStorage.getItem('loggedAccounts')) || []
}

export const setAccountToLocalStorage = (accountInfo) => {
    const accounts = existingAccounts();
    const filtered = accounts.filter(acc => acc?.email !== accountInfo?.email);
    const updatedAccounts = [accountInfo, ...filtered];
    return localStorage.setItem('loggedAccounts', JSON.stringify(updatedAccounts));
}

export const getAccountsFromLocalStorage = () => {
    const accounts = localStorage.getItem('loggedAccounts');
    try {
        return accounts ? JSON.parse(accounts) : [];
    } catch (err) {
        console.error('Failed to parse logged accounts from localStorage:', err);
        return [];
    }
};