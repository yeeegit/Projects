using System;

namespace App2
{

	class Comment
	{
		public int CommentId { get; set; }
		public string Text { get; set; }
	}

	class Product
	{
		public Product()
		{
			this.ProductId = (new Random()).Next(11111, 99999);
			this.Comments = new Comment[3];
		}

		public Product(int productId) : this()
		{
			this.ProductId = productId;
		}

		public Product(int productId, string name, double price, bool isApproved) : this(productId)
		{
			this.Name = name;
			this.Price = price;
			this.IsApproved = isApproved;
		}


		public int ProductId { get; set; }
		public string Name { get; set; }
		public double Price { get; set; }
		public bool IsApproved { get; set; }
		public Comment[] Comments { get; set; }
	}
	class Car
	{
		public string Brand { get; set; }
		public string Model { get; set; }
		public string Color { get; set; }
		public bool Automatic { get; set; }

		public void Start()
		{
			Console.WriteLine($"{this.Brand} {this.Model} started.");
		}

		public void Stop()
		{
			Console.WriteLine($"{this.Brand} {this.Model} stopped.");
		}

		public void SlowDown()
		{
			Console.WriteLine($"{this.Brand} {this.Model} is slowing down.");
		}

		public void Accelerate()
		{
			Console.WriteLine($"{this.Brand} {this.Model} is accelerating.");
		}

		public void Menu()
		{
			string command = "";

			do
			{
				Console.WriteLine("1-Start 2-Accelerate 3-Slow Down 4-Stop Exit: E");
				Console.Write("Your Choice: ");
				command = Console.ReadLine();

				switch (command)
				{
					case "1":
						this.Start();
						break;
					case "2":
						this.Accelerate();
						break;
					case "3":
						this.SlowDown();
						break;
					case "4":
						this.Stop();
						break;
					default:
						Console.WriteLine("Exiting the application.");
						break;
				}

			} while (command.ToUpper() != "E");

		}
	}
	class Program
	{
		static void Main(string[] args)

		{
			StoreProducts();
			CheckPrimeNumber();
			NumberGuessingGame();
			GetProductInfo();
			CarMethodTest();
			Test123();
		}

		static void StoreProducts()
		{
			Console.Write("quantity: ");
			int quantity = int.Parse(Console.ReadLine());

			string[] products = new string[quantity];

			int i = 0;

			do
			{
				Console.Write($"{i + 1}. product name: ");
				products[i] = Console.ReadLine();
				i++;
			} while (quantity != i);

			Console.WriteLine("listing products...");

			for (int a = 0; a < products.Length; a++)
			{
				Console.WriteLine($"{a + 1}. product name: {products[a]}");
			}
		}

		static void CheckPrimeNumber()
		{
			bool isPrime = true;

			Console.Write("number: ");
			int number = int.Parse(Console.ReadLine());

			if (number == 1)
				isPrime = false;

			for (int i = 2; i < number; i++)
			{
				if (number % i == 0)
				{
					isPrime = false;
					break;
				}
			}

			if (isPrime)
				Console.WriteLine("the number is prime.");
			else
				Console.WriteLine("the number is not prime.");
		}

		static void NumberGuessingGame()
		{
			do
			{
				int randomNumber = (new Random()).Next(1, 100);
				int attempts = 5;
				int round = 0;
				int number;

				double scorePerGuess = 100.0 / attempts;

				while (attempts > 0)
				{
					round++;
					Console.Write($"{round}. guess: ");
					number = int.Parse(Console.ReadLine());
					attempts--;

					if (number == randomNumber)
					{
						double score = 100 - (scorePerGuess * (round - 1));
						Console.WriteLine($"You guessed it in {round} attempts.");
						Console.WriteLine($"Total score: {score}");
						break;
					}
					else
					{
						if (attempts == 0)
							break;

						if (randomNumber > number)
							Console.WriteLine("higher");
						else
							Console.WriteLine("lower");
					}
				}
				Console.WriteLine("game over");

				Console.Write("Do you want to continue? (y/n): ");
				string result = Console.ReadLine();

				if (result == "n" || result == "no")
					break;

			} while (true);
		}

