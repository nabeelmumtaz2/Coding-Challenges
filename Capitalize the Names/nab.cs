//Create a function that takes an array of names and returns an array with the first letter capitalized.
public class Program 
{
    public static string[] CapMe(string[] arr) 
    {
			string[] results = new string[100];
      for(var i=0;i < arr.Length;i++){
				results[i]= arr[i].Substring(0, 1).ToString().ToUpper() + arr[i].Substring(1);
			}
			return results; 
    }
}
