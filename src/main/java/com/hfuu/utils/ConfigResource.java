package com.hfuu.utils;

import org.apache.log4j.Logger;

import java.util.ResourceBundle;

/**
 * 配置资源
 * <p/>
 * Created by whz on 2014/10/17.
 */
public class ConfigResource {
	private static Logger logger = Logger.getLogger(ConfigResource.class);
	/**
	 * 配置文件
	 */
	public final static ResourceBundle config = ResourceBundle.getBundle("config");

	/**
	 * 获取系统属性，该方法主要被velocity模版所使用。
	 *
	 * @param key 键值
	 * @return
	 */
	public static String getSystemProperty(String key) {
		return config.getString(key);
	}
}
