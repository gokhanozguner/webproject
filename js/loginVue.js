new Vue({
    el: '#form1',
    data: {
      vueSifre: '',
      vueMail: '',
    },
    methods: {     // metot oluşturuyoruz
      formTemizle() {
        this.vueSifre = '';
        this.vueMail = '';
      }
    }
  });