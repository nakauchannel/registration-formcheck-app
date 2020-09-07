$(document).on('turbolinks:load', function() {
  $(function(){
    // 定義
    inputField      = $('.inputs');
    nicknameLabel   = $('.signup__box__field__nickname__label');
    nicknameInput   = $('.signup__box__field__nickname__input');
    emailLabel      = $('.signup__box__field__email__label');
    emailInput      = $('.signup__box__field__email__input');
    passwordLabel   = $('.signup__box__field__password__label');
    passwordInput   = $('.signup__box__field__password__input');
    lastnameLabel   = $('.signup__box__field__last_name__label');
    lastnameInput   = $('.signup__box__field__last_name__input');
    firstnameLabel  = $('.signup__box__field__first_name__label');
    firstnameInput  = $('.signup__box__field__first_name__input');
    birthdayLabel   = $('.signup__box__field__birthday__label');
    birthdayInputY  = $('#user_birthday_1i');
    birthdayInputM  = $('#user_birthday_2i');
    birthdayInputD  = $('#user_birthday_3i');
    postcodeLabel   = $('.signup__box__field__postcode__label');
    postcodeInput   = $('.signup__box__field__postcode__input');
    prefectureLabel = $('.signup__box__field__prefecture_code__label');
    prefectureInput = $('.signup__box__field__prefecture_code__input');
    cityLabel       = $('.signup__box__field__address_city__label');
    cityInput       = $('.signup__box__field__address_city__input');
    streetLabel     = $('.signup__box__field__address_street__label');
    streetInput     = $('.signup__box__field__address_street__input');
    buildingLabel   = $('.signup__box__field__address_building__label');
    buildingInput   = $('.signup__box__field__address_building__input');

    // ラベル操作-基本
    $('label').first().addClass('active');
    inputField.focusin(function() {
      $(this).parent().find('label').addClass('active');
    });
    inputField.focusout(function(){
      if (!this.value) {
        $(this).parent().find('label').removeClass('active');
      }
    });
    // 誕生日のデフォルト値追加
    birthdayInputY.append('<option value="0">YYYY</option>');
    birthdayInputY.val("0");
    birthdayInputM.append('<option value="0">MM</option>');
    birthdayInputM.val("0");
    birthdayInputD.append('<option value="0">DD</option>');
    birthdayInputD.val("0");
    // 誕生日のラベル操作
    $('select').change(function(){
      let val1 = birthdayInputY.val();
      let val2 = birthdayInputM.val();
      let val3 = birthdayInputD.val();
      if (val1 * val2 * val3 > 0){
        $(this).parent().find('label').addClass('active');
      } else {
        $(this).parent().find('label').removeClass('active');
      }
    });
    // 郵便番号入力時の関連はformcheck.jsの248行〜

    // Postal.jp
    return $("#user_postcode").jpostal({
      postcode: ["#user_postcode"],
      address: {
        "#user_prefecture_code": "%3",
        "#user_address_city": "%4",
        "#user_address_street": "%5%6%7"
      }
    });
  });
});