using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(IsAnagram("cristian", "Cristina"));
            Console.WriteLine(IsAnagram("Dave Barry", "Ray Adverb"));
            Console.WriteLine(IsAnagram("Nope", "Note"));
            Console.WriteLine(IsAnagram("Apple", "Appeal"));
            Console.WriteLine(IsAnagram("wot", "TWO"));
            Console.WriteLine(IsAnagram("tow", "TWO"));
            Console.WriteLine(IsAnagram("ELAIM", "Email"));
            Console.ReadKey();
    }
        public static bool IsAnagram(string str1, string str2)
        {
            ArrayList i = new ArrayList();
            char[] arry = str1.ToCharArray();
            bool result = true;
             if(str1.Length == str2.Length)
            {
                foreach (char words in arry)
                {
                    if (str2.ToLower().Contains(words.ToString().ToLower()))
                    {
                        i.Add(true);
                    }
                    else
                    {
                        i.Add(false);
                    }
                }
                if (i.Contains(false))
                {
                    result = false;
                }
            }
            else
            {
                result = false;
            }
           
            return result;
        }
       
    }
}
