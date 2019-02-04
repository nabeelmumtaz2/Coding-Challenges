using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            MakeTitle("All generalizations are false, including this one");
            
            Console.ReadKey();
        }
        public static void MakeTitle(string str)
        {

            string[] words = str.Split(' ');
            foreach (string word in words)
            {
                Console.Write(word.ElementAt(0).ToString().ToUpper() + word.Substring(1,word.Length-1)+ " ");
            }

        }

      }

    }
