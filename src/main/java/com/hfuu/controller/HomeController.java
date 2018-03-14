package com.hfuu.controller;

import com.hfuu.enums.system.ExceptionEnum;
import com.hfuu.exceptions.ServiceExceptionSpec;
import com.hfuu.model.ResponseEntity;
import com.hfuu.model.ResponseEntityBuilder;
import com.hfuu.model.po.TbUser;
import com.hfuu.service.IDataCenterService;
import com.sun.xml.internal.ws.client.sei.ResponseBuilder;
import org.apache.poi.ss.formula.functions.T;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

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
	public ResponseEntity<List<TbUser>> index() throws Exception {
		return ResponseEntityBuilder.success(service.testLogger());
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
