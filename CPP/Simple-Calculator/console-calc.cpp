#include <iostream>
#include <sstream>
#include <string>

using namespace std;

int main()
{
    char operation;
    double num1, num2;

    cout << "Enter the operation (+, -, *, /): ";
    cin >> operation;

    if (operation != '+' && operation != '-' && operation != '*' && operation != '/')
    {
        cout << "Invalid operation" << endl;
        return 1;
    }

    cout << "Enter the first number: ";
    cin >> num1;

    cout << "Enter the second number: ";
    cin >> num2;

    cout << "Result: ";
    switch (operation)
    {
    case '+':
        cout << num1 + num2;
        break;
    case '-':
        cout << num1 - num2;
        break;
    case '*':
        cout << num1 * num2;
        break;
    case '/':
        if (num2 == 0)
            cout << "Division by zero error.";
        else
            cout << num1 / num2;
        break;
    }
    cout << endl;

    cout << "\nPress any key to exit...";
    cin.ignore();
    cin.get();

    return 0;
}
