/**
 * The Patch for jQuery EasyUI 1.4
 */
(function($){
	var plugin = $.fn._size;
	$.fn._size = function(options, parent){
		if (typeof options != 'string'){
			return this.each(function(){
				parent = parent || $(this).parent();
				if (parent.length){
					plugin.call($(this), options, parent);
				}
			});
		} else if (options == 'unfit'){
			return this.each(function(){
				var p = $(this).parent();
				if (p.length){
					plugin.call($(this), options, parent);
				}
			});
		} else {
			return plugin.call(this, options, parent);
		}
	};
})(jQuery);

(function($){
	$.map(['validatebox','textbox','filebox','searchbox',
		'combo','combobox','combogrid','combotree',
		'datebox','datetimebox','numberbox',
		'spinner','numberspinner','timespinner','datetimespinner'], function(plugin){
		if ($.fn[plugin]){
			if ($.fn[plugin].defaults.events){
				$.fn[plugin].defaults.events.click = function(e){
					if (!$(e.data.target).is(':focus')){
						$(e.data.target).trigger('focus');
					}
				};
			}
		}
	});
	$.fn.combogrid.defaults.height = 22;
	$(function(){
		$(document).bind('mousewheel.combo', function(e){
			$(e.target).trigger('mousedown.combo');
		});
	});
})(jQuery);

(function($){
	$.extend($.fn.form.methods, {
		clear: function(jq){
			return jq.each(function(){
				var target = this;
				$('input,select,textarea', target).each(function(){
					var t = this.type, tag = this.tagName.toLowerCase();
					if (t == 'text' || t == 'hidden' || t == 'password' || tag == 'textarea'){
						this.value = '';
					} else if (t == 'file'){
						var file = $(this);
						if (!file.hasClass('textbox-value')){
							var newfile = file.clone().val('');
							newfile.insertAfter(file);
							if (file.data('validatebox')){
								file.validatebox('destroy');
								newfile.validatebox();
							} else {
								file.remove();
							}
						}
					} else if (t == 'checkbox' || t == 'radio'){
						this.checked = false;
					} else if (tag == 'select'){
						this.selectedIndex = -1;
					}
				});

				var t = $(target);
				var plugins = ['textbox','combo','combobox','combotree','combogrid','slider'];
				for(var i=0; i<plugins.length; i++){
					var plugin = plugins[i];
					var r = t.find('.'+plugin+'-f');
					if (r.length && r[plugin]){
						r[plugin]('clear');
					}
				}
				$(target).form('validate');
			});
		}
	});
})(jQuery);

(function($){
	function setSize(target, param){
		var opts = $.data(target, 'linkbutton').options;
		if (param){
			$.extend(opts, param);
		}
		if (opts.width || opts.height || opts.fit){
			var btn = $(target);
			var parent = btn.parent();
			var isVisible = btn.is(':visible');
			if (!isVisible){
				var spacer = $('<div style="display:none"></div>').insertBefore(target);
				var style = {
					position: btn.css('position'),
					display: btn.css('display'),
					left: btn.css('left')
				};
				btn.appendTo('body');
				btn.css({
					position:'absolute',
					display:'inline-block',
					left:-20000
				});
			}
			btn._size(opts, parent);
			var left = btn.find('.l-btn-left');
			left.css('margin-top', 0);
			left.css('margin-top', parseInt((btn.height()-left.height())/2)+'px');
			if (!isVisible){
				btn.insertAfter(spacer);
				btn.css(style);
				spacer.remove();
			}
		}
	}

	var plugin = $.fn.linkbutton;
	$.fn.linkbutton = function(options, param){
		if (typeof options != 'string'){
			return this.each(function(){
				plugin.call($(this), options, param);
				setSize(this);
			});
		} else {
			return plugin.call(this, options, param);
		}
	};
	$.fn.linkbutton.methods = plugin.methods;
	$.fn.linkbutton.defaults = plugin.defaults;
	$.fn.linkbutton.parseOptions = plugin.parseOptions;
	$.extend($.fn.linkbutton.methods, {
		resize: function(jq, param){
			return jq.each(function(){
				setSize(this, param);
			});
		}
	});
})(jQuery);

(function($){
	var plugin = $.fn.dialog;
	$.fn.dialog = function(options, param){
		var result = plugin.call(this, options, param);
		if (typeof options != 'string'){
			this.each(function(){
				var opts = $(this).panel('options');
				if (isNaN(parseInt(opts.height))){
					$(this).css('height', '');
				}
				var onResize = opts.onResize;
				opts.onResize = function(w, h){
					onResize.call(this, w, h);
					if (isNaN(parseInt(opts.height))){
						$(this).css('height', '');
					}
					var shadow = $.data(this, 'window').shadow;
					if (shadow){
						var cc = $(this).panel('panel');
						shadow.css({
							width: cc._outerWidth(),
							height: cc._outerHeight()
						});
					}
				};
				if (opts.closed){
					var pp = $(this).panel('panel');
					pp.show();
					$(this).panel('resize');
					pp.hide();
				}
			});
		}
		return result;
	};
	$.fn.dialog.methods = plugin.methods;
	$.fn.dialog.parseOptions = plugin.parseOptions;
	$.fn.dialog.defaults = plugin.defaults;
})(jQuery);

