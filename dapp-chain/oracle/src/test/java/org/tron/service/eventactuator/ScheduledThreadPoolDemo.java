package org.tron.service.eventactuator;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;


public class ScheduledThreadPoolDemo {

  static class WorkThread implements Runnable {

    private String command;

    public WorkThread(String command) {
      this.command = command;
    }

    @Override
    public void run() {
      System.out.println("Thread-" + Thread.currentThread().getId() + " start. Command=" + command);
      //processCommand();
      System.out.println("Thread-" + Thread.currentThread().getId() + " end.");
    }

    private void processCommand() {
      try {
        Thread.sleep(10000);
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }

  public static void main(String[] args) {
    ScheduledExecutorService syncExecutor = Executors
        .newScheduledThreadPool(5);
    for (int i = 0; i < 10; i++) {

      Runnable work = new WorkThread("" + i);
      syncExecutor.scheduleWithFixedDelay(work, 2000,
          5000, TimeUnit.MILLISECONDS);
    }
    try {
      Thread.sleep(100000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("Finish all threads.");
  }
}