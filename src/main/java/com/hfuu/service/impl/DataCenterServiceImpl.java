package com.hfuu.service.impl;

import com.hfuu.dao.read.custom.TbUserReadDao;
import com.hfuu.enums.system.ExceptionEnum;
import com.hfuu.exceptions.ServiceExceptionSpec;
import com.hfuu.model.po.TbUser;
import com.hfuu.model.po.TbUserExample;
import com.hfuu.service.IDataCenterService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2018/3/9.
 */
@Service
public class DataCenterServiceImpl implements IDataCenterService {
    private Logger logger = Logger.getLogger(getClass());

    @Autowired
    private TbUserReadDao tbUserReadDao;

    @Override
    public List<TbUser> testLogger() throws ServiceExceptionSpec {

        TbUserExample example = new TbUserExample();
        TbUserExample.Criteria criteria = example.createCriteria();
        criteria.andUsernameEqualTo("1");
        List<TbUser> rList = tbUserReadDao.selectByExample(example);
        return rList;
    }
}
