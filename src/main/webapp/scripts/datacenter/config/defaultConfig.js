var defaultConfigJs = window.defaultConfigJs || {};

// 编辑字段
defaultConfigJs.editSecondLevel = function(typeDefaultId,val) {
    $('#editTitleId').val(typeDefaultId);
    if (!typeDefaultId) {
        //新增
        var selfTrDom = $(val).parent().parent();
        var firstLevelDom = $(selfTrDom).prevAll('.firstLevel').eq(0);
        var showLevelId = $(firstLevelDom).find("input[name='firstLevel']").val();
        $('#showLevelId').val(showLevelId);

        var preTrDom = $(selfTrDom).prev();
        var typeDefaultId = $(preTrDom).find("input[name='typeDefaultId']").val();
        if (!typeDefaultId) {
            $('#typeDefaultId').val(0);
        } else {
            $('#typeDefaultId').val(typeDefaultId);
        }
        $('#newSecondTitle').val(1);
    }

    $.ajax({
        url : _basePath + "/datacenter/reportData/dataByType.json",
        type    : 'POST',
        data    : {
            showReportType : $('#showReportType').val()
        },
        dataType: 'JSON',
        beforeSend : function() {
            $('#expTable').hide();
            $('#reportTableBody').empty();
        },
        success : function(obj) {
            if (obj.code != 1) {
                return;
            }
            var dataList = obj.data;
            var tableContent = '';
            console.log(dataList);
            $(dataList).each(function(index, val) {
                tableContent +=
                    "<tr>" +
                    "<td>" + val.id + "</td>" +
                    "<td>" + val.dataName + "</td>" +
                    "<td>" + val.description + "</td>" +
                    "<td>" + val.maintenanceMan + "</td>" +
                    "<td style='text-align: center'>" +
                    "<button class='btn btn-default' onclick='defaultConfigJs.selectReportData("+val.id+")'>选择</button>" +
                    "</td>" +
                    "</tr>"
            });
            $('#reportTableBody').append(tableContent);
            $('#reportDataTable').show();
        }
    });
};

// 默认四则运算列表
defaultConfigJs.allExpression = function() {
    $.ajax({
        url : _basePath + "/datacenter/expression/allExpression.json",
        type : 'POST',
        dataType: 'JSON',
        beforeSend : function() {
            $('#reportDataTable').hide();
            $('#expTableBody').empty();
        },
        success : function(obj) {
            if (obj.code != 1) {
                return;
            }
            var expList = obj.data;
            var tableContext = "";
            $(expList).each(function(index, val) {
                tableContext +=
                    "<tr>" +
                    "<td>" + val.name + "</td>" +
                    "<td>" + val.expression + "</td>" +
                    "<td>" +
                        "<button class='btn btn-default' onclick='defaultConfigJs.selectExp('+val.id+')'>选择</button>" +
                    "</td>" +
                    "</tr>";
            });
            $('#expTableBody').append(tableContext);
            $('#expTable').show();
        }
    });

};

// 移动二级表头
defaultConfigJs.moveTitle = function(moveType, showLevelId, typeDefaultId, val) {
    var currentTr = $(val).parent().parent();
    var currentHtml = currentTr.html();

    var targetTr;
    //上移
    if (moveType == -1) {
        targetTr = $(currentTr).prev();
        if ($(targetTr).find("input[name='firstLevel']").length > 0) {
            alert('不能上移了');
            return;
        }
    } else {
        targetTr = $(currentTr).next();
        if ($(targetTr).find("input[name='firstLevel']").length > 0) {
            alert('不能下移了');
            return;
        }
        if (targetTr.length == 0) {
            alert('不能下移了');
            return;
        }
    }
    // 新增的二级表头
    if (!typeDefaultId) {
        var targetHtml = $(targetTr).html();
        $(targetTr).html(currentHtml);
        $(currentTr).html(targetHtml);

        var currTd = $(currentTr).find("td").eq(0);
        var targetTd = $(targetTr).find("td").eq(0);
        var currTdText = $(currTd).text();
        var targetTdText = $(targetTd).text();
        $(currTd).text(targetTdText);
        $(targetTd).text(currTdText);
        return;

    } else {
        $.ajax({
            url : _basePath + "/datacenter/reportData/moveTitle.json",
            type    : 'POST',
            data    : {
                showReportType : $('#showReportType').val(),
                move : moveType,
                typeDefaultId : typeDefaultId,
                showLevelId : showLevelId
            },
            dataType: 'JSON',
            success : function(data) {
                if (data.code != 1) {
                    alert(data.message);
                }
                var targetHtml = $(targetTr).html();
                $(targetTr).html(currentHtml);
                $(currentTr).html(targetHtml);

                var currTd = $(currentTr).find("td").eq(0);
                var targetTd = $(targetTr).find("td").eq(0);
                var currTdText = $(currTd).text();
                var targetTdText = $(targetTd).text();
                $(currTd).text(targetTdText);
                $(targetTd).text(currTdText);
            }
        });
    }

};

