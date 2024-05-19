new Vue({
  el: '#form1',
  data: {
    vueAd: '',
    vueSoyad: '',
    vueMail: '',
    vueCinsiyet: '',
    vueMesaj: ''
  },
  methods: {
    formTemizle() {
      this.vueAd = '';
      this.vueSoyad = '';
      this.vueMail = '';
      this.vueCinsiyet = '0';
      this.vueMesaj = '';
    }
  }
});