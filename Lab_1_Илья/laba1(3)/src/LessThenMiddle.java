import java.util.InputMismatchException;
import java.util.Scanner;

public class LessThenMiddle {
    public static void main(String[] args) {
        int n = 0;
        //Введення кількість рядків
        while (true) {
            System.out.println("Введіть кількість рядків:");
            Scanner sc1 = new Scanner(System.in);
            try {
                n = sc1.nextInt();
                break;
            } catch (InputMismatchException e) {
                System.out.println("Це не число");
            }
        }
    String[] str = new String[n];
    Scanner sc2 = new Scanner (System.in);
        //Ініціалізація масива "str"
    for (int i = 0; i < str.length; i++) {
        System.out.println("Введіть рядок №" + (i + 1));
        str[i] = sc2.nextLine();
    }
    float average = 0f;
        //Рахуємо спільну суму довжин рядків
        for (String item : str) {
            average += (float) item.length();
        }
        //Рахуємо середнє арифметичне суми довжин цих рядків
        average /= str.length;

        System.out.println("Середня довжина рядка = (" + average + ")");
        //Виводимо результат (виводить всі рядкі, котрі меньші за середню довжину
        for (int i = 0; i < n; i++) {
            if (str[i].length() < average) {
                System.out.println("Рядок меньший за середню довжину: ");
                System.out.println(str[i] + "довжина рядка = " + str [i].length());

            }
        }
    }
}