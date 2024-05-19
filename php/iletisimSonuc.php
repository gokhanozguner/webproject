<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İLETİŞİM</title>
    <!-- BOOTSTRAP ENTEGRASYONU -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- VUE JS ENTEGRASYONU -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
    <!-- GOOGLE FONTS -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="css/redirect.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <main>
        <section id="tasarim">
            <div class="container darkcontainer" style="margin-top: 20rem;">        
                <div class="row">
                  <div class="col-md-12">
                    <form id="form1" action="../index.html" method="POST">
                        <h1 class="lead baslik">MESAJINIZI ALDIK!</h1>
                        <p class="lead icerik">AD:</p>
                        <label id="ad"><?php echo htmlspecialchars($_POST['ad']); ?></label>
            
                        <p class="lead icerik">SOYAD:</p>
                        <label id="soyad"><?php echo htmlspecialchars($_POST['soyad']); ?></label>
            
                        <p class="lead icerik">EPOSTA:</p>
                        <label id="email"><?php echo htmlspecialchars($_POST['email']); ?></label>
            
                        <p class="lead icerik">CİNSİYET:</p>
                        <label id="cinsiyet"><?php echo htmlspecialchars($_POST['cinsiyet']); ?></label>
            
                        <p class="lead icerik">MESAJINIZ:</p>
                        <label id="mesaj"><?php echo htmlspecialchars($_POST['mesaj']); ?></label>

                        <button type="submit" class="btn btn-primary form-control">ANA SAYFAYA DÖN</button>
                    </form>
                </div>
            </div>
        </section>
    </main>
</body>

</html>