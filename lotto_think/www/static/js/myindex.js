jQuery(document).ready(function(p) {
  if (p('.mobile-menu-trigger').click(function(e) {
    e.preventDefault(),
    p('nav#primary-nav').css('display', 'block'),
    p('body').addClass('menu-active');
  }),
  p('#mobile-close').click(function(e) {
    e.preventDefault(),
    p('nav#primary-nav').css('display', ''),
    p('body').removeClass('menu-active');
  }),
  p('.mobile-user-menu').click(function(e) {
    e.preventDefault(),
    e('.mobile-user-menu-container').slideToggle('fast');
  }),
  p('.menu-trigger').hover(function() {
    p(this).next().show();
  }, function() {
    p(this).next().hide();
  }),
  p('.menu-wrapper').hover(function() {
    p(this).show();
  }, function() {
    p(this).hide();
  }).hide(),
  p('#inputBirthdate').length && p('#inputBirthdate').prop('disabled') == 0) {
    var e = {
      changeMonth: !0,
      changeYear: !0,
      minDate: '-110Y',
      maxDate: '-18Y',
      yearRange: '-110:-18',
      dateFormat: p('#inputBirthdate').data('dateformat'),
      altFormat: 'yy-mm-dd',
      altField: p('#inputBirthdatePost')
    };
    e.defaultDate = p('#inputBirthdate').val(),
    p('#inputBirthdate').datepicker(e);
  }
  p('.latest-news-content').size() && p('.latest-news-mobile-pagination .page-numbers').click(function(e) {
    e.preventDefault();
    var t = p(this).parent().data('act');
    p(this).hasClass('next') ? t++ : p(this).hasClass('prev') ? t-- : t = parseInt(p(this).text()),
    t == 0 && (t = 1);
    var a = p(this).parent().find('.page-numbers');
    t > a.length - 2 && (t = a.length - 2),
    p(this).parent().data('act', t),
    a.removeClass('current'),
    a.eq(t).addClass('current');
    var n = 2,
      i = 2,
      r = 0,
      s = 0,
      l = 0,
      d = 0,
      o = a.length - 2;
    o < t + n && (s = -(l = o - t - n)),
    n += l,
    t - (i += s) < 1 && (r = -(d = t - i - 1)),
    i += d,
    n += r,
    a.slice(1, -1).addClass('hidden-normal'),
    a.slice(t - i, t + n + 1).removeClass('hidden-normal'),
    a.last().removeClass('page-numbers-inactive'),
    a.first().removeClass('page-numbers-inactive'),
    t == o && a.last().addClass('page-numbers-inactive'),
    t == 1 && a.first().addClass('page-numbers-inactive'),
    p(this).parent().prev().find('.news-container').addClass('latest-news-mobile-hide'),
    p(this).parent().prev().find('.news-container').eq(t - 1).removeClass('latest-news-mobile-hide'),
    $grid.masonry(),
    p('html, body').animate({
      scrollTop: p(this).parents('.widget').offset().top
    }, 500);
  });
  p('time.simple-countdown').each(function() {
    var time = parseInt(p(this).data('datetime')) * 1000;
    p(this).countdown(time, function(event) {
      var txt = 'expired';
      if (time - Date.now() > 1000 * 60 * 60) {
        txt = event.strftime('%-d days %-H hours');
      } else if (time - Date.now() > 0) {
        txt = event.strftime('%M min %S sec');
      }
      p(this).html('<span>' + txt + '</span>');
    });
  });
  p('.widget-ticket-bets').delegate('div > a', 'click', function(event) {
    event.preventDefault();
    var t = p('.widget-ticket-bets');
    t.find('div > a.checked').toggleClass('checked');
    p(this).toggleClass('checked');
    var num = p(this).data('n') ? ['n', p(this).data('n')].join('_') : ['b', p(this).data('b')].join('_');
    t.data('checked', num);
  });
  p('#widget-ticket-form').on('submit', function() {
    var t = p('.widget-ticket-bets');
    var num = t.data('checked').split('_');
    if (p('#ticket_amount').val() === '0') {
      return false;
    }
    if (num.length === 2) {
      if (num[0] === 'n') {
        p('#ticket_number').val(num[1]);
        p('#ticket_bnumber').val(0);
      } else {
        p('#ticket_number').val(0);
        p('#ticket_bnumber').val(num[1]);
      }
      return true;
    }
    return false;
  });
  p('a.widget-ticket-bets-number').each(function() {
    p(this).click(function(e) {
      e.preventDefault();
      var t = p(this);
      p('#ticket_number').val(t.data('number'));
      p('a.widget-ticket-bets-number').each(function(i, m) {
        var n = p(m);
        if (n.hasClass('checked')) {
          n.toggleClass('checked');
        }
      });
      t.toggleClass('checked');
    });
  });
  p('a.widget-shopcart-remove-action').each(function() {
    p(this).click(function(e) {
      e.preventDefault();
      var t = p(this);
      p.ajax({
        type: 'POST',
        url: t.data('apost'),
        contentType: 'application/json',
        data: JSON.stringify({ticket_id: t.data('ticketid')}), // 参数列表
        dataType: 'json',
        success: function(result) {
          if (result.errno === 0) {
            window.location.href = t.data('aback');
          } else {
            return p.growl.error({ message: result.errmsg });
          }
        },
        error: function(result) {
          p.growl.error({ message: result.errmsg });
        }
      });
    });
  });
  p('#banlance-button-pay').click(function(e) {
    e.preventDefault();
    var t = p(this);
    if (parseInt(t.data('balance')) < parseInt(t.data('amount'))) {
      return p.growl.error({ message: 'Balance is not enough.' });
    }
    p.ajax({
      type: 'POST',
      url: t.data('apost'),
      contentType: 'application/json',
      data: JSON.stringify({ticket_id: t.data()}), // 参数列表
      dataType: 'json',
      success: function(result) {
        if (result.errno === 0) {
          window.location.href = '/account/tickets';
        } else {
          return p.growl.error({ message: result.errmsg });
        }
      },
      error: function(result) {
        return p.growl.error({ message: result.errmsg });
      }
    });
  });
  p('a.myaccount-toggle-profile').each(function() {
    var r = p;
    p(this).click(function(t) { var e = r(this).text(); t.preventDefault(), r(this).next().fadeToggle('fast'), r(this).text(r(this).data('togglename')), r(this).data('togglename', e) });
  });
  p('.deposit-amounts').delegate('div > div', 'click', function(e) {
    p('#inputAmount').val(p(this).data('amount'));
  });
});
