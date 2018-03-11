/**
 * Created by Administrator on 2017/3/13.
 */
var $table = $('#table');

$(function () {
    //
});

// 初始化表格
function buildTable($el, pars) {
    var cols = getContrastTitle();
    console.log(cols);
    $el.bootstrapTable('destroy').bootstrapTable({
        columns: cols.columns,
        locale: 'zh-CN',

        showColumns:false,
        fixedColumns: true,
        fixedNumber: cols.frozenColumns.length,

        url: _basePath + '/datacenter/queryReportData.json',
        queryParamsType:'limit',
        queryParams: function (params) {
            return $.extend(pars, params);
        },

        pagination: true,
        pageList: [15, 20, 30],
        sidePagination: 'server',
        pageNumber: 1,
        pageSize: 15,

        onPostHeader: function () {
        },
        onPostBody: function () {
            setTimeout(function () {
                resetTableHeight($table);
                initHeadHover(_basePath + "/datacenter/getDescByFieldId.json");
            }, 100)
        },
        onLoadSuccess: function(data){  //登录失效时刷新页面
            if(data.code==-1){
                window.location=_basePath +"/index.do";
            }
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
        var title = formatTitle(col.title);
        if (col.isLevel != 1 && col.field.indexOf("_") != -1) {
            title = formatTitle(col.title) ;
        }
        var colInfo = {field : col.field, title : title, editable : false, align: 'center'};
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
    topColFields = frozenCols.concat(topColFields);
    return {frozenColumns:frozenCols, columns : [topColFields,colfields]};
    //return {frozenColumns: frozenCols, columns: [topColFields,colfields]};
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


function reQueryData() {
    var pars = report_param_init();
    buildTable($table, pars);
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
        "isDef": _isDef,
        "startDate": $("#startDate").length==0 ? "" : $("#startDate").datebox("getValue"),
        "endDate": $("#endDate").length==0 ? "" : $("#endDate").datebox("getValue"),
        "mobile": $("#mobile").val(),
        "agentId": $("#agentId").val(),
        "onlyOnJob" : $("#onlyOnJob").length > 0 ? ($("#onlyOnJob").is(":checked") ? 1 : 0) : 0
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

}