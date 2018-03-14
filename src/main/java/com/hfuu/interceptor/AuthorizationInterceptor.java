package com.hfuu.interceptor;

import com.hfuu.enums.system.ExceptionEnum;
import com.hfuu.exceptions.ServiceExceptionSpec;
import com.hfuu.model.ResponseEntity;
import com.hfuu.model.ResponseEntityBuilder;
import com.hfuu.utils.JsonUtils;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.MDC;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Slf4j
public class AuthorizationInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest,
                             HttpServletResponse httpServletResponse, Object o) throws Exception {
        MDC.put("X-Request-Id", UUID.randomUUID().toString());

        String sessionId = httpServletRequest.getParameter("sessionId");
        if (StringUtils.isEmpty(sessionId)) {
            writeUnLoginException(httpServletResponse);
            return false;
        }

//        String userInfo = this.redisClient.get(RedisContants.MANAGE_SESSION_PREFIX + sessionId);
//        if (StringUtils.isEmpty(userInfo)) {
//            writeUnLoginException(httpServletResponse);
//            return false;
//        }
//        ManSysLoginResponse loginUser = JsonUtils.deserialize(userInfo, ManSysLoginResponse.class);
//        LoginSysUserInfoHolder.setLoginSysUserId(loginUser.getId());
//        log.info("user: {}|operation: {}", JsonUtils.serialize(loginUser),
//            httpServletRequest.getRequestURI());
        return true;
    }


    private void writeUnLoginException(HttpServletResponse response) {
        try {
            log.info("need to login...");
            response.setStatus(200);
            ServiceExceptionSpec exception = new ServiceExceptionSpec(
                ExceptionEnum.SESSION_UN_LOGIN);
            ResponseEntity entity = (new ResponseEntityBuilder())
                .code(exception.getErrorCode()).message(exception.getMessage())
                .data(null).build();
            response.getWriter().print(JsonUtils.serialize(entity));
            response.getWriter().close();
        } catch (Exception e) {
            log.error("write un_login Exception error", e);
        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest,
                           HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView)
        throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest,
                                HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
        MDC.remove("X-Request-Id");
    }
}
