package com.iw.wuge.agentReport.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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

	@RequestMapping(value = "/login.do")
	public String index() {
//		AgentInfo agentInfo = responseLoginAgentInfo(request);
//		responseMenu(agentInfo, request);
		return "/login";
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
