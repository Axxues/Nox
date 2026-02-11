//------------------SHARED CONFIGURATION------------------
const errorClasses = ['!border-red-500', 'focus:!ring-red-500/30'];
const successClasses = ['!border-green-500/50', 'focus:!ring-green-500/30'];

//------------------Universal Validation Engine------------------
const validate = (input, passInput = null) => {
    const group = input.closest('.group');
    if (!group) return true;

    const errorMsg = group.querySelector('.error-msg');
    const successIcon = group.querySelector('.validation-icon');
    let isValid = input.checkValidity();
    let msg = input.validationMessage;

    //Custom UI Overrides
    if (input.validity.valueMissing) msg = 'Required';
    else if (input.validity.typeMismatch) msg = 'Invalid email';
    else if (input.validity.tooShort) msg = `Min ${input.minLength} characters`;

    if (input.id === 'confirm' && passInput) {
        if (input.value !== passInput.value) {
            isValid = false;
            msg = "Passwords don't match";
        }
    }

    if (!isValid) {
        input.classList.add(...errorClasses);
        input.classList.remove(...successClasses);
        if (errorMsg) { errorMsg.textContent = msg; errorMsg.classList.remove('hidden'); }
        if (successIcon) successIcon.classList.add('opacity-0');
    } else {
        input.classList.remove(...errorClasses);
        input.classList.add(...successClasses);
        if (errorMsg) errorMsg.classList.add('hidden');
        if (successIcon) successIcon.classList.remove('opacity-0');
    }
    return isValid;
};

//------------------Global Listeners------------------
document.querySelectorAll('input').forEach(input => {

    input.addEventListener('blur', () => {
        const passRef = document.getElementById('password');
        validate(input, passRef);
    });

    //Real-time error clearing
    input.addEventListener('input', () => {
        if (input.classList.contains('!border-red-500')) {
            input.classList.remove(...errorClasses);
            const group = input.closest('.group');
            if (group && group.querySelector('.error-msg')) group.querySelector('.error-msg').classList.add('hidden');
        }
    });
});


//------------------Form Specific Logic------------------
//LOGIN FORM
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const toggleBtn = document.getElementById('togglePassword');
    const passInput = document.getElementById('password');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const type = passInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passInput.setAttribute('type', type);
            toggleBtn.style.opacity = type === 'text' ? '1' : '0.7';
        });
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        loginForm.querySelectorAll('input').forEach(i => { if (!validate(i)) valid = false; });

        if (valid) {
            const btn = loginForm.querySelector('button[type="submit"]');
            btn.innerHTML = '<span class="animate-pulse">Processing...</span>';
            setTimeout(() => alert('Login Successful!'), 1000);
        } else {
            const card = document.getElementById('loginCard');
            card.classList.remove('animate-shake'); void card.offsetWidth; card.classList.add('animate-shake');
        }
    });
}

//REGISTER FORM
const regForm = document.getElementById('registerForm');
if (regForm) {
    const passInput = document.getElementById('password');
    const strengthBar = document.getElementById('strengthBar');
    const termsInput = document.getElementById('terms');

    //Strength Meter
    passInput.addEventListener('input', () => {
        const v = passInput.value;
        let s = 0;
        if (v.length > 5) s++; if (v.length > 8) s++; if (/[A-Z]/.test(v)) s++; if (/[0-9]/.test(v)) s++; if (/[^A-Za-z0-9]/.test(v)) s++;
        const w = s === 0 ? '0%' : (s * 20) + '%';
        let c = 'bg-red-500'; if (s > 2) c = 'bg-yellow-500'; if (s > 4) c = 'bg-green-500';
        strengthBar.style.width = w; strengthBar.className = `h-full transition-all duration-500 ease-out ${c}`;
    });

    //Checkbox listener
    if (termsInput) {
        termsInput.addEventListener('change', () => {
            const box = document.getElementById('termsBox');
            const text = document.getElementById('termsText');
            const icon = document.getElementById('checkIcon');
            if (termsInput.checked) {
                box.classList.remove('!border-red-500');
                box.classList.add('bg-nox-accent', 'border-nox-accent');
                text.classList.remove('text-red-500');
                icon.classList.remove('opacity-0');
            } else {
                box.classList.remove('bg-nox-accent', 'border-nox-accent');
                icon.classList.add('opacity-0');
            }
        });
    }

    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        regForm.querySelectorAll('input:not([type="checkbox"])').forEach(i => { if (!validate(i, passInput)) valid = false; });

        if (!termsInput.checked) {
            valid = false;
            document.getElementById('termsBox').classList.add('!border-red-500');
            document.getElementById('termsText').classList.add('text-red-500');
        }

        if (valid) {
            regForm.querySelector('button[type="submit"]').innerHTML = 'Creating Account...';
            setTimeout(() => alert('Registration Successful!'), 1000);
        } else {
            const card = document.getElementById('registerCard');
            card.classList.remove('animate-shake'); void card.offsetWidth; card.classList.add('animate-shake');
        }
    });
}

//RESET PASSWORD FORM
const resetForm = document.getElementById('resetForm');
if (resetForm) {
    resetForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        resetForm.querySelectorAll('input').forEach(i => { if (!validate(i)) valid = false; });

        if (valid) {
            const btn = resetForm.querySelector('button[type="submit"]');
            btn.innerHTML = 'Sending...';
            setTimeout(() => {
                btn.innerHTML = 'Link Sent!';
                btn.classList.replace('bg-gradient-to-r', 'bg-green-600');
                btn.disabled = true;
            }, 1200);
        } else {
            const card = document.getElementById('resetCard');
            card.classList.remove('animate-shake'); void card.offsetWidth; card.classList.add('animate-shake');
        }
    });
}