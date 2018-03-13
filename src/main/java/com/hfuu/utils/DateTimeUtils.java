package com.hfuu.utils;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.time.DateFormatUtils;
import org.apache.log4j.Logger;

import java.text.ParseException;
import java.text.ParsePosition;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateTimeUtils {
	public static final Logger log = Logger.getLogger(DateTimeUtils.class);

	public final static String FORMAT_yyyy_MM_dd = "yyyy-MM-dd";
	
	public final static String FORMAT_yyyyMMdd = "yyyyMMdd";

	public final static String FORMAT_yyyy_M_d = "yyyy-M-d";

	public final static String FORMAT_yyyy_MM_dd_HH_mm_ss = "yyyy-MM-dd HH:mm:ss";

	public final static String FORMAT_yyyy_nian_MM_yue_mm_ri = "yyyy年MM月dd日";

	public final static String FORMAT_yyyy_nian_M_yue_m_ri = "yyyy年M月d日";

	public final static String FORMAT_yyyyMMddHHmmss = "yyyyMMddHHmmss";

	public final static SimpleDateFormat FORMATTER_YYYY_MM_DD = new SimpleDateFormat(FORMAT_yyyy_MM_dd);

	/**
	 * 生日以字符串的方式传入，要求年满足格式yyyy，月满足格式mm，日满足格式dd
	 * 
	 * @param birthDate
	 *            生日字符串
	 * @param delimiterLength
	 *            生日字符串年月日之间的分隔符长度，默认长度0
	 * @param isNominal
	 *            是否是虚岁，true为虚，false为实
	 * @return 年龄
	 */
	public static String getAgeForDateString(String birthDate, int delimiterLength, boolean isNominal) {
		if (StringUtils.isBlank(birthDate)) {
			return null;
		}
		birthDate = birthDate.trim();
		if (birthDate.length() != (2 * delimiterLength + 8)) {
			return null;
		}
		String year = birthDate.substring(0, 4);
		String month = birthDate.substring(delimiterLength + 4, delimiterLength + 6);
		String day = birthDate.substring(2 * delimiterLength + 6, 2 * delimiterLength + 8);
		Integer yearInt = Integer.valueOf(year);
		Integer monthInt = Integer.valueOf(month);
		Integer dayInt = Integer.valueOf(day);

		String currentDate = date2StrDate(new Date());
		Integer currentYear = Integer.valueOf(currentDate.substring(0, 4));
		Integer currentMonth = Integer.valueOf(currentDate.substring(5, 7));
		Integer currentDay = Integer.valueOf(currentDate.substring(8, 10));
		if (yearInt > currentYear) {
			return null;
		}
		int ageTobe = currentYear - yearInt;
		if (monthInt == currentMonth) {
			if (dayInt == currentDay) {
				return ageTobe + "";
			} else if (dayInt > currentDay) {
				return isNominal ? ageTobe + "" : (ageTobe - 1) + "";
			} else {
				return isNominal ? (ageTobe + 1) + "" : ageTobe + "";
			}
		} else if (monthInt > currentMonth) {
			return isNominal ? ageTobe + "" : (ageTobe - 1) + "";
		} else {
			return isNominal ? (ageTobe + 1) + "" : ageTobe + "";
		}
	}

	/**
	 * 获得从date开始age年数的日期（yyyy-MM-dd）
	 * 
	 * @param date
	 *            （yyyy-MM-dd）
	 * @param age
	 * @return
	 */
	public static String getAgeDateFrom(String date, int age) {
		if (age <= 0) {
			return date;
		}
		String year = date.substring(0, 4);
		Integer yearInt = Integer.valueOf(year);
		int yearShouldBe = yearInt - age;
		return yearShouldBe + date.substring(4, 10);
	}

	/**
	 * 日期显示中文 例： 2008-10-20->二〇〇八年十月二十日 2008-11-21->二〇〇八年十一月二十一日
	 * 2008-01-29->二〇〇八年一月二十九日
	 * 
	 * @param strDate
	 *            yyyy-MM-dd
	 * @return 中文显示日期
	 */
	public static String convertChar2ChineseChar(String strDate) {
		if (StringUtils.isEmpty(strDate)) {
			return "";
		}
		String year = strDate.substring(0, 4);
		String month = strDate.substring(5, 7);
		String day = strDate.substring(8, 10);
		String ret = convertChar2ChineseOne(year) + "年" + convertChar2ChineseTwo(month) + "月"
				+ convertChar2ChineseTwo(day) + "日";
		return ret;
	}

	private static String convertChar2ChineseTwo(String str) {
		int num = Integer.parseInt(str);
		if (num < 10) {
			return convertChar2ChineseOne("" + num);
		}
		int tenNum = Integer.parseInt(str.substring(0, 1));// 十位
		int singleNum = Integer.parseInt(str.substring(1));// 个位
		String ten = "十";
		if (tenNum > 1) {
			ten = convertChar2ChineseOne("" + tenNum) + ten;
		}
		String single = "";
		if (singleNum > 0) {
			single = convertChar2ChineseOne("" + singleNum);
		}
		return ten + single;
	}

	private static String convertChar2ChineseOne(String str) {
		str = str.replace('0', '〇');
		str = str.replace('1', '一');
		str = str.replace('2', '二');
		str = str.replace('3', '三');
		str = str.replace('4', '四');
		str = str.replace('5', '五');
		str = str.replace('6', '六');
		str = str.replace('7', '七');
		str = str.replace('8', '八');
		str = str.replace('9', '九');
		return str;
	}

	/**
	 * Date转换到Calendar
	 * 
	 * @param date
	 *            要转换的Date
	 * @return Calendar
	 */
	public static Calendar date2Calendar(Date date) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar;
	}

	/**
	 * 设置指定的Calendar“时、分、妙”为零
	 * 
	 * @param calendar
	 *            Calendar
	 */
	public static void setTimeZero(Calendar calendar) {
		calendar.set(Calendar.HOUR_OF_DAY, 0);
		calendar.set(Calendar.MINUTE, 0);
		calendar.set(Calendar.SECOND, 0);
	}

	/**
	 * 得到当前时间的字符串yyyy-MM-dd
	 * 
	 * @return String
	 */
	public static String now2StrDate() {
		return now2Str(FORMAT_yyyy_MM_dd);
	}

	/**
	 * 得到当前时间的字符串yyyy-MM-dd HH:mm:ss
	 * 
	 * @return String
	 */
	public static String now2StrDateTime() {
		return now2Str(FORMAT_yyyy_MM_dd_HH_mm_ss);
	}

	/**
	 * 得到当前时间的字符串yyyyMMddHHmmss
	 * 
	 * @return String
	 */
	public static String nowToAllNumStrDateTime() {
		return now2Str(FORMAT_yyyyMMddHHmmss);
	}

	/**
	 * 得到当前时间的字符串
	 * 
	 * @param format
	 *            字符串格式
	 * @return String
	 */
	public static String now2Str(String format) {
		return DateFormatUtils.format(new Date(), format);
	}

	/**
	 * Date转换到字符串yyyy-MM-dd
	 *
	 * @param date
	 *            Date
	 * @return String yyyy-MM-dd
	 */
	public static String date2StrDate(Date date) {
		if (date == null) {
			return null;
		}
		return DateFormatUtils.format(date, FORMAT_yyyy_MM_dd);
	}

	/**
	 * Date转换到字符串
	 *
	 * @param date
	 * @param format
	 * @return
	 */
	public static String date2StrDate(Date date, String format) {
		return DateFormatUtils.format(date, format);
	}

	/**
	 * 日期字符串，格式转化
	 *
	 * @param date
	 * @param format
	 * @param newFormat
	 * @return
	 */
	public static String strDateConvert(String date, String format, String newFormat) {
		if (StringUtils.isBlank(date)) {
			return null;
		}
		String value = null;
		try {
			value = DateTimeUtils.date2StrDate(DateTimeUtils.str2Date(date, format), newFormat);
		} catch (Exception ex) {
		}
		return value;
	}

	/**
	 * Date转换到字符串yyyy-MM-dd HH:mm:ss
	 *
	 * @param date
	 *            Date
	 * @return String yyyy-MM-dd HH:mm:ss
	 */
	public static String date2StrDateTime(Date date) {
		return DateFormatUtils.format(date, FORMAT_yyyy_MM_dd_HH_mm_ss);
	}

	/**
	 * Calendar转换到字符串yyyy-MM-dd
	 *
	 * @param calendar
	 *            Calendar
	 * @return String yyyy-MM-dd
	 */
	public static String calendar2StrDate(Calendar calendar) {
		return date2StrDate(calendar.getTime());
	}

	/**
	 * Calendar转换到字符串yyyy-MM-dd HH:mm:ss
	 *
	 * @param calendar
	 *            Calendar
	 * @return String yyyy-MM-dd HH:mm:ss
	 */
	public static String calendar2StrDateTime(Calendar calendar) {
		return date2StrDateTime(calendar.getTime());
	}

	/**
	 * 字符串yyyy-MM-dd转换到Calendar类型
	 * 
	 * @param dateStr
	 *            yyyy-MM-dd
	 * @return Calendar
	 */
	public static Calendar strDate2Calendar(String dateStr) {
		return str2Calendar(dateStr, FORMAT_yyyy_MM_dd);
	}

	/**
	 * 字符串yyyy-MM-dd转换到Date类型
	 *
	 * @param dateStr
	 *            yyyy-MM-dd
	 * @return Date
	 */
	public static Date strDate2Date(String dateStr) {
		return str2Date(dateStr, FORMAT_yyyy_MM_dd);
	}

	/**
	 * 字符串yyyy-MM-dd HH:mm:ss转换到Calendar类型
	 * 
	 * @param dateStr
	 *            yyyy-MM-dd HH:mm:ss
	 * @return Calendar
	 */
	public static Calendar strDateTime2Calendar(String dateStr) {
		return str2Calendar(dateStr, FORMAT_yyyy_MM_dd_HH_mm_ss);
	}

	/**
	 * 字符串yyyy-MM-dd HH:mm:ss转换到Date类型
	 * 
	 * @param dateStr
	 *            yyyy-MM-dd HH:mm:ss
	 * @return Date
	 */
	public static Date strDateTime2Date(String dateStr) {
		return str2Date(dateStr, FORMAT_yyyy_MM_dd_HH_mm_ss);
	}

	/**
	 * 字符串转换到Date类型
	 * 
	 * @param dateStr
	 *            需要转换的字符串
	 * @param format
	 *            转换格式
	 * @return Date
	 */
	public static Date str2Date(String dateStr, String format) {
		SimpleDateFormat dateFormat = new SimpleDateFormat(format);
		dateFormat.setLenient(false);
		Date date = dateFormat.parse(dateStr, new ParsePosition(0));
		return date;
	}

	/**
	 * 字符串转换到Date类型，格式为：yyyyMMdd，返回null
	 * @param dateStr
	 *            需要转换的字符串
	 * @return Date
	 */
	public static Date str2DateException2null(String dateStr) {
		return str2DateException2null(dateStr, FORMAT_yyyy_MM_dd);
	}
	/**
	 * 字符串转换到Date类型，不符合格式，返回null
	 * @param dateStr
	 *            需要转换的字符串
	 * @param format
	 *            转换格式
	 * @return Date
	 */
	public static Date str2DateException2null(String dateStr, String format) {
		if (StringUtils.isBlank(dateStr) || StringUtils.isBlank(format)) {
			return null;
		}
		if (dateStr.length() != format.length()) {
			return null;
		}
		try {
			return str2Date(dateStr, format);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
		return null;
	}

	/**
	 * 字符串转换到Calendar类型
	 * 
	 * @param dateStr
	 *            需要转换的字符串
	 * @param format
	 *            转换格式
	 * @return Calendar
	 */
	public static Calendar str2Calendar(String dateStr, String format) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(str2Date(dateStr, format));
		return calendar;
	}

	/**
	 * 得到当前日期的Calendar类型
	 * 
	 * @return Calendar;
	 */
	public static Calendar now2Calendar() {
		return Calendar.getInstance();
	}

	/**
	 * 得到当前日期的下一天
	 * 
	 * @return Calendar;
	 */
	public static String getNextDay(String dateTime) {
		Calendar now = Calendar.getInstance();
		SimpleDateFormat simpledate = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = simpledate.parse(dateTime);
		} catch (ParseException ex) {
			System.out.println("日期格式不符合要求：" + ex.getMessage());
			return null;
		}
		now.setTime(date);
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH);
		int day = now.get(Calendar.DAY_OF_MONTH) + 1;
		now.set(year, month, day);
		String time = simpledate.format(now.getTime());
		return time;
	}

	public static String getNextDay(String dateTime, int days) {
		Calendar now = Calendar.getInstance();
		SimpleDateFormat simpledate = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = simpledate.parse(dateTime);
		} catch (ParseException ex) {
			System.out.println("日期格式不符合要求：" + ex.getMessage());
			return null;
		}
		now.setTime(date);
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH);
		int day = now.get(Calendar.DAY_OF_MONTH) + days;
		now.set(year, month, day);
		String time = simpledate.format(now.getTime());
		return time;
	}

	/**
	 * 计算指定日期的上一天
	 * 
	 * @param dateTime
	 * @日期，格式为：yyyy-MM-dd
	 * @return
	 */
	public static String getBeforeDay(String dateTime) {
		Calendar now = Calendar.getInstance();
		SimpleDateFormat simpledate = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = simpledate.parse(dateTime);
		} catch (ParseException ex) {
			System.out.println("日期格式不符合要求：" + ex.getMessage());
			return null;
		}
		now.setTime(date);
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH);
		int day = now.get(Calendar.DAY_OF_MONTH) - 1;
		now.set(year, month, day);
		String time = simpledate.format(now.getTime());
		return time;
	}

	public static String getBeforeDay(String dateTime, int days) {
		Calendar now = Calendar.getInstance();
		SimpleDateFormat simpledate = new SimpleDateFormat("yyyy-MM-dd");
		Date date = null;
		try {
			date = simpledate.parse(dateTime);
		} catch (ParseException ex) {
			System.out.println("日期格式不符合要求：" + ex.getMessage());
			return null;
		}
		now.setTime(date);
		int year = now.get(Calendar.YEAR);
		int month = now.get(Calendar.MONTH);
		int day = now.get(Calendar.DAY_OF_MONTH) - days;
		now.set(year, month, day);
		String time = simpledate.format(now.getTime());
		return time;
	}

	public static String getBeforeMonth(Date date, int months) {
		if (date == null) {
			return null;
		}
		Calendar now = Calendar.getInstance();
		SimpleDateFormat simpledate = new SimpleDateFormat("yyyy-MM-dd");
		now.setTime(date);
		now.add(Calendar.MONTH, -months);
		String time = simpledate.format(now.getTime());
		return time;
	}

	public static String getStartTime(String dateStr) {
		if (StringUtils.isBlank(dateStr) || dateStr.trim().length() != 10) {
			return dateStr;
		}
		return dateStr.trim() + " 00:00:00";
	}

	public static String getEndTime(String dateStr) {
		if (StringUtils.isBlank(dateStr) || dateStr.trim().length() != 10) {
			return dateStr;
		}
		return dateStr.trim() + " 23:59:59";
	}

	/**
	 * 当前月的起始时间yyyy-MM-dd hh:mm:ss
	 * 
	 * @return
	 */
	public static String getCurrentMonthStartTime() {
		return getCurrentMonthFirstDate() + " 00:00:00";
	}

	/**
	 * 当前月的结束时间yyyy-MM-dd hh:mm:ss
	 * 
	 * @return
	 */
	public static String getCurrentMonthEndTime() {
		String nextMonthDate = getBeforeMonth(new Date(), -1);
		nextMonthDate = nextMonthDate.substring(0, 7) + "-01";
		return getBeforeDay(nextMonthDate) + " 23:59:59";
	}

	/**
	 * 当前月的起始天yyyy-MM
	 * 
	 * @return
	 */
	public static String getCurrentMonthFirstDate() {
		return now2Str("yyyy-MM") + "-01";
	}
	
	public static String date2AgeStr(Date birthDay) {
		if (birthDay == null) {
			return null;
		}

		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		if (cal.before(birthDay)) {
			throw new IllegalArgumentException("The birthDay is before Now.It's unbelievable!");
		}

		int yearNow = cal.get(Calendar.YEAR);
		int monthNow = cal.get(Calendar.MONTH);
		int dayOfMonthNow = cal.get(Calendar.DAY_OF_MONTH);

		cal.setTime(birthDay);
		int yearBirth = cal.get(Calendar.YEAR);
		int monthBirth = cal.get(Calendar.MONTH);
		int dayOfMonthBirth = cal.get(Calendar.DAY_OF_MONTH);

		int age = yearNow - yearBirth;
		if (monthNow <= monthBirth) {
			if (monthNow == monthBirth) {
				if (dayOfMonthNow < dayOfMonthBirth) {
					age--;
				}
			} else {
				age--;
			}
		}

		StringBuffer ageBuffer = new StringBuffer();
		switch (age) {
		case 0:
		case 1:
			//月差
			int month = (yearNow - yearBirth) * 12 + (monthNow - monthBirth);
			if (dayOfMonthNow < dayOfMonthBirth) {
				month--;
			}
			ageBuffer.append(month);
			ageBuffer.append("个月");
			break;
		default:
			ageBuffer.append(age);
			ageBuffer.append("岁");
			break;
		}
		return ageBuffer.toString();
	}
	
	/**
	 * 根据时间获取剩余天数
	 * 
	 * @param deadDate
	 * @return
	 */
	public static int getRemainingDay(Date deadDate) {
		int remainDay = -31; // 最大过期时限
		if (deadDate==null) {
			return remainDay;
		}

		long milliseconds = deadDate.getTime() - (new Date()).getTime();
		double day = milliseconds * 1.0 / (24 * 60 * 60 * 1000);
		if (day >= 0) {
			day = Math.ceil(day);
		} else {
			day = -Math.ceil(Math.abs(day));
		}
		remainDay = Double.valueOf(day).intValue();

		return remainDay;
	}

	public static int getWeek(Date date) {
		if (date == null) {
			return -1;
		}
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		int week = calendar.get(Calendar.DAY_OF_WEEK);
		return week;
	}

    public static String getLastSunday() {
        final int offset = getWeek(new Date());
        return getBeforeDay(now2StrDate(), offset - 1);
    }
	public static String getWeekChinese(Date date) {
		int week = getWeek(date);
		String weekChinese = null;
		switch(week) {
			case Calendar.SUNDAY :
				weekChinese = "日";
				break;
			case Calendar.MONDAY:
				weekChinese = "一";
				break;
			case Calendar.TUESDAY:
				weekChinese = "二";
				break;
			case Calendar.WEDNESDAY:
				weekChinese = "三";
				break;
			case Calendar.THURSDAY:
				weekChinese = "四";
				break;
			case Calendar.FRIDAY:
				weekChinese = "五";
				break;
			case Calendar.SATURDAY:
				weekChinese = "六";
				break;
				default:
		}
		return weekChinese;
	}

	public static String now() {
		final int offset = getWeek(new Date());
		return getBeforeDay(now2StrDate(), 0);
	}

}
