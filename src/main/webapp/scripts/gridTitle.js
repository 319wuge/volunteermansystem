function setTableTitle(bizType){
    if($('#report_dg') != null && $('#report_dg') != undefined){
        $('#report_dg').datagrid('resize');
        $('#report_dg').datagrid('resize');
    }
    var src = "http://iwop.superjia.com/wiki/displayArticle.do?id=227";
    if(bizType==2){
        src = "http://iwop.superjia.com/wiki/displayArticle.do?id=228";
    }
    if(bizType==2558){
        src = "http://iwop.superjia.com/wiki/displayArticle.do?id=2558";
    }
    $(".datagrid-header-row .txtcenter").each(function () {
        $(this).html("<a href='"+src+"'>" + $(this).html() + "</a>")
    });
    $(".datagrid-header-row .datagrid-cell-group").each(function () {
        $(this).html("<a href='"+src+"'>" + $(this).html() + "</a>")
    });
}


function test(){
    var b = [{a:1},{b:2}];
    return [b.concat([1,2,3]),[1,2,3]];
}

//出租个人表
function getRentContrastTitle(){
    return [
        [
            {title : '净新增客户', colspan : 5, resizable : true, hidden : false, sortable : false,  align: 'center'},
            { title : '<span class="txtcenter">带看(出租)</span>', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            { title : '<span class="txtcenter">签约(出租)</span>', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'addHouse', title : '<span class="txtcenter">新增&nbsp;<br/>房源数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'rentHousePhoto', title : '<span class="txtcenter">房源实堪&nbsp;<br/>上传&nbsp;<br/>(套)</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'callLandlordSuccess', title : '<span class="txtcenter">房东&nbsp;<br/>通话数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'callUser', title : '<span class="txtcenter">客户&nbsp;<br/>通话数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {title : '<span class="txtcenter">转接系统</span>',  resizable : true, hidden : false, sortable : false,  align: 'right'}

        ],
        [
            {field : 'addUserTotal', title : '<span class="txtcenter">总人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'iwAddUser', title : '<span class="txtcenter">爱屋来源&nbsp;<br/>人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentAddUser', title : '<span class="txtcenter">经纪人&nbsp;<br/>来源人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentRecommUserApp', title : '<span class="txtcenter">端口转<br/>App人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'appPenetrance', title : '<span class="txtcenter">客户APP&nbsp;<br/>渗透率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:87},

            {field : 'look', title : '<span class="txtcenter">带看数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'seekCount', title : '<span class="txtcenter">昨日带看数/&nbsp;<br/>有风险数/&nbsp;<br/>组长检核数/&nbsp;<br/>检核不通过数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:93},
            {field : 'lookOnlyOneHouseRate', title : '<span class="txtcenter">一套&nbsp;<br/>带看率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},

            {field : 'contract', title : '<span class="txtcenter">签约&nbsp;<br/>(单)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field: 'outstandingPerformanceStr', title: '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>', resizable: true, hidden: false, sortable: false,  align: 'right',width:57},
            {field: 'avgCommissionRate', title: '<span class="txtcenter">收佣率&nbsp;<br/>(百分点)</span>', resizable: true, hidden: false, sortable: false,  align: 'right',width:65},

            {field: 'callLandlordRate', title: '<span class="txtcenter">房东通话&nbsp;<br/>成功率</span>', resizable: true, hidden: false, sortable: false,  align: 'right',width:69}
        ]
    ];
}

//出售个人表
function getSaleContrastTitle(){
    return [
        [
            {title : '净新增客户', colspan : 5, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '客户通话成功数', colspan : 4, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '房东成功通话数',  resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '带看(二手)', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '签约(二手)', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '带看(新房)', resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '签约(新房)', colspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title : '转接系统', resizable : true, hidden : false, sortable : false,  align: 'center'}
        ],
        [
            {field : 'totalAddUser', title : '<span class="txtcenter">总人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'iwAddUser', title : '<span class="txtcenter">爱屋&nbsp;<br/>来源&nbsp;<br/>人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'agentAddUser', title : '<span class="txtcenter">经纪人&nbsp;<br/>来源&nbsp;<br/>人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'agentRecommUserApp', title : '<span class="txtcenter">端口转&nbsp;<br/>App客户数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:87},
            {field : 'appPenetrance', title : '<span class="txtcenter">客户APP&nbsp;<br/>渗透率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:87},

            {field : 'totalCustomer', title : '<span class="txtcenter">总通话</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'privateCustomer', title : '<span class="txtcenter">私客</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'publicCustomer', title : '<span class="txtcenter">公客</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'potentialCustomer', title : '<span class="txtcenter">潜在客户</span>', resizable : true, hidden : false, sortable : false, align: 'right',width:69},

            {field : 'callLandlordSuccess', title : '<span class="txtcenter">总通话</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:101},

            {field : 'look', title : '<span class="txtcenter">带看数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'seekCount', title : '<span class="txtcenter">昨日带看数&nbsp;<br/>有风险数/&nbsp;<br/>组长检核数/&nbsp;<br/>检核不通过数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:93},
            {field : 'lookOnlyOneHouseRate', title : '<span class="txtcenter">一套&nbsp;<br/>带看率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},

            {field : 'complianceTotal', title : '<span class="txtcenter">签居间&nbsp;<br/>(单)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'sumComplianceCommission', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgCommissionRate', title : '<span class="txtcenter">收佣率&nbsp;<br/>(百分点)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65},

            {field : 'newHouseLook', title : '<span class="txtcenter">带看数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:74},

            {field : 'newHouseDeal', title : '<span class="txtcenter">认购数+&nbsp;<br/>直接成交&nbsp;<br/>(单)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'newHouseCommissionStr', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},

            {field : 'callLandlordRate', title : '<span class="txtcenter">房东&nbsp;<br/>通话&nbsp;<br/>成功率</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65}
        ]
    ];
}

//全国出售个人表
function getQGSaleContrastTitle(){
    return [
        [
            {title : '净新增客户', colspan : 5, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '经纪人新增房源', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '实堪房源', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '客户通话成功数', colspan : 4, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '房东成功通话数',  resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '带看(二手)', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '签约(二手)', colspan : 6, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '带看(新房)', resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title : '签约(新房)', colspan : 3, resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title : '转接系统', resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title : '岗位信息', colspan : 4, resizable : true, hidden : false, sortable : false,  align: 'center'},

        ],
        [
            {field : 'totalAddUser', title : '<span class="txtcenter">总人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'iwAddUser', title : '<span class="txtcenter">爱屋&nbsp;<br/>来源&nbsp;<br/>人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'agentAddUser', title : '<span class="txtcenter">经纪人&nbsp;<br/>来源&nbsp;<br/>人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'agentRecommUserApp', title : '<span class="txtcenter">端口转&nbsp;<br/>App客户数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:87},
            {field : 'appPenetrance', title : '<span class="txtcenter">客户APP&nbsp;<br/>渗透率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:87},

            {field : 'addHouse', title : '<span class="txtcenter">全部</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'addHouseA', title : '<span class="txtcenter">A类</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:42},
            {field : 'addHouseB', title : '<span class="txtcenter">B类</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:41},

            {field : 'saleHousePhoto', title : '<span class="txtcenter">上传拍照&nbsp;<br/>(套)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentBookAppointNum', title : '<span class="txtcenter">实勘预约数&nbsp;<br/>(套)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:81},
            {field : 'successBookAppointNum', title : '<span class="txtcenter">预约实勘成功&nbsp;<br/>(套)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:93},

            {field : 'totalCustomer', title : '<span class="txtcenter">总通话</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'privateCustomer', title : '<span class="txtcenter">私客</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'publicCustomer', title : '<span class="txtcenter">公客</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'potentialCustomer', title : '<span class="txtcenter">潜在客户</span>', resizable : true, hidden : false, sortable : false, align: 'right',width:69},

            {field : 'callLandlordSuccess', title : '<span class="txtcenter">总通话</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:101},

            {field : 'look', title : '<span class="txtcenter">带看数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'seekCount', title : '<span class="txtcenter">昨日带看数&nbsp;<br/>有风险数/&nbsp;<br/>组长检核数/&nbsp;<br/>检核不通过数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:93},
            {field : 'lookOnlyOneHouseRate', title : '<span class="txtcenter">一套&nbsp;<br/>带看率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},

            {field : 'complianceTotal', title : '<span class="txtcenter">签居间&nbsp;<br/>(单)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'sumComplianceCommission', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgCommissionRate', title : '<span class="txtcenter">收佣率&nbsp;<br/>(百分点)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65},
            {field : 'complianceModifyStr', title : '<span class="txtcenter">居间订单&nbsp;<br/>变动佣金&nbsp;<br/>(万)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65},
            {field : 'complianceComplianceTotalStr', title : '<span class="txtcenter">件齐订单&nbsp;<br/>总佣收&nbsp;<br/>(万)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65},
            {field : 'complianceComplianceModifyStr', title : '<span class="txtcenter">件齐订单&nbsp;<br/>变动佣收&nbsp;<br/>(万)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65},

            {field : 'newHouseLook', title : '<span class="txtcenter">带看数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:74},

            {field : 'newHouseDeal', title : '<span class="txtcenter">认购数+&nbsp;<br/>直接成交&nbsp;<br/>(单)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'addNewHouseDeal', title : '<span class="txtcenter">成交单</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'newHouseCommissionStr', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},

            {field : 'callLandlordRate', title : '<span class="txtcenter">房东&nbsp;<br/>通话&nbsp;<br/>成功率</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:65},

            {field : 'rentRoleStr', title : '<span class="txtcenter">出租岗位</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'saleRoleStr', title : '<span class="txtcenter">出售岗位</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'positionStr', title : '<span class="txtcenter">职级</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:100},
            {field : 'joinDate', title : '<span class="txtcenter">入职天数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57}
        ]
    ];
}

function getRentGroupTitle(){
    return [
        [
            {title: '<span class="txtcenter">净新增客户</span>', colspan: 8,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">新增房源</span>', colspan: 2,resizable : true, hidden : false, sortable : false,  align: 'center'},

            {field : 'rentHousePhoto', title : '<span class="txtcenter">上传拍照/套</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'avgCallUser', title : '<span class="txtcenter">人均客户&nbsp;<br/>通话成功数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'avgCallLandlordSuccess', title : '<span class="txtcenter">人均房东&nbsp;<br/>成功通话数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},

            {title: '<span class="txtcenter">带看(出租)</span>', colspan: 4,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">签约(出租)</span>', colspan: 5,resizable : true, hidden : false, sortable : false,  align: 'center'},

             {title: '<span class="txtcenter">转接系统</span>', resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">经纪人人力结构</span>', resizable : true, hidden : false, sortable : false,  align: 'center'}

        ],
        [
            {field : 'addUserTotal', title : '<span class="txtcenter">总人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'iwAddUser', title : '<span class="txtcenter">爱屋&nbsp;<br/>来源人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentAddUser', title : '<span class="txtcenter">经纪人&nbsp;<br/>来源人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'addTimesTotal', title : '<span class="txtcenter">上客&nbsp;<br/>总次数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'repeatCustomerStr', title : '<span class="txtcenter">重客率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgAddTimesTotal', title : '<span class="txtcenter">人均&nbsp;<br/>上客次数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentRecommUserApp', title : '<span class="txtcenter">端口转&nbsp;<br/>APP人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:68},
            {field : 'appPenetrance', title : '<span class="txtcenter">客户APP&nbsp;<br/>渗透率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:87},

            {field : 'addHouse', title : '<span class="txtcenter">总数</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'avgAddHouse', title : '<span class="txtcenter">人均&nbsp;<br/>新增房源</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:69},

            {field : 'look', title : '<span class="txtcenter">带看数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgLook', title : '<span class="txtcenter">人均&nbsp;<br/>带看数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'seekCount', title : '<span class="txtcenter">昨日带看数/&nbsp;<br/>有风险数/&nbsp;<br/>组长检核数/&nbsp;<br/>检核不通过数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:93},
            {field : 'lookOnlyOneHouseRate', title : '<span class="txtcenter">一套&nbsp;<br/>带看率</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},


            {field : 'contract', title : '<span class="txtcenter">签约&nbsp;<br/>(单)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'outstandingPerformanceStr', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgContract', title : '<span class="txtcenter">人均单量&nbsp;<br/>(单)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'avgOutstandingPerformance', title : '<span class="txtcenter">人均佣收&nbsp;<br/>(元)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'avgCommissionRate', title : '<span class="txtcenter">收佣率&nbsp;<br/>(百分点)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:65},

            {field : 'callLandlordRate', title : '<span class="txtcenter">房东&nbsp;<br/>通话&nbsp;<br/>成功率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:65},

            {field : 'incumbency', title : '<span class="txtcenter">在职人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:101}
        ]
    ];
}



function getSaleGroupTitle(){
    return [
        [
            {title: '<span class="txtcenter">净新增客户</span>', colspan: 8,resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title: '<span class="txtcenter">人均客户通话成功数</span>', colspan: 4,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">人均房东成功通话数</span>',resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title: '<span class="txtcenter">带看(二手)</span>', colspan: 4,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">签约(二手)</span>', colspan: 5,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">带看(新房)</span>', resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">签约(新房)</span>', colspan: 4,resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title: '<span class="txtcenter">转接系统</span>',resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title: '<span class="txtcenter">经纪人人力结构</span>', colspan: 1,resizable : true, hidden : false, sortable : false,  align: 'center'}

        ],
        [
            {field : 'totalAddUser', title : '<span class="txtcenter">总人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'iwAddUser', title : '<span class="txtcenter">爱屋&nbsp;<br/>来源人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentAddUser', title : '<span class="txtcenter">经纪人&nbsp;<br/>来源人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'totalAddTimes', title : '<span class="txtcenter">上客&nbsp;<br/>总次数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'repeatCustomerRateStr', title : '<span class="txtcenter">重客率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgTotalAddTimes', title : '<span class="txtcenter">人均&nbsp;<br/>上客次数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'agentRecommUserApp', title : '<span class="txtcenter">端口转&nbsp;<br/>APP人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:68},
            {field : 'appPenetrance', title : '<span class="txtcenter">客户APP&nbsp;<br/>渗透率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:68},

            {field : 'avgTotalCustomer', title : '<span class="txtcenter">总通话量</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'avgPrivateCustomer', title : '<span class="txtcenter">私客</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:45},
            {field : 'avgPublicCustomer', title : '<span class="txtcenter">公客</span>', resizable : true, hidden : false, sortable : false, align: 'right',width:45},
            {field : 'avgPotentialCustomer', title : '<span class="txtcenter">潜在客户</span>', resizable : true, hidden : false, sortable : false, align: 'right',width:69},

            {field : 'avgCallLandlordSuccess', title : '<span class="txtcenter">总通话</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:125},

            {field : 'look', title : '<span class="txtcenter">带看数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgLook', title : '<span class="txtcenter">人均&nbsp;<br/>带看数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'seekCount', title : '<span class="txtcenter">昨日带看数/&nbsp;<br/>有风险数/&nbsp;<br/>组长检核数/&nbsp;<br/>检核不通过数</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:93},
            {field : 'lookOnlyOneHouseRate', title : '<span class="txtcenter">一套&nbsp;<br/>带看率</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},


            {field : 'complianceTotal', title : '<span class="txtcenter">签居间&nbsp;<br/>(单)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'sumComplianceCommission', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgComplianceTotal', title : '<span class="txtcenter">人均单量&nbsp;<br/>(单)</span>',  resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'avgCommission', title : '<span class="txtcenter">人均佣收&nbsp;<br/>(元)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'avgCommissionRate', title : '<span class="txtcenter">收佣率&nbsp;<br/>(百分点)</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:65},

            {field : 'newHouseLook', title : '<span class="txtcenter">带看数</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:74},

            {field : 'newHouseDeal', title : '<span class="txtcenter">认购数&nbsp;<br/>+直接成交&nbsp;<br/>(单)</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:78},
            {field : 'newHouseCommissionStr', title : '<span class="txtcenter">总佣收&nbsp;<br/>(万)</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'avgNewHouseDeal', title : '<span class="txtcenter">人均单量&nbsp;<br/>(单)</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'avgNewHouseCommissionStr', title : '<span class="txtcenter">人均佣收&nbsp;<br/>(元)</span>',resizable : true, hidden : false, sortable : false,  align: 'right',width:69},

            {field : 'callLandlordRate', title : '<span class="txtcenter">房东通话&nbsp;<br/>成功率</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},

            {field : 'incumbency', title : '<span class="txtcenter">在职人数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:101}
        ]
    ];
}


function getEastateMaintennanceTitles(){
    return [
        [
            {title: '责任维护率', colspan: 3,resizable : true, hidden : false, sortable : false,  align: 'center'},

            {title: '委托增量', colspan:2,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'weituoBsumRatio', title : '当前业主&nbsp;<br/>委托占比', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'task', title : '实勘增量', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'taskSumRatio', title : '当前&nbsp;<br/>实勘率', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'onsellLjRatio', title : '当前&nbsp;<br/>对盘率', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'appoint', title : '带看&nbsp;<br/>增量', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'keynum', title : '钥匙&nbsp;<br/>增量', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '成交数', colspan: 2,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'built', title : '经纪人房源&nbsp;<br/>上架数', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'recommed', title : '爱屋客源&nbsp;<br/>推荐数', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'recommedDuty', title : '责任客源&nbsp;<br/>推荐数', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'}

        ],
        [
            {field : 'maintain7Ratio', title : '7天', resizable : true, hidden : false, sortable : false,  align: 'center',width:57, formatter:function(value, row, index){
                var d =  '&nbsp;<a class="editcls" onclick="listHistory(\''+row.estid+'\',\''+row.startDate+'\',\''+row.endDate+'\',\''+row.estname+'\',\''+row.groupname+'\',\''+row.mendianname+'\')" href="javascript:void(0)">'+row.maintain7Ratio+'</a>';
                return d;
            }
            },
            {field : 'maintain5Ratio', title : '5天', resizable : true, hidden : false, sortable : false,  align: 'center',width:69, formatter:function(value, row, index){
                var d = '&nbsp;<a class="editcls" onclick="listHistory(\''+row.estid+'\',\''+row.startDate+'\',\''+row.endDate+'\',\''+row.estname+'\',\''+row.groupname+'\',\''+row.mendianname+'\')" href="javascript:void(0)">'+row.maintain5Ratio+'</a>';
                return d;
            }
            },
            {field : 'maintain14Ratio', title : '14天', resizable : true, hidden : false, sortable : false,  align: 'center',width:69, formatter:function(value, row, index){
                var d =  '&nbsp;<a class="editcls" onclick="listHistory(\''+row.estid+'\',\''+row.startDate+'\',\''+row.endDate+'\',\''+row.estname+'\',\''+row.groupname+'\',\''+row.mendianname+'\')" href="javascript:void(0)">'+row.maintain14Ratio+'</a>';
                return d;
            }
            },
            {field : 'weituoB', title : '书面委托', resizable : true, hidden : false, sortable : false,  align: 'center',width:57},
            {field : 'weituoE', title : '电子委托', resizable : true, hidden : false, sortable : false,  align: 'center',width:57},
            {field : 'deal', title : '爱屋成交数', resizable : true, hidden : false, sortable : false,  align: 'center',width:69},
            {field : 'dealDuty', title : '责任成交数', resizable : true, hidden : false, sortable : false,  align: 'center',width:68}

        ]
    ];
}


function getEastateRateTitles(){
    return [
        [
            {title : '<span id="estateNameStr"></span>', resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span id="groupName"></span>',colspan:3,resizable : true, hidden : false, sortable : false,  align: 'center'}
        ],
        [
            {field : 'date', title : '日期', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '责任维护率', colspan:3,resizable : true, hidden : false, sortable : false,  align: 'center'}
        ],
        [
            {field : 'maintain7Ratio', title : '7天', resizable : true, hidden : false, sortable : false,  align: 'center',width:50},
            {field : 'maintain5Ratio', title : '5天', resizable : true, hidden : false, sortable : false,  align: 'center',width:50},
            {field : 'maintain14Ratio', title : '14天', resizable : true, hidden : false, sortable : false,  align: 'center',width:50}
        ]
    ];
}

//房源责任管理报表
function getDutyHouseMaintainTitles(){
    return [
        [
            {field : 'estCount', title: '<span class="txtcenter">数量</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center',width:70},
            {field : 'onsell', title: '<span class="txtcenter">当前&nbsp;<br/>在售量</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'center',width:70},
            {field : 'getsSumRatio', title : '<span class="txtcenter">领取&nbsp;<br/>占比</span>',rowspan : 2,  resizable : true, hidden : false, sortable : false,  align: 'right',width:70},
            {title: '<span class="txtcenter">责任维护率</span>', colspan: 3,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {title: '<span class="txtcenter">委托增量</span>', colspan:2,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'weituoBsumRatio', title : '<span class="txtcenter">当前业主&nbsp;<br/>委托占比</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'task', title : '<span class="txtcenter">实勘增量</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'taskSumRatio', title : '<span class="txtcenter">当前&nbsp;<br/>实勘率</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'onsellLjRatio', title : '<span class="txtcenter">当前&nbsp;<br/>对盘率</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'appoint', title : '<span class="txtcenter">带看&nbsp;<br/>增量</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'keynum', title : '<span class="txtcenter">钥匙&nbsp;<br/>增量</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {title: '<span class="txtcenter">成交数</span>', colspan: 2,resizable : true, hidden : false, sortable : false,  align: 'center'},
            {field : 'built', title : '<span class="txtcenter">经纪人房源&nbsp;<br/>上架数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'recommed', title : '<span class="txtcenter">爱屋客源&nbsp;<br/>推荐数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {field : 'recommedDuty', title : '<span class="txtcenter">责任客源&nbsp;<br/>推荐数</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'}

        ],
        [
            {field : 'maintain7Ratio', title : '<span class="txtcenter">7天</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57,
                formatter:function(value, row, index){
                    var d = '&nbsp;<a class="editcls" onclick="listHistory(\''+row.groupid+'\',\''+row.selEstid+'\',\''+row.esttype+'\',\''+row.startDate+'\',\''+row.endDate+'\')" href="javascript:void(0)">'+row.maintain7Ratio+'</a>';
                    return d;
                }
            },
            {field : 'maintain5Ratio', title : '<span class="txtcenter">5天</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57,
                formatter:function(value, row, index){
                    var d = '&nbsp;<a class="editcls" onclick="listHistory(\''+row.groupid+'\',\''+row.selEstid+'\',\''+row.esttype+'\',\''+row.startDate+'\',\''+row.endDate+'\')" href="javascript:void(0)">'+row.maintain5Ratio+'</a>';
                    return d;
                }
            },
            {field : 'maintain14Ratio', title : '<span class="txtcenter">14天</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57,
                formatter:function(value, row, index){
                    var d = '&nbsp;<a class="editcls" onclick="listHistory(\''+row.groupid+'\',\''+row.selEstid+'\',\''+row.esttype+'\',\''+row.startDate+'\',\''+row.endDate+'\')" href="javascript:void(0)">'+row.maintain14Ratio+'</a>';
                    return d;
                }
            },
            {field : 'weituoB', title : '<span class="txtcenter">书面委托</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'weituoE', title : '<span class="txtcenter">电子委托</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:57},
            {field : 'deal', title : '<span class="txtcenter">爱屋成交数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'dealDuty', title : '<span class="txtcenter">责任成交数</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:68},

        ]
    ];
}
function getDutyHouseMaintainHisTitles(){
    return [
        [
            {title: '<span id="groupName"></span>',colspan:4,resizable : true, hidden : false, sortable : false,  align: 'center'}
        ],
        [
            {field : 'date', title : '<span class="txtcenter">日期</span>', rowspan : 2, resizable : true, hidden : false, sortable : false,  align: 'right'},
            {title: '<span class="txtcenter">责任维护率</span>', colspan:3,resizable : true, hidden : false, sortable : false,  align: 'center'}
        ],
        [
            {field : 'maintain7Ratio', title : '<span class="txtcenter">7天</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69,
                formatter:function(value, row, index){
                   if(index==0){
                       $('#groupName').html(row.mendianname+"-"+row.groupname);
                   }
                    return row.maintain7Ratio;
                }
            },
            {field : 'maintain5Ratio', title : '<span class="txtcenter">5天</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69},
            {field : 'maintain14Ratio', title : '<span class="txtcenter">14天</span>', resizable : true, hidden : false, sortable : false,  align: 'right',width:69}

        ]
    ];
}
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}