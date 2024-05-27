document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const countrySelect = document.getElementById('country');
    const regionContainer = document.getElementById('regionContainer');
    const regionSelect = document.getElementById('region');
    const regionText = document.getElementById('regionText');
    const sameAddressCheckbox = document.getElementById('sameAddress');
    const correspondenceAddressContainer = document.getElementById('correspondenceAddressContainer');

    countrySelect.addEventListener('change', function () {
        if (countrySelect.value === 'Polska') {
            regionSelect.classList.remove('hidden');
            regionSelect.required = true;
            regionText.classList.add('hidden');
            regionText.required = false;
        } else {
            regionSelect.classList.add('hidden');
            regionSelect.required = false;
            regionText.classList.remove('hidden');
            regionText.required = true;
        }
        regionContainer.classList.remove('hidden');
    });

    sameAddressCheckbox.addEventListener('change', function () {
        if (sameAddressCheckbox.checked) {
            correspondenceAddressContainer.classList.add('hidden');
            document.getElementById('correspondenceAddress').required = false;
        } else {
            correspondenceAddressContainer.classList.remove('hidden');
            document.getElementById('correspondenceAddress').required = true;
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        if (!validateNotEmpty('firstName') ||
            !validateNotEmpty('lastName') ||
            !validateNotEmpty('email') ||
            !validateNotEmpty('password') ||
            !validateNotEmpty('confirmPassword') ||
            !validateNotEmpty('gender') ||
            !validateNotEmpty('phone') ||
            !validateNotEmpty('birthDate') ||
            !validateEmail('email') ||
            !validatePassword('password') ||
            !validateConfirmPassword('password', 'confirmPassword') ||
            !validateAdult('birthDate') ||
            (countrySelect.value === 'Polska' && !validateNotEmpty('region')) ||
            (countrySelect.value !== 'Polska' && !validateNotEmpty('regionText')) ||
            !validateNotEmpty('address') ||
            (!sameAddressCheckbox.checked && !validateNotEmpty('correspondenceAddress'))) {
            isValid = false;
        }

        if (isValid) {
            alert('Formularz został poprawnie wypełniony.');
            form.submit();
        }
    });

    function validateNotEmpty(id) {
        const input = document.getElementById(id);
        if (input.value.trim() === '') {
            setError(id, 'To pole jest wymagane.');
            return false;
        } else {
            clearError(id);
            return true;
        }
    }

    function validateEmail(id) {
        const input = document.getElementById(id);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(input.value.trim())) {
            setError(id, 'Podaj prawidłowy adres email.');
            return false;
        } else {
            clearError(id);
            return true;
        }
    }

    function validatePassword(id) {
        const input = document.getElementById(id);
        if (input.value.length < 8) {
            setError(id, 'Hasło musi zawierać co najmniej 8 znaków.');
            return false;
        } else {
            clearError(id);
            return true;
        }
    }

    function validateConfirmPassword(passwordId, confirmPasswordId) {
        const passwordInput = document.getElementById(passwordId);
        const confirmPasswordInput = document.getElementById(confirmPasswordId);
        if (passwordInput.value !== confirmPasswordInput.value) {
            setError(confirmPasswordId, 'Hasła nie są zgodne.');
            return false;
        } else {
            clearError(confirmPasswordId);
            return true;
        }
    }

    function validateAdult(id) {
        const input = document.getElementById(id);
        const birthDate = new Date(input.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age < 18) {
            setError(id, 'Musisz być pełnoletni.');
            return false;
        } else {
            clearError(id);
            return true;
        }
    }

    function setError(id, message) {
        const input = document.getElementById(id);
        input.setCustomValidity(message);
        document.getElementById(id + 'Error').textContent = message;
    }

    function clearError(id) {
        const input = document.getElementById(id);
        input.setCustomValidity('');
        document.getElementById(id + 'Error').textContent = '';
    }

    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function () {
        phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
    });
});
