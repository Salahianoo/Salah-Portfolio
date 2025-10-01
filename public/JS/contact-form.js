// Contact Form with EmailJS Integration

// Initialize EmailJS (you'll need to replace these with your actual IDs)
(function(){
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS library not loaded');
        return;
    }
    
    try {
        emailjs.init("s5PeVIYyw_WsA-OtK"); // Your EmailJS public key
        console.log('EmailJS initialized successfully');
    } catch (error) {
        console.error('EmailJS initialization error:', error);
    }
})();

// Form elements
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('.submit-btn');
const btnText = submitBtn.querySelector('.btn-text');
const btnIcon = submitBtn.querySelector('.btn-icon');
const btnLoading = submitBtn.querySelector('.btn-loading');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// Form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.from_name.trim()) {
        errors.push('Name is required');
    }
    
    if (!formData.from_email.trim()) {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.from_email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.subject.trim()) {
        errors.push('Subject is required');
    }
    
    if (!formData.message.trim()) {
        errors.push('Message is required');
    }
    
    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show/hide messages
function showMessage(type, title, text) {
    const messageEl = type === 'success' ? successMessage : errorMessage;
    messageEl.style.display = 'flex';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        messageEl.style.display = 'none';
    }, 5000);
    
    // Scroll to message
    messageEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function hideMessages() {
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';
}

// Button loading state
function setButtonLoading(loading) {
    if (loading) {
        btnText.style.display = 'none';
        btnIcon.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;
    } else {
        btnText.style.display = 'inline';
        btnIcon.style.display = 'inline';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
    }
}

// Form submission handler
contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (submitBtn.disabled) {
        console.log('Form already being processed, ignoring submission');
        return;
    }
    
    // Hide previous messages
    hideMessages();
    
    // Get form data
    const formData = {
        from_name: contactForm.from_name.value,
        from_email: contactForm.from_email.value,
        subject: contactForm.subject.value,
        message: contactForm.message.value
    };
    
    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
        showMessage('error', 'Please fix the following errors:', errors.join(', '));
        return;
    }
    
    // Set loading state
    setButtonLoading(true);
    
    try {
        console.log('Using EmailJS (Gmail SMTP blocked on Render)...');
        await tryEmailJS(formData);
        
    } catch (error) {
        console.error('Contact form error:', error);
        showMessage('error', 'Sending Failed', 'Sorry, there was an error sending your message. Please try again or contact me directly at salahshadi2005@gmail.com');
    } finally {
        // Always reset button state
        setButtonLoading(false);
    }
});

// EmailJS method - sends both emails like the original backend
async function tryEmailJS(formData) {
    // Check if EmailJS is available
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not available');
    }
    
    try {
        // Email 1: Send notification to you
        const notificationParams = {
            to_email: 'salahshadi2005@gmail.com',
            from_name: formData.from_name,
            from_email: formData.from_email,
            reply_to: formData.from_email,
            subject: formData.subject,
            message: formData.message
        };

        console.log('Sending notification to you via EmailJS...');
        const notificationResult = await emailjs.send(
            'service_dp231m8',
            'template_dj5mrn9',
            notificationParams
        );
        console.log('✅ Notification sent:', notificationResult);

        // Email 2: Send auto-reply to user
        const autoReplyParams = {
            to_email: formData.from_email, // Send to the user
            user_name: formData.from_name,
            from_name: 'Salah Shadi'
        };

        console.log('Sending auto-reply to user via EmailJS...');
        const autoReplyResult = await emailjs.send(
            'service_dp231m8',
            'template_dj5mrn9', // We'll use the same template but configure it differently
            autoReplyParams
        );
        console.log('✅ Auto-reply sent:', autoReplyResult);

        showMessage('success', 'Message Sent Successfully!', 'Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        
    } catch (error) {
        console.error('EmailJS error:', error);
        
        // Fallback: at least try to send notification to you
        try {
            const basicParams = {
                to_email: 'salahshadi2005@gmail.com',
                from_name: formData.from_name,
                from_email: formData.from_email,
                subject: formData.subject,
                message: formData.message
            };
            
            await emailjs.send('service_dp231m8', 'template_dj5mrn9', basicParams);
            showMessage('success', 'Message Sent!', 'Your message has been sent! (Auto-reply may not have worked)');
            contactForm.reset();
        } catch (fallbackError) {
            throw new Error('EmailJS failed completely');
        }
    }
}

// Fallback method using backend
async function tryBackendSubmission(formData) {
    try {
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            showMessage('success', 'Message Sent Successfully!', 'Thank you for reaching out. I\'ll get back to you soon!');
            contactForm.reset();
        } else {
            throw new Error(result.message || 'Backend submission failed');
        }
        
    } catch (error) {
        console.error('Backend fallback error:', error);
        // Final fallback - mailto link
        sendEmailFallback(formData);
    }
}

// Real-time validation feedback
const inputs = contactForm.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim()) {
            this.style.borderColor = '#00b894';
        } else {
            this.style.borderColor = '#e1e5e9';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = '#667eea';
    });
});

// Add floating label effect
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentNode.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value.trim()) {
            this.parentNode.classList.remove('focused');
        }
    });
    
    // Check if input has value on page load
    if (input.value.trim()) {
        input.parentNode.classList.add('focused');
    }
});

// Fallback method if EmailJS fails
function sendEmailFallback(formData) {
    // Create mailto link as fallback
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
    const body = encodeURIComponent(`
Name: ${formData.from_name}
Email: ${formData.from_email}
Subject: ${formData.subject}

Message:
${formData.message}
    `);
    
    const mailtoLink = `mailto:your-email@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink);
    
    showMessage('success', 'Email Client Opened', 'Your default email client should open with the message pre-filled.');
}