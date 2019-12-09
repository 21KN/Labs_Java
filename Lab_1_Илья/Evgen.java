class Lab_1_1 {
    public static void main(String[] args) {

        int x = 0;
        String main;
        String[] arr = new String[999];
        System.out.println("Пожалуйста, введите несколько строк. Когда нужно будет узнать результат - введите «Результат».");

        Scanner scan = new Scanner(System.in);
        do {
            main = scan.nextLine();
            arr[x++] = main;

        } while (!(main.equals("Результат")));
        arr[--x] = null;

        String pusto = "";
        int y = x;
        int[] dlina = new int[y];
        x = 0;

        do {
            dlina[x] = -(pusto.compareTo(arr[x]));
            ++x;
        } while (arr[x] != null);

        for (int i = dlina.length - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (dlina[j] > dlina[j+1]) {
                    int k = dlina[j];
                    dlina[j] = dlina[j+1];
                    dlina[j+1] = k;

                    String l = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = l;
                }
            }
        }

        System.out.println("Самая короткая строка: " + arr[0]);
        System.out.println("Её длинна: " + dlina[0]);

    }
}

import java.util.Scanner;


class Lab_1_2 {
    public static void main(String[] args) {

        int x = 0;
        String main;
        String[] arr = new String[999];
        System.out.println("Пожалуйста, введите несколько строк. Когда нужно будет узнать результат - введите «Результат».");

        Scanner scan = new Scanner(System.in);
        do {
            main = scan.nextLine();
            arr[x++] = main;

        } while (!(main.equals("Результат")));
        arr[--x] = null;

        String pusto = "";
        int y = x;
        int[] dlina = new int[y];
        x = 0;

        do {
            dlina[x] = -(pusto.compareTo(arr[x]));
            ++x;
        } while (arr[x] != null);

        for (int i = dlina.length - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (dlina[j] > dlina[j+1]) {
                    int k = dlina[j];
                    dlina[j] = dlina[j+1];
                    dlina[j+1] = k;

                    String l = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = l;
                }
            }
        }
        x = 0;
        do {
            System.out.println(arr[x]);
            ++x;
        } while (arr[x] != null);

    }
}

import java.util.Scanner;


class Lab_1_3 {
    public static void main(String[] args) {

        int x = 0;
        String main;
        String[] arr = new String[999];
        System.out.println("Пожалуйста, введите несколько строк. Когда нужно будет узнать результат - введите «Результат».");

        Scanner scan = new Scanner(System.in);
        do {
            main = scan.nextLine();
            arr[x++] = main;

        } while (!(main.equals("Результат")));
        arr[--x] = null;

        String pusto = "";
        int y = x;
        int[] dlina = new int[y];
        x = 0;

        do {
            dlina[x] = -(pusto.compareTo(arr[x]));
            ++x;
        } while (arr[x] != null);

        for (int i = dlina.length - 1; i > 0; i--) {
            for (int j = 0; j < i; j++) {
                if (dlina[j] > dlina[j+1]) {
                    int k = dlina[j];
                    dlina[j] = dlina[j+1];
                    dlina[j+1] = k;

                    String l = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = l;
                }
            }
        }
        int sum = 0;
        for (int q = 0; q < y; q++) {
            sum = sum + dlina[q];
        }
        int srdlina = sum/y;
        System.out.println("Средняя длина: " + srdlina);
        for (int q = 0; q < y; q++) {
            if (dlina[q] < srdlina) {
                System.out.println("Строка: «" + arr[q] + "». Длина строки: " + dlina[q]);
            }
        }
    }
}