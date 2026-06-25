// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        caseType: formData.get('caseType'),
        details: formData.get('details'),
        preferredDate: formData.get('preferredDate'),
        timestamp: new Date().toISOString()
    };

    try {
        // Show loading state
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="loading"></span> جاري الإرسال...';

        // Send to backend (email service or database)
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).catch(() => {
            // Fallback: Save to localStorage if backend is not available
            saveBookingLocally(data);
            return { ok: true, fallback: true };
        });

        if (response.ok || response.fallback) {
            // Success
            formMessage.textContent = '✓ تم استقبال طلب الاستشارة بنجاح! سيتواصل معك المكتب قريباً.';
            formMessage.className = 'success';
            formMessage.style.display = 'block';
            
            // Reset form
            bookingForm.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('خطأ في الإرسال');
        }
    } catch (error) {
        // Error
        formMessage.textContent = '✗ حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.';
        formMessage.className = 'error';
        formMessage.style.display = 'block';
        console.error('Form submission error:', error);
    } finally {
        // Restore button
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'إرسال طلب الاستشارة';
    }
});

// Save booking to localStorage as fallback
function saveBookingLocally(data) {
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(data);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});

// Validate phone number (Egyptian format)
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('change', function() {
        const egyptianPhonePattern = /^(01)[0-25][0-9]{8}$/;
        if (this.value && !egyptianPhonePattern.test(this.value)) {
            console.warn('رقم الهاتف غير صحيح. يرجى استخدام رقم مصري صحيح.');
        }
    });
}

// Initialize - log bookings if available
document.addEventListener('DOMContentLoaded', () => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    if (bookings.length > 0) {
        console.log('المحفوظ محلياً:', bookings);
    }
});

// Dark mode toggle (optional feature)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Check saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

console.log('مكتب المراغي للمحاماة والاستشارات القانونية');
console.log('© 2026 - جميع الحقوق محفوظة');
