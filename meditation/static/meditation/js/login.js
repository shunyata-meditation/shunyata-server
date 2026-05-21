/**
 * Shunyata Meditation API - Login Page
 * Handles user authentication and redirect logic
 */

const form = document.getElementById('login-form');
const submitBtn = document.getElementById('submit-btn');
const messageContainer = document.getElementById('message-container');

/**
 * Display a message to the user
 */
function showMessage(message, type) {
    messageContainer.innerHTML = `<div class="message ${type}">${message}</div>`;
}

/**
 * Get redirect URL from query parameter or default to /timer
 */
function getRedirectUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const next = urlParams.get('next');
    return next || '/timer';
}

/**
 * Handle login form submission
 */
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    messageContainer.innerHTML = '';

    const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Logging in...';

    try {
        const response = await fetch('/api/auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            // Store tokens
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            
            showMessage('Login successful! Redirecting...', 'success');
            
            // Redirect after short delay
            setTimeout(() => {
                window.location.href = getRedirectUrl();
            }, 1000);
        } else {
            // Show error message
            const errorMessage = data.detail || data.message || 'Invalid username or password. Please try again.';
            showMessage(errorMessage, 'error');
        }
    } catch (error) {
        showMessage('An error occurred. Please try again later.', 'error');
        console.error('Login error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Login';
    }
});

/**
 * Check if already logged in on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('access_token');
    if (token) {
        // Already logged in, redirect
        window.location.href = getRedirectUrl();
    }
});
