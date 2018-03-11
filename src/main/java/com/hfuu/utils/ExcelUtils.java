package com.hfuu.utils;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;

import javax.servlet.http.HttpServletResponse;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.Field;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ExcelUtils {

	private static Logger logger = Logger.getLogger(ExcelUtils.class);

	public static final String NULL_STR = "NULL";
	public static final String BLANK_STR = "";
	
	public static void main(String[] args) {
		
		
	}
	
	public static <T> void transferToArrAndSetValue( HSSFWorkbook hssf,List<T> list, Class<T> clzz) throws IllegalArgumentException, IllegalAccessException{
		if (list == null || list.size() == 0) {
			return ;
		}
		
		HSSFSheet sheet = hssf.getSheetAt(0);
		Field[] fields = clzz.getDeclaredFields();
		
		for (Field field : fields) {
			if (!"serialVersionUID".equalsIgnoreCase(field.getName())) {
				// 判断是否 不需要导出 
				ExportExcelPar notpar = field.getAnnotation(ExportExcelPar.class);
				if(notpar == null || (notpar != null && notpar.ifExport()) ){
					// 导出
					field.setAccessible(true);
				}
			}
			
		}
		
		
		for (int i = 0; i < list.size(); i++) {
			List<String> strings = new ArrayList<String>();
			for (Field field : fields) {
				if (!"serialVersionUID".equalsIgnoreCase(field.getName()) ) {
					// 判断是否 不需要导出 
					ExportExcelPar notpar = field.getAnnotation(ExportExcelPar.class);
					if(notpar == null || (notpar != null && notpar.ifExport()) ){
						// 导出
						String str="";
						Object o = field.get(list.get(i));
						if(notpar == null){
							str = (o == null ? BLANK_STR: o.toString());
						}else{
							if(o != null){
								//前缀/ 后缀
								if(!"".equals(notpar.prefix())){
									str = notpar.prefix();
								}
								str += o.toString();
								if(!"".equals(notpar.postfix())){
									str = str + notpar.postfix();
								}
							}else{
								str += (notpar.ifShowNull() ? NULL_STR : BLANK_STR);
							}
						}
						strings.add(str);
					}
				}
			}
			for (int j = 0; j < strings.size(); j++) {
				setValue(sheet,i,j,strings);
			}
		}
		
		
	}
	
	private static void setValue(HSSFSheet sheet,int i,int j,List<String> strings){
		HSSFCell cellTemp = null;
		if (j == 0) {
			cellTemp = sheet.createRow(i + 1).createCell(j);
			cellTemp.setCellType(HSSFCell.CELL_TYPE_STRING);
			cellTemp.setCellValue(strings.get(j));
		}else {
			cellTemp = sheet.getRow(i + 1).createCell(j);
			cellTemp.setCellType(HSSFCell.CELL_TYPE_STRING);
			cellTemp.setCellValue(strings.get(j));
		}
	}
	/**
	 * 导出excel
	 * @author howard
	 * @param response
	 * @param arr 表头列表
	 * @param list 数据数组
	 * @param clzz 数据对象类型
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 */
	public static <T> void export(String xlsName, HttpServletResponse response,String[] arr,List<T> list,Class<T> clzz) throws IllegalArgumentException, IllegalAccessException{
		//String arr[] = {"日期","1套","2-10套","11-50套","51-100套","101套"};
		HSSFWorkbook hssf = writeExcelFirst(arr,true);
		if(CollectionUtils.isNotEmpty(list)) {
			if(list.size() > 65534) {
				list = list.subList(0,65534);
				logger.warn("export over size list size is " + list.size());
			}
		}
		transferToArrAndSetValue(hssf,list,clzz);
		//responseXLS("" + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()),response,hssf);
		if (StringUtils.isEmpty(xlsName)) {
			xlsName = "" + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
		}
		responseXLS(xlsName, response, hssf);
	}
	
	/**
	 * 导出excel
	 * @author howard
	 * @param response
	 * @param xlsName xcel名字前缀
	 * @param arr 表头列表
	 * @param list 数据数组
	 * @param clzz 数据对象类型
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 */
	public static <T> void export(HttpServletResponse response,String xlsName,String[] arr,List<T> list,Class<T> clzz) throws IllegalArgumentException, IllegalAccessException{
		//String arr[] = {"日期","1套","2-10套","11-50套","51-100套","101套"};
		HSSFWorkbook hssf = writeExcelFirst(arr,true);
		transferToArrAndSetValue(hssf,list,clzz);
		if(StringUtils.isBlank(xlsName)){
			xlsName ="";
		}
		responseXLS(xlsName + new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date()) + ".xls",response,hssf);
	}

	/**
	 * 导出反馈管理
	 * @param response
	 * @param xlsName
	 * @param arr
	 * @param list
	 * @param clzz
	 * @param <T>
	 * @throws IllegalArgumentException
	 * @throws IllegalAccessException
	 */
	public static <T> void exportFeedback(HttpServletResponse response,String xlsName,String[] arr,List<T> list,Class<T> clzz) throws IllegalArgumentException, IllegalAccessException{
		HSSFWorkbook hssf = writeExcelFirst(arr,true);
		transferToArrAndSetValue(hssf,list,clzz);
		if(StringUtils.isBlank(xlsName)){
			xlsName ="";
		}
		responseXLSForFeedback(xlsName, response, hssf);
	}
	/**
	 * true为写一行标题
	 * false为写一列标题
	 * @param arr
	 * @param ifRow
	 * @return
	 */
	private static HSSFWorkbook  writeExcelFirst(String [] arr,boolean ifRow) {
		HSSFWorkbook workbook = new HSSFWorkbook(); // 产生工作簿对象
		HSSFSheet sheet = workbook.createSheet(); // 产生工作表对象
		workbook.setSheetName(0, "default");
		sheet.setColumnWidth(0, 20 * 256);
		int size = arr.length;
		for (int i = 0; i < size; i++) {
			if (ifRow) {
				HSSFCell cellTemp = null;
				if(i == 0){
					cellTemp = sheet.createRow(0).createCell(i);
				}else {
					cellTemp = sheet.getRow(0).createCell(i);
				}
				cellTemp.setCellType(HSSFCell.CELL_TYPE_STRING);
				cellTemp.setCellValue(arr[i]);
			}else {
				HSSFCell cellTemp = sheet.createRow(i).createCell(0);
				cellTemp.setCellType(HSSFCell.CELL_TYPE_STRING);
				cellTemp.setCellValue(arr[i]);
			}
			
		}
		return workbook;
	}
	
	public static void responseXLS(String xlsName , HttpServletResponse response, HSSFWorkbook workbook) {
		OutputStream os = null;
		try {
			response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			response.setHeader("content-disposition", "attachment;filename=" + xlsName + ".xls");
			// 写入到 客户端response
			os = response.getOutputStream();
			workbook.write(os);
			
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (os != null) {
					os.flush();
					os.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			
		}
	}


	/**
	 * 导出反馈管理写入到前台
	 * @param xlsName
	 * @param response
	 * @param workbook
	 */
	public static void responseXLSForFeedback(String xlsName , HttpServletResponse response, HSSFWorkbook workbook) {
		OutputStream os = null;
		try {
			response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
			response.setHeader("content-disposition", "attachment;filename=" + new String(xlsName.getBytes("utf-8"),"ISO8859-1"));
			// 写入到 客户端response
			os = response.getOutputStream();
			workbook.write(os);

		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (os != null) {
					os.flush();
					os.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}

		}
	}

}
