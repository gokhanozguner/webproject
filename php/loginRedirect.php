<?php
// kullanıcı adı ve şifre bilgileri
$valid_credentials = array(
    "g231210042@sakarya.edu.tr" => "g231210042",
    // Diğer kullanıcı adı ve şifreleri buraya ekleyebilirsiniz
);

// Formdan gelen bilgileri çekiyoruz
$email = $_POST['email'];
$password = $_POST['password'];

// Kullanıcı adı ve şifrenin doğru olup olmadığını kontrol et
if (isset($valid_credentials[$email]) && $valid_credentials[$email] == $password) {
    echo "<div class='welcome-message background-div'> HOŞGELDİNİZ! " . $password . "</div>";
    echo "<script type='text/javascript'>
            setTimeout(function(){
                window.location.href = 'login.html';
            }, 10000);
          </script>";
} else {
    echo "<div class='error-message background-div'>KULLANICI ADI VEYA ŞİFRE HATALI!</div>";
    echo "<script type='text/javascript'>
            setTimeout(function(){
                window.location.href = '../login.html';
            }, 5000);
          </script>";
}
?>
