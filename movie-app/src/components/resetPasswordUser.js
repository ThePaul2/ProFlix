export async function resetPasswordUser(userData, email) {
    try {
        const response = await fetch(`http://localhost:8080/users/reset-password/${email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        throw new Error('Error occurred during password reset:', error.message); // Concatenate the error message
    }
}

