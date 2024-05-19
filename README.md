# webproject
Sakarya Üniversitesi Bilgisayar Mühendisliği Bölümü 2023-2024 Öğretim yılı bahar dönemi web teknolojileri dersi proje ödevi

Proje Amacı

Kendimi, yaşadığım şehri, takımımı, ilgi alanlarımı tanıtan responsive özellikli bootstrap kullanan bir site geliştiriyorum.
Bu benim geliştirdiğim ilk site olacak, bu siteyi geliştirirken çok tecrübe kazanacağıma inanıyorum.
Bu projeyi geliştirirken github üzerinden farklı günlerde en az 10 commit atmayı hedefliyorum.

Projede Kullanılacak Teknolojiler:  HTML,CSS, Vue.JS, JavaScript,PHP,Bootstrap

Proje İçeriği

Ana Sayfa,Ben Kimim? Sayfası: Genel bilgilerin yer aldığı ve diğer sayfalara yönlendirme yapabilen bir ana sayfa oluşturmayı planlıyorum. Bu sayfada kendimden, hobilerimden ve ilgilendiğim aktivitelerden bahsedeceğim. Ayrıca, bu konularla ilgili fotoğrafları da sayfaya ekleyeceğim. Ayrıca başlıklara efekt koyacağım.

Özgeçmniş Sayfası: Eğitim geçmişimi, tecrübelerimi, yetenekli olduğum alanlarımdan bahsettiğim bir sayfa olacak. Bu sayfada wikipedia'ya benzer bir tasarım oluşturmayı düşünüyorum. Sol tarafta benimle ilgili bilgilere direkt erişilebilen bir panel olacak, sağ tarafta ise içeriği daha zengin bir panel olacak.

Şehrim Sayfası: İstanbul hakkında genel bilgilerin yer aldığı bir sayfa oluşturacağım. Bu sayfada, bir slider ve sliderin içinde 4 tane fotoğraf kullanarak İstanbul'un tarihi ve turistik yerlerini tanıtacağım, ayrıca şehrin istatistiklerinin olduğu bir container ekleyeceğim.

Takımım Sayfası: Bu sayfada Fenerbaçeyi tanıtacağım bu sayfada yine özgeçmiş sayfamda düşündüğüm gibi, wikipedia tarzı bir tasarım kullanmayı düşünüyorum.  Takımın teknik direktörü, logosu, başarıları, başkanı vb. ulaşılabilir net bilgiler burada (sol kısımda) yer alacak. Sağ kısımda ise takımın tarihi vb. daha detaylı içeriklerin yer aldığı büyük bir container yer alacak. Ayrıca bu 2 containerin altına bir container ekleyeceğim ve sevdiğim marşların videosunu koyacağım.. Ayrıca marş sözlerini görüntüleyen bir buton olacak, bu butona tıklandığında açılır ve kaydırılabilir bir pencere ekrana gelecek. Bu pencerede marş sözleri görüntülenecek.
Proje yükleme boyutu olan 25mB yi aşarsam, videoları kaldırıp ses dosyaları ile değiştireceğim.

Login Sayfası: Kullanıcıların bilgilerini girdikleri ve bu bilgilerin doğruluğu ve denetimleri yapılarak "Hoşgeldiniz (Kullanıcının Adı)" mesajını veren, yanlış olduğunda ise tekrar giriş sayfasına yönlendiren bir login sayfası olacak.
Bu sayfadaki denetimler JavaScript ve Vue.JS ile yapılacak.

İletişim Sayfası:

Form elemanları, JavaScript ve Vue.JS frameworkü kullanarak bir iletişim sayfası oluşturacağım.
Form elemanlarının denetimlerini (boş mu bırakıldı, e-mail formatında mı? vb. javascript ile kontrol edilecek.)
Form temizle butonu ise Vue.JS ile çalıştırılacak.

Proje Akışı ve Tasarım Detayları

GENEL:
Genel olarak gözü yormayan, göze hitap eden; sade ve şık bir tasarım yapmayı hedefliyorum. Takımım sayfası hariç her sayfada koyu bir renk şeması kullanacağım, takımım sayfasında ise takımın renklerinden oluşan bir renk şeması kullanacağım.
Her sayfada en üstte "fixed-top" özelliğine sahip yani aşağı kaydırıldığında kaybolmayan bir navbar yer alıyor. Bu navbar sayesinde kullanıcı sayfalar arasında geçiş yapabilir.
Bu navbarda yine sabit olan ve metinden oluşan "GÖKHAN ÖZGÜNER" logosu yer alıyor, bu logoya tıklandığında anasayfaya dönüş sağlanmaktadır.

Ana Sayfa: 
Anasayfada 5 adet container, containerlerin içinde yazılar, 4 adet kart, 3 adet resim olacak.


Özgeçmiş Sayfası:

Eğitim bilgileri, yazılım kariyerimi, bildiğim diller, yaşaşdığım yer, deneyimlerim ve fotoğrafım yer alacak.
Ayrıca sayfanın sol kısmında ikonlar mevcuttur.
Ayrıca geçmişte yaptığım yazılımların videosunu içeren youtube kanal linki olacak.
Progressbar'lar ile görüntü güzelleştirilecek.


Şehrim Sayfası:
4 adet kart, 4 adet ikon, 6 adet container ve 1 adet slider içeriyor.
Slider ise içerisinde 4 adet fotoğraf içeriyor. Bu fotoğraflara tıklandığında ilgili fotoğrafın içeriğine doğru sayfa kayıyor.

Takımım Sayfası:
4 adet container, bu containerlerin 2'si üstte, sol ve sağ şeklinde bölünüyor. Diğeri ise bu 2 containerin altında nispeten diğerlerine göre daha büyük bir container. Burada marşlar yer alıyor


Giriş Sayfası:

Kullanıcı adı ve şifre giriş alanları, form elemanlarını denetleyen JavaScript kodu, formu temizleyen Vue.JS kodu, hatalı veya doğru girişleri denetleyen php kodu içeriyor.

İletişim Sayfası:

İsim, e-posta, mesaj alanları Form validasyonu için JavaScript Gönder butonu, temizleme fonksiyonu için ise Vue js temizle butonu, gönder tuşuna basıldığında ise php ile verilerin diğer sayfa tarafından çekilmesi ve ekrana basılmasını içeriyor.
Ayrıca bootstrap'ın alert class'ını kullanarak kullanıcı için uyarı, hata niteliğinde mesajlar oluşturuyor.