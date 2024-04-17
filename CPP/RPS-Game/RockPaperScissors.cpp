#include <iostream>
#include <ctime>
#include <cctype>

using namespace std;

char getUserChoice()
{
    char player;
    do
    {
        cout << "Choose one of the following\n\n";
        cout << "'r' for rock\n";
        cout << "'p' for paper\n";
        cout << "'s' for scissors\n";
        cin >> player;
        player = tolower(player);
    } while (player != 'r' && player != 'p' && player != 's');

    return player;
}

char getComputerChoice()
{
    srand(time(0));
    int num = rand() % 3 + 1;

    switch (num)
    {
    case 1:
        return 'r';
    case 2:
        return 'p';
    case 3:
        return 's';
    }
    return 0;
}

void showChoice(char choice)
{
    switch (choice)
    {
    case 'r':
        cout << "Rock\n";
        break;
    case 'p':
        cout << "Paper\n";
        break;
    case 's':
        cout << "Scissors\n";
        break;
    }
}

void chooseWinner(char player, char computer)
{
    if (player == computer)
    {
        cout << "Tie\n";
        return;
    }

    switch (player)
    {
    case 'r':
        if (computer == 'p')
            cout << "You lose\n";
        else
            cout << "You win\n";
        break;
    case 'p':
        if (computer == 'r')
            cout << "You win\n";
        else
            cout << "You lose\n";
        break;
    case 's':
        if (computer == 'r')
            cout << "You lose\n";
        else
            cout << "You win\n";
        break;
    }
}

int main()
{
    char player = getUserChoice();
    cout << "Your choice: ";
    showChoice(player);

    char computer = getComputerChoice();
    cout << "Computer's choice: ";
    showChoice(computer);

    chooseWinner(player, computer);

    cout << "\nPress any key to exit...";
    cin.ignore();
    cin.get();

    return 0;
}