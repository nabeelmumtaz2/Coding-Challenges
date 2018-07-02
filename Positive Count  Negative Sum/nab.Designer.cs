public class Program 
{
    public static int[] CountPosSumNeg(double[] arr) 
    {
      var positive = 0;
      var negative =0;
			int [] result  = new int[2];
			for(int i=0;i<arr.Length;i++){
				if( (int) arr[i] > 0 ){
					positive=positive + 1;
				}else{
					negative=negative + (int) arr[i];
				}
			}
		result[0]=positive;
	  result[1]=negative;
			
			return result;
    }
}
