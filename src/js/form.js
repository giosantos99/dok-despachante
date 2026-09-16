export function initFormAfiliado() {
  
  const form = document.getElementById('form-afiliado');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const emailIcon = document.getElementById('email-icon');
  const nomeIcon = document.getElementById('nome-icon');
  const alertSucesso = document.getElementById('alert-sucesso');
  const btnCloseAlert = document.getElementById('btn-close-alert');

  btnCloseAlert?.addEventListener('click', () => {
    alertSucesso?.classList.add('d-none');
  });

  if (form && emailInput && nomeInput) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      let isNomeValido = true;
      let isEmailValido = true;

      alertSucesso?.classList.add('d-none');

      if (!nomeInput.value.trim()) {
        nomeInput.classList.add('is-invalid');
        nomeInput.value = '';
        nomeInput.placeholder = 'Por favor informe seu nome';
        nomeIcon?.classList.remove('d-none');
        isNomeValido = false;
      }

      if (!emailInput.validity.valid || !emailInput.value.trim()) {
        emailInput.classList.add('is-invalid');
        emailInput.value = '';
        emailInput.placeholder = 'Por favor informe um e-mail válido';
        emailIcon?.classList.remove('d-none');
        isEmailValido = false;
      }

      if (isNomeValido && isEmailValido) {
        alertSucesso?.classList.remove('d-none');
        form.reset();

        [nomeInput, emailInput].forEach((input) => {
          input.classList.remove('is-invalid');
        });

        nomeInput.placeholder = 'Informe seu nome';
        emailInput.placeholder = 'Informe seu e-mail';

        nomeIcon?.classList.add('d-none');
        emailIcon?.classList.add('d-none');
      }
    });

    [nomeInput, emailInput].forEach((input) => {
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          input.classList.remove('is-invalid');

          if (input.id === 'email') {
            input.placeholder = 'Informe seu e-mail';
            emailIcon?.classList.add('d-none');
          } else {
            input.placeholder = 'Informe seu nome';
            nomeIcon?.classList.add('d-none');
          }
        }
      });
    });
  }
}