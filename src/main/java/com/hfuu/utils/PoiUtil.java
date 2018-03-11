package com.hfuu.utils;

import org.apache.poi.hssf.usermodel.*;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

/**
 * Created by kehui on 2014/11/14.
 */
public class PoiUtil {

    public static HSSFWorkbook initWorkbookByTemplate(List<List<String>> data, InputStream is, int offsetRow)
            throws IOException {
        return initWorkbook(data, null, is, offsetRow);
    }

    public static HSSFWorkbook initWorkbookByData(List<List<String>> data, List<String> titles, int offsetRow)
            throws IOException {
        return initWorkbook(data, titles, null, offsetRow);
    }

    /**
     * 可支持两种方式的xls输出
     * 1.根据已有xls文件的输入流，初始化workbook，填充数据
     * 2.新建workbook，根据传入数据和标题填充workbook
     * @param data 需要填充的数据
     * @param titles  标题
     * @param is 模板的输入流
     * @param offsetRow 行偏移量
     * @return
     * @throws IOException
     */
    public static HSSFWorkbook initWorkbook(List<List<String>> data, List<String> titles, InputStream is, int offsetRow)
            throws IOException {
        HSSFWorkbook workbook = null;
        HSSFSheet sheet = null;
        if (is == null) {
            workbook = new HSSFWorkbook();
            sheet = workbook.createSheet();
        } else {
            workbook = new HSSFWorkbook(is);
            sheet = workbook.getSheetAt(0);
        }
        if (data == null || data.size() == 0)
            return workbook;
        HSSFCellStyle cellStyle = workbook.createCellStyle();
        //HSSFFont font = workbook.createFont();
        //font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
        //font.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);
        //cellStyle.setFont(font);
        cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        cellStyle.setWrapText(true);
        if(data.size() > 65535){
            data = data.subList(0, 65000);
        }
        if (null != titles && titles.size() > 0) {
            HSSFRow row = sheet.createRow(0);
            for (int j = 0; j < titles.size(); j++) {
                //HSSFCell cell = createTitleCell(row, workbook, j, rowData.get(j));
                HSSFCell cell = row.createCell(j);
                cell.setCellStyle(cellStyle);
                cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                cell.setCellValue(new HSSFRichTextString(titles.get(j)));
            }
        }
        for (int i = 0; i < data.size(); i++) {
            List<String> rowData = data.get(i);
            HSSFRow row = sheet.createRow(offsetRow + i);
            for (int i1 = 0; i1 < rowData.size(); i1++) {
                //HSSFCell cell = createTitleCell(row, workbook, i1, rowData.get(i1));
                HSSFCell cell = row.createCell(i1);
                cell.setCellStyle(cellStyle);
                cell.setCellType(HSSFCell.CELL_TYPE_STRING);
                cell.setCellValue(rowData.get(i1));
            }
        }
        return workbook;
    }

    public static HSSFCell createTitleCell(HSSFRow row, HSSFWorkbook workbook, int cellNumber, String cellValue) {
        HSSFCell cell = row.createCell(cellNumber);
        //cell.setEncoding(HSSFCell.ENCODING_UTF_16);
        HSSFCellStyle cellStyle = workbook.createCellStyle();
        //HSSFFont font = workbook.createFont();
        //font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
        //font.setBoldweight(HSSFFont.BOLDWEIGHT_NORMAL);
        //cellStyle.setFont(font);
        cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
        cell.setCellStyle(cellStyle);
        cell.setCellType(HSSFCell.CELL_TYPE_STRING);
        cell.setCellValue(cellValue);
        return cell;
    }

}
