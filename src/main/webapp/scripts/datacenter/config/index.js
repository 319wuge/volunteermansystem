/**
 * Created by liubingguang on 2017/4/24.
 */

var reportConfigJs = window.reportConfigJs || {};

$(function() {
    if($('#pageType').val() == 1) {
        reportConfigJs.reportDataList();
    }
    initReportDataTable();
    initExpressionTable();
});

function initReportDataTable() {
    //构造列表
    $('#reportDataTable').datagrid({
        url:_basePath + '/datacenter/reportData/listReportDataOfPage.json',
        striped : true,
        pagination : true,
        rownumbers : false,
        pageSize : 15,
        pageNumber : 1,
        pageList : [15, 30, 100],
        loadMsg : '正在加载，请耐心等待...',
        singleSelect:true,
        selectOnCheck : false,
        checkOnSelect : false,
        columns : [[
            {field : 'id', title : '<span class="txtcenter">字段ID</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : 'dataName', title : '<span class="txtcenter">字段名称</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : 'description', title : '<span class="txtcenter">字段解释</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.2, align: 'left'},
            {field : 'topClassCNName', title : '<span class="txtcenter">跑批层级</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : 'recalculationCNName', title : '<span class="txtcenter">是否可重新计算</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : 'maintenanceMan', title : '<span class="txtcenter">维护人</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : ' ',title : '<span class="txtcenter">操作</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center',
                formatter:function(value,row,index) {
                    var d = " <a onclick='reportConfigJs.editReportData("+row.id+")'>修改</a>";
                    return d;
                }
            }
        ]],
        onLoadSuccess:function(data){
            $(".txtcenter").parent().parent().css("text-align","center");
            $("#reportDataTable").datagrid('resize');
        }
    });
}

/**
 * 运算式列表
 */
function initExpressionTable() {
    $('#expressionTable').datagrid({
        url:_basePath + '/datacenter/expression/listReportDataExpressionOfPage.json',
        striped : true,
        pagination : true,
        rownumbers : false,
        pageSize : 15,
        pageNumber : 1,
        pageList : [15, 30, 100],
        loadMsg : '正在加载，请耐心等待...',
        singleSelect:true,
        selectOnCheck : false,
        checkOnSelect : false,
        columns : [[
            {field : 'id', title : '<span class="txtcenter">序号</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : 'name', title : '<span class="txtcenter">名称</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center'},
            {field : 'expression', title : '<span class="txtcenter">计算式</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.15, align: 'center'},
            {field : 'description', title : '<span class="txtcenter">字段解释</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.2, align: 'left'},
            {field : '',title : '<span class="txtcenter">操作</span>',  resizable : true, hidden : false, sortable : false, width:$(this).width()*0.1, align: 'center',
                formatter:function(value,row) {
                    var d = " <a onclick='reportConfigJs.fillExpressionFormOfEdit("+row.id+")'>修改</a>";
                    return d;
                }
            }
        ]],
        onLoadSuccess:function(data){
            $(".txtcenter").parent().parent().css("text-align","center");
            $("#expressionTable").datagrid('resize');
        }
    });

}

// 保存字段
reportConfigJs.saveDataReport = function() {
    if (!$('#reportDataId').val()) {
        alert('字段id不能为空');
        return;
    }
    if (isNaN($('#reportDataId').val())) {
        alert('请输入正确的id');
        return;
    }
    if (!$('#className').val()) {
        alert('类名不能为空');
        return;
    }
    if (!$('#dataName').val()) {
        alert('字段名称不能为空');
        return;
    }
    if (!$('#description').val()) {
        alert('字段解释不能为空');
        return;
    }
    if (!$('#maintenanceMan').val()) {
        alert('维护人不能为空');
        return;
    }
    if ($('input[name="topClass"]').is(":checked").length = 0) {
        alert('计算的层级必须勾选');
        return;
    }

    $.ajax({
        url : _basePath + "/datacenter/reportData/saveReportData.json",
        type : 'POST',
        data : $('#dataReportForm').serialize(),
        dataType: 'JSON',
        beforeSend : function () {
            $('#dataSaveBtn').attr('disabled', true);
        },
        success : function(data) {
            if (data.code == 1) {
                alert('保存成功');
                reportConfigJs.freshPage();
            } else{
                alert(data.message);
            }
        },
        complete: function() {
            $('#dataSaveBtn').removeAttr('disabled');
        }
    });
};

// 保存四则运算
reportConfigJs.saveExpression = function() {
    if (!$('#expressionName').val()) {
        alert('名称不能为空');
        return;
    }
    if (!$('#expressionContent').val()) {
        alert('表达式不能为空');
        return;
    }
    if ($('#dataLevelId').val() == 0) {
        alert('请选择层级');
        return;
    }

    var url;
    if ($('#expressionId').val()) {
        url = _basePath + "/datacenter/expression/update.json"
    } else {
        url = _basePath + "/datacenter/expression/saveExpression.json";
    }
    $.ajax({
        url : url,
        type    : 'POST',
        data    : $('#expressionForm').serialize(),
        dataType: 'JSON',
        beforeSend : function () {
            $('#expSaveBtn').attr('disabled', true);
        },
        success : function(data) {
            if (data.code == 1) {
                alert('保存成功');
                reportConfigJs.freshPage();
            } else{
                alert(data.message);
            }
        },
        complete: function() {
            $('#expSaveBtn').removeAttr('disabled');
        }
    });
};

// 默认字段列表
reportConfigJs.reportDataList = function() {
    $.ajax({
        url : _basePath + "/datacenter/reportData/defaultDataList.json",
        type : 'POST',
        data : $('#showReportForm').serialize(),
        dataType: 'JSON',
        beforeSend : function() {
            $('#expTable').hide();
            $('#expTableBody').empty();
            $('#reportTableBody').empty();
        },
        success : function(obj) {
            if (obj.code == 1) {
                var reportList = obj.data;
                var tableContext = "";
                $(reportList).each(function(index, val){
                    tableContext +=
                        '<tr>' +
                        '<td>' + val.reportDataId + '</td>' +
                        '<td>' + val.dataName + '</td>' +
                        '<td>' + val.dataDescription + '</td>' +
                        '<td>' + val.maintenanceMan + '</td>' +
                        '<td>' +
                        '<i onclick="reportConfigJs.moveTitle(-1,' + val.typeDefaultId + ',' + val.showLevelId + ')" ' +
                        'class="fa fa-long-arrow-up" style="width: 20%;cursor: pointer">' +
                        '</i>' + '&nbsp;&nbsp;&nbsp;' +
                        '<i onclick="reportConfigJs.moveTitle(1,' + val.typeDefaultId + ',' + val.showLevelId + ')" ' +
                        'class="fa fa-long-arrow-down" style="width: 20%;cursor: pointer">' +
                        '</i>' + '&nbsp;&nbsp;&nbsp;' +
                        '<label onclick="reportConfigJs.editReportData(' + val.typeDefaultId + ')" style="cursor: pointer">' +
                        '编辑' +
                        '</label>' +
                        '</td>' +
                        '</tr>'
                });
                $('#reportTableBody').append(tableContext);
                $('#reportDataTable').show();
            }
        }
    });
};

// 移动字段
reportConfigJs.moveTitle = function(moveType, typeDefaultId, showLevelId) {
    $.ajax({
        url : _basePath + "/datacenter/reportData/moveTitle.json",
        type : 'POST',
        data : {
            showReportType : $('#showReportType').val(),
            move : moveType,
            typeDefaultId : typeDefaultId,
            showLevelId : showLevelId
        },
        dataType: 'JSON',
        success : function(data) {
            $('#reportTableBody').empty();
            reportConfigJs.reportDataList();
        }
    });
};

// 编辑字段
reportConfigJs.editReportData = function(reportDataId) {
    $.ajax({
        url : _basePath + "/datacenter/reportData/editReportData/" + reportDataId,
        type : 'GET',
        dataType: 'JSON',
        success : function(obj) {
            $('#dataSwitch').click();
            $('#dataReportForm')[0].reset();
            if (obj.code != 1) {
                alert(obj.message);
                return;
            }
            var data = obj.data;
            $('#reportDataId').val(data.reportDataId);
            $('#className').val(data.className);
            $('#dataName').val(data.dataName);
            $('#description').val(data.description);
            $('#maintenanceMan').val(data.maintenanceMan);
            $('#bizType').val(data.bizType);
            $('#showUnit').val(data.showUnit);
            $('#accumulation').val(data.accumulation);
            $('#rate').val(data.rate);
            $('#method').val(data.method);
            $('#showLevelId').val(data.showLevelId);
            $('#recalculation').val(data.recalculation);
            $('#effective').val(data.effective);
            $('#display').val(data.display);
            $('#dbbAttr').val(data.dbbAttr);

            // 用于区分保存还是修改
            $('#handleType').val(1);

            // 计算层级
            $('#topClassDiv').find("input").removeAttr('checked');
            var topClass = data.topClass.split(',');
            $(topClass).each(function(index, val) {
                $('#topClassDiv').find("input[value="+val+"]").attr('checked', true);
            });

            //报表类型
            $('#reportTypeDiv').find("input").removeAttr('checked');
            var types = data.reportTypes;
            $(types).each(function(index, val) {
                $('#reportTypeDiv').find("input[value="+val.type+"]").attr('checked', true);
            });

            $("html,body").animate({scrollTop: 0}, 300);
        }
    });
};

// 去默认显示配置
reportConfigJs.toDefaultShowConfig = function() {
    $("html,body").animate({scrollTop: $('#defaultShowTitle').offset().top}, 300);
};

/**
 * 点击修改四则运算按钮
 */
reportConfigJs.fillExpressionFormOfEdit = function (id) {
    $.ajax({
        url     : _basePath + '/datacenter/expression/getReportDataExpressionById.json?id=' + id,
        dataType: 'JSON',
        success : function(res) {
            if (res && res.code == 1) {
                var data = res.data.expressionVo;
                $('#expressionId').val(data.id);
                $('#expressionName').val(data.name);
                $('#expDescription').val(data.description);
                $('#expressionContent').val(data.expression);
                $('#dataLevelId').val(data.showLevelId);

                //报表类型
                $('#expressionReportTypeDiv').find("input").removeAttr('checked');
                var types = res.data.reportTypeList;
                $(types).each(function(index, val) {
                    $('#expressionReportTypeDiv').find("input[value="+val+"]").attr('checked', true);
                });

                $("body,html").animate({scrollTop: 0}, 300);
            } else {

            }
        }
    });
};

reportConfigJs.addReportData = function() {
    if ($('#reportDataId').val() || $('#expressionId').val()) {
        reportConfigJs.freshPage();
    }
    $('#reportDataId').val('');
    $('#dataReportForm')[0].reset();
    $("html,body").animate({scrollTop:0},300);
};

reportConfigJs.resetForm = function() {
    $('#dataReportForm')[0].reset();
};

reportConfigJs.freshPage = function() {
    window.location.href = window.location.href.split("?")[0];
};

reportConfigJs.goDefaultConfig = function() {
    window.location.href = _basePath + "/datacenter/typeDefault/index.do";
};