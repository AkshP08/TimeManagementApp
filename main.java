// Java program to demonstrate
//schedule method calls of Timer class

import java.util.Timer;
import java.util.TimerTask;

public class main{
    class Helper extends TimerTask {
	public static int i = 0;
	public void run() {
		System.out.println("Timer ran " + ++i);
	}

    class test{
	public static void main(String[] args) {
		
		Timer timer = new Timer();
		TimerTask task = new Helper();
		
		timer.schedule(task, 2000, 5000);
		
	}
	}
}
}

// tinyCodersDen