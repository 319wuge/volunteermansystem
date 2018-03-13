package com.hfuu.controller;

import com.hfuu.service.IDataCenterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

//import javax.servlet.http.HttpServletRequest;

/**
 * Created by Administrator
 */
@Controller
public class HomeController  {
//	@Autowired
//	private IAgentService agentService;
//	@Autowired
//	private BusinessExceptionFactory exceptionFactory;
	@Autowired
	private IDataCenterService service;

	@RequestMapping(value = "/login.do")
	@ResponseBody
	public String index() {
		return "";
	}

//	@RequestMapping(value = "/error.do")
//	public String error(HttpServletRequest request, String code, Model model) {
//		responseLoginAgentInfo(request);
//		BusinessException bex = exceptionFactory.createBusinessException(code);
//		model.addAttribute("message", bex);
//		return "/error";
//	}
//
//	@RequestMapping(value = "/isLive.action")
//	public void isLive(HttpServletRequest req, HttpServletResponse resp) {
//		try {
//			resp.getOutputStream().write("ok".getBytes());
//		} catch(IOException e) {
//			e.printStackTrace();
//		}
//	}
}
