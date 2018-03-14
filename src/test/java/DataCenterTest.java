
import com.hfuu.service.IDataCenterService;
import com.hfuu.service.impl.DataCenterServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by Administrator on 2017/7/6 0006.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:spring/spring-context.xml", "classpath:spring/spring-mybatis.xml"})
public class DataCenterTest {
    @Autowired
    private IDataCenterService service;

//    @Test
//    public void testDataCenter(){
//        service.testLogger();
//    }

    @Test
    public void testClassDefFound(){
        System.out.println("==================================");
        String path2 = Thread.currentThread().getContextClassLoader().getResource("/").getPath();
        System.out.println("path2 = " + path2);
    }
}
