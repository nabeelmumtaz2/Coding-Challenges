using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(Reverse("Reverse"));
            Console.WriteLine(Reverse("This is a typical sentence"));
            Console.WriteLine(Reverse("The dog is big."));
            Console.WriteLine(Reverse("Reverse the order of every word greater than or equal to five characters."));
            Console.WriteLine(Reverse("Lets all be unique together until we realise we are all the same."));
            Console.WriteLine(Reverse("The old apple revels in its authority."));
            Console.WriteLine(Reverse("The shooter says goodbye to his love."));
            Console.WriteLine(Reverse("Please wait outside of the house."));
            Console.WriteLine(Reverse("Two seats were vacant."));
            Console.WriteLine(Reverse("Sixty-Four comes asking for bread."));
            Console.ReadKey();
        }
        public static string Reverse(string str)
        {
            string[] arry = str.Split(' ');
            string result = string.Empty;
            foreach(string words in arry)
            {
                if (words.Length >=5)
                {
                    result += String.Join("", words.ToCharArray().Reverse()) + " ";
                }
                else
                {
                    result += words + " ";
                }
              }
             return result;
            }

    }
}
