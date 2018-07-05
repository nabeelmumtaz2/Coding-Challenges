public class Program {
    public static String removeSpecialCharacters(String s) {
      return s.replaceAll("[^\\w\\s\\-\\_]","");
    }
}