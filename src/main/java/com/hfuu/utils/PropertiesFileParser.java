package com.hfuu.utils;

import org.apache.log4j.Logger;

import java.io.*;
import java.util.LinkedHashMap;

/**
 * 解析配置文件并保存到内存中，以便查询
 * <P>配置文件格式遵循常见properties文件，请查看本package下的sample.properties文件
 *
 * @author whz
 */
public class PropertiesFileParser {
	public static final Logger log = Logger.getLogger(PropertiesFileParser.class);
	public static final String CHARSET_UTF8 = "utf-8";

	/** 1表示遇到重复时直接抛异常 */
	public static final int ERR_TYPE_throwException = 1;

	/** 2表示遇到重复时后面的会覆盖前面的配置 */
	public static final int ERR_TYPE_override = 2;

	private int errType = -1;

	private String charsetName = CHARSET_UTF8;

	private String fileName;

	private BufferedReader bufferedReader;

	/** 元素容器，LinkedHashMap是为了保证顺序 */
	private LinkedHashMap map;

	/**
	 * 初始化参数
	 * @param fileName classpath下路径的配置文件名
	 * @param charsetName 文件编码格式
	 */
	public PropertiesFileParser(String fileName) {
		this(fileName, CHARSET_UTF8);
	}

	/**
	 * 初始化参数
	 * @param fileName classpath下路径的配置文件名
	 * @param charsetName 文件编码格式
	 */
	public PropertiesFileParser(String fileName, String charsetName) {
		this.fileName = fileName;
		this.charsetName = charsetName;
		reload();
	}

	/**
	 * 从classpath重新读取配置文件
	 */
	private void reload() {
		InputStream stream = getClass().getClassLoader().getResourceAsStream(fileName);
		try {
			bufferedReader = new BufferedReader(new InputStreamReader(stream, charsetName));
		} catch (UnsupportedEncodingException ex) {
			log.error("", ex);
			throw new RuntimeException(ex);
		}

		map = new LinkedHashMap(10);
		try {
			initialMap();
		} catch (IOException ex) {
			log.error("", ex);
			throw new RuntimeException(ex);
		}

	}

	private void initialMap() throws IOException {
		for (String line = bufferedReader.readLine(); line != null; line = bufferedReader.readLine()) {
			line = line.trim();
			//#开头表示注释
			if (line.length() == 0 || line.startsWith("#")) {
				continue;
			}
			int pos = line.indexOf('=');
			if (pos == -1) {
				throw new IllegalArgumentException("invalid line:" + line);
			}
			String key = line.substring(0, pos);
			String value = line.substring(pos + 1);

			if (key.equals("errType")) {
				//错误处理方式不能重复设定
				if (errType != -1) {
					throw new IllegalArgumentException("set errType should be only once");
				}
				errType = Integer.parseInt(value);
				continue;
			} else {
				//开始初始化数据的时候，必须已经设定好错误处理方式
				if (errType == -1) {
					throw new IllegalArgumentException("errType must be setted");
				}
			}

			if (map.containsKey(key)) {
				switch (errType) {
					case ERR_TYPE_throwException:
						throw new IllegalArgumentException("repeat key:" + key);
					case ERR_TYPE_override:
						break;
					default:
						throw new IllegalArgumentException("invalid errType:" + errType);
				}
			}
			map.put(key, value);
		}
	}

	/**
	 * 根据key来取得value
	 * @param key
	 * @return String
	 */
	public String getString(String key) {
		return (String) map.get(key);
	}

	/**
	 * 得到配置文件中所有键值对
	 * @return Map
	 */
	public LinkedHashMap getMap() {
		return map;
	}
}