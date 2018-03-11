
import com.iw.wuge.agentReport.business.service.service.IDataCenterService;
import com.iw.wuge.agentReport.business.service.service.impl.DataCenterServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by Administrator on 2017/7/6 0006.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-context.xml", "classpath:spring/spring-mybatis.xml"})
public class DataCenterTest {
    @Test
    public void testDataCenter(){
        IDataCenterService dataCenterService = new DataCenterServiceImpl();
        dataCenterService.testLogger();
    }

    @Test
    public void testClassDefFound(){
        System.out.println("==================================");
        String path2 = Thread.currentThread().getContextClassLoader().getResource("/").getPath();
        System.out.println("path2 = " + path2);
    }
}
