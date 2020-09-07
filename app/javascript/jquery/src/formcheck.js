$(document).on('turbolinks:load', function() {
  if(document.URL.match(/..sign_up/)){
// function
    $(function(){
      // エラーメッセージ生成
      function buildInputError(text){
        const html = `
        <div class="input-error">${text}</div>
        `;
        return html;
      };
      // 入力ボックスのボーダーカラー変更
      function changeErrorBox(target){
        $(target).css('border-color','#da4033');
      }
      // エラーチェック関数 ※submitボタンが押されたときの処理
//-- formChecker function --//
      function formChecker(){
        // エラーをリセットするためすべてのinput-errorを削除
        $('.input-error').remove();
        $('input').css('border-color', '');
        $('select').css('border-color', '');
        // resultのデフォルト値をtrueに切り替え
        let result = true;
        // ニックネームのエラー処理
        if($('#user_nickname').val() == ""){
          $('#user_nickname').parent().append(buildInputError('ニックネームを入力してください'));
          changeErrorBox('#user_nickname');
          result = false;
        };
        if($('#user_nickname').val().length > 10){
          $('#user_nickname').parent().append(buildInputError('10文字以内で入力してください'));
          changeErrorBox('#user_nickname');
          result = false;
        };
        if(!$('#user_email').val().match(/\w+@\w+\.{1}[a-zA-Z]{2,}/) || $('#user_email').val().length == 0){
          $('#user_email').parent().append(buildInputError('メールアドレスを入力してください'));
          changeErrorBox('#user_email');
          result = false;
        };
        // パスワード
        if($('#user_password').val().length == 0){
          $('#user_password').parent().append(buildInputError('パスワードを入力してください'));
          changeErrorBox('#user_password');
          result = false;
        };
        if($('#user_password').val().length > 0){
          if(!$('#user_password').val().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/i)){
            $('#user_password').parent().append(buildInputError('7文字以上、英字と数字の両方を含めてください'));
            changeErrorBox('#user_password');
            result = false;
          };
        };
        // Last-Nameのエラー処理
        if($('#user_last_name').val() == ""){
          $('#user_last_name').parent().append(buildInputError('姓を入力してください'));
          changeErrorBox('#user_last_name');
          result = false;
        };
        if($('#user_last_name').val().length > 10){
          $('#user_last_name').parent().append(buildInputError('10文字以内で入力してください'));
          changeErrorBox('#user_last_name');
          result = false;
        };
        // First-Nameのエラー処理
        if($('#user_first_name').val() == ""){
          $('#user_first_name').parent().append(buildInputError('名を入力してください'));
          changeErrorBox('#user_first_name');
          result = false;
        };
        if($('#user_first_name').val().length > 10){
          $('#user_first_name').parent().append(buildInputError('10文字以内で入力してください'));
          changeErrorBox('#user_first_name');
          result = false;
        };
        // Birthdayのエラー処理
        if ($('#user_birthday_1i').val() == "0" || $('#user_birthday_2i').val() == "0" || $('#user_birthday_3i').val() == "0"){
          $('#user_birthday_1i').parent().append(buildInputError('生年月日を入力してください'));
          if ($('#user_birthday_1i').val() == "0"){
            changeErrorBox('#user_birthday_1i');
          };
          if ($('#user_birthday_2i').val() == "0"){
            changeErrorBox('#user_birthday_2i');
          };
          if ($('#user_birthday_3i').val() == "0"){
            changeErrorBox('#user_birthday_3i');
          };
        }
        // 郵便番号のエラー処理
        if($('#user_postcode').val() == ""){
          $('#user_postcode').parent().append(buildInputError('郵便番号を入力してください'));
          changeErrorBox('#user_postcode');
          result = false;
        };
        // 都道府県のエラー処理
        if($('#user_prefecture_code').val() == ""){
          $('#user_prefecture_code').parent().append(buildInputError('都道府県を入力してください'));
          changeErrorBox('#user_prefecture_code');
          result = false;
        };
        // 市区町村のエラー処理
        if($('#user_address_city').val() == ""){
          $('#user_address_city').parent().append(buildInputError('市区町村を入力してください'));
          changeErrorBox('#user_address_city');
          result = false;
        };
        // 番地のエラー処理
        if($('#user_address_street').val() == ""){
          $('#user_address_street').parent().append(buildInputError('番地を入力してください'));
          changeErrorBox('#user_address_street');
          result = false;
        };
  
        // スクロール位置の設定
        let position = $('.input-error').offset().top;
        // スクロールさせる
        $('.box-scroll').animate({
          scrollTop : position
        }, {
          queue : false
        });
        return result;
      };
//-- end formChecker function --//
  
      // Submitボタン押されたらエラーチェックを走らせる
      $(document).on('click', '#new_user input[type=submit]', function(e) {
        if(!formChecker()){
          e.preventDefault();
          return false;
        }
      });
  
// --- keyup & blur functions ---//
      // ニックネーム keyup & blur
      $('#user_nickname').keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_nickname').blur(function(){
        if($(this).val().length == 0 && $(this).parent().find('.input-error').length == 0){
          $('#user_nickname').parent().append(buildInputError('ニックネームを入力してください'));
          changeErrorBox('#user_nickname');
        }
      });
      // メールアドレス keyup & blur
      $('#user_email').keyup(function(){
        if($('#user_email').val().match(/\w+@\w+\.{1}[a-zA-Z]{2,}/)&& location.pathname == '/users/sign_up'){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_email').blur(function(){
        if(((!$('#user_email').val().match(/\w+@\w+\.{1}[a-zA-Z]{2,}/) || $('#user_email').val().length == 0) && $(this).parent().find('.input-error').length == 0) && location.pathname == '/users/sign_up'){
          $('#user_email').parent().append(buildInputError('メールアドレスを入力してください'));
          changeErrorBox('#user_email');
        };
      });
      // パスワード keyup & blur
      $('#user_password').keyup(function(){
        if($('#user_password').val().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/i)){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_password').blur(function(){
        if((!$('#user_password').val().match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/i)) && $(this).parent().find('.input-error').length == 0){
          $('#user_password').parent().append(buildInputError('7文字以上、英字と数字の両方を含めてください'));
          changeErrorBox('#user_password');
        };
      });
      // Last-name keyup & blur
      $('#user_last_name').keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_last_name').blur(function(){
        if($(this).val().length == 0 && $(this).parent().find('.input-error').length == 0){
          $('#user_last_name').parent().append(buildInputError('姓を入力してください'));
          changeErrorBox('#user_last_name');
        }
      });
      // First-name keyup & blur
      $('#user_first_name').keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_first_name').blur(function(){
        if($(this).val().length == 0 && $(this).parent().find('.input-error').length == 0){
          $('#user_first_name').parent().append(buildInputError('名を入力してください'));
          changeErrorBox('#user_first_name');
        }
      });
      // 生年月日 change
      $('#user_birthday_1i').change(function(){
        if($('#user_birthday_1i').val() > 0){
          $(this).css('border-color', '');
        };
        if($('#user_birthday_1i').val() > 0 && $('#user_birthday_2i').val() > 0 && $('#user_birthday_3i').val() > 0){
          $('#user_birthday_1i').parent().find('.input-error').remove();
        };
      });
      $('#user_birthday_2i').change(function(){
        if($('#user_birthday_2i').val() > 0){
          $(this).css('border-color', '');
        };
        if($('#user_birthday_1i').val() > 0 && $('#user_birthday_2i').val() > 0 && $('#user_birthday_3i').val() > 0){
          $('#user_birthday_2i').parent().find('.input-error').remove();
        };
      });
      $('#user_birthday_3i').change(function(){
        if($('#user_birthday_3i').val() > 0){
          $(this).css('border-color', '');
        };
        if($('#user_birthday_1i').val() > 0 && $('#user_birthday_2i').val() > 0 && $('#user_birthday_3i').val() > 0){
          $('#user_birthday_3i').parent().find('.input-error').remove();
        };
      });
      // 生年月日 blur
      $('#user_birthday_1i').blur(function(){
        if($('#user_birthday_1i').val() == 0){
          if($('#user_birthday_1i').parent().find('.input-error').length == 0){
            $('#user_birthday_1i').parent().append(buildInputError('生年月日を入力してください'));
          }; 
          changeErrorBox('#user_birthday_1i');
        };
      });
      $('#user_birthday_2i').blur(function(){
        if($('#user_birthday_2i').val() == 0){
          if($('#user_birthday_2i').parent().find('.input-error').length == 0){
            $('#user_birthday_2i').parent().append(buildInputError('生年月日を入力してください'));
          }; 
          changeErrorBox('#user_birthday_2i');
        };
      });
      $('#user_birthday_3i').blur(function(){
        if($('#user_birthday_3i').val() == 0){
          if($('#user_birthday_3i').parent().find('.input-error').length == 0){
            $('#user_birthday_3i').parent().append(buildInputError('生年月日を入力してください'));
          }; 
          changeErrorBox('#user_birthday_3i');
        };
      });
      // 郵便番号のラベル処理・エラー処理
      postcodeInput.keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
        let postcodeLen = $(this).val().length
        if (postcodeLen > 2){
          if(prefectureInput.parent().find('.input-error').length > 0){
            prefectureInput.parent().find('.input-error').remove();
            prefectureInput.css('border-color', '');
          };
          if(cityInput.parent().find('.input-error').length > 0){
            cityInput.parent().find('.input-error').remove();
            cityInput.css('border-color', '');
          };
          prefectureLabel.addClass('active');
          cityLabel.addClass('active');
          if (postcodeLen > 6) {
            if(streetInput.parent().find('.input-error').length > 0){
              streetInput.parent().find('.input-error').remove();
              streetInput.css('border-color', '');
            };
            streetLabel.addClass('active');
          }
        }
      });
      postcodeInput.focusout(function(){
        if (postcodeInput.val().length < 1){
          postcodeLabel.removeClass('active');
          if($('#user_postcode').val().length == 0 && $('#user_postcode').parent().find('.input-error').length == 0){
            $('#user_postcode').parent().append(buildInputError('郵便番号を入力してください'));
            changeErrorBox('#user_postcode');
          }
        }
        if (prefectureInput.val().length < 1){
          prefectureLabel.removeClass('active');
          if($('#user_prefecture_code').val().length == 0 && $('#user_prefecture_code').parent().find('.input-error').length == 0){
            $('#user_prefecture_code').parent().append(buildInputError('都道府県を入力してください'));
            changeErrorBox('#user_prefecture_code');
          }
        }
        if (cityInput.val().length < 1){
          cityLabel.removeClass('active');
          if($('#user_address_city').val().length == 0 && $('#user_address_city').parent().find('.input-error').length == 0){
            $('#user_address_city').parent().append(buildInputError('市区町村を入力してください'));
            changeErrorBox('#user_address_city');
          }
        }
        if (streetInput.val().length < 1){
          streetLabel.removeClass('active');
          if($('#user_address_street').val().length == 0 && $('#user_address_street').parent().find('.input-error').length == 0){
            $('#user_address_street').parent().append(buildInputError('番地を入力してください'));
            changeErrorBox('#user_address_street');
          }
        }
        if (($('#user_prefecture_code').parent().find('.input-error').length > 0 || $('#user_address_city').parent().find('.input-error').length > 0 || $('#user_address_street').parent().find('.input-error').length > 0) && $('#user_postcode').parent().find('.input-error').length == 0){
          $('#user_postcode').parent().append(buildInputError('郵便番号が正しい値か確認してください'));
          changeErrorBox('#user_postcode');
        }
      });
      // 都道府県 keyup & blur
      $('#user_prefecture_code').keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_prefecture_code').blur(function(){
        if($(this).val().length == 0 && $(this).parent().find('.input-error').length == 0){
          $('#user_prefecture_code').parent().append(buildInputError('都道府県を入力してください'));
          changeErrorBox('#user_prefecture_code');
        }
      });
      // 市区町村 keyup & blur
      $('#user_address_city').keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_address_city').blur(function(){
        if($(this).val().length == 0 && $(this).parent().find('.input-error').length == 0){
          $('#user_address_city').parent().append(buildInputError('市区町村を入力してください'));
          changeErrorBox('#user_address_city');
        }
      });
      // 番地 keyup & blur
      $('#user_address_street').keyup(function(){
        if($(this).parent().find('.input-error').length > 0){
          $(this).parent().find('.input-error').remove();
          $(this).css('border-color', '');
        };
      });
      $('#user_address_street').blur(function(){
        if($(this).val().length == 0 && $(this).parent().find('.input-error').length == 0){
          $('#user_address_street').parent().append(buildInputError('番地を入力してください'));
          changeErrorBox('#user_address_street');
        }
      });
    });
// end function
  };
});