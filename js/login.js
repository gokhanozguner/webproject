function gecerliForm() {
    // Hata mesajları için bir dizi oluşturuyorum
    let hatalar = [];
    
    // Form elemanlarını seçiyorum
    let sifre = document.getElementById('sifre').value;
    let email = document.getElementById('email').value;


    if (!email) {
        hatalar.push("E-posta adresinizi girmeyi unuttunuz!");
    } else if (!gecerliEmail(email)) {
        hatalar.push("Geçerli bir e-posta adresi giriniz!");
    }

    // Boş mu değil mi kontrol ediyorum
    if (!sifre) {
        hatalar.push("Şifrenizi girmeyi unuttunuz!");
    }

    // Hata mesajlarını gösteriyorum
    let hataMesaji = document.getElementById('hataMesaji');
    let hataListe = document.getElementById('hataListesi');
    hataListe.innerHTML = "";

    if (hatalar.length > 0) {

        hatalar.forEach(function(error) {
            let li = document.createElement('li');
            li.textContent = error;
            hataListe.appendChild(li); //
        });
        hataMesaji.classList.replace('alert-warning', 'alert-danger'); // bootstrap warning classını danger ile değiştiriyorum, böylece hata hissiyatı oluşacak
        hataMesaji.classList.remove('d-none');
    } else {
        hataMesaji.innerHTML = ""; // Hata mesajlarını temizle
        hataMesaji.classList.remove('alert-danger');
        hataMesaji.classList.remove('alert-warning');
        hataMesaji.classList.add('alert-primary');
        hataMesaji.innerHTML = "Bilgileriniz kontrol ediliyor.."
        alert("Form başarılı bir şekilde gönderildi.");
        document.getElementById('form1').submit(); // Formu gönder
    }
}

function gecerliEmail(email) {
    const karakterler = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return karakterler.test(String(email).toLowerCase());
}
