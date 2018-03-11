package com.hfuu.service.impl;

import com.hfuu.service.IDataCenterService;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Service;

/**
 * Created by Administrator on 2018/3/9.
 */
@Service
public class DataCenterServiceImpl implements IDataCenterService {
    private Logger logger = Logger.getLogger(getClass());
    public void testLogger() {
        logger.info("sssedksk");
        System.out.println("wugeswgwsw");
    }
}
