!function(b) {
  b(function() {
    var e = b.support, h;
    a: {
      h = document.createElement("bootstrap");
      var a = {WebkitTransition:"webkitTransitionEnd", MozTransition:"transitionend", OTransition:"oTransitionEnd otransitionend", transition:"transitionend"}, c;
      for (c in a) {
        if (void 0 !== h.style[c]) {
          h = a[c];
          break a;
        }
      }
      h = void 0;
    }
    e.transition = h && {end:h};
  });
}(window.jQuery);
!function(b) {
  var e = function(a) {
    b(a).on("click", '[data-dismiss="alert"]', this.close);
  };
  e.prototype.close = function(a) {
    function c() {
      g.trigger("closed").remove();
    }
    var d = b(this), f = d.attr("data-target"), g;
    f || (f = (f = d.attr("href")) && f.replace(/.*(?=#[^\s]*$)/, ""));
    g = b(f);
    a && a.preventDefault();
    g.length || (g = d.hasClass("alert") ? d : d.parent());
    g.trigger(a = b.Event("close"));
    a.isDefaultPrevented() || (g.removeClass("in"), b.support.transition && g.hasClass("fade") ? g.on(b.support.transition.end, c) : c());
  };
  var h = b.fn.alert;
  b.fn.alert = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("alert");
      d || c.data("alert", d = new e(this));
      "string" == typeof a && d[a].call(c);
    });
  };
  b.fn.alert.Constructor = e;
  b.fn.alert.noConflict = function() {
    b.fn.alert = h;
    return this;
  };
  b(document).on("click.alert.data-api", '[data-dismiss="alert"]', e.prototype.close);
}(window.jQuery);
!function(b) {
  var e = function(a, c) {
    this.options = c;
    this.$element = b(a).delegate('[data-dismiss="modal"]', "click.dismiss.modal", b.proxy(this.hide, this));
    this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
  };
  e.prototype = {constructor:e, toggle:function() {
    return this[this.isShown ? "hide" : "show"]();
  }, show:function() {
    var a = this, c = b.Event("show");
    this.$element.trigger(c);
    this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
      var c = b.support.transition && a.$element.hasClass("fade");
      a.$element.parent().length || a.$element.appendTo(document.body);
      a.$element.show();
      c && a.$element[0].offsetWidth;
      a.$element.addClass("in").attr("aria-hidden", !1);
      a.enforceFocus();
      c ? a.$element.one(b.support.transition.end, function() {
        a.$element.focus().trigger("shown");
      }) : a.$element.focus().trigger("shown");
    }));
  }, hide:function(a) {
    a && a.preventDefault();
    a = b.Event("hide");
    this.$element.trigger(a);
    this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.escape(), b(document).off("focusin.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), b.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal());
  }, enforceFocus:function() {
    var a = this;
    b(document).on("focusin.modal", function(b) {
      a.$element[0] === b.target || a.$element.has(b.target).length || a.$element.focus();
    });
  }, escape:function() {
    var a = this;
    if (this.isShown && this.options.keyboard) {
      this.$element.on("keyup.dismiss.modal", function(b) {
        27 == b.which && a.hide();
      });
    } else {
      this.isShown || this.$element.off("keyup.dismiss.modal");
    }
  }, hideWithTransition:function() {
    var a = this, c = setTimeout(function() {
      a.$element.off(b.support.transition.end);
      a.hideModal();
    }, 500);
    this.$element.one(b.support.transition.end, function() {
      clearTimeout(c);
      a.hideModal();
    });
  }, hideModal:function() {
    var a = this;
    this.$element.hide();
    this.backdrop(function() {
      a.removeBackdrop();
      a.$element.trigger("hidden");
    });
  }, removeBackdrop:function() {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  }, backdrop:function(a) {
    var c = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var d = b.support.transition && c;
      this.$backdrop = b('<div class="modal-backdrop ' + c + '" />').appendTo(document.body);
      this.$backdrop.click("static" == this.options.backdrop ? b.proxy(this.$element[0].focus, this.$element[0]) : b.proxy(this.hide, this));
      d && this.$backdrop[0].offsetWidth;
      this.$backdrop.addClass("in");
      a && (d ? this.$backdrop.one(b.support.transition.end, a) : a());
    } else {
      !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), b.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(b.support.transition.end, a) : a()) : a && a();
    }
  }};
  var h = b.fn.modal;
  b.fn.modal = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("modal"), f = b.extend({}, b.fn.modal.defaults, c.data(), "object" == typeof a && a);
      d || c.data("modal", d = new e(this, f));
      if ("string" == typeof a) {
        d[a]();
      } else {
        f.show && d.show();
      }
    });
  };
  b.fn.modal.defaults = {backdrop:!0, keyboard:!0, show:!0};
  b.fn.modal.Constructor = e;
  b.fn.modal.noConflict = function() {
    b.fn.modal = h;
    return this;
  };
  b(document).on("click.modal.data-api", '[data-toggle="modal"]', function(a) {
    var c = b(this), d = c.attr("href"), f = b(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), d = f.data("modal") ? "toggle" : b.extend({remote:!/#/.test(d) && d}, f.data(), c.data());
    a.preventDefault();
    f.modal(d).one("hide", function() {
      c.focus();
    });
  });
}(window.jQuery);
!function(b) {
  function e() {
    b(".dropdown-backdrop").remove();
    b("[data-toggle=dropdown]").each(function() {
      h(b(this)).removeClass("open");
    });
  }
  function h(a) {
    var c = a.attr("data-target");
    c || (c = (c = a.attr("href")) && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    (c = c && b(c)) && c.length || (c = a.parent());
    return c;
  }
  var a = function(a) {
    var c = b(a).on("click.dropdown.data-api", this.toggle);
    b("html").on("click.dropdown.data-api", function() {
      c.parent().removeClass("open");
    });
  };
  a.prototype = {constructor:a, toggle:function(a) {
    a = b(this);
    var c, g;
    if (!a.is(".disabled, :disabled")) {
      c = h(a);
      g = c.hasClass("open");
      e();
      if (!g) {
        if ("ontouchstart" in document.documentElement) {
          b('<div class="dropdown-backdrop"/>').insertBefore(b(this)).on("click", e);
        }
        c.toggleClass("open");
      }
      a.focus();
      return !1;
    }
  }, keydown:function(a) {
    var c, g, e;
    if (/(38|40|27)/.test(a.keyCode) && (c = b(this), a.preventDefault(), a.stopPropagation(), !c.is(".disabled, :disabled"))) {
      g = h(c);
      e = g.hasClass("open");
      if (!e || e && 27 == a.keyCode) {
        return 27 == a.which && g.find("[data-toggle=dropdown]").focus(), c.click();
      }
      c = b("[role=menu] li:not(.divider):visible a", g);
      c.length && (g = c.index(c.filter(":focus")), 38 == a.keyCode && 0 < g && g--, 40 == a.keyCode && g < c.length - 1 && g++, ~g || (g = 0), c.eq(g).focus());
    }
  }};
  var c = b.fn.dropdown;
  b.fn.dropdown = function(c) {
    return this.each(function() {
      var f = b(this), g = f.data("dropdown");
      g || f.data("dropdown", g = new a(this));
      "string" == typeof c && g[c].call(f);
    });
  };
  b.fn.dropdown.Constructor = a;
  b.fn.dropdown.noConflict = function() {
    b.fn.dropdown = c;
    return this;
  };
  b(document).on("click.dropdown.data-api", e).on("click.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation();
  }).on("click.dropdown.data-api", "[data-toggle=dropdown]", a.prototype.toggle).on("keydown.dropdown.data-api", "[data-toggle=dropdown], [role=menu]", a.prototype.keydown);
}(window.jQuery);
!function(b) {
  function e(a, c) {
    var d = b.proxy(this.process, this), f = b(a).is("body") ? b(window) : b(a), g;
    this.options = b.extend({}, b.fn.scrollspy.defaults, c);
    this.$scrollElement = f.on("scroll.scroll-spy.data-api", d);
    this.selector = (this.options.target || (g = b(a).attr("href")) && g.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a";
    this.$body = b("body");
    this.refresh();
    this.process();
  }
  e.prototype = {constructor:e, refresh:function() {
    var a = this;
    this.offsets = b([]);
    this.targets = b([]);
    this.$body.find(this.selector).map(function() {
      var c = b(this), c = c.data("target") || c.attr("href"), d = /^#\w/.test(c) && b(c);
      return d && d.length && [[d.position().top + (!b.isWindow(a.$scrollElement.get(0)) && a.$scrollElement.scrollTop()), c]] || null;
    }).sort(function(a, b) {
      return a[0] - b[0];
    }).each(function() {
      a.offsets.push(this[0]);
      a.targets.push(this[1]);
    });
  }, process:function() {
    var a = this.$scrollElement.scrollTop() + this.options.offset, b = (this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight) - this.$scrollElement.height(), d = this.offsets, f = this.targets, g = this.activeTarget, e;
    if (a >= b) {
      return g != (e = f.last()[0]) && this.activate(e);
    }
    for (e = d.length;e--;) {
      g != f[e] && a >= d[e] && (!d[e + 1] || a <= d[e + 1]) && this.activate(f[e]);
    }
  }, activate:function(a) {
    this.activeTarget = a;
    b(this.selector).parent(".active").removeClass("active");
    a = b(this.selector + '[data-target="' + a + '"],' + this.selector + '[href="' + a + '"]').parent("li").addClass("active");
    a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active"));
    a.trigger("activate");
  }};
  var h = b.fn.scrollspy;
  b.fn.scrollspy = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("scrollspy"), f = "object" == typeof a && a;
      d || c.data("scrollspy", d = new e(this, f));
      if ("string" == typeof a) {
        d[a]();
      }
    });
  };
  b.fn.scrollspy.Constructor = e;
  b.fn.scrollspy.defaults = {offset:10};
  b.fn.scrollspy.noConflict = function() {
    b.fn.scrollspy = h;
    return this;
  };
  b(window).on("load", function() {
    b('[data-spy="scroll"]').each(function() {
      var a = b(this);
      a.scrollspy(a.data());
    });
  });
}(window.jQuery);
!function(b) {
  var e = function(a) {
    this.element = b(a);
  };
  e.prototype = {constructor:e, show:function() {
    var a = this.element, c = a.closest("ul:not(.dropdown-menu)"), d = a.attr("data-target"), f, g;
    d || (d = (d = a.attr("href")) && d.replace(/.*(?=#[^\s]*$)/, ""));
    a.parent("li").hasClass("active") || (f = c.find(".active:last a")[0], g = b.Event("show", {relatedTarget:f}), a.trigger(g), g.isDefaultPrevented() || (d = b(d), this.activate(a.parent("li"), c), this.activate(d, d.parent(), function() {
      a.trigger({type:"shown", relatedTarget:f});
    })));
  }, activate:function(a, c, d) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");
      a.addClass("active");
      e ? (a[0].offsetWidth, a.addClass("in")) : a.removeClass("fade");
      a.parent(".dropdown-menu") && a.closest("li.dropdown").addClass("active");
      d && d();
    }
    var g = c.find("> .active"), e = d && b.support.transition && g.hasClass("fade");
    e ? g.one(b.support.transition.end, f) : f();
    g.removeClass("in");
  }};
  var h = b.fn.tab;
  b.fn.tab = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("tab");
      d || c.data("tab", d = new e(this));
      if ("string" == typeof a) {
        d[a]();
      }
    });
  };
  b.fn.tab.Constructor = e;
  b.fn.tab.noConflict = function() {
    b.fn.tab = h;
    return this;
  };
  b(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(a) {
    a.preventDefault();
    b(this).tab("show");
  });
}(window.jQuery);
!function(b) {
  var e = function(a, b) {
    this.init("tooltip", a, b);
  };
  e.prototype = {constructor:e, init:function(a, c, d) {
    var f;
    this.type = a;
    this.$element = b(c);
    this.options = this.getOptions(d);
    this.enabled = !0;
    c = this.options.trigger.split(" ");
    for (d = c.length;d--;) {
      if (f = c[d], "click" == f) {
        this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this));
      } else {
        "manual" != f && (a = "hover" == f ? "mouseenter" : "focus", f = "hover" == f ? "mouseleave" : "blur", this.$element.on(a + "." + this.type, this.options.selector, b.proxy(this.enter, this)), this.$element.on(f + "." + this.type, this.options.selector, b.proxy(this.leave, this)));
      }
    }
    this.options.selector ? this._options = b.extend({}, this.options, {trigger:"manual", selector:""}) : this.fixTitle();
  }, getOptions:function(a) {
    a = b.extend({}, b.fn[this.type].defaults, this.$element.data(), a);
    a.delay && "number" == typeof a.delay && (a.delay = {show:a.delay, hide:a.delay});
    return a;
  }, enter:function(a) {
    var c = b.fn[this.type].defaults, d = {}, f;
    this._options && b.each(this._options, function(a, b) {
      c[a] != b && (d[a] = b);
    }, this);
    f = b(a.currentTarget)[this.type](d).data(this.type);
    if (!f.options.delay || !f.options.delay.show) {
      return f.show();
    }
    clearTimeout(this.timeout);
    f.hoverState = "in";
    this.timeout = setTimeout(function() {
      "in" == f.hoverState && f.show();
    }, f.options.delay.show);
  }, leave:function(a) {
    var c = b(a.currentTarget)[this.type](this._options).data(this.type);
    this.timeout && clearTimeout(this.timeout);
    if (!c.options.delay || !c.options.delay.hide) {
      return c.hide();
    }
    c.hoverState = "out";
    this.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide);
  }, show:function() {
    var a, c, d, f, e;
    c = b.Event("show");
    if (this.hasContent() && this.enabled && (this.$element.trigger(c), !c.isDefaultPrevented())) {
      a = this.tip();
      this.setContent();
      this.options.animation && a.addClass("fade");
      f = "function" == typeof this.options.placement ? this.options.placement.call(this, a[0], this.$element[0]) : this.options.placement;
      a.detach().css({top:0, left:0, display:"block"});
      this.options.container ? a.appendTo(this.options.container) : a.insertAfter(this.$element);
      c = this.getPosition();
      d = a[0].offsetWidth;
      a = a[0].offsetHeight;
      switch(f) {
        case "bottom":
          e = {top:c.top + c.height, left:c.left + c.width / 2 - d / 2};
          break;
        case "top":
          e = {top:c.top - a, left:c.left + c.width / 2 - d / 2};
          break;
        case "left":
          e = {top:c.top + c.height / 2 - a / 2, left:c.left - d};
          break;
        case "right":
          e = {top:c.top + c.height / 2 - a / 2, left:c.left + c.width};
      }
      this.applyPlacement(e, f);
      this.$element.trigger("shown");
    }
  }, applyPlacement:function(a, b) {
    var d = this.tip(), f = d[0].offsetWidth, e = d[0].offsetHeight, h, k, l;
    d.offset(a).addClass(b).addClass("in");
    h = d[0].offsetWidth;
    k = d[0].offsetHeight;
    "top" == b && k != e && (a.top = a.top + e - k, l = !0);
    "bottom" == b || "top" == b ? (e = 0, 0 > a.left && (e = -2 * a.left, a.left = 0, d.offset(a), h = d[0].offsetWidth), this.replaceArrow(e - f + h, h, "left")) : this.replaceArrow(k - e, k, "top");
    l && d.offset(a);
  }, replaceArrow:function(a, b, d) {
    this.arrow().css(d, a ? 50 * (1 - a / b) + "%" : "");
  }, setContent:function() {
    var a = this.tip(), b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b);
    a.removeClass("fade in top bottom left right");
  }, hide:function() {
    function a() {
      var a = setTimeout(function() {
        c.off(b.support.transition.end).detach();
      }, 500);
      c.one(b.support.transition.end, function() {
        clearTimeout(a);
        c.detach();
      });
    }
    var c = this.tip(), d = b.Event("hide");
    this.$element.trigger(d);
    if (!d.isDefaultPrevented()) {
      return c.removeClass("in"), b.support.transition && this.$tip.hasClass("fade") ? a() : c.detach(), this.$element.trigger("hidden"), this;
    }
  }, fixTitle:function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, hasContent:function() {
    return this.getTitle();
  }, getPosition:function() {
    var a = this.$element[0];
    return b.extend({}, "function" == typeof a.getBoundingClientRect ? a.getBoundingClientRect() : {width:a.offsetWidth, height:a.offsetHeight}, this.$element.offset());
  }, getTitle:function() {
    var a = this.$element, b = this.options;
    return a.attr("data-original-title") || ("function" == typeof b.title ? b.title.call(a[0]) : b.title);
  }, tip:function() {
    return this.$tip = this.$tip || b(this.options.template);
  }, arrow:function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, validate:function() {
    this.$element[0].parentNode || (this.hide(), this.options = this.$element = null);
  }, enable:function() {
    this.enabled = !0;
  }, disable:function() {
    this.enabled = !1;
  }, toggleEnabled:function() {
    this.enabled = !this.enabled;
  }, toggle:function(a) {
    a = a ? b(a.currentTarget)[this.type](this._options).data(this.type) : this;
    a.tip().hasClass("in") ? a.hide() : a.show();
  }, destroy:function() {
    this.hide().$element.off("." + this.type).removeData(this.type);
  }};
  var h = b.fn.tooltip;
  b.fn.tooltip = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("tooltip"), f = "object" == typeof a && a;
      d || c.data("tooltip", d = new e(this, f));
      if ("string" == typeof a) {
        d[a]();
      }
    });
  };
  b.fn.tooltip.Constructor = e;
  b.fn.tooltip.defaults = {animation:!0, placement:"top", selector:!1, template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger:"hover focus", title:"", delay:0, html:!1, container:!1};
  b.fn.tooltip.noConflict = function() {
    b.fn.tooltip = h;
    return this;
  };
}(window.jQuery);
!function(b) {
  var e = function(a, b) {
    this.init("popover", a, b);
  };
  e.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype, {constructor:e, setContent:function() {
    var a = this.tip(), b = this.getTitle(), d = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b);
    a.find(".popover-content")[this.options.html ? "html" : "text"](d);
    a.removeClass("fade top bottom left right in");
  }, hasContent:function() {
    return this.getTitle() || this.getContent();
  }, getContent:function() {
    var a = this.$element, b = this.options;
    return ("function" == typeof b.content ? b.content.call(a[0]) : b.content) || a.attr("data-content");
  }, tip:function() {
    this.$tip || (this.$tip = b(this.options.template));
    return this.$tip;
  }, destroy:function() {
    this.hide().$element.off("." + this.type).removeData(this.type);
  }});
  var h = b.fn.popover;
  b.fn.popover = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("popover"), f = "object" == typeof a && a;
      d || c.data("popover", d = new e(this, f));
      if ("string" == typeof a) {
        d[a]();
      }
    });
  };
  b.fn.popover.Constructor = e;
  b.fn.popover.defaults = b.extend({}, b.fn.tooltip.defaults, {placement:"right", trigger:"click", content:"", template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});
  b.fn.popover.noConflict = function() {
    b.fn.popover = h;
    return this;
  };
}(window.jQuery);
!function(b) {
  var e = function(a, c) {
    this.$element = b(a);
    this.options = b.extend({}, b.fn.button.defaults, c);
  };
  e.prototype.setState = function(a) {
    var b = this.$element, d = b.data(), f = b.is("input") ? "val" : "html";
    a += "Text";
    d.resetText || b.data("resetText", b[f]());
    b[f](d[a] || this.options[a]);
    setTimeout(function() {
      "loadingText" == a ? b.addClass("disabled").attr("disabled", "disabled") : b.removeClass("disabled").removeAttr("disabled");
    }, 0);
  };
  e.prototype.toggle = function() {
    var a = this.$element.closest('[data-toggle="buttons-radio"]');
    a && a.find(".active").removeClass("active");
    this.$element.toggleClass("active");
  };
  var h = b.fn.button;
  b.fn.button = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("button"), f = "object" == typeof a && a;
      d || c.data("button", d = new e(this, f));
      "toggle" == a ? d.toggle() : a && d.setState(a);
    });
  };
  b.fn.button.defaults = {loadingText:"loading..."};
  b.fn.button.Constructor = e;
  b.fn.button.noConflict = function() {
    b.fn.button = h;
    return this;
  };
  b(document).on("click.button.data-api", "[data-toggle^=button]", function(a) {
    a = b(a.target);
    a.hasClass("btn") || (a = a.closest(".btn"));
    a.button("toggle");
  });
}(window.jQuery);
!function(b) {
  var e = function(a, c) {
    this.$element = b(a);
    this.options = b.extend({}, b.fn.collapse.defaults, c);
    this.options.parent && (this.$parent = b(this.options.parent));
    this.options.toggle && this.toggle();
  };
  e.prototype = {constructor:e, dimension:function() {
    return this.$element.hasClass("width") ? "width" : "height";
  }, show:function() {
    var a, c, d, f;
    if (!this.transitioning && !this.$element.hasClass("in")) {
      a = this.dimension();
      c = b.camelCase(["scroll", a].join("-"));
      if ((d = this.$parent && this.$parent.find("> .accordion-group > .in")) && d.length) {
        if ((f = d.data("collapse")) && f.transitioning) {
          return;
        }
        d.collapse("hide");
        f || d.data("collapse", null);
      }
      this.$element[a](0);
      this.transition("addClass", b.Event("show"), "shown");
      b.support.transition && this.$element[a](this.$element[0][c]);
    }
  }, hide:function() {
    var a;
    !this.transitioning && this.$element.hasClass("in") && (a = this.dimension(), this.reset(this.$element[a]()), this.transition("removeClass", b.Event("hide"), "hidden"), this.$element[a](0));
  }, reset:function(a) {
    var b = this.dimension();
    this.$element.removeClass("collapse")[b](a || "auto")[0].offsetWidth;
    this.$element[null !== a ? "addClass" : "removeClass"]("collapse");
    return this;
  }, transition:function(a, c, d) {
    var f = this, e = function() {
      "show" == c.type && f.reset();
      f.transitioning = 0;
      f.$element.trigger(d);
    };
    this.$element.trigger(c);
    c.isDefaultPrevented() || (this.transitioning = 1, this.$element[a]("in"), b.support.transition && this.$element.hasClass("collapse") ? this.$element.one(b.support.transition.end, e) : e());
  }, toggle:function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }};
  var h = b.fn.collapse;
  b.fn.collapse = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("collapse"), f = b.extend({}, b.fn.collapse.defaults, c.data(), "object" == typeof a && a);
      d || c.data("collapse", d = new e(this, f));
      if ("string" == typeof a) {
        d[a]();
      }
    });
  };
  b.fn.collapse.defaults = {toggle:!0};
  b.fn.collapse.Constructor = e;
  b.fn.collapse.noConflict = function() {
    b.fn.collapse = h;
    return this;
  };
  b(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(a) {
    var c = b(this), d;
    a = c.attr("data-target") || a.preventDefault() || (d = c.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "");
    d = b(a).data("collapse") ? "toggle" : c.data();
    c[b(a).hasClass("in") ? "addClass" : "removeClass"]("collapsed");
    b(a).collapse(d);
  });
}(window.jQuery);
!function(b) {
  var e = function(a, c) {
    this.$element = b(a);
    this.options = b.extend({}, b.fn.typeahead.defaults, c);
    this.matcher = this.options.matcher || this.matcher;
    this.sorter = this.options.sorter || this.sorter;
    this.highlighter = this.options.highlighter || this.highlighter;
    this.updater = this.options.updater || this.updater;
    this.source = this.options.source;
    this.$menu = b(this.options.menu);
    this.shown = !1;
    this.listen();
  };
  e.prototype = {constructor:e, select:function() {
    var a = this.$menu.find(".active").attr("data-value");
    this.$element.val(this.updater(a)).change();
    return this.hide();
  }, updater:function(a) {
    return a;
  }, show:function() {
    var a = b.extend({}, this.$element.position(), {height:this.$element[0].offsetHeight});
    this.$menu.insertAfter(this.$element).css({top:a.top + a.height, left:a.left}).show();
    this.shown = !0;
    return this;
  }, hide:function() {
    this.$menu.hide();
    this.shown = !1;
    return this;
  }, lookup:function(a) {
    this.query = this.$element.val();
    return !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (a = b.isFunction(this.source) ? this.source(this.query, b.proxy(this.process, this)) : this.source) ? this.process(a) : this;
  }, process:function(a) {
    var c = this;
    a = b.grep(a, function(a) {
      return c.matcher(a);
    });
    a = this.sorter(a);
    return a.length ? this.render(a.slice(0, this.options.items)).show() : this.shown ? this.hide() : this;
  }, matcher:function(a) {
    return ~a.toLowerCase().indexOf(this.query.toLowerCase());
  }, sorter:function(a) {
    for (var b = [], d = [], e = [], g;g = a.shift();) {
      g.toLowerCase().indexOf(this.query.toLowerCase()) ? ~g.indexOf(this.query) ? d.push(g) : e.push(g) : b.push(g);
    }
    return b.concat(d, e);
  }, highlighter:function(a) {
    var b = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    return a.replace(new RegExp("(" + b + ")", "ig"), function(a, b) {
      return "<strong>" + b + "</strong>";
    });
  }, render:function(a) {
    var c = this;
    a = b(a).map(function(a, e) {
      a = b(c.options.item).attr("data-value", e);
      a.find("a").html(c.highlighter(e));
      return a[0];
    });
    a.first().addClass("active");
    this.$menu.html(a);
    return this;
  }, next:function(a) {
    a = this.$menu.find(".active").removeClass("active").next();
    a.length || (a = b(this.$menu.find("li")[0]));
    a.addClass("active");
  }, prev:function(a) {
    a = this.$menu.find(".active").removeClass("active").prev();
    a.length || (a = this.$menu.find("li").last());
    a.addClass("active");
  }, listen:function() {
    this.$element.on("focus", b.proxy(this.focus, this)).on("blur", b.proxy(this.blur, this)).on("keypress", b.proxy(this.keypress, this)).on("keyup", b.proxy(this.keyup, this));
    if (this.eventSupported("keydown")) {
      this.$element.on("keydown", b.proxy(this.keydown, this));
    }
    this.$menu.on("click", b.proxy(this.click, this)).on("mouseenter", "li", b.proxy(this.mouseenter, this)).on("mouseleave", "li", b.proxy(this.mouseleave, this));
  }, eventSupported:function(a) {
    var b = a in this.$element;
    b || (this.$element.setAttribute(a, "return;"), b = "function" === typeof this.$element[a]);
    return b;
  }, move:function(a) {
    if (this.shown) {
      switch(a.keyCode) {
        case 9:
        ;
        case 13:
        ;
        case 27:
          a.preventDefault();
          break;
        case 38:
          a.preventDefault();
          this.prev();
          break;
        case 40:
          a.preventDefault(), this.next();
      }
      a.stopPropagation();
    }
  }, keydown:function(a) {
    this.suppressKeyPressRepeat = ~b.inArray(a.keyCode, [40, 38, 9, 13, 27]);
    this.move(a);
  }, keypress:function(a) {
    this.suppressKeyPressRepeat || this.move(a);
  }, keyup:function(a) {
    switch(a.keyCode) {
      case 40:
      ;
      case 38:
      ;
      case 16:
      ;
      case 17:
      ;
      case 18:
        break;
      case 9:
      ;
      case 13:
        if (!this.shown) {
          return;
        }
        this.select();
        break;
      case 27:
        if (!this.shown) {
          return;
        }
        this.hide();
        break;
      default:
        this.lookup();
    }
    a.stopPropagation();
    a.preventDefault();
  }, focus:function(a) {
    this.focused = !0;
  }, blur:function(a) {
    this.focused = !1;
    !this.mousedover && this.shown && this.hide();
  }, click:function(a) {
    a.stopPropagation();
    a.preventDefault();
    this.select();
    this.$element.focus();
  }, mouseenter:function(a) {
    this.mousedover = !0;
    this.$menu.find(".active").removeClass("active");
    b(a.currentTarget).addClass("active");
  }, mouseleave:function(a) {
    this.mousedover = !1;
    !this.focused && this.shown && this.hide();
  }};
  var h = b.fn.typeahead;
  b.fn.typeahead = function(a) {
    return this.each(function() {
      var c = b(this), d = c.data("typeahead"), f = "object" == typeof a && a;
      d || c.data("typeahead", d = new e(this, f));
      if ("string" == typeof a) {
        d[a]();
      }
    });
  };
  b.fn.typeahead.defaults = {source:[], items:8, menu:'<ul class="typeahead dropdown-menu"></ul>', item:'<li><a href="#"></a></li>', minLength:1};
  b.fn.typeahead.Constructor = e;
  b.fn.typeahead.noConflict = function() {
    b.fn.typeahead = h;
    return this;
  };
  b(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(a) {
    a = b(this);
    a.data("typeahead") || a.typeahead(a.data());
  });
}(window.jQuery);