		static void ATM()
		{
			string choice = "";
			double balance = 0;
			double overdraft = 1000;
			double overdraftLimit = 1000;

			do
			{
				Console.Write("1-View Balance\n2-Deposit Money\n3-Withdraw Money\n4-Exit\nYour Choice: ");
				choice = Console.ReadLine();

				switch (choice)
				{
					case "1":
						Console.WriteLine("Your balance: {0} $", balance);
						Console.WriteLine("Your overdraft balance: {0} $", overdraft);
						break;
					case "2":
						Console.Write("Amount to deposit: ");
						double depositAmount = double.Parse(Console.ReadLine());

						if (overdraft < overdraftLimit)
						{
							double remainingOverdraft = overdraftLimit - overdraft;
							if (depositAmount >= remainingOverdraft)
							{
								overdraft = overdraftLimit;
								balance = depositAmount - remainingOverdraft;
							}
							else
							{
								overdraft += depositAmount;
							}
						}
						else
						{
							balance += depositAmount;
						}
						break;
					case "3":
						Console.Write("Amount to withdraw: ");
						double withdrawalAmount = double.Parse(Console.ReadLine());

						if (withdrawalAmount > balance)
						{
							double total = balance + overdraft;
							if (total >= withdrawalAmount)
							{
								Console.Write("Use overdraft? (y/n)");
								string overdraftChoice = Console.ReadLine();

								if (overdraftChoice == "y")
								{
									Console.Write("You can take your money.");
									overdraft -= (withdrawalAmount - balance);
									balance = 0;
								}
								else
								{
									Console.WriteLine("Insufficient balance");
								}
							}
						}
						else
						{
							Console.Write("You can take your money.");
							balance -= withdrawalAmount;
						}
						break;
					case "4":
						Console.WriteLine("Exit");
						break;
					default:
						Console.WriteLine("Invalid choice");
						break;
				}
			} while (choice != "4");

			Console.WriteLine("Application exited.");
		}

		static void GetProductInfo()
		{
			Console.Write("Quantity: ");
			int quantity = int.Parse(Console.ReadLine());

			Product[] products = new Product[quantity];
			int index = 0;

			do
			{
				Product product = new Product();

				Console.Write("Product name: ");
				product.Name = Console.ReadLine();

				Console.Write("Product price: ");
				product.Price = double.Parse(Console.ReadLine());

				Console.Write("Description: ");
				product.Description = Console.ReadLine();

				products[index] = product;
				index++;

			} while (index < quantity);

			foreach (var item in products)
			{
				Console.WriteLine($"Product name: {item.Name} Product price: {item.Price} Description: {item.Description}");
			}
		}

		static void CarMethodTest()
		{
			var mercedes = new Car();
			mercedes.Brand = "Mercedes";
			mercedes.Model = "Amg";
			mercedes.Color = "black";
			mercedes.Automatic = true;

			mercedes.Menu();

		}
	
		static void Test123()
        {

            var comment1 = new Comment { CommentId = 1, Text = "Nice phone" };

            var product1 = new Product();

            product1.Comments[0] = comment1;

            Console.WriteLine(product1.ProductId);            
            Console.WriteLine(product1.Name);            
            Console.WriteLine(product1.Price);            
            Console.WriteLine(product1.IsApproved);         
            Console.WriteLine(product1.Comments[0].Text);         

            Console.WriteLine("******************");

            var product2 = new Product(2341);

            product2.Comments[0] = comment1;

            Console.WriteLine(product2.ProductId);            
            Console.WriteLine(product2.Name);            
            Console.WriteLine(product2.Price);            
            Console.WriteLine(product2.IsApproved); 
            Console.WriteLine(product2.Comments[0].Text);       

            Console.WriteLine("******************");
            
            var product3 = new Product(3354, "Samsung S20", 25000, true);

            Console.WriteLine(product3.ProductId);            
            Console.WriteLine(product3.Name);            
            Console.WriteLine(product3.Price);            
            Console.WriteLine(product3.IsApproved);   

            product3.Comments[0] = comment1;
            Console.WriteLine(product3.Comments[0].Text);  

        }
	}
}