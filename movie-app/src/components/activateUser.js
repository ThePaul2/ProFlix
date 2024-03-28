export async function activateUser(userData, email) {
    try {
        const response = await fetch(`http://localhost:8080/users/activate/${email}`, {
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
        // Provide a more descriptive error message
        throw new Error(`Error occurred during user activation: ${error.message}`);
    }
}

