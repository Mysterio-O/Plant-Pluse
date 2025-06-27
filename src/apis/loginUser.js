export const saveUser = (currentUser, deviceInfo) => {
    return fetch('https://b11a10-server-side-mysterio-o.vercel.app/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInfo: currentUser, deviceInfo })
    });
}