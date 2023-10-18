// <!-- ============== Contact Form to Spreadsheet ================ -->

    const scriptURL = 'https://script.google.com/macros/s/AKfycby_kgFevvLdNlsJF0ANnbJLwWlmnbDWrCy40XuMnG200mXzzDL_N0-YfjyclUtdG2e5/exec'
    const form = document.forms['iproject-contact-form']
    const btnKirim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const myAlert = document.querySelector('.my-alert')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
    //   Ketika tombol submit diclick
    // tampilkan tombol loading , tampilkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // tampilkan tombol kirim , hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan alert
            myAlert.classList.toggle('d-none')
            // Reset Form
            form.reset();
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
    })