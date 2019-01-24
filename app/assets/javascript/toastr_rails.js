//= require 'toastr'

//toastr
toastr.options = {
  "closeButton": true,
  "debug": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};

var showToast = function(flash){
  var showMessages = function(type, options, messages){
    for(var i = 0; i < messages.length; i++){
      toastr[type](messages[i], '', options);
    }
  };
  for(var i = 0; i < flash.length; i++ ){
    var msg = flash[i];
    var type = {
      notice: 'success',
      success: 'success',
      alert: 'error',
      error: 'error',
      warning: 'warning',
      info: 'info'
    };
    var options = {
      alert: { "timeOut": "0", "extendedTimeOut": "0" },
      warning: { "timeOut": "0", "extendedTimeOut": "0" },
    };
    var msgType = type[msg[0]] || 'info';
    var msgOpts = options[msgType] || {};
    var showMsgs = showMessages.bind(null, msgType, msgOpts);
    if(Object.prototype.toString.call(msg[1]) === '[object Array]'){
      showMsgs(msg[1]);
    } else {
      showMsgs([ msg[1] ]);
    }
  }
};
