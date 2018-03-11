/**
 * Created by Administrator on 2017/3/6.
 */
function report_create_datagrid(pars) {
    var cols = getContrastTitle();
    console.log(cols);
    //构造列表
    $('#report_dg').datagrid({
        url:_basePath + '/datacenter/queryReportData.json',
        striped : true,
        pagination : true,
        rownumbers : true,
        pageSize : 15,
        pageNumber : 1,
        pageList : [15, 30, 100],
        loadMsg : '数据较多，可能会有5-10s加载时间，请耐心等待...',
        queryParams : pars,
        singleSelect:true,
        selectOnCheck : false,
        checkOnSelect : false,
        frozenColumns: [cols.frozenColumns, []],
        columns : cols.columns,
        onLoadSuccess:function(data){
            $(".txtcenter").parent().parent().css("text-align","center");
            $("#report_dg").datagrid('resize');
        }
    });
}

//动态列表,包括固定和非固定列
function getContrastTitle(){
    var cols = _title;
    cols = cols == '' ? [] : cols;
    var colfields = [], topColFields = [], frozenCols = [];
    for (var i=0; i<cols.length; i++) {
        var col = cols[i];
        var title = '<span class="txtcenter">' + formatTitle(col.title) + '</span>';
        if (col.isLevel != 1 && col.field.indexOf("_") != -1) {
            title = '<span class="txtcenter"><a href="javascript:desc(\''+col.title+'\',\''+col.field+'\');">' + formatTitle(col.title) + '</a></span>';
        }
        var colInfo = {field : col.field, title : title, resizable : true, hidden : false, sortable : false,  align: 'center'};
        if (col.ishidden == 1) {
            colInfo.hidden = true;
        };
        if (col.isFixation) { // 固定列
            colInfo.rowspan = 2;
            frozenCols.push(colInfo);
        } else { // 非固定列
//                colInfo.width = $(this).width()*0.03;
            if (col.isLevel == 1 || col.rowspan == 2) {
                colInfo.align = 'center';
                colInfo.rowspan = col.rowspan;
                colInfo.colspan = col.colspan;
                topColFields.push(colInfo);
            } else {
                colInfo.align = 'right';
                colInfo.rowspan = col.rowspan;
                colInfo.colspan = col.colspan;
                colfields.push(colInfo);
            }
        }
    }
    return {frozenColumns: frozenCols, columns: [topColFields,colfields]};
}

// 格式化标头,四个字后加回车
function formatTitle (title) {
    var len = str_len(title);
    var limit = 4;
    var br_len = Math.floor((len + (limit - 1)) / limit);
    if (br_len == 1)
        return title;
    var t = '';
    var j = 0;
    for (var i = 0; i < br_len; i++) {
        for (; j < title.length; j++) {
            var str = title[j];
            if (str_len(t) >= limit * (i + 1) && i != br_len - 1) {
                t += "<br/>";
                break;
            }
            t += str;
        }
    }
    return t;
}

function str_len(str) {
    var len = 0;
    for (var j = 0; j < str.length; j++) {
        if (/[0-9A-Za-z\(\)\/<>\s]/.test(str[j].toString()))
            continue;
        len ++;
    }
    return len;
}

function desc(title, field) {
    if (field == '' || field.length <= 0)
        return field;
    var start = field.indexOf("_") + 1;
    var end = field.indexOf("_div_") != -1
        ? field.indexOf("_div")
        : field.length;
    var id = field.substring(start, end);
    jQuery.ajax({
        url:_basePath + "/datacenter/getDescByFieldId.json",
        data:{id:id},
        type:"POST",
        dataType:"json",
        success: function (result) {
            var msg = '';
            if (result.code != 1) {
                msg = result.message;
            } else {
                msg = result.data;
            }
            if (msg == '' || msg == 'undefined')
                return;
            jQuery.messager.alert(title, msg, "INFO");
        }
    });
}

function reQueryData() {
    var pars = report_param_init();
    if (typeof($('#report_dg').data().datagrid) == "undefined") {
        report_create_datagrid(pars);
        $('.page-sidebar, .header').on('click', '.sidebar-toggler', function (e) {
            $('#report_dg').datagrid('resize');
        });
    } else {
        $('#report_dg').datagrid('reload', pars);
    }
}

// 获得当前页的所有参数
function getQueryParam () {
    var newPars = {}, pars = {
        "csId": getCsId(),
        "dqId": getDqId(),
        "qyId": getQyId(),
        "mdId": getMdId(),
        "xzId": getXzId(),
        "jjrId": getJjrId()
    };
    // 去掉为0的参数
    for (var o in pars) {
        if (pars[o] > 0) {
            newPars[o] = pars[o];
        }
    }
    // 返回合并的所有参数
    return $.extend({}, newPars, {
        "reportType": _reportType,
        "isDef": '$!{isDef}',
        "startDate": $("#startDate").datebox("getValue"),
        "endDate": $("#endDate").datebox("getValue"),
        "mobile": $("#mobile").val(),
        "agentId": $("#agentId").val()
    })
}

// 查询表格数据参数
function report_param_init(){
    var pars = getQueryParam (), params = {};
    for (var o in pars) {
        params[o] = pars[o];
    }
    return params;
//      return {"csId" : getCsId(), "dqId": getDqId(), "qyId": getQyId(), "mdId": getMdId(), "xzId": getXzId(), "jjrId": getJjrId(), "reportType": reportType, "isDef": isDef, "startDate": startDate, "endDate": endDate, "mobile": mobile, "agentId": agentId};
}

// 导出所需参数
function report_export_param() {
    var pars = getQueryParam (), params = '?';
    for (var o in pars) {
        params += o + '=' + pars[o] + '&';
    }
    params = params.replace(/&$/, '') //去掉最后的&
//      var params = "?csId=" + getCsId() + "&dqId=" + getDqId() + "&qyId=" + getQyId() + "&mdId=" + getMdId() + "&xzId=" + getXzId() + "&jjrId=" + getJjrId() + "&reportType=" + reportType + "&isDef=" + isDef + "&startDate=" + startDate + "&endDate=" + endDate + "&mobile=" + mobile + "&agentId=" + agentId;
    return params;

}


function exportData() {
    var params = report_export_param();
    if(params == -1){
        return ;
    }
    var src = _basePath + "/datacenter/exportReportData.report";
    $("#downloadExcel").attr("src", src + params);
}

function init() {
//		var pars = report_param_init();
//		report_create_datagrid(pars);
//
//		$('.page-sidebar, .header').on('click', '.sidebar-toggler', function (e) {
//			$('#report_dg').datagrid('resize');
//		});
}