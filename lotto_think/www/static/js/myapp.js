var INTERVAL_DAY = 864e5,
  INTERVAL_HOUR = 36e5,
  INTERVAL_MINUTE = 6e4,
  INTERVAL_SECOND = 1e3,
  POPUP_WRONG_LINE = 0,
  POPUP_MINIMUM = 1,
  POPUP_CONFIRM = 2,
  POPUP_MULTIPLIER = 3,
  POPUP_MINBETS = 4,
  POPUP_CONFIRM_DELETE_ACCOUNT = 5,
  POPUP_LOGINFORM = 6,
  POPUP_REGISTERFORM = 7,
  POPUP_LOSTPASSWORD = 8;
function recaptchaLottoCallback() {
  var t = window.matchMedia('(max-width: 400px)');
  t.addListener(recaptchaLottoRenderer),
  recaptchaLottoRenderer(t);
}
function recaptchaLottoRenderer(n) {
  jQuery('.g-recaptcha').each(function() {
    var t = jQuery(this).data(),
      e = jQuery(this).parent();
    jQuery(this).empty().remove();
    var i = jQuery(this).clone();
    e.append(i),
    i.data(t);
    var a = {
      sitekey: t.sitekey,
      size: 'compact'
    };
    n.matches || (a.size = 'normal'),
    grecaptcha.render(i.get(0), a);
  });
}
function selectFirstPayment() {
  jQuery('#payment-method-ul li').eq(1).find('a').click();
}
jQuery(document).ready(function(r) {
  var a = [];
  var t = 0;
  var e = r('time.platform-countdown');
  var s = [];
  var n = r('time.simple-countdown');
  var d = r('.widget-list-carousel > ul');
  var l = [];
  var o = r('.small-widget-slider');
  var h = [];
  var p = r('.widget-featured-content');
  var m = !1;
  var c = !1;
  function u() {
    var t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var e = 5;
    return t <= 1220 && t > 900 && (e = 4),
    t <= 900 && t > 600 && (e = 3),
    e;
  }
  function f() {
    var t = u(),
      e = 0;
    r('.widget-ticket-entity').each(function() {
      r(this).find('.checked').length && e++;
    });
    var i = Math.floor(e / t);
    ++i > Math.ceil(25 / t) && (i = Math.ceil(25 / t)),
    r('.widget-ticket-entity').slice(0, i * t).removeClass('hidden').css('opacity', 1),
    r('.widget-ticket-entity').slice(i * t).addClass('hidden').css('opacity', 0),
    r('.widget-ticket-button-more').prop('disabled', !(r('.widget-ticket-entity.hidden').length > 0)),
    r('.widget-ticket-button-less').prop('disabled', !(r('.widget-ticket-entity').not('.hidden').length > t));
  }
  function g(t) {
    t.preventDefault();
    var e = r(this).parent().data('i');
    r('.widget-ticket-entity').eq(e).removeClass('mobile-hidden').removeClass('hidden').css('opacity', 1),
    r('body').addClass('menu-active');
  }
  function k() {
    if (c) {
      var n = new Array(),
        d = new Array();
      r('.widget-ticket-entity').each(function(t) {
        var e = r(this);
        if (e.hasClass('checked')) {
          var i = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-numbers').children('a.checked'),
            a = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-bnumbers').children('a.checked');
          ticket_line_n = new Array(),
          ticket_line_b = new Array(),
          i.each(function() {
            ticket_line_n.push(r(this).text());
          }),
          a.each(function() {
            ticket_line_b.push(r(this).text());
          }),
          n.push([ticket_line_n, ticket_line_b]);
        } else if (e.find('.checked').length) {
          i = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-numbers').children('a.checked'),
          a = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-bnumbers').children('a.checked');
          ticket_line_n = new Array(),
          ticket_line_b = new Array(),
          i.each(function() {
            ticket_line_n.push(r(this).text());
          }),
          a.each(function() {
            ticket_line_b.push(r(this).text());
          }),
          d.push([ticket_line_n, ticket_line_b, e.children('.widget-ticket-entity-content').children('.widget-ticket-numbers').hasClass('checked'), e.children('.widget-ticket-entity-content').children('.widget-ticket-bnumbers').hasClass('checked')]);
        }
      }),
      r('.widget-ticket-content').find('.checked').removeClass('checked'),
      r('.widget-ticket-clear-all').prop('disabled', !0),
      r('.widget-ticket-button-clear').prop('disabled', !0),
      r('.widget-ticket-entity-mobile .ticket-line').remove(),
      r('.widget-ticket-entity-mobile .widget-ticket-entity-newline').show(),
      r('.widget-ticket-entity .widget-ticket-mobile-button a').addClass('disabled'),
      r('.widget-ticket-entity-mobile .widget-ticket-entity-editline').hide(),
      r('.widget-ticket-entity-mobile .widget-ticket-entity-mobile-quickpick').show(),
      r('.widget-ticket-entity-mobile .widget-ticket-entity-mobile-delete').hide();
      for (var t = 0; t < n.length; t++) {
        for (var e = r('<div class="ticket-line"></div>'), i = 0; i < n[t][0].length; i++) {
          e.append(r('<div class="ticket-line-number">' + n[t][0][i] + '</div>')),
          r('.widget-ticket-entity').eq(t).find('.widget-ticket-numbers > a').eq(n[t][0][i] - 1).addClass('checked');
        }
        for (i = 0; i < n[t][1].length; i++) {
          e.append(r('<div class="ticket-line-bnumber">' + n[t][1][i] + '</div>')),
          r('.widget-ticket-entity').eq(t).find('.widget-ticket-bnumbers > a').eq(n[t][1][i] - 1).addClass('checked');
        }
        e.click(g),
        r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-newline').hide(),
        r('.widget-ticket-entity').eq(t).find('.widget-ticket-mobile-button a').removeClass('disabled'),
        r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-editline').hide(),
        r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-mobile-quickpick').hide(),
        r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-mobile-delete').show(),
        r('.widget-ticket-entity-mobile').eq(t).append(e),
        r('.widget-ticket-entity').eq(t).find('.widget-ticket-numbers').addClass('checked'),
        r('.widget-ticket-entity').eq(t).find('.widget-ticket-bnumbers').addClass('checked'),
        r('.widget-ticket-entity').eq(t).addClass('checked'),
        L(r('.widget-ticket-entity').eq(t));
      }
      for (t = 0; t < d.length; t++) {
        for (i = 0; i < d[t][0].length; i++) { r('.widget-ticket-entity').eq(t + n.length).find('.widget-ticket-numbers > a').eq(d[t][0][i] - 1).addClass('checked') }
        for (i = 0; i < d[t][1].length; i++) { r('.widget-ticket-entity').eq(t + n.length).find('.widget-ticket-bnumbers > a').eq(d[t][1][i] - 1).addClass('checked') }
        d[t][2] && r('.widget-ticket-entity').eq(t + n.length).find('.widget-ticket-numbers').addClass('checked'),
        d[t][3] && r('.widget-ticket-entity').eq(t + n.length).find('.widget-ticket-bnumbers').addClass('checked'),
        r('.widget-ticket-entity-mobile').eq(t + n.length).find('.widget-ticket-entity-editline').show(),
        r('.widget-ticket-entity-mobile').eq(t + n.length).find('.widget-ticket-entity-newline').hide(),
        r('.widget-ticket-entity').eq(t + n.length).find('.widget-ticket-mobile-button a').addClass('disabled'),
        L(r('.widget-ticket-entity').eq(t));
      }
      r('.widget-ticket-entity-mobile').addClass('mobile-hidden');
      var a = -1;
      r('.widget-ticket-entity').each(function() {
        r(this).hasClass('checked') || r(this).find('.checked').length ? r('.widget-ticket-entity-mobile').eq(r(this).data('i')).removeClass('mobile-hidden') : a == -1 && (a = r(this).data('i'));
      }),
      a != -1 && r('.widget-ticket-entity-mobile').eq(a).removeClass('mobile-hidden');
    }
  }
  (e.size() || n.size() || o.size() || p.size()) && (J(),
  a[0] = window.setInterval(function() {
    J(),
    t % 5 == 0 && (i = (i = t == 0 ? 1 : 0) == null ? 0 : i,
    d.each(function(t) {
      var e = r(this);
      l[t] == null && (e.data('index', t),
      e.data('block', 0),
      l[t] = r(this).children('li.widget-list-ticket'),
      l[t].slice(r(this).parent().data('showitems')).css('opacity', 0)),
      i || B(e);
    }),
    n = (n = t == 0 ? 1 : 0) == null ? 0 : n,
    o.each(function(t) {
      var e = r(this);
      if (h[t] == null && (e.data('active', 0),
      e.data('index', t),
      h[t] = r(this).find('.small-widget-slider-content-item')),
      e.data('block') != 1) {
        var i = e.data('active');
        if (!n) {
          var a = i;
          ++i > h[t].size() - 1 && (i = 0,
          e.find('.small-widget-slider-pager-line-fill').width('0%'),
          e.find('.small-widget-slider-page').removeClass('small-widget-slider-page-active')),
          e.find('.small-widget-slider-page').eq(i).addClass('small-widget-slider-page-active'),
          e.data('active', i),
          h[t].stop().eq(a).fadeOut(250, function() {
            h[t].stop().eq(i).fadeIn(250, function() {});
          });
        }
        e.find('.small-widget-slider-pager-line-fill').eq(e.data('active')).animate({
          width: '100%'
        }, 5e3);
      }
    }),
    c = (c = t == 0 ? 1 : 0) == null ? 0 : c,
    p.each(function(t) {
      var e = r(this);
      if (e.data('block') != 1 && e.data('off') != 1 && !c) {
        var i = e.find('.widget-featured-pager a'),
          a = e.find('.widget-featured-item');
        if (a.length > 1) {
          var n = e.data('active'),
            d = n;
          ++n == i.size() && (n = 0),
          e.data('active', n),
          a.eq(d).fadeOut('slow', function() {
            i.removeClass('widget-featured-page-active').eq(n).addClass('widget-featured-page-active'),
            a.eq(n).fadeIn('slow');
          });
        }
      }
    }));
    var c;
    var n;
    var i;
    t++;
  }, 1e3)),
  d.size() && (d.data('hover', 0),
  d.data('off', 0),
  d.data('margin', 0),
  d.hover(function() {
    r(this).data('hover', r(this).data('hover') ? 0 : 1);
  }),
  r('.widget-list-carousel-prev').hover(function() {
    var t = r(this).next().find('ul');
    t.data('hover', t.data('hover') ? 0 : 1);
  }).click(function(t) {
    t.preventDefault(),
    B(r(this).next().find('ul'), 1, 1);
  }),
  r('.widget-list-carousel-next').hover(function() {
    var t = r(this).prev().find('ul');
    t.data('hover', t.data('hover') ? 0 : 1);
  }).click(function(t) {
    t.preventDefault(),
    B(r(this).prev().prev().find('ul'), 1);
  })),
  r('.widget-list-ticket').hover(function() {
    r(this).find('.btn-primary').toggleClass('btn-primary-hover');
  }).click(function(t) {
    document.location.href = r(this).find('.btn-primary').attr('href');
  }),
  r('.widget-ticket-numbers > a').click(X),
  r('.widget-ticket-bnumbers > a').click(X),
  r('.widget-ticket-mobile-button a').click(function(t) {
    t.preventDefault(),
    r(this).hasClass('disabled') || r(this).parents('.widget-ticket-entity').find('.dialog-close').click();
  }),
  r('.widget-ticket-button-clear').click(function() {
    r(this).parents('.widget-ticket-entity').removeClass('checked').find('.checked').removeClass('checked'),
    r(this).prop('disabled', !0),
    r('.widget-ticket-entity .checked').length || r('.widget-ticket-clear-all').prop('disabled', !0);
    var t = r(this).parents('.widget-ticket-entity').data('i');
    r('.widget-ticket-entity-mobile').eq(t).find('.ticket-line').remove(),
    r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-newline').show(),
    r(this).parents('.widget-ticket-entity').find('.widget-ticket-mobile-button a').addClass('disabled'),
    r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-editline').hide(),
    r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-mobile-quickpick').show(),
    r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-mobile-delete').hide(),
    k(),
    M();
  }),
  r('.widget-ticket-clear-all').click(function() {
    r('.widget-ticket-content').find('.checked').removeClass('checked'),
    r('.widget-ticket-clear-all').prop('disabled', !0),
    r('.widget-ticket-button-clear').prop('disabled', !0),
    r('.widget-ticket-entity-mobile .ticket-line').remove(),
    r('.widget-ticket-entity-mobile .widget-ticket-entity-newline').show(),
    r('.widget-ticket-entity .widget-ticket-mobile-button a').addClass('disabled'),
    r('.widget-ticket-entity-mobile .widget-ticket-entity-editline').hide(),
    r('.widget-ticket-entity-mobile .widget-ticket-entity-mobile-quickpick').show(),
    r('.widget-ticket-entity-mobile .widget-ticket-entity-mobile-delete').hide(),
    k(),
    M();
  }),
  r('.widget-ticket-mobile-close .dialog-close').click(function() {
    k();
  }),
  r('.widget-ticket-button-quickpick').click(function() {
    var t;
    D(),
    t = r(this).parents('.widget-ticket-entity'),
    a[1] == -1 && (t.addClass('processing'),
    t.find('.checked').addClass('has-checked'),
    N = 0,
    (T = r('.widget-ticket-entity.checked')).addClass('has-checked'),
    (E = t).removeClass('has-checked'),
    a[1] = window.setInterval(z, 200));
  }),
  r('.widget-ticket-quickpick-all').click(function() {
    D(),
    R(r('.widget-ticket-entity'));
  }),
  r('.widget-ticket-button-more').click(function() {
    var t = u(),
      e = Math.ceil(25 / t);
    r('.widget-ticket-entity').not('.hidden').length / t == e - 1 && r('.widget-ticket-button-more').prop('disabled', !0),
    r('.widget-ticket-button-less').prop('disabled', !1),
    r('.widget-ticket-entity.hidden').slice(0, t).removeClass('hidden').css('opacity', 0).animate({
      opacity: 1
    }, 'slow', function() {
      r(this).removeClass('hidden');
    });
  }),
  r('.widget-ticket-button-less').click(function() {
    var t = u();
    r('.widget-ticket-entity').not('.hidden').length == 2 * t && r('.widget-ticket-button-less').prop('disabled', !0),
    r('.widget-ticket-button-more').prop('disabled', !1);
    var e = r('.widget-ticket-entity').not('.hidden'),
      i = e.length % t;
    i == 0 && (i = t),
    console.log(i),
    e.slice(e.length - i).css('opacity', 1).animate({
      opacity: 0
    }, 'slow', function() {
      r(this).addClass('hidden'),
      r(this).removeClass('checked').find('.checked').removeClass('checked'),
      r(this).find('.widget-ticket-button-clear').prop('disabled', !0);
      var t = r(this).data('i');
      r('.widget-ticket-entity-mobile').eq(t).find('.ticket-line').remove(),
      r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-newline').show(),
      r(this).find('.widget-ticket-mobile-button a').addClass('disabled'),
      r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-editline').hide(),
      r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-mobile-quickpick').show(),
      r('.widget-ticket-entity-mobile').eq(t).find('.widget-ticket-entity-mobile-delete').hide(),
      --i == 0 && (r('.widget-ticket-entity .checked').length || r('.widget-ticket-clear-all').prop('disabled', !0),
      k(),
      M());
    });
  }),
  r('.widget-ticket-entity-newline').click(g),
  r('.widget-ticket-entity-editline').click(g),
  r('.widget-ticket-entity-mobile .ticket-line').click(g),
  r('.widget-ticket-mobile-close .dialog-close').click(function(t) {
    t.preventDefault();
    var e = r(this).parents('.widget-ticket-entity').data('i');
    r('.widget-ticket-entity').eq(e).addClass('mobile-hidden'),
    r('body').removeClass('menu-active');
  }),
  r('.widget-ticket-entity-mobile-quickpick').click(function(t) {
    t.preventDefault();
    var e = r(this).parents('.widget-ticket-entity-mobile').data('i');
    Q(r('.widget-ticket-entity').eq(e)),
    L(),
    k(),
    M();
  }),
  r('a.small-purchase').click(function(t) {
    t.preventDefault();
    var e = r(this).data('count');
    r('.widget-ticket-entity').each(function() {
      if (!r(this).hasClass('checked') && !r(this).find('.checked').length) {
        if (--e == -1) { return !1 }
        Q(r('.widget-ticket-entity').eq(r(this).data('i')));
      }
    }),
    L(),
    k(),
    M();
  }),
  r('.widget-ticket-entity-mobile-delete').click(function(t) {
    t.preventDefault();
    var e = r(this).parents('.widget-ticket-entity-mobile').data('i');
    r('.widget-ticket-entity').eq(e).find('.widget-ticket-button-clear').click();
  }),
  r('.popup-login').click(function(t) {
    t.preventDefault(),
    r('.form-order-return').val(r(this).hasClass('popup-order') ? '1' : '0'),
    O(POPUP_LOGINFORM);
  }),
  r('.popup-signup').click(function(t) {
    t.preventDefault(),
    r('.form-order-return').val(r(this).hasClass('popup-order') ? '1' : '0'),
    O(POPUP_REGISTERFORM);
  }),
  r('.popup-lostpassword').click(function(t) {
    t.preventDefault(),
    O(POPUP_LOSTPASSWORD);
  }),
  r('.mobile-user-menu').click(function(t) {
    t.preventDefault(),
    r('.mobile-user-menu-container').slideToggle('fast');
  });
  var w = new Array();
  function v(t) {
    var e = t.find('a'),
      i = t.find('a').get(0).pathname.split('/');
    if (i.length >= 3 && r('#infobox_' + i[i.length - 2]).length) {
      var a = r('#infobox_' + i[i.length - 2]);
      a.css('top', e.offset().top + e.height()),
      a.css('left', e.offset().left),
      a.stop().fadeIn('fast');
    }
  }
  function b(t) {
    t.find('a');
    var e = t.find('a').get(0).pathname.split('/');
    e.length >= 3 && r('#infobox_' + e[e.length - 2]).length && r('#infobox_' + e[e.length - 2]).stop().fadeOut('fast');
  }
  r('#widget-ticket-form').submit(function(t) {
    var d = '',
      c = r(this).find('.widget-ticket-content'),
      e = (parseInt(c.data('min')),
      parseInt(c.data('min_bets'))),
      i = parseInt(c.data('max_bets')),
      a = r(this).find('.widget-ticket-entity.checked');
    if (a.size() < parseInt(c.data('min'))) {
      return O(POPUP_MINIMUM, [c.data('min')]),
      t.preventDefault(),
      !1;
    }
    if (c.data('multiplier') != null && a.size() % parseInt(c.data('multiplier')) != 0) {
      return O(POPUP_MULTIPLIER, [c.data('multiplier')]),
      t.preventDefault(),
      !1;
    }
    if (w = new Array(),
    r(this).find('.widget-ticket-entity').each(function(e) {
      var t = r(this).find('.widget-ticket-numbers a.checked'),
        i = r(this).find('.widget-ticket-bnumbers a.checked');
      if ((t.size() || i.size()) && (c.data('ncount') == t.size() && c.data('bcount') == i.size() || w.push(e),
      r(this).hasClass('checked'))) {
        var a = new Array(),
          n = new Array();
        t.each(function() {
          var t = parseInt(r(this).text());
          (t < 1 || t > c.data('nrange')) && w.push(e),
          a.push(t);
        }),
        i.each(function() {
          var t = parseInt(r(this).text());
          (t < 1 || t > c.data('brange')) && w.push(e),
          n.push(t);
        }),
        d += a.join('_'),
        n.length > 0 && (d += '-' + n.join('_')),
        d += ';';
      }
    }),
    w.length) {
      return t.preventDefault(),
      O(POPUP_WRONG_LINE),
      !1;
    }
    r("input[name='order[lottery]']").val();
    if ((a.length - 1) % i < e - 1) {
      return t.preventDefault(),
      O(POPUP_MINBETS),
      !1;
    }
    d = d.slice(0, -1),
    r('#widget-ticket-input').val(d),
    D();
  }),
  r('.dialog-continue').click(function() {
    I();
    for (var t = 0; t < w.length; t++) { r('.widget-ticket-entity').eq(w[t]).removeClass('checked').find('.checked').removeClass('checked') }
    r('#widget-ticket-form').submit();
  }),
  r('#dialog-close').click(function(t) {
    t.preventDefault(),
    I();
  }),
  r('.dialog-content .dialog-close').click(function(t) {
    t.preventDefault(),
    r(this).parents('#dialog').find('#dialog-close').click();
  }),
  r('#dialog-wrapper').click(function(t) {
    r(t.target).attr('id') == 'dialog-wrapper' && r(this).find('#dialog-close').click();
  }),
  r('.dialog-quickpick').on('click', function() {
    var t = r('.widget-ticket-content'),
      e = r('.widget-ticket-entity.checked').size(),
      i = 0;
    if (t.data('multiplier') > 1) {
      for (i = e > 4 ? parseInt(t.data('multiplier')) - e % parseInt(t.data('multiplier')) : parseInt(t.data('multiplier')) - e; r('.widget-ticket-entity').not('.hidden').length < e + i;) { r('.widget-ticket-button-more').trigger('click') }
    } else { i = parseInt(t.data('min')) - e }
    if (m = !0,
    D(),
    c) {
      var a = i;
      r('.widget-ticket-entity').each(function() {
        if (!r(this).hasClass('checked') && !r(this).find('.checked').length) {
          if (--a == -1) { return !1 }
          Q(r('.widget-ticket-entity').eq(r(this).data('i')));
        }
      }),
      k(),
      r('#widget-ticket-form').submit();
    } else {
      R(r('.widget-ticket-entity').not('.checked').slice(0, i), function() {
        r('#widget-ticket-form').submit();
      });
    }
    I();
  }),
  r('.order-summary-button-details').click(function(t) {
    t.preventDefault(),
    r(this).parent().parent().toggleClass('active'),
    r(this).parent().parent().next().toggleClass('hidden-normal');
  }),
  r('.confirm').click(function(t) {
    t.preventDefault(),
    r('.dialog-title .pull-left').eq(POPUP_CONFIRM).text(r(this).data('title')),
    r('.dialog-content p').eq(POPUP_CONFIRM).text(r(this).data('confirm')),
    r('.dialog-confirm').attr('href', r(this).attr('href')),
    O(POPUP_CONFIRM);
  }),
  r('#results-table').size() && r('#results-table').tablesorter({
    sortList: [[2, 1]],
    sortRestart: !0,
    headers: {
      0: {
        sorter: !1
      },
      2: {
        sortInitialOrder: 'desc'
      },
      3: {
        sorter: !1
      },
      4: {
        sortInitialOrder: 'desc'
      },
      5: {
        sorter: !1
      }
    }
  }),
  r('#info-table').size() && r('#info-table').tablesorter({
    sortList: [[2, 0]],
    sortRestart: !0,
    headers: {
      0: {
        sorter: !1
      },
      3: {
        sorter: !1
      },
      6: {
        sorter: !1
      }
    }
  }),
  r('#results-table tbody tr').click(function() {
    document.location.href = r(this).find('td').eq(2).find('a').attr('href');
  }),
  r('#info-table tbody tr').click(function() {
    document.location.href = r(this).find('td').eq(2).find('a').attr('href');
  }),
  r('.table-transactions tbody tr').click(function() {
    document.location.href = r(this).find('td').last().find('a').last().attr('href');
  }),
  r('.table-payment tbody tr').click(function() {
    document.location.href = r(this).find('td').last().find('a').attr('href');
  }),
  r('.results-short-link-disabled').click(function(t) {
    t.preventDefault();
  }),
  r('.results-short-select').change(function() {
    document.location.href = r(this).data('link') + r(this).val();
  }),
  r('.tooltip').hover(function() {
    var t = r(this);
    t.css('position', 'relative');
    var e, i = t.outerWidth(), a = t.outerHeight();
    r(this).find('.tooltip-cloud').size() ? (e = r(this).find('.tooltip-cloud')).stop().animate({
      opacity: 1
    }, 200) : ((e = r('<div>', {
      class: 'tooltip-cloud',
      html: r(this).data('tooltip')
    })).css('opacity', 0),
    e.appendTo(t),
    t.hasClass('tooltip-bottom') ? e.css('top', parseInt(a) + 5).css('left', -parseInt(e.outerWidth() - i) / 2) : e.css('top', -parseInt(e.outerHeight() - a) / 2).css('left', parseInt(i) + 5),
    e.stop().animate({
      opacity: 1
    }, 200));
  }, function() {
    var t = r(this).find('.tooltip-cloud');
    t.stop().animate({
      opacity: 0
    }, 200, function() {
      t.remove();
    });
  });
  var y = null;
  function C() {
    var t = r('.payment-form').data('minorder');
    value = parseFloat(r('.deposit-amount.platform-form input').val()),
    isNaN(value) && (value = 0),
    r('.deposit-amount.platform-form input').val().length ? r('.deposit-amount.platform-form').addClass('deposit-amount-active') : r('.deposit-amount.platform-form').removeClass('deposit-amount-active'),
    r('.deposit-amount.platform-form input').val().length && (value == 0 || parseFloat(t) > value) ? r('.deposit-amount.platform-form').addClass('deposit-amount-error') : r('.deposit-amount.platform-form').removeClass('deposit-amount-error');
  }
  function q(t) {
    isNaN(t) && (t = 0);
    var e = r('.payment-form').data('format'),
      i = t.toString().match(/^(-?\d+)\.?(\d{0,2})?/)[1],
      a = t.toString().match(/^(-?\d+)\.?(\d{0,2})?/)[2];
    void 0 === a && (a = '00'),
    e = (e = (e = e.replace('{c}', r('.payment-form').data('currency'))).replace('{n}', i)).replace('{s}', a),
    r('#paymentSubmit span').text(e),
    r('#paymentAmount').val(t),
    t > 0 ? r('#paymentSubmit span').removeClass('hidden-normal') : r('#paymentSubmit span').addClass('hidden-normal'),
    r('.entropay-info').data('pounds', i).data('cents', a),
    _();
  }
  r('.infobox').hover(function(t) {
    v(r(this)),
    y = r(this);
  }, function(t) {
    b(r(this));
  }),
  r('.infobox-wrapper').hover(function(t) {
    v(y);
  }, function(t) {
    b(y);
  }),
  r('.cvv-info-tooltip').click(function(t) {
    t.preventDefault();
  }),
  r('.deposit-amount').click(function() {
    r('.deposit-amount').removeClass('deposit-amount-active');
    var t = 0;
    r(this).hasClass('platform-form') ? (t = parseFloat(r(this).find('input').val()),
    r(this).find('input').val().length && r(this).addClass('deposit-amount-active'),
    C()) : (r('.deposit-amount.platform-form input').val(''),
    t = parseFloat(r(this).data('value')),
    r(this).addClass('deposit-amount-active')),
    q(t);
  }),
  r('.deposit-amount.platform-form input').on('keyup', function() {
    value = parseFloat(r(this).val()),
    q(value),
    r('#paymentCustom').val(value);
  }),
  r('.deposit-amount.platform-form input').on('keyup', function() {
    C();
  });
  var x = !0;
  function _() {
    var t = r('.payment-form').data('minorder'),
      e = r('.payment-form').data('cardminorder');
    t != null && e < t && (e = t),
    value = parseFloat(r('#paymentAmount').val()),
    isNaN(value) && (value = 0);
    var i = value == 0 || parseFloat(t) > value,
      a = value == 0 || parseFloat(e) > value;
    a == 0 ? (r('.platform-alert-credit-card-warning').addClass('hidden-normal'),
    r('.payment-cc-items').removeClass('hidden-normal')) : (r('.platform-alert-credit-card-warning').removeClass('hidden-normal'),
    r('.payment-cc-items').addClass('hidden-normal')),
    r('#paymentType').val() != 2 || (function() {
      $ok = !0,
      r('#paymentCCCard').length && r('#paymentCCCard').val() != 0 ? (!r('#paymentCCCVV').length || r('#paymentCCCVV').val().length < 3) && ($ok = !1) : ((!r('#paymentCCNumber').length || r('#paymentCCNumber').val().length < 12) && ($ok = !1),
      (!r('#paymentCCCVV').length || r('#paymentCCCVV').val().length < 3) && ($ok = !1),
      r('#paymentCCHolder').length && r('#paymentCCHolder').val().length != 0 || ($ok = !1));
      return $ok;
    }()) && !a || (i = !0),
    r('#paymentType').val() == 1 && (i = !1),
    r('#paymentSubmit').prop('disabled', i);
  }
  function I() {
    r('#dialog-wrapper').animate({
      opacity: 0
    }, function() {
      r(this).hide();
    });
  }
  if (r('.payment-nav ul li').each(function(e) {
    r(this).find('a').click(function(t) {
      t.preventDefault(),
      r('.payment-type-item').addClass('hidden-normal'),
      r('.payment-type-item').eq(e).removeClass('hidden-normal'),
      r(this).parents('ul').find('li').removeClass('active'),
      r(this).parent().addClass('active'),
      r('#paymentTypeMobile').val(r(this).parent().data('type') + '_' + r(this).parent().data('subtype')),
      r('#paymentType').val(r(this).parent().data('type')),
      r('#paymentSubtype').val(r(this).parent().data('subtype')),
      r(this).parent().data('bclass') != null ? r('#paymentSubmit').data('bclass', r(this).parent().data('bclass')) : r('#paymentSubmit').removeData('bclass'),
      x || r('html, body').animate({
        scrollTop: r('#payment').offset().top
      }, 100),
      x = !1,
      _();
    });
  }),
  r('.payment-nav ul li.active a').click(),
  r('#paymentTypeMobile').change(function() {
    var t = r(this).val().split('_');
    r('.payment-nav ul li').removeClass('active'),
    r('.payment-nav ul li').each(function() {
      r(this).data('type') == t[0] && r(this).data('subtype') == t[1] && r(this).find('a').click();
    });
  }),
  r('.entropay-info a').click(function(t) {
    t.preventDefault();
    var e = r(this).parent().data('pounds'),
      i = r(this).parent().data('cents'),
      a = '';
    e != null && i != null ? a += parseInt(e) + '-' + parseInt(i) : a = '0-0',
    document.location.href = r(this).attr('href') + a;
  }),
  r('.payment-form').on('submit', function(t) {
    r('#paymentSubmit').data('bclass') == 'entropay' && (t.preventDefault(),
    r('.payment-nav ul li[data-type="2"] a').click());
  }),
  r('#paymentCCCard').length && r('#paymentCCCard').change(function() {
    r(this).val() == 0 ? (r('#paymentCCNumber').parent().show(),
    r('#paymentCCHolder').parent().show(),
    r('#paymentCCExpirationDate').parent().show(),
    r('#paymentCCSave').parent().parent().show()) : (r('#paymentCCNumber').parent().hide(),
    r('#paymentCCHolder').parent().hide(),
    r('#paymentCCExpirationDate').parent().hide(),
    r('#paymentCCSave').parent().parent().hide());
  }),
  r('#paymentCCNumber').change(_).on('keyup', _),
  r('#paymentCCCVV').change(_).on('keyup', _),
  r('#paymentCCHolder').change(_).on('keyup', _),
  r('#paymentCCCard').change(_),
  r('.myaccount-filter select').change(function() {
    r(this).closest('form').submit();
  }),
  r('.table-sort .tablesorter-header').click(function() {
    document.location.href = r(this).data('href');
  }),
  r('#inputWithdrawalType').change(function() {
    r(this).val() == 5 ? (r('#withdrawalCCMax').show(),
    r('#withdrawalMax').hide()) : (r('#withdrawalCCMax').hide(),
    r('#withdrawalMax').show());
  }),
  r('.actual-lang').click(function(t) {
    t.preventDefault();
  }),
  r('.widget-featured-pager').hover(function() {
    r(this).parent().data('block', 1);
  }, function() {
    r(this).parent().data('block', 0);
  }),
  r('.widget-featured-item').hover(function() {
    r(this).parent().data('block', 1);
  }, function() {
    r(this).parent().data('block', 0);
  }),
  r('.widget-featured-pager a').click(function(t) {
    t.preventDefault();
    var e = r(this).closest('.widget-featured-content'),
      i = r(this),
      a = e.data('active'),
      n = e.find('.widget-featured-item'),
      d = r(this).data('index');
    e.data('active', d),
    e.find('.widget-featured-pager a').removeClass('widget-featured-page-active'),
    i.addClass('widget-featured-page-active'),
    n.eq(a).fadeOut('slow', function() {
      n.eq(d).fadeIn('slow');
    });
  }),
  r('.small-widget-slider').data('active', 0),
  r('.small-widget-slider-page').hover(function() {
    var t = r(this).closest('.small-widget-slider');
    t.data('block', 1);
    var e = parseInt(r(this).text());
    t.find('.small-widget-slider-page').slice(0, e).addClass('small-widget-slider-page-marked'),
    t.find('.small-widget-slider-page').slice(e).addClass('small-widget-slider-page-unmarked'),
    t.find('.small-widget-slider-pager-line-fill').stop().width('0%').slice(0, e - 1).width('100%');
  }, function() {
    var t = r(this).closest('.small-widget-slider');
    t.data('block', 0);
    var e = t.find('.small-widget-slider-page-active').size() - 1;
    t.data('active', e - 1),
    t.find('.small-widget-slider-page').removeClass('small-widget-slider-page-marked').removeClass('small-widget-slider-page-unmarked'),
    t.find('.small-widget-slider-pager-line-fill').stop().width('0%').slice(0, e).width('100%');
  }).click(function() {
    var t = r(this).closest('.small-widget-slider'),
      e = parseInt(r(this).text());
    t.data('active', e),
    t.find('.small-widget-slider-page').removeClass('small-widget-slider-page-active').slice(0, e).addClass('small-widget-slider-page-active'),
    h[t.data('index')].hide(),
    h[t.data('index')].eq(e - 1).fadeIn(250, function() {});
  }),
  r('a.faq-toggle').click(function(t) {
    t.preventDefault(),
    r(this).find('.fa').toggleClass('fa-plus').toggleClass('fa-minus'),
    r(this).parent().next().fadeToggle(200),
    r(this).parent().toggleClass('active');
  }),
  r('.lotto-lightbox').size() && (r('.lotto-lightbox').data('index', 1),
  lightbox.init(),
  lightbox.option({
    albumLabel: r('.lotto-lightbox').data('label'),
    fadeDuration: 200
  })),
  r('.myaccount-scan-next').click(function(t) {
    t.preventDefault();
    var e = r('.lotto-lightbox').data('index') + 1;
    r(this).hasClass('myaccount-scan-btn-disabled') || (r('.lotto-lightbox').data('index', e),
    r('.myaccount-scan-page span').text(e),
    r('.myaccount-scan').hide().eq(e - 1).show(),
    e == r('.myaccount-scan').size() && r(this).addClass('myaccount-scan-btn-disabled'),
    r('.myaccount-scan-prev').removeClass('myaccount-scan-btn-disabled'));
  }),
  r('.myaccount-scan-prev').click(function(t) {
    t.preventDefault();
    var e = r('.lotto-lightbox').data('index') - 1;
    r(this).hasClass('myaccount-scan-btn-disabled') || (r('.lotto-lightbox').data('index', e),
    r('.myaccount-scan-page span').text(e),
    r('.myaccount-scan').hide().eq(e - 1).show(),
    e == 1 && r(this).addClass('myaccount-scan-btn-disabled'),
    r('.myaccount-scan-next').removeClass('myaccount-scan-btn-disabled'));
  }),
  r('#mobile-language').change(function() {
    document.location.href = r(this).val();
  }),
  r('#results-mobile-sort').change(function() {
    var t = r(this).val().split('_');
    r('#results-table').trigger('sorton', [[t]]);
  }),
  r('#results-table').bind('sortEnd', function(t) {
    var e = t.target.config.sortList[0];
    r('#results-mobile-sort').val(e.join('_'));
  }),
  r('#info-mobile-sort').change(function() {
    var t = r(this).val().split('_');
    r('#info-table').trigger('sorton', [[t]]);
  }),
  r('#info-table').bind('sortEnd', function(t) {
    var e = t.target.config.sortList[0];
    r('#info-mobile-sort').val(e.join('_'));
  }),
  r('#footer-mobile-nav').change(function() {
    r(this).val() != '0' && (document.location.href = r(this).val());
  }),
  r('#info-mobile-sort').change(function() {
    var t = r(this).val().split('_');
    r('.table-info-details').trigger('sorton', [[t]]);
  }),
  r('#myaccount-tickets-mobile-sort').change(function() {
    document.location.href = r(this).val();
  }),
  r('#info-table').bind('sortEnd', function(t) {
    var e = t.target.config.sortList[0];
    r('#info-mobile-sort').val(e.join('_'));
  }),
  r('#faq-mobile-cats').change(function() {
    window.location.href = r(this).find('option:selected').data('link');
  }),
  r('.menu-trigger').hover(function() {
    r(this).next().show();
  }, function() {
    r(this).next().hide();
  }),
  r('.menu-wrapper').hover(function() {
    r(this).show();
  }, function() {
    r(this).hide();
  }).hide(),
  r('.order-info-delete-item').click(function(t) {
    t.preventDefault();
    var e = r(this);
    r.ajax({
      url: '/ajax/order-delete/' + r('.order-info-delete-item').index(e),
      cache: !1
    }).done(function(t) {
      if (t[0] == '1') {
        t = t.split(':');
        r('span.order-count').text(t[1]),
        r('span.order-info-amount').text(t[2]),
        r('.order-info-summary-amount span').text(t[2]),
        t[1] == 0 && r('.order-info-area .menu-wrapper').remove(),
        e.parent().fadeOut('fast', function() {
          r(this).remove();
        });
      }
    });
  }),
  r('#newsCategorySelect').change(function() {
    window.location.href = r(this).val();
  }),
  r('.lotto-toggle').click(function(t) {
    var e = r(this).text();
    t.preventDefault(),
    r(this).next().fadeToggle('fast'),
    r(this).text(r(this).data('togglename')),
    r(this).data('togglename', e);
  }),
  r('.myaccount-remove-dialog-close').click(function(t) {
    t.preventDefault(),
    I(),
    r('#myaccount-remove-confirmation-password').prop('value', ''),
    r('.myaccount-remove-link').prop('disabled', 'disabled').addClass('disabled'),
    r('#myaccount-remove-submit').prop('value', '').addClass('disabled').prop('disabled', 'disabled');
  }),
  r('#myaccount-remove-link').click(function(t) {
    t.preventDefault(),
    r('#myaccount-remove-confirmation-password').prop('value', ''),
    r('.myaccount-remove-link').prop('disabled', 'disabled').addClass('disabled'),
    r('.dialog-title .pull-left').eq(POPUP_CONFIRM_DELETE_ACCOUNT).text(r(this).data('title')),
    r('.dialog-content p').eq(POPUP_CONFIRM_DELETE_ACCOUNT).text(r(this).data('confirm')),
    O(POPUP_CONFIRM_DELETE_ACCOUNT);
  }),
  r('#myaccount-remove-confirmation-password').on('keyup', function() {
    var t = r(this).val(),
      e = r('#myaccount-remove-submit');
    t.length > 0 ? (e.removeClass('disabled'),
    e.removeProp('disabled')) : (e.addClass('disabled'),
    e.prop('disabled', 'disabled'));
  }),
  r('select.content-nav').change(function() {
    r(this).val() != '0' && r(this).val() != '' && (window.location.href = r(this).val());
  }),
  r('#dialog-wrapper').length) {
    r('#dialog-wrapper').hasClass('dialog-show') && r('#dialog-wrapper').show();
    var P = r('#dialog');
    P.css('marginLeft', -P.width() / 2),
    P.css('marginTop', -P.height() / 2);
  }
  function O(t, e) {
    if (r('#dialog-wrapper').stop(!0),
    e != null && e.length > 0) {
      for (var i = 1; i <= e.length; i++) { r('.dialog-content').eq(t).find('p').text(r('.dialog-content').eq(t).find('p').text().replace('%' + i + 's', e[i - 1])) }
    }
    r('.dialog-title .pull-left').addClass('hidden-normal').eq(t).removeClass('hidden-normal'),
    r('.dialog-content').addClass('hidden-normal').eq(t).removeClass('hidden-normal'),
    r('#dialog-wrapper').css('opacity', 0).show().animate({
      opacity: 1
    });
    var a = r('#dialog');
    a.css('marginLeft', -a.width() / 2),
    a.css('marginTop', -a.height() / 2);
  }
  function M(t) {
    t != null && t != null || (t = !1);
    var e = r('.widget-ticket-content'),
      i = e.find('.widget-ticket-entity.checked').not('.processing').size(),
      a = r('.widget-ticket-summary-content-total-value span');
    t && r('html, body').animate({
      scrollTop: r('.widget-ticket-summary').offset().top - r(window).height() + r('.widget-ticket-summary').outerHeight(!0) + 30
    }, 500);
    var n = 0;
    if (i > 0) { n = i * parseInt(e.data('price')) }
    var d = e.data('format'),
      c = Math.floor(n / 100),
      l = n - 100 * c;
    d = (d = (d = d.replace('{c}', e.data('currency'))).replace('{n}', c)).replace('{s}', (l < 10 ? '0' : '') + l),
    m == 0 && r('.widget-ticket-summary-button').prop('disabled', !1),
    a.text(d),
    i == 0 && r('.widget-ticket-summary-button').prop('disabled', !0);
  }
  function D() {
    r('.widget-ticket-button-quickpick').prop('disabled', !0),
    r('.widget-ticket-quickpick-all').prop('disabled', !0),
    r('.widget-ticket-button-clear').prop('disabled', !0),
    r('.widget-ticket-clear-all').prop('disabled', !0),
    r('.widget-ticket-summary-button').prop('disabled', !0);
  }
  function L() {
    m == 0 && (r('.widget-ticket-button-quickpick').prop('disabled', !1),
    r('.widget-ticket-quickpick-all').prop('disabled', !1),
    r('.widget-ticket-entity').each(function() {
      r(this).find('.checked').size() && r(this).find('.widget-ticket-button-clear').prop('disabled', !1);
    }),
    r('.widget-ticket-clear-all').prop('disabled', !1),
    r('.widget-ticket-summary-button').prop('disabled', !1));
  }
  a[1] = -1;
  var N = 0,
    T = null,
    E = null,
    A = null;
  function R(t, e) {
    A = e,
    a[1] == -1 && (N = 0,
    t.addClass('processing'),
    T = t,
    a[1] = window.setInterval(U, 200));
  }
  function U() {
    N++,
    T.each(function() {
      r(this).hasClass('hidden') || Q(r(this));
    }),
    N > 5 && (L(),
    window.clearInterval(a[1]),
    a[1] = -1,
    T.removeClass('processing'),
    k(),
    M(!0),
    A != null && A());
  }
  function z() {
    N++,
    r(this).hasClass('hidden') || (Q(E),
    N > 5 && (L(),
    window.clearInterval(a[1]),
    a[1] = -1,
    T.removeClass('has-checked'),
    E.removeClass('processing'),
    k(),
    M()));
  }
  var S = r('.widget-ticket-entity-mobile'),
    V = r('.widget-ticket-entity'),
    F = new Array(),
    j = new Array(),
    W = new Array(),
    H = new Array();
  function Q(t) {
    var e = t.data('i');
    t.removeClass('checked'),
    F[e].removeClass('checked'),
    j[e].removeClass('checked'),
    W[e].removeClass('checked'),
    H[e].removeClass('checked');
    var i = parseInt(t.parent().data('ncount')),
      a = parseInt(t.parent().data('bcount')),
      n = parseInt(t.parent().data('nrange')),
      d = parseInt(t.parent().data('brange')),
      c = $(i, n),
      l = $(a, d),
      s = r('<div class="ticket-line"></div>');
    c.sort(G),
    l.sort(G);
    for (var o = 0; o < i; o++) {
      s.append(r('<div class="ticket-line-number">' + c[o] + '</div>')),
      W[e].eq(c[o] - 1).addClass('checked');
    }
    for (o = 0; o < a; o++) {
      s.append(r('<div class="ticket-line-bnumber">' + l[o] + '</div>')),
      H[e].eq(l[o] - 1).addClass('checked');
    }
    t.addClass('checked'),
    F[e].addClass('checked'),
    j[e].addClass('checked'),
    S.eq(e).find('.ticket-line').remove(),
    s.click(g),
    S.eq(e).append(s),
    S.eq(e).find('.widget-ticket-entity-newline').hide(),
    S.eq(e).find('.widget-ticket-entity-editline').hide(),
    S.eq(e).find('.widget-ticket-entity-mobile-quickpick').hide(),
    S.eq(e).find('.widget-ticket-entity-mobile-delete').show();
  }
  function G(t, e) {
    return t - e;
  }
  function $(t, e) {
    var i = new Array();
    if (t == 0) { return i }
    for (var a = null; a = Math.floor(Math.random() * e + 1),
    r.inArray(a, i) == -1 && i.push(a),
    i.length < t;)
      ;
    return i;
  }
  function X(t) {
    t.preventDefault();
    var e = r(this).parents('.widget-ticket-entity'),
      i = 1;
    r(this).parent().hasClass('widget-ticket-numbers') && (i = 0);
    var a = e.find('.widget-ticket-numbers'),
      n = e.find('.widget-ticket-bnumbers'),
      d = a.find('.checked').size(),
      c = n.size() ? n.find('.checked').size() : 0;
    if (i == 0 && d < e.parent().data('ncount') || i == 1 && c < e.parent().data('bcount') || r(this).hasClass('checked')) {
      if (r(this).hasClass('checked') ? i == 0 ? d-- : c-- : i == 0 ? d++ : c++,
      r(this).toggleClass('checked'),
      d == 0 && c == 0 ? (e.find('.widget-ticket-button-clear').prop('disabled', !0),
      r('.widget-ticket-clear-all').prop('disabled', !0)) : (e.find('.widget-ticket-button-clear').prop('disabled', !1),
      r('.widget-ticket-clear-all').prop('disabled', !1)),
      d == e.parent().data('ncount') && c == e.parent().data('bcount')) {
        e.addClass('checked');
        for (var l = e.data('i'), s = r('<div class="ticket-line"></div>'), o = 0; o < d; o++) { s.append(r('<div class="ticket-line-number">' + a.find('.checked').eq(o).text() + '</div>')) }
        for (o = 0; o < c; o++) { s.append(r('<div class="ticket-line-bnumber">' + n.find('.checked').eq(o).text() + '</div>')) }
        r('.widget-ticket-entity-mobile').eq(l).find('.ticket-line').remove(),
        s.click(g),
        r('.widget-ticket-entity-mobile').eq(l).append(s),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-newline').hide(),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-mobile-button a').removeClass('disabled'),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-editline').hide(),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-mobile-quickpick').hide(),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-mobile-delete').show(),
        k();
      } else {
        e.removeClass('checked');
        l = e.data('i');
        r('.widget-ticket-entity-mobile').eq(l).find('.ticket-line').remove(),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-newline').show(),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-mobile-button a').addClass('disabled'),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-mobile-quickpick').show(),
        r('.widget-ticket-entity-mobile').eq(l).find('.widget-ticket-entity-mobile-delete').hide();
      }
      i == 0 && (d == e.parent().data('ncount') ? a.addClass('checked') : a.removeClass('checked')),
      i == 1 && (c == e.parent().data('bcount') ? n.addClass('checked') : n.removeClass('checked')),
      M();
    }
  }
  function B(e, t, i) {
    t = t == null ? 0 : t,
    i = i == null ? 0 : i;
    var a = e.data('index');
    if (e.data('block') == 0 && e.data('off') == 0 && l[a].size() > e.parent().data('showitems') && (!e.data('hover') || t)) {
      e.data('block', 1);
      var n = [i ? parseInt(e.parent().data('showitems')) : 0, i ? 0 : parseInt(e.parent().data('showitems'))];
      if (i) {
        var d = l[a].last().detach();
        e.prepend(d),
        l[a] = e.children('li.widget-list-ticket'),
        e.css('left', -(l[a].eq(0).outerWidth(!0) + parseInt(l[a].eq(1).css('marginLeft'))));
      }
      l[a].eq(n[0]).animate({
        opacity: 0
      }, 800),
      l[a].eq(n[1]).delay(200).animate({
        opacity: 1
      }, 800);
      var c = [];
      c = i ? {
        left: 0
      } : {
        left: -(l[a].eq(0).outerWidth(!0) + parseInt(l[a].eq(1).css('marginLeft')))
      },
      e.animate(c, 1e3, 'swing', function() {
        if (!i) {
          var t = l[a].eq(n[0]).detach();
          e.append(t),
          e.css('left', 0),
          l[a] = e.children('li.widget-list-ticket');
        }
        e.data('block', 0);
      });
    }
  }
  function Y(t) {
    var e = new Array();
    return e[0] = Math.floor(t / INTERVAL_DAY),
    t -= e[0] * INTERVAL_DAY,
    e[1] = Math.floor(t / INTERVAL_HOUR),
    t -= e[1] * INTERVAL_HOUR,
    e[2] = Math.floor(t / INTERVAL_MINUTE),
    t -= e[2] * INTERVAL_MINUTE,
    e[3] = Math.floor(t / INTERVAL_SECOND),
    e;
  }
  function J() {
    var l = new Date();
    l = l.getTime(),
    e.each(function(a) {
      var t = 1e3 * parseInt(r(this).attr('datetime')) - l,
        n = new Array(),
        e = r(this);
      if (t > 0) {
        var d = Y(t);
        n[0] = Math.floor(d[0] / 10),
        n[1] = d[0] - 10 * n[0],
        n[2] = Math.floor(d[1] / 10),
        n[3] = d[1] - 10 * n[2],
        n[4] = Math.floor(d[2] / 10),
        n[5] = d[2] - 10 * n[4],
        n[6] = Math.floor(d[3] / 10),
        n[7] = d[3] - 10 * n[6];
      } else {
        for (i = 0; i <= 7; i++) { n[i] = 0 }
      }
      s[a] == null && (e.data('index', a),
      s[a] = [r(this).find('.digit-next-up'), r(this).find('.digit-bottom'), r(this).find('.digit-next-bottom'), r(this).find('.digit')]);
      var c = (function() {
        if (!window.getComputedStyle) { return !1 }
        var t, e = document.createElement('p'), i = {
          webkitTransform: '-webkit-transform',
          OTransform: '-o-transform',
          msTransform: '-ms-transform',
          MozTransform: '-moz-transform',
          transform: 'transform'
        };
        for (var a in document.body.insertBefore(e, null),
        i) {
          void 0 !== e.style[a] && (e.style[a] = 'translate3d(1px,1px,1px)',
          t = window.getComputedStyle(e).getPropertyValue(i[a]));
        }
        return document.body.removeChild(e),
        void 0 !== t && t.length > 0 && t !== 'none';
      }());
      s[a][3].each(function(e) {
        r(this).text() != n[e] && (c ? (s[a][2].eq(e).text(n[e]),
        s[a][0].show().eq(e).text(n[e]),
        r({
          deg: 0
        }).animate({
          deg: 90
        }, {
          duration: 400,
          step: function(t) {
            s[a][1].eq(e).css({
              transform: 'rotateX(' + t + 'deg)'
            });
          },
          complete: function() {
            r({
              deg: -90
            }).animate({
              deg: 0
            }, {
              duration: 400,
              step: function(t) {
                s[a][0].eq(e).css({
                  transform: 'rotateX(' + t + 'deg)'
                });
              },
              complete: function() {
                s[a][1].eq(e).text(n[e]),
                s[a][3].eq(e).text(n[e]),
                e % 2 == 0 && (n[e] == 0 ? s[a][3].eq(e).addClass('desktop-only') : s[a][3].eq(e).removeClass('desktop-only')),
                s[a][1].eq(e).css({
                  transform: 'rotateX(0deg)'
                }),
                s[a][0].eq(e).css({
                  transform: 'rotateX(90deg)'
                });
              }
            });
          }
        })) : (s[a][2].eq(e).text(n[e]),
        s[a][0].eq(e).text(n[e]),
        s[a][1].eq(e).text(n[e]),
        s[a][3].eq(e).text(n[e])));
      });
    }),
    n.each(function() {
      var t = 1e3 * parseInt(r(this).attr('datetime')) - l,
        e = Y(t),
        a = r(this).find('.countdown-item');
      if (t > 0) {
        for (i = 0; i <= 3; i++) {
          var n = e.length - a.length;
          i >= n && a.eq(i - n).text(e[i]);
        }
      }
    });
  }
  if (V.each(function(t) {
    W[t] = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-numbers').children('a'),
    H[t] = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-bnumbers').children('a'),
    F[t] = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-numbers'),
    j[t] = r(this).children('.widget-ticket-entity-content').children('.widget-ticket-bnumbers');
  }),
  matchMedia) {
    var K = window.matchMedia('(min-width: 601px)'),
      Z = window.matchMedia('(max-width: 400px)'),
      tt = window.matchMedia('(min-width: 801px)'),
      et = window.matchMedia('(min-width: 1221px)'),
      it = window.matchMedia('(min-width: 1001px)'),
      at = window.matchMedia('(min-width: 601px)'),
      nt = window.matchMedia('(max-width: 1220px)'),
      dt = window.matchMedia('(max-width: 900px)');
    if (K.addListener(rt),
    Z.addListener(pt),
    tt.addListener(ht),
    et.addListener(ot),
    it.addListener(function(t) {
      t.matches && r('.infobox-wrapper').hide();
    }),
    at.addListener(lt),
    nt.addListener(st),
    dt.addListener(st),
    rt(K),
    ht(tt),
    ot(et),
    lt(at),
    r('.wpcf7-recaptcha').size()) {
      recaptchaCallback = function() {
        ct(),
        pt(Z),
        recaptchaLottoCallback(Z);
      }
      ;
      var ct = recaptchaCallback;
    }
  }
  function lt(t) {
    t.matches ? (c = !1,
    f()) : (c = !0,
    k());
  }
  function st(t) {
    f();
  }
  function ot(t) {
    t.matches ? d.data('margin', 0) : d.data('margin', 1);
  }
  function rt(t) {
    t.matches ? d.each(function() {
      if (!r(this).parents('.widget-list-content').hasClass('widget-list-display2')) {
        var t = r(this);
        t.data('off', 0),
        t.children('li.widget-list-ticket').slice(t.parent().data('showitems') - 1).show();
      }
    }) : d.each(function() {
      if (!r(this).parents('.widget-list-content').hasClass('widget-list-display2')) {
        var t = r(this);
        t.data('off', 1),
        t.children('li.widget-list-ticket').slice(t.parent().data('showitems')).hide(),
        t.children('li.widget-list-ticket').slice(0, t.parent().data('showitems') - 1).stop().css('opacity', 1);
      }
    });
  }
  function ht(t) {
    t.matches ? d.each(function() {
      if (r(this).parents('.widget-list-content').hasClass('widget-list-display2')) {
        var t = r(this);
        t.data('off', 0),
        t.children('li.widget-list-ticket').slice(t.parent().data('showitems') - 1).show();
      }
    }) : d.each(function() {
      if (r(this).parents('.widget-list-content').hasClass('widget-list-display2')) {
        var t = r(this);
        t.data('off', 1),
        t.children('li.widget-list-ticket').slice(t.parent().data('showitems')).hide(),
        t.children('li.widget-list-ticket').slice(0, t.parent().data('showitems') - 1).stop().css('opacity', 1);
      }
    });
  }
  function pt(t) {
    if (r('.wpcf7-recaptcha').size()) {
      var e = r('.wpcf7-recaptcha').eq(0),
        i = e.data(),
        a = e.parent();
      e.empty().remove();
      var n = e.clone();
      a.append(n),
      n.data(i);
      var d = {
        sitekey: r('.wpcf7-recaptcha').data('sitekey'),
        size: 'compact'
      };
      t.matches || (d.size = 'normal'),
      grecaptcha.render(n.get(0), d);
    }
  }
  r('.platform-form').submit(function() {
    r(this).find('input[type="submit"]').prop('disabled', !0),
    r(this).find('button[type="submit"]').prop('disabled', !0);
  }),
  r('.payment-form').submit(function() {
    r(this).find('button[type="submit"]').prop('disabled', !0);
  });
});
!(function() {
  function e(t, n, i) {
    return t.call.apply(t.bind, arguments);
  }
  function o(n, i, t) {
    if (!n) { throw Error() }
    if (arguments.length > 2) {
      var e = Array.prototype.slice.call(arguments, 2);
      return function() {
        var t = Array.prototype.slice.call(arguments);
        return Array.prototype.unshift.apply(t, e),
        n.apply(i, t);
      };
    }
    return function() {
      return n.apply(i, arguments);
    };
  }
  function p(t, n, i) {
    return (p = Function.prototype.bind && Function.prototype.bind.toString().indexOf('native code') != -1 ? e : o).apply(null, arguments);
  }
  var r = Date.now || function() {
    return +new Date();
  }
    ;
  var f = !!window.FontFace;
  function c(t, n, i, e) {
    if (n = t.c.createElement(n),
    i) {
      for (var o in i) { i.hasOwnProperty(o) && (o == 'style' ? n.style.cssText = i[o] : n.setAttribute(o, i[o])) }
    }
    return e && n.appendChild(t.c.createTextNode(e)),
    n;
  }
  function h(t, n, i) {
    (t = t.c.getElementsByTagName(n)[0]) || (t = document.documentElement),
    t.insertBefore(i, t.lastChild);
  }
  function i(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function d(t, n, i) {
    n = n || [],
    i = i || [];
    for (var e = t.className.split(/\s+/), o = 0; o < n.length; o += 1) {
      for (var a = !1, s = 0; s < e.length; s += 1) {
        if (n[o] === e[s]) {
          a = !0;
          break;
        }
      }
      a || e.push(n[o]);
    }
    for (n = [],
    o = 0; o < e.length; o += 1) {
      for (a = !1,
      s = 0; s < i.length; s += 1) {
        if (e[o] === i[s]) {
          a = !0;
          break;
        }
      }
      a || n.push(e[o]);
    }
    t.className = n.join(' ').replace(/\s+/g, ' ').replace(/^\s+|\s+$/, '');
  }
  function a(t, n) {
    for (var i = t.className.split(/\s+/), e = 0, o = i.length; e < o; e++) {
      if (i[e] == n) { return !0 }
    }
    return !1;
  }
  function l(t) {
    if (typeof t.f === 'string') { return t.f }
    var n = t.m.location.protocol;
    return n == 'about:' && (n = t.a.location.protocol),
    n == 'https:' ? 'https:' : 'http:';
  }
  function u(t, n, i) {
    function e() {
      r && o && a && (r(s),
      r = null);
    }
    n = c(t, 'link', {
      rel: 'stylesheet',
      href: n,
      media: 'all'
    });
    var o = !1,
      a = !0,
      s = null,
      r = i || null;
    f ? (n.onload = function() {
      o = !0,
      e();
    }
    ,
    n.onerror = function() {
      o = !0,
      s = Error('Stylesheet failed to load'),
      e();
    }
    ) : setTimeout(function() {
      o = !0,
      e();
    }, 0),
    h(t, 'head', n);
  }
  function g(t, n, i, e) {
    var o = t.c.getElementsByTagName('head')[0];
    if (o) {
      var a = c(t, 'script', {
          src: n
        }),
        s = !1;
      return a.onload = a.onreadystatechange = function() {
        s || this.readyState && this.readyState != 'loaded' && this.readyState != 'complete' || (s = !0,
        i && i(null),
        a.onload = a.onreadystatechange = null,
        a.parentNode.tagName == 'HEAD' && o.removeChild(a));
      }
      ,
      o.appendChild(a),
      setTimeout(function() {
        s || (s = !0,
        i && i(Error('Script load timeout')));
      }, e || 5e3),
      a;
    }
    return null;
  }
  function v() {
    this.a = 0,
    this.c = null;
  }
  function m(t) {
    return t.a++,
    function() {
      t.a--,
      s(t);
    };
  }
  function w(t, n) {
    t.c = n,
    s(t);
  }
  function s(t) {
    t.a == 0 && t.c && (t.c(),
    t.c = null);
  }
  function y(t) {
    this.a = t || '-';
  }
  function b(t, n) {
    this.c = t,
    this.f = 4,
    this.a = 'n';
    var i = (n || 'n4').match(/^([nio])([1-9])$/i);
    i && (this.a = i[1],
    this.f = parseInt(i[2], 10));
  }
  function j(t) {
    var n = [];
    t = t.split(/,\s*/);
    for (var i = 0; i < t.length; i++) {
      var e = t[i].replace(/['"]/g, '');
      e.indexOf(' ') != -1 || /^\d/.test(e) ? n.push("'" + e + "'") : n.push(e);
    }
    return n.join(',');
  }
  function x(t) {
    return t.a + t.f;
  }
  function _(t) {
    var n = 'normal';
    return t.a === 'o' ? n = 'oblique' : t.a === 'i' && (n = 'italic'),
    n;
  }
  function k(t) {
    if (t.g) {
      var n = a(t.f, t.a.c('wf', 'active')),
        i = [],
        e = [t.a.c('wf', 'loading')];
      n || i.push(t.a.c('wf', 'inactive')),
      d(t.f, i, e);
    }
    T(t, 'inactive');
  }
  function T(t, n, i) {
    t.j && t.h[n] && (i ? t.h[n](i.c, x(i)) : t.h[n]());
  }
  function S(t, n) {
    this.c = t,
    this.f = n,
    this.a = c(this.c, 'span', {
      'aria-hidden': 'true'
    }, this.f);
  }
  function C(t) {
    h(t.c, 'body', t.a);
  }
  function N(t) {
    return 'display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:' + j(t.c) + ';font-style:' + _(t) + ';font-weight:' + t.f + '00;';
  }
  function A(t, n, i, e, o, a) {
    this.g = t,
    this.j = n,
    this.a = e,
    this.c = i,
    this.f = o || 3e3,
    this.h = a || void 0;
  }
  function E(t, n, i, e, o, a, s) {
    this.v = t,
    this.B = n,
    this.c = i,
    this.a = e,
    this.s = s || 'BESbswy',
    this.f = {},
    this.w = o || 3e3,
    this.u = a || null,
    this.o = this.j = this.h = this.g = null,
    this.g = new S(this.c, this.s),
    this.h = new S(this.c, this.s),
    this.j = new S(this.c, this.s),
    this.o = new S(this.c, this.s),
    t = N(t = new b(this.a.c + ',serif', x(this.a))),
    this.g.a.style.cssText = t,
    t = N(t = new b(this.a.c + ',sans-serif', x(this.a))),
    this.h.a.style.cssText = t,
    t = N(t = new b('serif', x(this.a))),
    this.j.a.style.cssText = t,
    t = N(t = new b('sans-serif', x(this.a))),
    this.o.a.style.cssText = t,
    C(this.g),
    C(this.h),
    C(this.j),
    C(this.o);
  }
  y.prototype.c = function(t) {
    for (var n = [], i = 0; i < arguments.length; i++) { n.push(arguments[i].replace(/[\W_]+/g, '').toLowerCase()) }
    return n.join(this.a);
  }
  ,
  A.prototype.start = function() {
    var o = this.c.m.document,
      a = this,
      s = r(),
      t = new Promise(function(resolve, reject) {
        !(function n() {
          var t;
          r() - s >= a.f ? e() : o.fonts.load((t = a.a,
          _(t) + ' ' + t.f + '00 300px ' + j(t.c)), a.h).then(function(t) {
            t.length >= 1 ? i() : setTimeout(n, 25);
          }, function() {
            e();
          });
        }());
      }
      ),
      n = new Promise(function(resolve, reject) {
        setTimeout(n, a.f);
      }
      );
    Promise.race([n, t]).then(function() {
      a.g(a.a);
    }, function() {
      a.j(a.a);
    });
  }
  ;
  var W = {
      D: 'serif',
      C: 'sans-serif'
    },
    n = null;
  function F() {
    if (n === null) {
      var t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
      n = !!t && (parseInt(t[1], 10) < 536 || parseInt(t[1], 10) === 536 && parseInt(t[2], 10) <= 11);
    }
    return n;
  }
  function I(t, n, i) {
    for (var e in W) {
      if (W.hasOwnProperty(e) && n === t.f[W[e]] && i === t.f[W[e]]) { return !0 }
    }
    return !1;
  }
  function P(t) {
    var n, i = t.g.a.offsetWidth, e = t.h.a.offsetWidth;
    (n = i === t.f.serif && e === t.f['sans-serif']) || (n = F() && I(t, i, e)),
    n ? r() - t.A >= t.w ? F() && I(t, i, e) && (t.u === null || t.u.hasOwnProperty(t.a.c)) ? B(t, t.v) : B(t, t.B) : setTimeout(p(function() {
      P(this);
    }, t), 50) : B(t, t.v);
  }
  function B(t, n) {
    setTimeout(p(function() {
      i(this.g.a),
      i(this.h.a),
      i(this.j.a),
      i(this.o.a),
      n(this.a);
    }, t), 0);
  }
  function O(t, n, i) {
    this.c = t,
    this.a = n,
    this.f = 0,
    this.o = this.j = !1,
    this.s = i;
  }
  E.prototype.start = function() {
    this.f.serif = this.j.a.offsetWidth,
    this.f['sans-serif'] = this.o.a.offsetWidth,
    this.A = r(),
    P(this);
  }
  ;
  var L = null;
  function D(t) {
    --t.f == 0 && t.j && (t.o ? ((t = t.a).g && d(t.f, [t.a.c('wf', 'active')], [t.a.c('wf', 'loading'), t.a.c('wf', 'inactive')]),
    T(t, 'active')) : k(t.a));
  }
  function t(t) {
    this.j = t,
    this.a = new function() {
      this.c = {};
    }()
    ,
    this.h = 0,
    this.f = this.g = !0;
  }
  function $(t, n) {
    this.c = t,
    this.a = n;
  }
  function q(t, n) {
    this.c = t,
    this.a = n;
  }
  O.prototype.g = function(t) {
    var n = this.a;
    n.g && d(n.f, [n.a.c('wf', t.c, x(t).toString(), 'active')], [n.a.c('wf', t.c, x(t).toString(), 'loading'), n.a.c('wf', t.c, x(t).toString(), 'inactive')]),
    T(n, 'fontactive', t),
    this.o = !0,
    D(this);
  }
  ,
  O.prototype.h = function(t) {
    var n = this.a;
    if (n.g) {
      var i = a(n.f, n.a.c('wf', t.c, x(t).toString(), 'active')),
        e = [],
        o = [n.a.c('wf', t.c, x(t).toString(), 'loading')];
      i || e.push(n.a.c('wf', t.c, x(t).toString(), 'inactive')),
      d(n.f, e, o);
    }
    T(n, 'fontinactive', t),
    D(this);
  }
  ,
  t.prototype.load = function(t) {
    this.c = new function(t, n) {
      this.a = t,
      this.m = n || t,
      this.c = this.m.document;
    }
    (this.j, t.context || this.j),
    this.g = !1 !== t.events,
    this.f = !1 !== t.classes,
    (function(o, t, n) {
      var i = [],
        e = n.timeout;
      a = t,
      a.g && d(a.f, [a.a.c('wf', 'loading')]),
      T(a, 'loading');
      var a;
      var i = (function(t, n, i) {
          var e, o = [];
          for (e in n) {
            if (n.hasOwnProperty(e)) {
              var a = t.c[e];
              a && o.push(a(n[e], i));
            }
          }
          return o;
        }(o.a, n, o.c)),
        s = new O(o.c, t, e);
      for (o.h = i.length,
      t = 0,
      n = i.length; t < n; t++) {
        i[t].load(function(t, n, i) {
          var e, f, c, h, l, u;
          f = s,
          c = t,
          h = n,
          l = i,
          u = --(e = o).h == 0,
          (e.f || e.g) && setTimeout(function() {
            var t = l || null,
              n = h || {};
            if (c.length === 0 && u) { k(f.a) } else {
              f.f += c.length,
              u && (f.j = u);
              var i, e = [];
              for (i = 0; i < c.length; i++) {
                var o = c[i],
                  a = n[o.c],
                  s = f.a,
                  r = o;
                s.g && d(s.f, [s.a.c('wf', r.c, x(r).toString(), 'loading')]),
                T(s, 'fontloading', r),
                (s = null) === L && (L = !!window.FontFace && (!(r = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent)) || parseInt(r[1], 10) > 42)),
                s = L ? new A(p(f.g, f), p(f.h, f), f.c, o, f.s, a) : new E(p(f.g, f), p(f.h, f), f.c, o, f.s, t, a),
                e.push(s);
              }
              for (i = 0; i < e.length; i++) { e[i].start() };
            }
          }, 0);
        })
        ;
      };
    }(this, new function(t, n) {
      this.c = t,
      this.f = t.m.document.documentElement,
      this.h = n,
      this.a = new y('-'),
      this.j = !1 !== n.events,
      this.g = !1 !== n.classes;
    }
    (this.c, t), t));
  }
  ,
  $.prototype.load = function(s) {
    var t, n, i, e = this, r = e.a.projectId, o = e.a.version;
    if (r) {
      var f = e.c.m;
      g(this.c, (t = e,
      n = r,
      i = o,
      l(t.c) + '//' + (t = (t.a.api || 'fast.fonts.net/jsapi').replace(/^.*http(s?):(\/\/)?/, '')) + '/' + n + '.js' + (i ? '?v=' + i : '')), function(t) {
        t ? s([]) : (f['__MonotypeConfiguration__' + r] = function() {
          return e.a;
        }
        ,
        (function t() {
          if (f['__mti_fntLst' + r]) {
            var n, i = f['__mti_fntLst' + r](), e = [];
            if (i) {
              for (var o = 0; o < i.length; o++) {
                var a = i[o].fontfamily;
                i[o].fontStyle != null && i[o].fontWeight != null ? (n = i[o].fontStyle + i[o].fontWeight,
                e.push(new b(a, n))) : e.push(new b(a));
              }
            }
            s(e);
          } else {
            setTimeout(function() {
              t();
            }, 50);
          };
        }()));
      }).id = '__MonotypeAPIScript__' + r;
    } else { s([]) };
  }
  ,
  q.prototype.load = function(t) {
    var n, i, e = this.a.urls || [], o = this.a.families || [], a = this.a.testStrings || {}, s = new v();
    for (n = 0,
    i = e.length; n < i; n++) { u(this.c, e[n], m(s)) }
    var r = [];
    for (n = 0,
    i = o.length; n < i; n++) {
      if ((e = o[n].split(':'))[1]) {
        for (var f = e[1].split(','), c = 0; c < f.length; c += 1) { r.push(new b(e[0], f[c])) }
      } else { r.push(new b(e[0])) }
    }
    w(s, function() {
      t(r, a);
    });
  }
  ;
  var H = '//fonts.googleapis.com/css';
  var M = {
      latin: 'BESbswy',
      'latin-ext': 'çöüğş',
      cyrillic: 'йяЖ',
      greek: 'αβΣ',
      khmer: 'កខគ',
      Hanuman: 'កខគ'
    },
    z = {
      thin: '1',
      extralight: '2',
      'extra-light': '2',
      ultralight: '2',
      'ultra-light': '2',
      light: '3',
      regular: '4',
      book: '4',
      medium: '5',
      'semi-bold': '6',
      semibold: '6',
      'demi-bold': '6',
      demibold: '6',
      bold: '7',
      'extra-bold': '8',
      extrabold: '8',
      'ultra-bold': '8',
      ultrabold: '8',
      black: '9',
      heavy: '9',
      l: '3',
      r: '4',
      b: '7'
    },
    G = {
      i: 'i',
      italic: 'i',
      n: 'n',
      normal: 'n'
    },
    K = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
  function R(t, n) {
    this.c = t,
    this.a = n;
  }
  var U = {
    Arimo: !0,
    Cousine: !0,
    Tinos: !0
  };
  function J(t, n) {
    this.c = t,
    this.a = n;
  }
  function Q(t, n) {
    this.c = t,
    this.f = n,
    this.a = [];
  }
  R.prototype.load = function(t) {
    var n = new v(),
      i = this.c,
      e = new function(t, n, i) {
        this.c = t || n + H,
        this.a = [],
        this.f = [],
        this.g = i || '';
      }
      (this.a.api, l(i), this.a.text),
      o = this.a.families;
    !(function(t, n) {
      for (var i = n.length, e = 0; e < i; e++) {
        var o = n[e].split(':');
        o.length == 3 && t.f.push(o.pop());
        var a = '';
        o.length == 2 && o[1] != '' && (a = ':'),
        t.a.push(o.join(a));
      }
    }(e, o));
    var a = new function(t) {
      this.f = t,
      this.a = [],
      this.c = {};
    }
    (o);
    !(function(t) {
      for (var n = t.f.length, i = 0; i < n; i++) {
        var e = t.f[i].split(':'),
          o = e[0].replace(/\+/g, ' '),
          a = ['n4'];
        if (e.length >= 2) {
          var s;
          if (s = [],
          r = e[1]) {
            for (var r, f = (r = r.split(',')).length, c = 0; c < f; c++) {
              var h;
              if ((h = r[c]).match(/^[\w-]+$/)) {
                if ((u = K.exec(h.toLowerCase())) == null) { h = ''; } else {
                  if (h = (h = u[2]) == null || h == '' ? 'n' : G[h],
                  (u = u[1]) == null || u == '') { u = '4'; } else { var l = z[u],
                                           u = l || (isNaN(u) ? '4' : u.substr(0, 1));
 }
                  h = [h, u].join('');
                } 
} else { h = '' }
              h && s.push(h);
            }
          }
          s.length > 0 && (a = s),
          e.length == 3 && (s = [],
          (e = (e = e[2]) ? e.split(',') : s).length > 0 && (e = M[e[0]]) && (t.c[o] = e));
        }
        for (t.c[o] || (e = M[o]) && (t.c[o] = e),
        e = 0; e < a.length; e += 1) { t.a.push(new b(o, a[e])) };
      }
    }(a)),
    u(i, (function(t) {
      if (t.a.length == 0) { throw Error('No fonts to load!') }
      if (t.c.indexOf('kit=') != -1) { return t.c }
      for (var n = t.a.length, i = [], e = 0; e < n; e++) { i.push(t.a[e].replace(/ /g, '+')) }
      return n = t.c + '?family=' + i.join('%7C'),
      t.f.length > 0 && (n += '&subset=' + t.f.join(',')),
      t.g.length > 0 && (n += '&text=' + encodeURIComponent(t.g)),
      n;
    }(e)), m(n)),
    w(n, function() {
      t(a.a, a.c, U);
    });
  }
  ,
  J.prototype.load = function(s) {
    var t = this.a.id,
      r = this.c.m;
    t ? g(this.c, (this.a.api || 'https://use.typekit.net') + '/' + t + '.js', function(t) {
      if (t) { s([]) } else if (r.Typekit && r.Typekit.config && r.Typekit.config.fn) {
        t = r.Typekit.config.fn;
        for (var n = [], i = 0; i < t.length; i += 2) {
          for (var e = t[i], o = t[i + 1], a = 0; a < o.length; a++) { n.push(new b(e, o[a])) }
        }
        try {
          r.Typekit.load({
            events: !1,
            classes: !1,
            async: !0
          });
        } catch (t) {}
        s(n);
      }
    }, 2e3) : s([]);
  }
  ,
  Q.prototype.load = function(c) {
    var t, n = this.f.id, i = this.c.m, h = this;
    n ? (i.__webfontfontdeckmodule__ || (i.__webfontfontdeckmodule__ = {}),
    i.__webfontfontdeckmodule__[n] = function(t, n) {
      for (var i = 0, e = n.fonts.length; i < e; ++i) {
        var o = n.fonts[i];
        h.a.push(new b(o.name, (a = 'font-weight:' + o.weight + ';font-style:' + o.style,
        f = r = s = void 0,
        s = 4,
        r = 'n',
        f = null,
        a && ((f = a.match(/(normal|oblique|italic)/i)) && f[1] && (r = f[1].substr(0, 1).toLowerCase()),
        (f = a.match(/([1-9]00|normal|bold)/i)) && f[1] && (/bold/i.test(f[1]) ? s = 7 : /[1-9]00/.test(f[1]) && (s = parseInt(f[1].substr(0, 1), 10)))),
        r + s)));
      }
      var a, s, r, f;
      c(h.a);
    }
    ,
    g(this.c, l(this.c) + (this.f.api || '//f.fontdeck.com/s/css/js/') + ((t = this.c).m.location.hostname || t.a.location.hostname) + '/' + n + '.js', function(t) {
      t && c([]);
    })) : c([]);
  }
  ;
  var V = new t(window);
  V.a.c.custom = function(t, n) {
    return new q(n, t);
  }
  ,
  V.a.c.fontdeck = function(t, n) {
    return new Q(n, t);
  }
  ,
  V.a.c.monotype = function(t, n) {
    return new $(n, t);
  }
  ,
  V.a.c.typekit = function(t, n) {
    return new J(n, t);
  }
  ,
  V.a.c.google = function(t, n) {
    return new R(n, t);
  }
  ;
  var X = {
    load: p(V.load, V)
  };
  typeof define === 'function' && define.amd ? define(function() {
    return X;
  }) : typeof module !== 'undefined' && module.exports ? module.exports = X : (window.WebFont = X,
  window.WebFontConfig && V.load(window.WebFontConfig));
}());
var $grid = null;
jQuery('.latest-news-content').size() && ($grid = jQuery('.latest-news-content').masonry({
  itemSelector: '.news-container',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  transitionDuration: 0
})),
WebFont.load({
  google: {
    families: [jQuery('body').data('family') + ':latin-ext']
  },
  active: function() {
    $grid != null && $grid.masonry('layout');
  }
}),
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
  p('#inputCountry').change(function(e) {
    if (p(this).val() != '' && p('#inputPhone').val().length == 0) {
      var t = p('#inputPrefix option[data-territory="' + p(this).val() + '"]');
      t.size() && p('#inputPrefix').val(t.slice(0, 1).val());
    }
    p(this).val() != '' ? (p('#inputState').prop('disabled', !1),
    p('#inputState').children().remove(),
    p('#allRegions').children().each(function(e) {
      p(this).data('country') != p('#inputCountry').val() && e != 0 || p('#inputState').append(p(this).clone());
    }),
    p('#inputState').children().length <= 1 && p('#inputState').prop('disabled', !0)) : (p('#inputState').append(p('#allRegions').children().eq(0)),
    p('#inputState').prop('disabled', !0),
    p('#inputState').children().remove());
  }),
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
});
jQuery(document).ready(function(n) {
  n('body').data('analytics') != null && n('#btn-signup').click(function(n) {
    ga('whitelotto.send', 'event', 'sign_up', 'click');
  });
});
