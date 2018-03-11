package com.hfuu.utils;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * 导入到excel所需要的参数
 * 
 * @author tiger
 * 
 */
@Retention(RetentionPolicy.RUNTIME)
public @interface ExportExcelPar {
	/**
	 * 是否导出 默认 true, 设置false 该字段 不导出
	 */
	boolean ifExport() default true;


	boolean ifShowNull() default false;
	/**
	 * 前缀
	 */
	String prefix() default  "";
	/**
	 * 后缀
	 */
	String postfix() default "";
}
