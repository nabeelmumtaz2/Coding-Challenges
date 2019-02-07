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
            //Find the missing letter in the passed letter range and return it.
            
            Console.WriteLine(fearNotLetter("abce"));
            Console.WriteLine(fearNotLetter("abcdefghjklmno"));
            Console.WriteLine(fearNotLetter("stvwx"));
            Console.WriteLine(fearNotLetter("bcdf"));
            Console.WriteLine(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
            Console.ReadKey();
        }
        public static string fearNotLetter(string str)
        {
            char[] a = "abcdefghijklmnopqrstuvwxyz".ToCharArray();
            char[] letters = str.ToCharArray();
            var result = string.Empty;
            for (int i = 0; i < a.Length; i++)
            {

                if (letters[0] == a[0])
                {
                    if (letters[i].ToString() != a[i].ToString())
                    {
                        result = a[i].ToString();
                        break;

                    }
                }
                else
                {

                    int index = Array.IndexOf(a, letters[0]);
                    if (letters[i].ToString() != a[i + index].ToString())
                    {
                        result = a[i + index].ToString();
                        break;

                    }
                }
                    
             }
            return result;
        }
    }
 
  }
