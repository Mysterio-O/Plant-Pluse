export const saveUser = (currentUser, deviceInfo) => {
    return fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInfo: currentUser, deviceInfo })
    });
}