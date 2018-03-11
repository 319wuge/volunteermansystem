import java.math.BigDecimal;
import java.util.Scanner;

/**
 * Created by Administrator on 2017/8/30 0030.
 */
public class Main {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        while (in.hasNext()) {
            BigDecimal r = in.nextBigDecimal();
            int n = in.nextInt();

            System.out.println(r.pow(n));
        }
    }
}
