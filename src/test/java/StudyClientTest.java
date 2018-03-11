import com.iw.wuge.agentReport.business.service.proxy.StudySOAProxy;
import com.wuge.api.model.vo.LoggerResult;
import com.wuge.study.client.sale.ContractClientService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by Administrator on 2017/8/11 0011.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:/spring/spring-context.xml")
public class StudyClientTest {

//    @Autowired
//    private ContractClientService contractClientService;

    @Autowired
    private StudySOAProxy studySOAProxy;
    @Test
    public void testStudySOA() {
        String param = "ssss1";
        LoggerResult result = studySOAProxy.testSoa(param);
        System.out.println(result.getTest());
    }
}