(function($){
	function createTab(container, pp, options) {
		var state = $.data(container, 'tabs');
		options = options || {};

		// create panel
		pp.panel({
			border: false,
			noheader: true,
			closed: true,
			doSize: false,
			iconCls: (options.icon ? options.icon : undefined)
		});

		var opts = pp.panel('options');
		$.extend(opts, options, {
			onLoad: function(){
				if (options.onLoad){
					options.onLoad.call(this, arguments);
				}
				state.options.onLoad.call(container, $(this));
			}
		});

		var tabs = $(container).children('div.tabs-header').find('ul.tabs');

		opts.tab = $('<li></li>').appendTo(tabs);   // set the tab object in panel options
		opts.tab.append(
				'<a href="javascript:void(0)" class="tabs-inner">' +
				'<span class="tabs-title"></span>' +
				'<span class="tabs-icon"></span>' +
				'</a>'
		);

		$(container).tabs('update', {
			tab: pp,
			options: opts
		});
	}
	function addTab(container, options) {
		var opts = $.data(container, 'tabs').options;
		var tabs = $.data(container, 'tabs').tabs;
		if (options.selected == undefined) options.selected = true;

		var pp = $('<div></div>').appendTo($(container).children('div.tabs-panels'));
		tabs.push(pp);
		createTab(container, pp, options);

		opts.onAdd.call(container, options.title, tabs.length-1);

		$(container).tabs('resize');
		if (options.selected){
			$(container).tabs('select', tabs.length-1);
		}
	}
	$.extend($.fn.tabs.methods, {
		add: function(jq, options){
			return jq.each(function(){
				addTab(this, options);
			});
		}
	});
})(jQuery);

(function($){
	$.extend($.fn.menubutton.methods, {
		enable: function(jq){
			return jq.each(function(){
				$(this).data('menubutton').options.disabled = false;
				$(this).linkbutton('enable');
			});
		}
	});
})(jQuery);

(function($){
	var onAfterRender = $.fn.datagrid.defaults.view.onAfterRender;
	$.extend($.fn.datagrid.defaults.view, {
		updateRow: function(target, rowIndex, row){
			var opts = $.data(target, 'datagrid').options;
			var rows = $(target).datagrid('getRows');

			var oldStyle = _getRowStyle(rowIndex);
			$.extend(rows[rowIndex], row);
			var newStyle = _getRowStyle(rowIndex);
			var oldClassValue = oldStyle.c;
			var styleValue = newStyle.s;
			var classValue = 'datagrid-row ' + (rowIndex % 2 && opts.striped ? 'datagrid-row-alt ' : ' ') + newStyle.c;

			function _getRowStyle(rowIndex){
				var css = opts.rowStyler ? opts.rowStyler.call(target, rowIndex, rows[rowIndex]) : '';
				var classValue = '';
				var styleValue = '';
				if (typeof css == 'string'){
					styleValue = css;
				} else if (css){
					classValue = css['class'] || '';
					styleValue = css['style'] || '';
				}
				return {c:classValue, s:styleValue};
			}
			function _update(frozen){
				var fields = $(target).datagrid('getColumnFields', frozen);
				var tr = opts.finder.getTr(target, rowIndex, 'body', (frozen?1:2));
				var checked = tr.find('div.datagrid-cell-check input[type=checkbox]').is(':checked');
				tr.html(this.renderRow.call(this, target, fields, frozen, rowIndex, rows[rowIndex]));
				tr.attr('style', styleValue).removeClass(oldClassValue).addClass(classValue);
				if (checked){
					tr.find('div.datagrid-cell-check input[type=checkbox]')._propAttr('checked', true);
				}
			}

			_update.call(this, true);
			_update.call(this, false);
			$(target).datagrid('fixRowHeight', rowIndex);
		},
		onAfterRender: function(target){
			onAfterRender.call($.fn.datagrid.defaults.view, target);
			setTimeout(function(){
				var opts = $(target).datagrid('options');
				opts.pageNumber = opts.pageNumber || 1;
			},0);
		}
	});

	$.fn.datagrid.defaults.loader = function(param, success, error){
		var opts = $(this).datagrid('options');
		if (!opts.url) return false;
		if (opts.pagination && opts.pageNumber == 0){
			opts.pageNumber = 1;
			param.page = 1;
		}
		if (param.page == 0){
			return false;
		}
		$.ajax({
			type: opts.method,
			url: opts.url,
			data: param,
			dataType: 'json',
			success: function(data){
				success(data);
			},
			error: function(){
				error.apply(this, arguments);
			}
		});
	};
})(jQuery);

(function($){
	$.fn.numberbox.defaults.filter = function(e){
		var opts = $(this).numberbox('options');
		var s = $(this).numberbox('getText');
		if (e.which == 45){ //-
			return (s.indexOf('-') == -1 ? true : false);
		}
		var c = String.fromCharCode(e.which);
		if (c == opts.decimalSeparator){
			return (s.indexOf(c) == -1 ? true : false);
		} else if (c == opts.groupSeparator){
			return true;
		} else if ((e.which >= 48 && e.which <= 57 && e.ctrlKey == false && e.shiftKey == false) || e.which == 0 || e.which == 8) {
			return true;
		} else if (e.ctrlKey == true && (e.which == 99 || e.which == 118)) {
			return true;
		} else {
			return false;
		}
	};
})(jQuery);