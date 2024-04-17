using System;

namespace App1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            CalculateDifference();
            CheckEvenNumber();
            CompareNumbers();
            LoginState();
            CheckPositiveEven();
            FindBiggestNumber();
            CalculateExamResults();
            CalculateBMI();
            CheckDrivingLicenseEligibility();
            FindLargestNumber();
            CalculateGrade();
            CalculateServiceTime();
            FindSeason();
            PrintNumberRange();
            FindMultiplesOfThree();
            CalculateSum();
            PrintSquareOfOddNumbers();
            PrintLongCarNames();
        }

        static void CalculateDifference()
        {
            int x = 5, y = 15, z = 22;

            Console.Write("First Number: ");
            int num1 = int.Parse(Console.ReadLine());

            Console.Write("Second Number: ");
            int num2 = int.Parse(Console.ReadLine());

            int diff = (num1 * num2) - (x + y + z);
            Console.WriteLine("Difference is: " + diff);
        }

        static void CheckEvenNumber()
        {
            Console.Write("Number: ");
            int num = int.Parse(Console.ReadLine());
            string _result = (num % 2) == 0 ? "YES" : "NO";
            Console.WriteLine($"Is it even? : {_result}");
        }

        static void CompareNumbers()
        {
            Console.Write("First Num: ");
            int num1 = int.Parse(Console.ReadLine());

            Console.Write("Second Num: ");
            int num2 = int.Parse(Console.ReadLine());
            var result = (num1 > num2) ? "num1>num2" : "num2>num1";
            Console.WriteLine(result);
        }

        static void LoginState()
        {
            string _email = "fakemail@mail.com";
            string _password = "123456";

            Console.Write("email: ");
            string email = Console.ReadLine();

            Console.Write("password: ");
            string password = Console.ReadLine();

            var result = (_email == email) && (_password == password);
            Console.WriteLine("Login State: " + result);
        }

        static void CheckPositiveEven()
        {
            Console.Write("Write a number: ");
            int number = int.Parse(Console.ReadLine());

            var result = (number > 0) && (number % 2 == 0);
            Console.WriteLine("Is Input a (positive && even) number: " + result);
        }

        static void FindBiggestNumber()
        {
            Console.Write("Num 1:");
            int a = int.Parse(Console.ReadLine());

            Console.Write("Num 2:");
            int b = int.Parse(Console.ReadLine());

            Console.Write("Num 3:");
            int c = int.Parse(Console.ReadLine());

            var result = ((a > b) && (a > c))
                            ? "a Is Biggest" : ((b > a) && (b > c))
                            ? "b Is Biggest" : ((c > a) && (c > b))
                            ? "c Is Biggest" : "Input Error";

            Console.WriteLine(result);
        }

        static void CalculateExamResults()
        {
            Console.Write("1st midterm: ");
            int midterm1 = int.Parse(Console.ReadLine());

            Console.Write("2nd midterm: ");
            int midterm2 = int.Parse(Console.ReadLine());

            Console.Write("final: ");
            int finalExam = int.Parse(Console.ReadLine());

            var average = ((midterm1 + midterm2) / 2) * 0.6 + (finalExam * 0.4);
            var passed = (average >= 50);

            Console.WriteLine("average: " + average);
            Console.WriteLine(passed ? "passed" : "failed");
        }

        static void CalculateBMI()
        {
            Console.Write("name: ");
            string name = Console.ReadLine();

            Console.Write("weight: ");
            float weight = float.Parse(Console.ReadLine());

            Console.Write("height (in cm): ");
            float heightCm = float.Parse(Console.ReadLine());

            float heightM = heightCm / 100;

            float index = weight / (heightM * heightM);

            var underweight = (index >= 0) && (index <= 18.4);
            var normal = (index > 18.4) && (index <= 24.9);
            var overweight = (index > 24.9) && (index <= 29.9);
            var obese = (index > 29.9) && (index <= 34.9);

            Console.WriteLine($"{name} your BMI: {index} and your weight status: {(underweight ? "Underweight" : (normal ? "Normal" : (overweight ? "Overweight" : "Obese")))}");
        }

        static void CheckDrivingLicenseEligibility()
        {
            Console.Write("name: ");
            string name = Console.ReadLine();

            Console.Write("age: ");
            int age = int.Parse(Console.ReadLine());

            Console.Write("education: ");
            string education = Console.ReadLine();

            if (age >= 18)
            {
                if (education == "high school" || education == "university")
                {
                    Console.WriteLine($"{name} you can get a driving license.");
                }
                else
                {
                    Console.WriteLine($"{name} your education status is insufficient to get a driving license.");
                }
            }
            else
            {
                Console.WriteLine($"{name} you must be at least 18 years old to get a driving license.");
            }
        }

        static void FindLargestNumber()
        {
            Console.Write("a: ");
            int a = int.Parse(Console.ReadLine());

            Console.Write("b: ");
            int b = int.Parse(Console.ReadLine());

            Console.Write("c: ");
            int c = int.Parse(Console.ReadLine());

            if (a > b && a > c)
                Console.WriteLine("a is the largest");
            else if (b > a && b > c)
                Console.WriteLine("b is the largest");
            else if (c > a && c > b)
                Console.WriteLine("c is the largest");
            else
                Console.WriteLine("incorrect information");
        }

        static void CalculateGrade()
        {
            Console.Write("1st exam: ");
            int exam1 = int.Parse(Console.ReadLine());
            Console.Write("2nd exam: ");
            int exam2 = int.Parse(Console.ReadLine());
            Console.Write("oral exam: ");
            int oral = int.Parse(Console.ReadLine());

            var average = (exam1 + exam2 + oral) / 3;
            int grade = -1;

            if (average >= 0 && average < 25)
                grade = 0;
            else if (average >= 25 && average < 45)
                grade = 1;
            else if (average >= 45 && average < 55)
                grade = 2;
            else if (average >= 55 && average < 70)
                grade = 3;
            else if (average >= 70 && average < 85)
                grade = 4;
            else if (average >= 85 && average <= 100)
                grade = 5;
            else
                Console.WriteLine("incorrect grade");

            Console.WriteLine($"average grade: {average} and your grade: {grade}");
        }

        static void CalculateServiceTime()
        {
            Console.Write("year: ");
            int year = int.Parse(Console.ReadLine());

            Console.Write("month: ");
            int month = int.Parse(Console.ReadLine());

            Console.Write("day: ");
            int day = int.Parse(Console.ReadLine());

            int totalDays = (DateTime.Now - new DateTime(year, month, day)).Days;

            if (totalDays <= 365)
                Console.WriteLine("1st service");
            else if (totalDays > 365 && totalDays <= 365 * 2)
                Console.WriteLine("2nd service");
            else if (totalDays > 365 * 2 && totalDays <= 365 * 3)
                Console.WriteLine("3rd service");
            else
                Console.WriteLine("incorrect information");
        }

        static void FindSeason()
        {

            int month = 6;
            switch (month)
            {
                case 12:
                case 1:
                case 2:
                    Console.WriteLine("winter season");
                    break;
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("spring season");
                    break;
                case 6:
                case 7:
                case 8:
                    Console.WriteLine("summer season");
                    break;
                case 9:
                case 10:
                case 11:
                    Console.WriteLine("autumn season");
                    break;
                default:
                    Console.WriteLine("incorrect information");
                    break;
            }

        }

        static void PrintNumberRange()
        {
            Console.Write("start: ");
            int start = int.Parse(Console.ReadLine());

            Console.Write("end: ");
            int end = int.Parse(Console.ReadLine());

            Console.Write("increment: ");
            int increment = int.Parse(Console.ReadLine());

            int counter = 0;
            int total = 0;

            for (int i = start; i <= end; i += increment)
            {
                counter++;
                total += i;
                Console.WriteLine($"{counter}. number: {i}");
            }

            Console.WriteLine("total: " + total);
        }

        static void FindMultiplesOfThree()
        {
            int[] numbers = { 1, 3, 5, 6, 7, 14, 33, 50, 79 };

            Console.WriteLine("Numbers that are multiples of 3:");

            foreach (var number in numbers)
            {
                if (number % 3 == 0)
                    Console.WriteLine(number);
            }
        }

        static void CalculateSum()
        {
            int[] numbers = { 1, 3, 5, 7, 9, 15, 25, 33, 56 };

            int sum = 0;
            long product = 1;

            foreach (var number in numbers)
            {
                sum += number;
                product *= number;
            }

            Console.WriteLine("sum: " + sum);
            Console.WriteLine("product: " + product);
        }

        static void PrintSquareOfOddNumbers()
        {
            int[] numbers = { 1, 3, 5, 6, 7, 14, 33, 50, 79 };

            Console.WriteLine("Square of odd numbers:");

            foreach (var number in numbers)
            {
                if (number % 2 == 1)
                    Console.WriteLine(number * number);
            }
        }

        static void PrintLongCarNames()
        {
            string[] cars = { "Opel", "Mazda", "Toyota", "Bmw", "Mercedes" };

            Console.WriteLine("Car names with at least 4 characters:");

            foreach (var car in cars)
            {
                if (car.Length >= 4)
                    Console.WriteLine(car);
            }
        }

    }
}
