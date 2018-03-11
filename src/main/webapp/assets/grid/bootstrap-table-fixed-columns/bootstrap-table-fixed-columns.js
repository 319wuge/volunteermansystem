/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version: v1.0.1
 */

(function ($) {
    'use strict';

    $.extend($.fn.bootstrapTable.defaults, {
        fixedColumns: false,
        fixedNumber: 1
    });



    var BootstrapTable = $.fn.bootstrapTable.Constructor,
        _initHeader = BootstrapTable.prototype.initHeader,
        _initBody = BootstrapTable.prototype.initBody,
        _resetView = BootstrapTable.prototype.resetView,
        _onPostBody = BootstrapTable.prototype.onPostBody;



    BootstrapTable.prototype.initFixedColumns = function () {
        this.$fixedHeader = $([
            '<div class="fixed-table-header-columns">',
            '<table>',
            '<thead></thead>',
            '</table>',
            '</div>'].join(''));

        this.timeoutHeaderColumns_ = 0;
        this.$fixedHeader.find('table').attr('class', this.$el.attr('class'));
        this.$fixedHeaderColumns = this.$fixedHeader.find('thead');
        this.$tableHeader.before(this.$fixedHeader);

        this.$fixedBody = $([
            '<div class="fixed-table-body-columns">',
            '<table>',
            '<tbody></tbody>',
            '</table>',
            '</div>'].join(''));

        this.timeoutBodyColumns_ = 0;
        this.$fixedBody.find('table').attr('class', this.$el.attr('class'));
        this.$fixedBodyColumns = this.$fixedBody.find('tbody');
        this.$tableBody.before(this.$fixedBody);
    };

    BootstrapTable.prototype.initHeader = function () {
        _initHeader.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.fixedColumns) {
            return;
        }

        this.initFixedColumns();

        var that = this, $trs = this.$header.find('tr').clone();

        $trs.each(function () {
            $(this).find('th:gt(' + that.options.fixedNumber + ')').remove();
        });

        // 设置最后一列rowspan
        $($trs[0]).find('th:last').attr('rowspan', 1)

        this.$fixedHeaderColumns.html('').append($trs);
    };

    BootstrapTable.prototype.initBody = function () {
        _initBody.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.fixedColumns) {
            return;
        }

        var that = this,
            rowspan = 0;

        this.$fixedBodyColumns.html('');
        this.$body.find('> tr[data-index]').each(function () {
            var $tr = $(this).clone(),
                $tds = $tr.find('td');

            $tr.html('');
            var end = that.options.fixedNumber;
            if (rowspan > 0) {
                --end;
                --rowspan;
            }
            for (var i = 0; i < end; i++) {
                $tr.append($tds.eq(i).clone());
            }
            that.$fixedBodyColumns.append($tr);

            if ($tds.eq(0).attr('rowspan')){
            	rowspan = $tds.eq(0).attr('rowspan') - 1;
            }
        });
    };

    BootstrapTable.prototype.resetView = function () {
        // 先将之后隐藏的列显示
        resetHideCollumns(this, '')

        _resetView.apply(this, Array.prototype.slice.apply(arguments));

        if (!this.options.fixedColumns) {
            return;
        }

        clearTimeout(this.timeoutHeaderColumns_);
        this.timeoutHeaderColumns_ = setTimeout($.proxy(this.fitHeaderColumns, this), this.$el.is(':hidden') ? 100 : 0);

        clearTimeout(this.timeoutBodyColumns_);
        this.timeoutBodyColumns_ = setTimeout($.proxy(this.fitBodyColumns, this), this.$el.is(':hidden') ? 100 : 0);
    };

    BootstrapTable.prototype.fitHeaderColumns = function () {
        var that = this,
            visibleFields = this.getVisibleFields(),
            headerWidth = 0;

        this.$body.find('tr:first-child:not(.no-records-found) > *').each(function (i) {
            var $this = $(this),
                index = i;

            if (i >= that.options.fixedNumber) {
                return false;
            }

            if (that.options.detailView && !that.options.cardView) {
                index = i - 1;
            }

            that.$fixedHeader.find('th[data-field="' + visibleFields[index] + '"]')
                .find('.fht-cell').width($this.innerWidth());
            headerWidth += $this.outerWidth();
        });
        this.$fixedHeader.width(headerWidth + 1).show();
    };

    BootstrapTable.prototype.fitBodyColumns = function () {
        var that = this,
            top = -(parseInt(this.$el.css('margin-top') - 2)),
            // the fixed height should reduce the scorll-x height
            // height = this.$tableBody.height() - 14;
            height = this.$tableBody.height();  // 不需要显示滚动条宽度，去掉－14

        if (!this.$body.find('> tr[data-index]').length) {
            this.$fixedBody.hide();
            return;
        }

        if (!this.options.height) {
            top = this.$fixedHeader.height();
            height = height - top;
        }

        this.$fixedBody.css({
            width: this.$fixedHeader.width(),
            height: height - 2,
            top: top
        }).show();

        this.$body.find('> tr').each(function (i) {
            var $tr = $(this), $fixed_tr = that.$fixedBody.find('tr:eq(' + i + ')')
            $fixed_tr.height($tr.height() - 1);

            // 设置列宽
            if (i === 0) {
              $fixed_tr.find('td').each(function (j) {
                $(this).width($tr.find('td:eq(' + j + ')').width());
              })
            }
        });

        // 设置表格离左边的固定列的距离，避免滚动条超过固定列
        // 隐藏已固定的列
        resetHideCollumns(this, 'none')

        // events
        this.$tableBody.on('scroll', function () {
            that.$fixedBody.find('table').css('top', -$(this).scrollTop());
        });
        this.$body.find('> tr[data-index]').off('hover').hover(function () {
            var index = $(this).data('index');
            that.$fixedBody.find('tr[data-index="' + index + '"]').addClass('hover');
        }, function () {
            var index = $(this).data('index');
            that.$fixedBody.find('tr[data-index="' + index + '"]').removeClass('hover');
        });
        this.$fixedBody.find('tr[data-index]').off('hover').hover(function () {
            var index = $(this).data('index');
            that.$body.find('tr[data-index="' + index + '"]').addClass('hover');
        }, function () {
            var index = $(this).data('index');
            that.$body.find('> tr[data-index="' + index + '"]').removeClass('hover');
        });
    };

    // 设置表格离左边的固定列的距离，避免滚动条超过固定列
    var resetHideCollumns = function (_this, display) {
        var left = _this.$fixedBody.width();
        if (display !== 'none') left = 0;

        // 隐藏已固定的列
        var cols = _this.options.fixedNumber;

        _this.$tableHeader.find('thead tr:nth-child(1)').each(function(){ // header,暂时只考虑单个表头的固定列
          for (var i = 1; i <= cols; i++) {
            var $th = $(this).find('th:nth-child(' + i + ')')
            if ($th.attr('rowspan') == 2) {
              $th.css('display', display);
            }
          }
        })
        _this.$tableHeader.css({'margin-left': left}) // 设置偏移量

        _this.$tableBody.find('thead tr:nth-child(1)').each(function(){ // header,暂时只考虑单个表头的固定列
          for (var i = 1; i <= cols; i++) {
            var $th = $(this).find('th:nth-child(' + i + ')')
            if ($th.attr('rowspan') == 2) {
              $th.css('display', display);
            }
          }
        })
        _this.$tableBody.find('tbody tr').each(function(){ // 数据
          for (var i = 1; i <= cols; i++) {
            $(this).find('td:nth-child(' + i + ')').css('display', display);
          }
        })
        _this.$tableBody.css({'margin-left': left}) // 设置偏移量
    }

})(jQuery);
