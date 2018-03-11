
// 表格header，hover时提示信息
function initHeadHover(url) {
    $('.fixed-table-header th').each(function () {
        $(this).qtip({
            // content: '显示标题',
            content: {
                text: "提示正在加载...",
                ajax: {
                    url: url + '?id=' + getFieldId($(this).data('field')),
                    success: function (res) {
                        if (res.code == 1) {
                            return res.data;
                        }
                        return res.message;
                    }
                },
                title:{
                    text: $(this).find('.th-inner').text(),
                }
            },
            show: 'mouseover',
            hide: 'mouseout',
            style: {
                position: {
                    corner: {
                        target: 'topLeft',
                        tooltip: 'bottomLeft'
                    }
                },
                classes: 'qtip-shadow qtip-rounded'
            }
        });
    })

}

function getFieldId(field) {
    if (typeof(field) == 'undefined' || field == '' || field.length <= 0)
        return 0;
    var start = field.indexOf("_") + 1;
    var end = field.indexOf("_div_") != -1
        ? field.indexOf("_div")
        : field.length;
    var id = field.substring(start, end);
    if (field.indexOf('expression') != -1) {
        id = id + '&isExpression=1';
    }
    return id;
}


// 重置高度
function resetTableHeight($el) {
    var h = $('#table').outerHeight() - $('.fixed-table-header').outerHeight()
    $('.fixed-table-container').height(h + 20)
    $('.fixed-table-body-columns').height(h)

    // 设置固定列的列头
    var thh = $('.fixed-table-header').outerHeight(),
        tdh = $('.fixed-table-body-columns tr:nth-child(1)').outerHeight() + 2
    $('.fixed-table-header-columns').height(thh)
    $('.fixed-table-header-columns .table').height(thh)
    $('.fixed-table-header-columns .table th:nth-child(1)').height(thh - tdh)

    $(window).resize()
}
