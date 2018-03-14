package com.hfuu.service;

import com.hfuu.exceptions.ServiceExceptionSpec;
import com.hfuu.model.po.TbUser;

import java.util.List;

/**
 * Created by Administrator
 */
public interface IDataCenterService {

    List<TbUser> testLogger() throws ServiceExceptionSpec;
}
