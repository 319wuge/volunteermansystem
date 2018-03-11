package com.hfuu.utils;

/**
 * Created by Administrator on 2017/3/30 0030.
 */
public class ReportDataExpressionUtil {

    public static void main(String[] args) throws Exception {
//        List<String> list = FileUtils.readLines(new File("D:\\a.txt"));
//        Map<String,ReportDataExpression> reportDataExpressionMap = new HashMap<>();
//        int i = 0;
//        List<String> writeSqlList = new ArrayList<>();
//        List<String> reportExpressionSqlList = new ArrayList<>();
//        for(String s : list) {
//            String[] ss = StringUtils.split(s, "\t");
//            Integer dataLevelId = 0;
//            String levelName = ss[0];
////            for(Level l : Level.values()) {
////                if(levelName.equals(l.getName())) {
////                    dataLevelId = l.intValue();
////                    break;
////                }
////            }
//            Integer calculateType = Integer.valueOf(ss[2]);
//            if(calculateType == 1) {
//                continue;
//            }
//            i ++ ;
//            String expressionName = ss[1];
//            if(reportDataExpressionMap.get(expressionName) != null) {
//                continue;
//            }
//            String expression = ss.length > 4 ? ss[4] : "";
////            ReportDataExpression reportDataExpression = new ReportDataExpression();
////            reportDataExpression.setId(i);
////            reportDataExpression.setDataLevelId(dataLevelId);
////            reportDataExpression.setName(expressionName);
////            reportDataExpression.setExpression(expression);
////            reportDataExpressionMap.put(expression, reportDataExpression);
//            reportExpressionSqlList.add("INSERT INTO report_data_expression (id,dataLevelId,name,expression) VALUES (" + i + "," + dataLevelId + ",'" + expressionName + "','" + expression + "');");
//        }
//
//        List<String> defaultSqlList = new ArrayList<>();
//        for(String s : list) {
//            String[] ss = StringUtils.split(s, "\t");
//            String levelName = ss[0];
//            Integer dataLevelId = 0;
////            for(Level l : Level.values()) {
////                if(levelName.equals(l.getName())) {
////                    dataLevelId = l.intValue();
////                    break;
////                }
////            }
//            Integer calculateType = Integer.valueOf(ss[2]);
//            String dataIdStr = ss[3];
//            Integer dataId = 0;
//            if(StringUtils.isNotEmpty(dataIdStr)) {
//                dataId = Integer.valueOf(dataIdStr);
//            }
//            String expression = ss.length > 4 ? ss[4] : "";
//            Integer dataSort = Integer.valueOf(ss[5]);
//            String typeStr = ss[6];
//            if(typeStr.equals("aaa")) {
//                typeStr = "6";
//            } else if(typeStr.equals("bbb")) {
//                typeStr = "5";
//            } else if(typeStr.equals("ccc")) {
//                typeStr = "4";
//            } else if(typeStr.equals("ddd")) {
//                typeStr = "3";
//            } else if(typeStr.equals("eee")) {
//                typeStr = "2";
//            } else if(typeStr.equals("fff")) {
//                typeStr = "1";
//            }
////            ReportDataExpression reportDataExpression = reportDataExpressionMap.get(expression);
////            Integer dataExpressionId = reportDataExpression != null ? reportDataExpression.getId() : 0;
////            System.out.println("levelName " + levelName + " dataLevelId " + dataLevelId + " expressionName " + expressionName + " calculateType " + calculateType + " dataId " + dataId + " expression " + expression) ;
//            int type = Integer.valueOf(typeStr);
//            int type2 = type + 6;
//            defaultSqlList.add("INSERT INTO report_data_type_default (calculateType,type,dataId,dataExpressionId,createTime,updateTime,dataSort) VALUES(" +
//                    calculateType + "," + type + "," + dataId + "," + dataExpressionId + ",NOW(),NOW(),"+dataSort+");");
//            defaultSqlList.add("INSERT INTO report_data_type_default (calculateType,type,dataId,dataExpressionId,createTime,updateTime,dataSort) VALUES(" +
//                    calculateType + "," + type2 + "," + dataId + "," + dataExpressionId + ",NOW(),NOW(),"+dataSort+");");
//
//        }
//
//        // 四则运算表达式内容
//        for(String s : reportExpressionSqlList) {
//            System.out.println(s);
//        }
//        // 默认配置内容
//        for(String s : defaultSqlList) {
//            System.out.println(s);
//        }
//
//        writeSqlList.add("TRUNCATE report_data_expression;");
//        writeSqlList.addAll(reportExpressionSqlList);
//        writeSqlList.add("TRUNCATE report_data_type_default;");
//        writeSqlList.addAll(defaultSqlList);
//        FileUtils.writeLines(new File("E:\\项目管理\\数据中心表式表达式升级\\report_四则运算表达式初始化.sql"),"GBK",writeSqlList);

    }

    public static void processLevel() throws Exception {
//        List<String> list = FileUtils.readLines(new File("D:\\b.txt"));
//        List<Integer> idList = new ArrayList<>();
//        for(String s : list) {
//            String[] ss = StringUtils.split(s, "\t");
//            Integer id = Integer.valueOf(ss[0]);
//            if(idList.contains(id)) {
//                continue;
//            }
//            idList.add(id);
//            String name = ss[1];
//            System.out.println(name + "("+id + ",\""+name+"\"),");
//        }
    }
}