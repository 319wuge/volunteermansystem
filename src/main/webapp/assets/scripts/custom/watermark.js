/*
 * @Author: yqy
 * @Date:   2015-10-08 16:44:07
 * @Email:  yuqingyang.sh@superjia.com
 * @Last Modified by:   yuqy
 * @Last Modified time: 2015-10-28 11:19:52
 */
(function($) {
    'use strict';

    var Watermark = function(options) {
        var self = this;
        self.opt = {
            docWidth: $(document).width(),
            docHeight: $(document).height(),
            fontStyle: "20px 黑体", //水印字体设置
            rotateAngle: -20 * Math.PI / 180, //水印字体倾斜角度设置
            fontColor: "rgba(100, 100, 100, 0.2)", //水印字体颜色设置
            firstLinePositionX: -20, //canvas第一行文字起始X坐标
            firstLinePositionY: 80, //Y
            SecondLinePositionX: 0, //canvas第二行文字起始X坐标
            SecondLinePositionY: 70 //Y
        };
        console.log("new watermark construct");
        $.extend(self.opt, options);
        self.render();
        self.draw(self.opt.docWidth, self.opt.docHeight);
        self.events();
    };

    Watermark.prototype = {
        render: function() {
            var self = this;
            $(document.body).append(tpl);
            $(document.body).append(tpl);

        },

        draw: function(docWidth, docHeight) {
            var self = this;
            var cw = $('#watermark')[0];
            var crw = $('#repeat-watermark')[0];

            crw.width = docWidth;
            crw.height = docHeight;

            var ctx = cw.getContext("2d");
            //清除小画布
            ctx.clearRect(0, 0, 160, 100);
            ctx.font = self.opt.fontStyle;
            //文字倾斜角度
            ctx.rotate(self.opt.rotateAngle);

            ctx.fillStyle = self.opt.fontColor;
            //第一行文字
            ctx.fillText(window.watermark.mobile, self.opt.firstLinePositionX, self.opt.firstLinePositionY);
            //第二行文字
            //ctx.fillText(window.watermark.mobile, self.opt.SecondLinePositionX, self.opt.SecondLinePositionY);
            //坐标系还原
            ctx.rotate(-self.opt.rotateAngle);

            var ctxr = crw.getContext("2d");
            //清除整个画布
            ctxr.clearRect(0, 0, crw.width, crw.height)
            //平铺--重复小块的canvas
            var pat = ctxr.createPattern(cw, "repeat")
            ctxr.fillStyle = pat;

            ctxr.fillRect(0, 0, crw.width, crw.height);
        },
        events: function() {
            var self = this;
            $(window).resize(function() {
                var w = $(document).width();
                var h = $(document).height();
                self.draw(w, h);
            });
        }

    };

    var tpl = '<canvas id = "watermark" width = "160px"  height = "100px" style="display:none;"></canvas>' + '<canvas id = "repeat-watermark"></canvas>';
    $(function() {
        console.log("new watermark");
        var tmp = new Watermark();
    })

})(jQuery);