// 新增四则运算
defaultConfigJs.newExpress = function() {
    var expDom =
        "<tr>" +
            "<td class='newExp'>" +
                "<label style='display: none'></label>" +
                "<input type='text' id='expName' style='display: none' class='form-control' maxlength='20'>" +
            "</td>" +
            "<td class='newExp'>" +
                "<label style='display: none'></label>" +
                "<input type='text' id='expression' style='display: none' class='form-control' maxlength='100'>" +
            "</td>" +
            "<td>" +
                "<button class='btn btn-default' onclick='defaultConfigJs.selectExp(null)'>选择</button>" +
            "</td>" +
        "</tr>";
    $("#expTableBody .newExp").live('dblclick', function() {
        $(this).children('input').show();
    });
    $("#expTableBody").find('input').live('blur', function() {
        var value = $(this).val();
        var spanDom = $(this).prev();
        $(spanDom).text(value);
        $(this).hide();
        $(spanDom).show();
    });
    $('#expTableBody').prepend(expDom);
};

// 选择四则运算
defaultConfigJs.selectExp = function(expressionId) {
    $.ajax({
        url     : _basePath + "/datacenter/typeDefault/editByExp.json",
        type    : 'POST',
        data    : {
            expressionId : expressionId,
            typeDefaultId : $('#editTitleId').val(),
            name : $('#expName').val(),
            expression : $('#expression').val(),
            showLevelId : $('#showLevelId').val(),
            showReportType : $('#showReportType').val(),
            newSecondTitle : $('#newSecondTitle').val()
        },
        dataType: 'JSON',
        success : function(data) {
            if (data.code != 1) {
                alert(data.message);
            }
            window.location.href = window.location.href;
        }
    });
};

// 选择"选择字段"
defaultConfigJs.selectReportData = function(reportDataId) {
    $.ajax({
        url     : _basePath + "/datacenter/typeDefault/editByData.json",
        type    : 'POST',
        data    : {
            typeDefaultId : $('#typeDefaultId').val(),
            dataId : reportDataId,
            showLevelId : $('#showLevelId').val(),
            showReportType : $('#showReportType').val(),
            newSecondTitle : $('#newSecondTitle').val()
        },
        dataType: 'JSON',
        success : function(data) {
            if (data.code != 1) {
                alert(data.message);
            }
            window.location.href = window.location.href;
        }
    });
};

// 新增一级表头
defaultConfigJs.addFirstTitle = function() {
    $('#firstShowTitle').show();
    $('#firstShowTitleSaveBtn').show();
};

// 保存一级表头
defaultConfigJs.saveFirstLevel = function(val) {
    var selfTrDom = $(val).parent().parent();
    var allFirstLevelDom = $(selfTrDom).prevAll('.firstLevel');

    var preFirstLevelId;
    if ($(allFirstLevelDom).length > 0) {
        var preTrDom = allFirstLevelDom.eq(0);
        preFirstLevelId = $(preTrDom).find("input[name='firstLevel']").val();
    } else {
        //排第一
        preFirstLevelId = 0;
    }
    var levelName = $(selfTrDom).children('td.newFirstTitle').children('input').val();
    $.ajax({
        url     : _basePath + "/datacenter/reportData/addShowLevel.json",
        type    : 'POST',
        data    : {
            showLevelId : preFirstLevelId,
            levelName : levelName
        },
        dataType: 'JSON',
        success : function(obj) {
            if (obj.code != 1) {
                alert(obj.message);
                return;
            }
            var editBtn = '<button type="button" class="btn btn-default" ' +
                'onclick="defaultConfigJs.addReportData(this)">+二级表头</button>';
            $(val).parent().html(editBtn);
            // window.location.href = window.location.href;

        }
    });
};

// 删除二级表头
defaultConfigJs.deleteSecondTitle = function(val, typeDefaultId) {
    $.ajax({
        url : _basePath + "/datacenter/typeDefault/deleteTitle.json",
        type    : 'POST',
        data    : {
            typeDefaultId : typeDefaultId
        },
        dataType: 'JSON',
        success : function(data) {
            if (data.code == 1) {
                window.location.href = window.location.href;
            } else {
                alert(data.message);
            }
        }
    });
};

// 选择报表类型加载数据
defaultConfigJs.getDefaultDataByType = function() {
    var type = $('#showReportType').val();
    window.location.href = _basePath
        + "/datacenter/typeDefault/index.do?showReportType=" + type;
};

// 编辑字段
defaultConfigJs.toEditReportDataPage = function(reportDataId) {
    window.location.href =
        _basePath + "/datacenter/reportData/index.do?dataId=" + reportDataId + "&from=edit";
};

// 编辑四则运算
defaultConfigJs.toEditExpPage = function(expressionId) {
    window.location.href =
        _basePath + "/datacenter/reportData/index.do?expressionId=" + expressionId + "&from=edit";
};

// 保存一级标题
defaultConfigJs.saveFirstTitle = function() {
    if (!$('#firstShowTitle').val()) {
        alert('请输入表头内容');
        return;
    }
    $.ajax({
        url : _basePath + "/datacenter/reportData/addFirstTitle.json",
        type    : 'POST',
        data    : {
            name : $('#firstShowTitle').val(),
        },
        dataType: 'JSON',
        success : function(data) {
            if (data.code == 1) {
                alert('添加成功');
                $('#firstShowTitle').hide();
                $('#firstShowTitleSaveBtn').hide();
            } else {
                alert(data.message);
            }
        }
    });
};