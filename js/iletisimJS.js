function gecerliForm() {
    // Hata mesajları için bir dizi oluşturuyorum
    let hatalar = [];
    
    // Form elemanlarını seçiyorum
    let ad = document.getElementById('ad').value;
    let soyad = document.getElementById('soyad').value;
    let email = document.getElementById('email').value;
    let cinsiyet = document.getElementById('cinsiyet').value;
    let mesaj = document.getElementById('mesaj').value;

    // Boş mu değil mi kontrol ediyorum
    if (!ad) {
        hatalar.push("Adınızı girmeyi unuttunuz!");
    }
    if (!soyad) {
        hatalar.push("Soyadınızı girmeyi unuttunuz!");
    }
    if (!email) {
        hatalar.push("E-posta adresinizi girmeyi unuttunuz!");
    } else if (!gecerliEmail(email)) {
        hatalar.push("Geçerli bir e-posta adresi giriniz!");
    }
    if (cinsiyet == "0") {
        hatalar.push("Cinsiyetinizi seçmeyi unuttunuz!");
    }
    if (!mesaj) {
        hatalar.push("Mesajınızı girmeyi unuttunuz!");
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
        hataMesaji.classList.add('alert-success'); // bootstrap success classını ekliyorum
        hataMesaji.innerHTML = "Mesajınız başarıyla gönderildi!"; // Hata mesajlarını temizle
        alert("Form başarılı bir şekilde gönderildi.");
        document.getElementById('form1').submit(); // Formu gönder
    }
}

function gecerliEmail(email) {
    const karakterler = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return karakterler.test(String(email).toLowerCase());
}
